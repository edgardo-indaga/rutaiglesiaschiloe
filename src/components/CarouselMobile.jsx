'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

import imagen4 from '/public/carouselhome/slider-mobile-01.webp';
import imagen5 from '/public/carouselhome/slider-mobile-02.webp';
import imagen6 from '/public/carouselhome/slider-mobile-03.webp';

export default function CarouselMobile() {
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
                        src={imagen4}
                        alt="Imagen 01"
                        quality={100}
                        priority={true}
                        className="object-cover object-center h-[680px]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={imagen6}
                        alt="Imagen 01"
                        quality={100}
                        priority={true}
                        className="object-cover object-center h-[680px]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={imagen5}
                        alt="Imagen 01"
                        quality={100}
                        priority={true}
                        className="object-cover object-center h-[680px]"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
