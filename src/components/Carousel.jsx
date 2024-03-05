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
                        width="2000"
                        height="1333"
                        quality={100}
                        className="h-[100vh] object-cover object-center"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={imagen2}
                        alt="Imagen 01"
                        width="2000"
                        height="1333"
                        quality={100}
                        className="h-[100vh] object-cover object-bottom"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={imagen3}
                        alt="Imagen 01"
                        width="2000"
                        height="1333"
                        quality={100}
                        className="h-[100vh] object-cover object-right-center"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
