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

const slidesSecundario = [
    {
        src: '/comunidades/gallery/comunidades_galeria_09.jpg',
        width: 1333,
        height: 2000,
        title: 'Iglesia de Chonchi',
        description: 'María Aguilar, Encargada de la iglesia',
    },
    {
        src: '/comunidades/gallery/comunidades_galeria_10.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Aldachildo',
        description: 'Jorge Gómez, Fiscal de la iglesia',
    },
    {
        src: '/comunidades/gallery/comunidades_galeria_11.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Detif',
        description: 'Bertila Nahuelquin, Encargada de la Iglesia',
    },
    {
        src: '/comunidades/gallery/comunidades_galeria_12.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Chelín',
        description: 'Rudith Concha, Patrona de la Iglesia',
    },
    {
        src: '/comunidades/gallery/comunidades_galeria_13.jpg',
        width: 1333,
        height: 2000,
        title: 'Iglesia de Ichuac',
        description: 'Amanda Aro, Fiscala de la Iglesia',
    },
    {
        src: '/comunidades/gallery/comunidades_galeria_14.jpg',
        width: 1333,
        height: 2000,
        title: 'Iglesia de Nercón',
        description: 'Isabel Naguelquín, Patrona de la iglesia',
    },
    {
        src: '/comunidades/gallery/comunidades_galeria_15.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de San Juan',
        description: 'Encargado de la iglesia',
    },
    {
        src: '/comunidades/gallery/comunidades_galeria_16.jpg',
        width: 1333,
        height: 2000,
        title: 'Iglesia de Tenaún',
        description: 'Juanita Ortiz, Encargada de la Iglesia',
    },
];

export default function ComunidadGallerySecundaria() {
    const [index, setIndex] = React.useState(-1);

    return (
        <>
            <PhotoAlbum
                layout="rows"
                photos={slidesSecundario}
                targetRowHeight={300}
                //targetColumnWidth={500}
                onClick={({ index: current }) => setIndex(current)}
            />
            <Lightbox
                slides={slidesSecundario}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
            />
        </>
    );
}
