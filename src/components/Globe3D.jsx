import { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import { geoInterpolate } from 'd3-geo';


// Helper: Convert polar coordinates to Cartesian (matches three-globe exactly)
function polar2Cartesian(lat, lng, relAltitude = 0) {
    const GLOBE_RADIUS = 100;
    const phi = (90 - lat) * Math.PI / 180;
    const theta = (90 - lng) * Math.PI / 180;
    const r = GLOBE_RADIUS * (1 + relAltitude);
    const phiSin = Math.sin(phi);
    return new THREE.Vector3(
        r * phiSin * Math.cos(theta),
        r * Math.cos(phi),
        r * phiSin * Math.sin(theta)
    );
}

// Helper: Calculate great circle distance in radians
function geoDistance(startLng, startLat, endLng, endLat) {
    const toRad = deg => deg * Math.PI / 180;
    const lat1 = toRad(startLat);
    const lat2 = toRad(endLat);
    const lng1 = toRad(startLng);
    const lng2 = toRad(endLng);
    return Math.acos(
        Math.max(-1, Math.min(1,
            Math.sin(lat1) * Math.sin(lat2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1)
        ))
    );
}

// Create Bezier curve matching three-globe's arc implementation
function createArcCurve(startLat, startLng, endLat, endLng, altitudeAutoScale = 0.5) {
    const startPnt = [startLng, startLat];
    const endPnt = [endLng, endLat];

    // Calculate altitude (same as three-globe)
    const d = geoDistance(startLng, startLat, endLng, endLat);
    const altitude = d / 2 * altitudeAutoScale;

    const interpolate = geoInterpolate(startPnt, endPnt);

    // Control point altitude calculation (from three-globe source)
    const startAlt = 0;
    const endAlt = 0;
    const calcAltCp = (a0, a1) => a1 + (a1 - a0) * (a0 < a1 ? 0.5 : 0.25);

    // Get control points at t=0.25 and t=0.75 along the great circle
    const m1Coords = interpolate(0.25);
    const m2Coords = interpolate(0.75);

    const m1Alt = calcAltCp(startAlt, altitude);
    const m2Alt = calcAltCp(endAlt, altitude);

    // Convert to 3D vectors
    const getVec = (lng, lat, alt) => polar2Cartesian(lat, lng, alt);

    const p0 = getVec(startLng, startLat, startAlt);
    const p1 = getVec(m1Coords[0], m1Coords[1], m1Alt);
    const p2 = getVec(m2Coords[0], m2Coords[1], m2Alt);
    const p3 = getVec(endLng, endLat, endAlt);

    return new THREE.CubicBezierCurve3(p0, p1, p2, p3);
}

const Globe3D = ({
    arcsData = [],
    commitArcs = [],
    pointsData = [],
    ringsData = []
}) => {
    const globeEl = useRef();
    const lightBallsRef = useRef([]);
    const animationRef = useRef();

    useEffect(() => {
        // Auto-rotate
        if (globeEl.current) {
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.5;
            globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });
        }
    }, []);

    // Create light balls for commit arcs
    useEffect(() => {
        if (!globeEl.current) return;

        const scene = globeEl.current.scene();

        // Clean up old light balls
        lightBallsRef.current.forEach(ball => {
            scene.remove(ball);
            ball.geometry?.dispose();
            ball.material?.dispose();
        });
        lightBallsRef.current = [];

        // Create new light balls for each commit arc
        commitArcs.forEach((arc, arcIndex) => {
            // Create the bezier curve for this arc
            const curve = createArcCurve(
                arc.startLat, arc.startLng,
                arc.endLat, arc.endLng,
                0.5 // altitudeAutoScale
            );

            const ballCount = Math.min(arc.ballCount || 3, 5);
            for (let i = 0; i < ballCount; i++) {
                // Create glowing sphere
                const geometry = new THREE.SphereGeometry(0.8, 16, 16);
                const material = new THREE.MeshBasicMaterial({
                    color: '#39d353',
                    transparent: true,
                    opacity: 0.9,
                });
                const sphere = new THREE.Mesh(geometry, material);

                // Add glow effect (larger transparent sphere)
                const glowGeometry = new THREE.SphereGeometry(1.2, 16, 16);
                const glowMaterial = new THREE.MeshBasicMaterial({
                    color: '#26a641',
                    transparent: true,
                    opacity: 0.3,
                });
                const glow = new THREE.Mesh(glowGeometry, glowMaterial);
                sphere.add(glow);

                // Store curve and animation state
                sphere.userData = {
                    curve,
                    offset: i / ballCount,
                    speed: arc.speed || 0.00015 + Math.random() * 0.0001
                };

                scene.add(sphere);
                lightBallsRef.current.push(sphere);
            }
        });

        // Animation loop
        const animate = () => {
            const time = Date.now();

            lightBallsRef.current.forEach(ball => {
                const { curve, offset, speed } = ball.userData;
                // Calculate t (0 to 1) along the curve
                const t = ((time * speed) + offset) % 1;

                // Get position from Bezier curve
                const pos = curve.getPoint(t);
                ball.position.copy(pos);
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        if (commitArcs.length > 0) {
            animate();
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [commitArcs]);

    return (
        <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

            // Atmosphere
            atmosphereColor="#3a228a"
            atmosphereAltitude={0.25}

            // Arcs (Static connection lines only)
            arcsData={arcsData}
            arcColor={d => d.color || "#ff5c00"}
            arcStroke={0.5}
            arcAltitudeAutoScale={0.5}

            // Points (Users)
            pointsData={pointsData}
            pointColor={d => d.color || "#3d444d"}
            pointAltitude={d => d.altitude || 0.1}
            pointRadius={d => d.size || 0.5}

            // Rings (Active events)
            ringsData={ringsData}
            ringColor={() => "#26a641"}
            ringMaxRadius={5}
            ringPropagationSpeed={2}
            ringRepeatPeriod={1000}
        />
    );
};

export default Globe3D;
