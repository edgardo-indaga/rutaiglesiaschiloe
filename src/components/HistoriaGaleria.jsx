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
        src: '/historia/gallery/historia_galeria_01.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Vilupulli',
        description: 'Cuaderno de la Historia de Vilupulli, elaborado por la comunidad en 1986',
    },
    {
        src: '/historia/gallery/historia_galeria_02.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Chonchi',
        description: 'Libro eclesiástico en latín',
    },
    {
        src: '/historia/gallery/historia_galeria_07.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Quinchao',
        description: 'Antiguos reclinatorios',
    },
    {
        src: '/historia/gallery/historia_galeria_08.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Caguach',
        description: 'Sacerdote franciscano en fiesta patronal',
    },
    {
        src: '/historia/gallery/historia_galeria_05.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Castro',
        description: 'Ilustración de la primera iglesia de Castro a comienzos del s. XIX',
    },
    {
        src: '/historia/gallery/historia_galeria_04.jpg',
        width: 1333,
        height: 2000,
        title: 'Iglesia de Castro',
        description: ' Mapa de la Misión Circular',
    },
    {
        src: '/historia/gallery/historia_galeria_03.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Rilán',
        description: 'Junto al altar se exponen dos banderas, la chilena y la huilliche',
    },
    {
        src: '/historia/gallery/historia_galeria_06.jpg',
        width: 1200,
        height: 800,
        title: 'Iglesia de Ichuac',
        description: 'San Ignacio',
    },
];

export default function HistoriaGallery() {
    const [index, setIndex] = React.useState(-1);

    return (
        <>
            <PhotoAlbum
                layout="rows"
                photos={slides}
                targetRowHeight={300}
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
