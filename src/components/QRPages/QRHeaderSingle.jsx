import Image from 'next/image';
import React from 'react';

export default function QRHeaderSingle({
    imgMain,
    districtTitleChurch,
    districtNameChurch,
    nameChurch,
    buildTitleChurch,
    buildNameChurch,
    patronTitleChurch,
    patronNameChurch,
    feastDayTitleChurch,
    feastDayNameChurch,
}) {
    const pinLocation = '/qr/pin-location.svg';
    const pinBuild = '/qr/pin-01.svg';
    const pinPatron = '/qr/pin-02.svg';
    const pinFeastDay = '/qr/pin-03.svg';

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
                <div className="container mx-auto z-10 flex mt-[140px] pl-[20px]">
                    <div className="mr-[10px] flex z-10">
                        <Image
                            src={pinLocation}
                            alt={'Location'}
                            width={24}
                            height={36}
                            className="text-blanco z-10"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="z-10 text-blanco text-[15px] leading-[17px] font-medium">
                            {districtTitleChurch}
                        </p>
                        <p className="z-10 text-blanco text-[15px] leading-[17px] font-medium">
                            {districtNameChurch}
                        </p>
                    </div>
                </div>

                <div className="flex my-[80px]">
                    <h1 className="z-10 text-blanco text-[38px] leading-[48px] md:text-[60px] md:leading-[70px] text-center font-[600] md:px-[240px] px-[20px]">
                        {nameChurch}
                    </h1>
                </div>

                <div className="flex flex-row justify-between z-10 px-[15px]">
                    <div className="flex flex-col md:w-[300px] w-[140px] items-center">
                        <Image
                            src={pinBuild}
                            alt="ConstrucciónBluid"
                            width={140}
                            height={150}
                            className="md:h-[180px] h-[90px]"
                        />
                        <h4 className="text-blanco md:text-[36px] font-bold">{buildTitleChurch}</h4>
                        <p className="text-blanco text-center text-[14px] md:text-[22px] leading-[18px] md:leading-[28px] md:px-[40px]">
                            {buildNameChurch}
                        </p>
                    </div>
                    <div className="flex flex-col md:w-[300px] w-[140px] items-center">
                        <Image
                            src={pinPatron}
                            alt="Patrono"
                            width={140}
                            height={150}
                            className="md:h-[180px] h-[90px]"
                        />
                        <h4 className="text-blanco md:text-[36px] font-bold">
                            {patronTitleChurch}
                        </h4>
                        <p className="text-blanco text-center text-[14px] md:text-[22px] leading-[18px] md:leading-[28px] md:px-[40px]">
                            {patronNameChurch}
                        </p>
                    </div>
                    <div className="flex flex-col md:w-[300px] w-[140px] items-center">
                        <Image
                            src={pinFeastDay}
                            alt="FeastDay"
                            width={140}
                            height={150}
                            className="md:h-[180px] h-[90px]"
                        />
                        <h4 className="text-blanco md:text-[36px] font-bold">
                            {feastDayTitleChurch}
                        </h4>
                        <p className="text-blanco text-center text-[14px] md:text-[22px] leading-[18px] md:leading-[28px] md:px-[40px]">
                            {feastDayNameChurch}
                        </p>
                    </div>
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
