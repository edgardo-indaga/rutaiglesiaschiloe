'use client';

import React from 'react';
import PhotoAlbum from 'react-photo-album';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const slidesSecundario = [
    { src: '/comunidades/gallery/comunidades_galeria_09.jpg', width: 1200, height: 800 },
    { src: '/comunidades/gallery/comunidades_galeria_10.jpg', width: 1200, height: 800 },
    { src: '/comunidades/gallery/comunidades_galeria_11.jpg', width: 1200, height: 800 },
    { src: '/comunidades/gallery/comunidades_galeria_12.jpg', width: 1200, height: 800 },
    { src: '/comunidades/gallery/comunidades_galeria_13.jpg', width: 1200, height: 800 },
    { src: '/comunidades/gallery/comunidades_galeria_14.jpg', width: 1200, height: 800 },
    { src: '/comunidades/gallery/comunidades_galeria_15.jpg', width: 1200, height: 800 },
    { src: '/comunidades/gallery/comunidades_galeria_16.jpg', width: 1200, height: 800 },
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
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
    );
}
