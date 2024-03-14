import Image from 'next/image';

import ThumbCompIglesias from '@/components/ThumbCompIglesias';
import ThumbIglesias from '@/components/Thumb-Iglesias';
import ThumbCompIglesiasMobile from '@/components/ThumbCompIglesiasMobile';
import ThumbIglesiasMobile from '@/components/ThumbIglesiasMobile';

import { Dosis } from 'next/font/google';

const dosis = Dosis({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    style: ['normal'],
});

export const metadata = {
    title: 'PTI | Las Iglesias',
};

export default function LasIglesias() {
    return (
        <main>
            <section className="relative h-[680px] md:h-screen">
                <Image
                    src="/iglesias/iglesia-01.webp"
                    alt="Patrimonio de la humanidad"
                    fill={true}
                    priority={true} // Prioritize the image for faster loading
                    quality={100} // Maintain image quality
                    className="object-cover object-top md:object-center"
                />
                <div className="container mx-auto flex h-[680px] items-center justify-center px-[50px]">
                    <h1
                        className={`z-10 font-[600] text-blanco md:text-[40px] text-[34px] text-center leading-[48px] ${dosis.className}`}
                    >
                        IGLESIAS DE CHILOÉ
                    </h1>
                </div>
            </section>
            <ThumbCompIglesias />
            <ThumbCompIglesiasMobile />
            <ThumbIglesias />
            <ThumbIglesiasMobile />
        </main>
    );
}
