import { ContactForm } from './form';
import Image from 'next/image';
export const metadata = {
    title: 'PTI | Contacto',
};
export default function Contacto() {
    return (
        <main>
            <section className="bg-cover bg-no-repeat bg-top md:h-screen">
                <Image
                    src="/contacto/contacto-01.webp"
                    alt="Contacto"
                    layout="fill"
                    priority={true} // Prioritize the image for faster loading
                    quality={100} // Maintain image quality
                    className="object-cover object-center"
                />
                <div className="container mx-auto flex justify-center items-center md:h-screen">
                    <h1 className="text-blanco md:text-[40px] font-semibold z-10">CONTACTO</h1>
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
