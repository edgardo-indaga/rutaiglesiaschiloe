import { ContactForm } from './form';
import Image from 'next/image';
export const metadata = {
    title: 'PTI | Contacto',
};
export default function Contacto() {
    return (
        <main>
            <section className="relative md:h-screen">
                <Image
                    src="/contacto/contacto-01.webp"
                    alt="Contacto"
                    fill={true}
                    priority={true} // Prioritize the image for faster loading
                    quality={100} // Maintain image quality
                    className="object-cover object-center"
                />
                <div className="container mx-auto flex items-center justify-center md:h-screen">
                    <h1 className="z-10 font-semibold text-blanco md:text-[40px]">CONTACTO</h1>
                </div>
            </section>

            <section className="md:py-[100px]">
                <div className="container mx-auto flex items-center">
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}
