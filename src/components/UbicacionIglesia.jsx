'use client';

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; // recuerda reemplazar esto con tu token personal

const UbicacionIglesia = ({ lng, lat }) => {
    const [isOpen, setIsOpen] = useState(false);
    const mapContainer = useRef(null);

    function navigateToGoogleMaps() {
        window.location.href = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    }

    function navigateToWaze() {
        window.location.href = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
    }

    function navigateToAppleMaps() {
        window.location.href = `maps://?q=${lat},${lng}`;
    }

    const zoom = useRef(16); // valor por defecto

    useEffect(() => {
        if (window.innerWidth <= 480) {
            zoom.current = 14; // asignamos un valor de zoom para pantallas pequeñas
        } else {
            zoom.current = 16; // asignamos un valor de zoom para pantallas grandes
        }

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/eruotolo/clu0c62dz004g01qq699vaglo',
            center: [lng, lat],
            zoom: zoom.current,
        });

        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        new mapboxgl.Marker({ color: '#911443' }).setLngLat([lng, lat]).addTo(map);

        return () => map.remove();
    }, [lng, lat]);

    return (
        <div>
            <div className="container mx-auto mt-[30px] md:mt-[60px] md:px-20">
                <div ref={mapContainer} className="h-[350px] md:h-[400px]" />
            </div>
            <div className="container mx-auto md:px-20 flex justify-end">
                <div className="relative inline-block text-left mt-[20px] md:mt-[-45px] md:mr-[10px]">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex justify-center items-center text-[16px] w-full px-[10px] py-[6px] font-light  bg-morado text-blanco "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-sign-turn-right mr-3"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5 8.5A2.5 2.5 0 0 1 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658A.25.25 0 0 1 9 8.466V7H7.5A1.5 1.5 0 0 0 6 8.5V11H5z" />
                            <path
                                fillRule="evenodd"
                                d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134Z"
                            />{' '}
                        </svg>
                        Cómo llegar
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-morado divide-y focus:outline-none border-0">
                            <button
                                className="group text-blanco flex items-center w-full px-2 py-2 text-sm"
                                onClick={() => navigateToGoogleMaps()}
                            >
                                Abrir en Google Maps
                            </button>
                            <button
                                className="group text-blanco flex items-center w-full px-2 py-2 text-sm"
                                onClick={() => navigateToWaze()}
                            >
                                Abrir en Waze
                            </button>
                            <button
                                className="group text-blanco flex items-center w-full px-2 py-2 text-sm"
                                onClick={() => navigateToAppleMaps()}
                            >
                                Abrir en Apple Maps
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UbicacionIglesia;
