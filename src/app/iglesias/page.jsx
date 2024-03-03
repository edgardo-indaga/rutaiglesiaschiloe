import Image from 'next/image';

import ThumbCompIglesias from '@/components/ThumbCompIglesias';
import ThumbIglesias from '@/components/Thumb-Iglesias';

export const metadata = {
    title: 'PTI | Las Iglesias',
};

export default function LasIglesias() {
    return (
        <main>
            <section className="h-screen relative ">
                <Image
                    src="/iglesias/iglesia-01.webp"
                    alt="Patrimonio de la humanidad"
                    fill={true}
                    priority={true} // Prioritize the image for faster loading
                    quality={100} // Maintain image quality
                    className="object-cover object-top md:object-center"
                />
                <div className="container mx-auto flex justify-center items-center h-screen">
                    <h1 className="text-blanco md:text-[40px] font-semibold z-10">
                        IGLESIAS DE CHILOÉ
                    </h1>
                </div>
            </section>
            <ThumbCompIglesias />
            <ThumbIglesias />
        </main>
    );
}
