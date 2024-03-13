'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

import imagen1 from '/public/carouselhome/slider-01.webp';
import imagen2 from '/public/carouselhome/slider-02.webp';
import imagen3 from '/public/carouselhome/slider-03.webp';

export default function App() {
    return (
        <>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                loop={true}
                className="swiper-container"
            >
                <SwiperSlide>
                    <Image
                        src={imagen1}
                        alt="Imagen 01"
                        quality={100}
                        priority={true}
                        className="object-cover object-center h-[100vh]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={imagen2}
                        alt="Imagen 01"
                        quality={100}
                        priority={true}
                        className="object-cover object-center h-[100vh]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={imagen3}
                        alt="Imagen 01"
                        quality={100}
                        priority={true}
                        className="object-cover object-center h-[100vh]"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
