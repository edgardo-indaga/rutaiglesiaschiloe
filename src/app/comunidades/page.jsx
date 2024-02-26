import Image from 'next/image';

export const metadata = {
    title: 'PTI | La Comunidad',
};
export default function LaComunidad() {
    return (
        <main>
            <section className="bg-cover bg-no-repeat bg-top md:h-screen">
                <Image
                    src="/arquitectura/arquitectura-01.webp"
                    alt="Arquitectura"
                    fill={true}
                    priority={true} // Prioritize the image for faster loading
                    quality={100} // Maintain image quality
                    className="object-cover object-top"
                />
                <div className="container mx-auto flex justify-center items-center md:h-screen ">
                    <h1 className="text-blanco md:text-[40px] font-semibold z-10">
                        LAS COMUNIDADES
                    </h1>
                </div>
            </section>
        </main>
    );
}
