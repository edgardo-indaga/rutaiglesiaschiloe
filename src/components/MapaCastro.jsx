'use client';

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; // recuerda reemplazar esto con tu token personal

const Map = () => {
    const mapContainer = useRef(null);
    const lng = -73.7638; // longitud del centro del mapa
    const lat = -42.4816; // latitud del centro del mapa
    let zoom;

    useEffect(() => {
        if (window.innerWidth <= 480) {
            zoom = 14; // asignamos un valor de zoom para pantallas pequeñas
        } else {
            zoom = 16; // asignamos un valor de zoom para pantallas grandes
        }

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/eruotolo/clu0c62dz004g01qq699vaglo',
            center: [lng, lat],
            zoom: zoom,
        });

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        new mapboxgl.Marker({ color: '#911443' }).setLngLat([lng, lat]).addTo(map);

        return () => map.remove();
    }, []);

    return (
        <div className="container mx-auto mt-[30px] md:mt-[60px] md:px-20">
            <div ref={mapContainer} className="h-[350px] md:h-[400px]" />
        </div>
    );
};

export default Map;
