'use client';

import React from 'react';
// Componente de Album Visual
import PhotoAlbum from 'react-photo-album';
// Componente de Lightbox (POP-UP) de las imagenes
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
// Componente de Lightbox para poner titulos y descripciones
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const slides = [
    {
        src: '/iglesias/colo/colo_galeria_01.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Colo',
        description: 'Bóveda estrellada',
    },
    {
        src: '/iglesias/colo/colo_galeria_02.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Colo',
        description: 'Lancha chilota dejada en ofrenda',
    },
    {
        src: '/iglesias/colo/colo_galeria_03.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Colo',
        description: 'Detalle exterior',
    },
    {
        src: '/iglesias/colo/colo_galeria_04.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Colo',
        description: 'Exterior',
    },
    {
        src: '/iglesias/colo/colo_galeria_05.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Colo',
        description: 'Cimiento de piedra',
    },
    {
        src: '/iglesias/colo/colo_galeria_06.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Colo',
        description: 'Santo con vestimenta de lana',
    },
    {
        src: '/iglesias/colo/colo_galeria_07.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Colo',
        description: 'Interior',
    },
    {
        src: '/iglesias/colo/colo_galeria_08.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Colo',
        description: 'Exterior',
    },
];

export default function ColoGallery() {
    const [index, setIndex] = React.useState(-1);

    return (
        <>
            <PhotoAlbum
                layout="rows"
                photos={slides}
                targetRowHeight={200}
                //targetColumnWidth={500}
                onClick={({ index: current }) => setIndex(current)}
            />
            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
            />
        </>
    );
}
