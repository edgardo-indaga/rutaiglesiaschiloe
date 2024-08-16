import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const QRLayout = ({ imgBg, linkEsp, linkEng, titleChurch }) => {
    return (
        <section className="relative h-screen mt-[-160px]">
            <Image
                alt="Iglesia de Colo"
                src={imgBg}
                quality={100}
                fill
                priority={true}
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                }}
                className="object-center"
            />
            <div className="container mx-auto z-10 flex flex-col h-screen items-center justify-center px-[50px]">
                <Link
                    href={linkEsp}
                    className="z-10 bg-blanco text-[38px] w-[300px] h-[64px] text-center rounded-[10px] mb-[20px] mt-[200px]"
                >
                    Español
                </Link>
                <Link
                    href={linkEng}
                    className="z-10 bg-blanco text-[38px] w-[300px] h-[64px] text-center rounded-[10px] mt-[20px] mb-[80px]"
                >
                    English
                </Link>
                <h1 className="z-10 text-blanco text-[38px] leading-[48px] md:text-[60px] md:leading-[70px] text-center font-[600]">
                    {titleChurch}
                </h1>
            </div>
        </section>
    );
};
export default QRLayout;
