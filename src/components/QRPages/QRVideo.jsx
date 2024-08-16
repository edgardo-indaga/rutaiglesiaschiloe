'use client';

import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import styles from './VideoPlayer.module.css'; // Importar estilos CSS

export default function QRVideo({ videoId }) {
    const [player, setPlayer] = useState(null); // Estado para controlar el reproductor de video
    const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar la reproducción

    const opts = {
        width: '1280',
        height: '780',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            controls: 0, // Quita todos los controles de YouTube
            rel: 0, // Evita que se muestren videos relacionados al final
            modestbranding: 1, // Oculta el logo de YouTube
            disablekb: 1, // Desactiva el teclado
        },
    };

    const handlePlayPause = () => {
        const newIsPlayingState = !isPlaying;
        setIsPlaying(newIsPlayingState);

        if (newIsPlayingState) {
            if (player) {
                player.playVideo();
            }
        } else {
            if (player) {
                player.pauseVideo();
            }
        }
    };

    const onReady = (event) => {
        // Guarda el objeto del reproductor cuando está listo
        setPlayer(event.target);
    };

    return (
        <div className={styles.videoContainer}>
            <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            {/* Botón de reproducción */}
            {!isPlaying && (
                <button
                    aria-label="Play Youtube"
                    className={styles.playButton}
                    onClick={handlePlayPause}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-[65px] h-[65px] md:w-[55px] md:h-[55px] text-morado hover:text-blanco pl-[5px]"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
}
