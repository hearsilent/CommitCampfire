import { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';


const Globe3D = ({
    arcsData = [],
    commitArcs = [],
    pointsData = [],
    ringsData = []
}) => {
    const globeEl = useRef();

    useEffect(() => {
        // Auto-rotate
        if (globeEl.current) {
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.5;
            globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });
        }
    }, []);

    return (
        <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

            // Atmosphere
            atmosphereColor="#3a228a"
            atmosphereAltitude={0.25}

            // Arcs (Primary connection lines - Static)
            arcsData={[...arcsData, ...commitArcs]}
            arcColor={d => d.color || "#ff5c00"}
            arcStroke={d => d.dashLength ? 1.0 : 0.4} // thicker for spheres
            arcDashLength={d => d.dashLength || 1}
            arcDashGap={d => d.dashGap || 0}
            arcDashAnimateTime={d => d.dashAnimateTime || 0}
            arcAltitude={d => d.dashLength ? 0.51 : 0.5} // slightly higher for spheres to avoid z-fighting
            arcAltitudeAutoScale={0.5}

            // Points (Users)
            pointsData={pointsData}
            pointColor={d => d.color || "#3d444d"}
            pointAltitude={d => d.altitude || 0.1}
            pointRadius={d => d.size || 0.5}

            // Rings (Active events)
            ringsData={ringsData}
            ringColor={() => "#46954a"}
            ringMaxRadius={5}
            ringPropagationSpeed={2}
            ringRepeatPeriod={1000}
        />
    );
};

export default Globe3D;
