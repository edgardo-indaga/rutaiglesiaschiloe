'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const style = {
    imgResposive:
        'w-[180px] sm:w-[200px] md:h-[200px] xl:w-[250px] xl:h-[250px] 2xl:w-[300px] 2xl:h-[300px]',
};

export default function ThumbCompIglesias() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoverHistoria, setIsHoverHistoria] = useState(false);
    const [isHoverArquitectura, setIsHoverArquitectura] = useState(false);
    const [isHoverComunidades, setIsHoverComunidades] = useState(false);

    return (
        <section className="py-[40px] md:py-[100px] px-[5px] md:px-0">
            <div className="container mx-auto flex flex-wrap">
                <div className="w-6/12 md:w-3/12 mb-[15px] md:mb-[25px] flex justify-center items-center align-middle">
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className={`md:w-[300] md:h-[300px] ${isHovered ? 'hidden' : ''}`}>
                            <Image
                                src="/iglesias/iglesia-02.webp"
                                alt="Iglesias 02"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/patrimonio"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-tinto flex justify-center items-center text-blanco md:text-[20px] md:font-medium uppercase text-center ${
                                isHovered ? '' : 'hidden'
                            }`}
                        >
                            PATRIMONIO DE LA HUMANIDAD
                        </Link>
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 mb-[15px] md:mb-[25px] flex justify-center items-center align-middle">
                    <div
                        onMouseEnter={() => setIsHoverHistoria(true)}
                        onMouseLeave={() => setIsHoverHistoria(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHoverHistoria ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/iglesias/iglesia-03.webp"
                                alt="Iglesias 02"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/historia"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-tinto flex justify-center items-center text-blanco md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverHistoria ? '' : 'hidden'
                            }`}
                        >
                            LA HISTORIA
                        </Link>
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 mb-[15px] md:mb-[25px] flex justify-center items-center align-middle">
                    <div
                        onMouseEnter={() => setIsHoverArquitectura(true)}
                        onMouseLeave={() => setIsHoverArquitectura(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${
                                isHoverArquitectura ? 'hidden' : ''
                            }`}
                        >
                            <Image
                                src="/iglesias/iglesia-04.webp"
                                alt="Iglesias 02"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/arquitectura"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-tinto flex justify-center items-center text-blanco md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverArquitectura ? '' : 'hidden'
                            }`}
                        >
                            LA ARQUITECTURA
                        </Link>
                    </div>
                </div>
                <div className="w-6/12 md:w-3/12 mb-[15px] md:mb-[25px] flex justify-center items-center align-middle">
                    <div
                        onMouseEnter={() => setIsHoverComunidades(true)}
                        onMouseLeave={() => setIsHoverComunidades(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${
                                isHoverComunidades ? 'hidden' : ''
                            }`}
                        >
                            <Image
                                src="/iglesias/iglesia-05.webp"
                                alt="Iglesias 02"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/comunidades"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-tinto flex justify-center items-center text-blanco md:text-[20px] md:font-medium uppercase text-center ${
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
