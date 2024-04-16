'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const style = {
    imgResposive:
        'w-[180px] sm:w-[200px] md:h-[200px] xl:w-[250px] xl:h-[250px] 2xl:w-[300px] 2xl:h-[300px] object-cover',
};

export default function ThumbDescargables() {
    const [isHovereditem01, setIsHovereditem01] = useState(false);
    const [isHovereditem02, setIsHovereditem02] = useState(false);
    const [isHovereditem03, setIsHovereditem03] = useState(false);

    return (
        <section className="hidden py-[40px] px-[5px] md:py-[100px] md:px-0 xl:block">
            <div className="container mx-auto flex flex-wrap">
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem01(true)}
                        onMouseLeave={() => setIsHovereditem01(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem01 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/thumb-item01.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/protocolo.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem01 ? '' : 'hidden'
                            }`}
                        >
                            PROTOCOLO
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem02(true)}
                        onMouseLeave={() => setIsHovereditem02(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem02 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/thumb-item02.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/pasaporte.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem02 ? '' : 'hidden'
                            }`}
                        >
                            PASAPORTE
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem03(true)}
                        onMouseLeave={() => setIsHovereditem03(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem03 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/qr/fichageneral.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/fichageneral-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem03 ? '' : 'hidden'
                            }`}
                        >
                            FICHA GENERAL
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
