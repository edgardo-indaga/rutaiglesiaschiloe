'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ThumbCompIglesias() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoverHistoria, setIsHoverHistoria] = useState(false);
    const [isHoverArquitectura, setIsHoverArquitectura] = useState(false);
    const [isHoverComunidades, setIsHoverComunidades] = useState(false);

    return (
        <section className="md:py-[100px]">
            <div className="container mx-auto flex">
                <div className="md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className={`md:w-[350] md:h-[350px] ${isHovered ? 'hidden' : ''}`}>
                            <Image
                                src="/iglesias/iglesia-02.webp"
                                alt="Iglesias 02"
                                height={350}
                                width={350}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                            />
                        </div>
                        <Link
                            href="/patrimonio"
                            className={`md:w-[350px] md:h-[350px] bg-tinto cursor-pointer flex justify-center items-center text-blanco text-[20px] font-medium uppercase ${
                                isHovered ? '' : 'hidden'
                            }`}
                        >
                            PATRIMONIO DE LA HUMANIDAD
                        </Link>
                    </div>
                </div>
                <div className="md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverHistoria(true)}
                        onMouseLeave={() => setIsHoverHistoria(false)}
                    >
                        <div
                            className={`md:w-[350] md:h-[350px] ${isHoverHistoria ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/iglesias/iglesia-03.webp"
                                alt="Iglesias 02"
                                height={350}
                                width={350}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                            />
                        </div>
                        <Link
                            href="/historia"
                            className={`md:w-[350px] md:h-[350px] bg-tinto cursor-pointer flex justify-center items-center text-blanco text-[20px] font-medium uppercase ${
                                isHoverHistoria ? '' : 'hidden'
                            }`}
                        >
                            LA HISTORIA
                        </Link>
                    </div>
                </div>
                <div className="md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverArquitectura(true)}
                        onMouseLeave={() => setIsHoverArquitectura(false)}
                    >
                        <div
                            className={`md:w-[350] md:h-[350px] ${
                                isHoverArquitectura ? 'hidden' : ''
                            }`}
                        >
                            <Image
                                src="/iglesias/iglesia-04.webp"
                                alt="Iglesias 02"
                                height={350}
                                width={350}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                            />
                        </div>
                        <Link
                            href="/arquitectura"
                            className={`md:w-[350px] md:h-[350px] bg-tinto cursor-pointer flex justify-center items-center text-blanco text-[20px] font-medium uppercase ${
                                isHoverArquitectura ? '' : 'hidden'
                            }`}
                        >
                            LA ARQUITECTURA
                        </Link>
                    </div>
                </div>
                <div className="md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverComunidades(true)}
                        onMouseLeave={() => setIsHoverComunidades(false)}
                    >
                        <div
                            className={`md:w-[350] md:h-[350px] ${
                                isHoverComunidades ? 'hidden' : ''
                            }`}
                        >
                            <Image
                                src="/iglesias/iglesia-05.webp"
                                alt="Iglesias 02"
                                height={350}
                                width={350}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                            />
                        </div>
                        <Link
                            href="/comunidades"
                            className={`md:w-[350px] md:h-[350px] bg-tinto cursor-pointer flex justify-center items-center text-blanco text-[20px] font-medium uppercase ${
                                isHoverComunidades ? '' : 'hidden'
                            }`}
                        >
                            LAS COMUNIDADES
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
