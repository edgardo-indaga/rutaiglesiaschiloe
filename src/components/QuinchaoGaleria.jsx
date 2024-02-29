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

const slides = [
    { src: '/iglesias/quinchao/quinchao_galeria_01.jpg', width: 1200, height: 800 },
    { src: '/iglesias/quinchao/quinchao_galeria_02.jpg', width: 1200, height: 800 },
    { src: '/iglesias/quinchao/quinchao_galeria_03.jpg', width: 1200, height: 800 },
    { src: '/iglesias/quinchao/quinchao_galeria_04.jpg', width: 1200, height: 800 },
    { src: '/iglesias/quinchao/quinchao_galeria_05.jpg', width: 1200, height: 800 },
    { src: '/iglesias/quinchao/quinchao_galeria_06.jpg', width: 1200, height: 800 },
    { src: '/iglesias/quinchao/quinchao_galeria_07.jpg', width: 1200, height: 800 },
    { src: '/iglesias/quinchao/quinchao_galeria_08.jpg', width: 1200, height: 800 },
];

export default function QuinchaoGallery() {
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
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
    );
}
