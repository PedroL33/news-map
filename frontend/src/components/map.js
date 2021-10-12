import React, { useRef, useEffect } from 'react';

const Map = () => {

    const ref = useRef();

    useEffect(() => {
        const zoom = 4.5;
        const minZoom = 4.5;
        new window.google.maps.Map(ref.current, {
            center: new window.google.maps.LatLng(39.809734, -98.555620),
            zoom,
            minZoom,
        });
    });

    return (
        <div data-testid="map" id="map" ref={ref} style={{ width: '100vw', height: '100vh' }}>
        </div>
    )
}

export default Map;