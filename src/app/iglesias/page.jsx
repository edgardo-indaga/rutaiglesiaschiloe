import Image from 'next/image';

import ThumbCompIglesias from '@/components/ThumbCompIglesias';
import ThumbIglesias from '@/components/Thumb-Iglesias';

export default function LasIglesias() {
    return (
        <main>
            <section className="bg-cover bg-no-repeat bg-top md:h-screen">
                <Image
                    src="/iglesias/iglesia-01.webp"
                    alt="Patrimonio de la humanidad"
                    fill={true}
                    priority={true} // Prioritize the image for faster loading
                    quality={100} // Maintain image quality
                    className="object-cover object-center"
                />
                <div className="container mx-auto flex justify-center items-center md:h-screen">
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
