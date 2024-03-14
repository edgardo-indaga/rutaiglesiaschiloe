import { ContactForm } from './form';
import Image from 'next/image';
import { Dosis } from 'next/font/google';

const dosis = Dosis({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    style: ['normal'],
});
export const metadata = {
    title: 'PTI | Contacto',
};
export default function Contacto() {
    return (
        <main>
            <section className="relative h-[680px] md:h-screen">
                <Image
                    src="/contacto/contacto-01.webp"
                    alt="Contacto"
                    fill={true}
                    priority={true} // Prioritize the image for faster loading
                    quality={100} // Maintain image quality
                    className="object-cover object-center"
                />
                <div className="container mx-auto flex h-[680px] items-center justify-center px-[50px]">
                    <h1
                        className={`z-10 font-[600] text-blanco md:text-[40px] text-[34px] text-center leading-[48px] ${dosis.className}`}
                    >
                        CONTACTO
                    </h1>
                </div>
            </section>

            <section className="md:py-[100px] py-10 px-5 md:px-0">
                <div className="container mx-auto flex items-center">
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}
