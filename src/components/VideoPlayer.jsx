'use client';

import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import styles from './VideoPlayer.module.css'; // Importar estilos CSS

export default function VideoPlayer({ videoId }) {
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
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-[65px] h-[65px] text-blanco hover:text-tinto"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
}
