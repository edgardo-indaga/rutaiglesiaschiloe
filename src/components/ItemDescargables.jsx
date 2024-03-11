'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const style = {
    imgResposive:
        'w-[180px] sm:w-[200px] md:h-[200px] xl:w-[250px] xl:h-[250px] 2xl:w-[300px] 2xl:h-[300px]',
};
export default function itemsDescargables() {
    const [isHoverItem01, setIsHoverItem01] = useState(false);

    return (
        <section className="py-[40px] px-[5px] md:py-[100px] md:px-0">
            <div className="container mx-auto flex flex-wrap">
                <div
                    onMouseEnter={() => setIsHoverItem01(true)}
                    onMouseLeave={() => setIsHoverItem01(false)}
                >
                    <div className={`md:w-[300] md:h-[300px] ${isHoverItem01 ? 'hidden' : ''}`}>
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
                    <a
                        href="/uploads/protocolo.pdf"
                        download
                        className={`bg-beige flex justify-center items-center text-tinto font-medium uppercase text-center md:w-[300px] md:h-[300px] md:px-[20px] md:text-[20px] ${
                            isHoverItem01 ? '' : 'hidden'
                        }`}
                    >
                        PROTOCOLO
                    </a>
                </div>
            </div>
        </section>
    );
}
