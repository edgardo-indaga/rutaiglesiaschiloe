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
        src: '/iglesias/aldachildo/aldachildo_galeria_01.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Aldachildo',
        description: 'Interior',
    },
    {
        src: '/iglesias/aldachildo/aldachildo_galeria_02.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Aldachildo',
        description: 'Bóveda estrellada',
    },
    {
        src: '/iglesias/aldachildo/aldachildo_galeria_03.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Aldachildo',
        description: 'Emplazamiento',
    },
    {
        src: '/iglesias/aldachildo/aldachildo_galeria_04.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Aldachildo',
        description: 'Exterior',
    },
    {
        src: '/iglesias/aldachildo/aldachildo_galeria_05.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Aldachildo',
        description: 'Exterior',
    },
    {
        src: '/iglesias/aldachildo/aldachildo_galeria_06.jpg',
        width: 1333,
        height: 2000,
        title: 'Iglesia de Aldachildo',
        description: 'Antigua imagen de Jesús Nazareno sin restaurar',
    },
    {
        src: '/iglesias/aldachildo/aldachildo_galeria_07.jpg',
        width: 1333,
        height: 2000,
        title: 'Iglesia de Aldachildo',
        description: 'Detalle de pintura ornamental',
    },
    {
        src: '/iglesias/aldachildo/aldachildo_galeria_08.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Aldachildo',
        description: 'Cimientos de piedra',
    },
];

export default function AldachildoGallery() {
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
