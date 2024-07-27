import Image from 'next/image';
import { Dosis } from 'next/font/google';

const dosis = Dosis({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    style: ['normal'],
});

export default function HeaderPage({ HeaderImg, HeaderTitle }) {
    return (
        <section className="relative h-[680px] md:h-screen">
            <Image
                src={HeaderImg}
                alt="Arquitectura"
                fill={true}
                priority={true} // Prioritize the image for faster loading
                quality={100} // Maintain image quality
                className="object-cover object-top"
            />
            <div className="container mx-auto flex h-[680px] md:h-screen items-center justify-center px-[50px]">
                <h1
                    className={`z-10 font-[600] text-blanco md:text-[40px] text-[34px] text-center leading-[48px] ${dosis.className}`}
                >
                    {HeaderTitle}
                </h1>
            </div>
        </section>
    );
}
