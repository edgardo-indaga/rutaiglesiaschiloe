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
                    className="z-10 bg-blanco text-[38px] w-[300px] h-[64px] text-center rounded-[10px] mt-[20px] mb-[20px]"
                >
                    English
                </Link>
                <Link
                    href="https://www.patrimoniovirtual.gob.cl/wp-content/uploads/recorridos/patrimonio-chiloe/"
                    className="z-10 bg-blanco text-[26px] tracking-normal leading-[26px] w-[300px] h-[64px] text-center rounded-[10px] mt-[20px] mb-[20px] pt-[5px]">
                    Recorrido Virtual<br/> Virtual Tour
                </Link>
                <Link
                    href="https://docs.google.com/spreadsheets/u/0/d/1C2LrSykBFMe8j75i8odR4PNAVnKmNLm5/htmlview?fbclid=PAZXh0bgNhZW0CMTEAAaYen-0haCbOrijlP2kG_qlNLxxWA08R3UqdgHl5nt0TPhK-SPydsf6RBdQ_aem_z8lkjUjzl1UWgvcIa0NoMw%23gid%3D1483858627&urp=gmail_link"
                    className="z-10 bg-blanco text-[26px] tracking-normal leading-[26px] w-[300px] h-[64px] text-center rounded-[10px] mt-[20px] mb-[80px] pt-[5px]">
                    Horario Iglesias <br/> Churches schedule
                </Link>
                <h1 className="z-10 text-blanco text-[38px] leading-[48px] md:text-[60px] md:leading-[70px] text-center font-[600]">
                    {titleChurch}
                </h1>
            </div>
        </section>
    );
};
export default QRLayout;
