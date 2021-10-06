import React, { useRef, useEffect } from 'react';

const Map = () => {

    const ref = useRef();

    useEffect(() => {
        const zoom = 3;
        new window.google.maps.Map(ref.current, {
            center: {lat: 41.850033, lng:-87.6500523},
            zoom,
        });
    });

    return (
        <div data-testid="map" id="map" ref={ref} style={{ width: '100vw', height: '100vh' }}>
        </div>
    )
}

export default Map;