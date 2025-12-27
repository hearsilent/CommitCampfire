import { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';


const Globe3D = ({
    arcsData = [],
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

            // Arcs (Commits flying)
            arcsData={arcsData}
            arcColor={() => "#ff4081"}
            arcDashLength={0.5}
            arcDashGap={1}
            arcDashAnimateTime={1000}
            arcStroke={0.5}

            // Points (Users)
            pointsData={pointsData}
            pointColor={() => "#ffffff"}
            pointAltitude={0.1}
            pointRadius={0.5}

            // Rings (Active events)
            ringsData={ringsData}
            ringColor={() => "#ff4081"}
            ringMaxRadius={5}
            ringPropagationSpeed={2}
            ringRepeatPeriod={1000}
        />
    );
};

export default Globe3D;
