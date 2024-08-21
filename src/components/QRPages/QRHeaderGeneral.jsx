import Image from 'next/image';
import React from 'react';

export default function QRHeaderGeneral({ imgMain, nameChurch }) {
    return (
        <section className="relative h-[105vh] md:h-[110vh] md:mt-[-160px] mt-[-90px]">
            <Image
                alt="Iglesia de Colo"
                src={imgMain}
                quality={100}
                fill
                priority={true}
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                }}
                className="object-center"
            />
            <div className="container mx-auto z-10 flex flex-col h-screen items-center justify-center md:max-w-[1024px]">
                <div className="flex my-[80px]">
                    <h1 className="z-10 text-blanco text-[38px] leading-[48px] md:text-[60px] md:leading-[70px] text-center font-[600] md:px-[240px] px-[20px]">
                        {nameChurch}
                    </h1>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1722307974 md:flex hidden">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 20"
                    preserveAspectRatio="none"
                >
                    <path className="shape-fill" fill="#F0EBE1"></path>
                </svg>
            </div>
        </section>
    );
}
