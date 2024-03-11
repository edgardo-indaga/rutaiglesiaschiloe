import Image from 'next/image';
import ItemsDescargables from '@/components/ItemDescargables';
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
            </section>
            <ItemsDescargables />
        </main>
    );
}
