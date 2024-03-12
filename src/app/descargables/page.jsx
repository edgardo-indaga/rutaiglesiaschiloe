import Image from 'next/image';
import ThumbDescargables from '@/components/ItemDescargables';
export const metadata = {
    title: 'PTI | Las Iglesias',
};

export default function Descargables() {
    return (
        <main>
            <section className="relative h-screen">
                <Image
                    src="/descargables/descargables-01.webp"
                    alt="Patrimonio de la humanidad"
                    fill={true}
                    priority={true} // Prioritize the image for faster loading
                    quality={100} // Maintain image quality
                    className="object-cover object-top md:object-center"
                />
                <div className="container mx-auto flex h-screen items-center justify-center">
                    <h1 className="z-10 font-semibold text-blanco md:text-[40px]">DESCARGABLES</h1>
                </div>
            </section>
            <ThumbDescargables />
        </main>
    );
}
