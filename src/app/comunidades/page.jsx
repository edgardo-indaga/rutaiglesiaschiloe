import Image from 'next/image';
import VideoComunidades from '@/components/VideoComunidades';
import ComunidadGallery from '@/components/ComunidadGaleria';
import ComunidadGallerySecundaria from '@/components/ComunidadGaleriaSecundaria';

import Link from 'next/link';

import { Dosis } from 'next/font/google';

const dosis = Dosis({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    style: ['normal'],
});
export const metadata = {
    title: 'PTI | Las Comunidades',
};
export default function LaComunidad() {
    return (
        <main>
            <section className="relative h-[680px] md:h-screen">
                <Image
                    src="/comunidades/comunidades-01.webp"
                    alt="Arquitectura"
                    fill={true}
                    priority={true} // Prioritize the image for faster loading
                    quality={100} // Maintain image quality
                    className="object-cover object-top"
                />
                <div className="container mx-auto flex h-[680px] items-center justify-center px-[50px]">
                    <h1
                        className={`z-10 font-[600] text-blanco md:text-[40px] text-[34px] text-center leading-[48px] ${dosis.className}`}
                    >
                        LAS COMUNIDADES
                    </h1>
                </div>
            </section>

            <section className="px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto flex items-center justify-center align-middle">
                    <VideoComunidades />
                </div>
            </section>

            <section className="bg-beige px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto flex justify-center mb-[20px] md:mb-[70px]">
                    <h1 className="font-semibold text-tinto text-[24px] xl:text-[48px] text-center">
                        PATRIMONIO VIVO: LA RELIGIOSIDAD POPULAR
                    </h1>
                </div>
                <div className="container mx-auto flex flex-col md:px-20">
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La historia de Chiloé está marcada por su{' '}
                        <b>geografía insular y su consecuente aislamiento del resto de Chile.</b>{' '}
                        Esta condición dio origen a{' '}
                        <b>manifestaciones culturales únicas y muy arraigadas.</b>
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La cultura de bordemar combinada con el trabajo agrícola, la mitología, la
                        gastronomía y artesanía tradicional, el folclore, el oficio carpintero y la
                        arquitectura, son solo algunas de ellas.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Este aislamiento fue un factor importante en la conservación de{' '}
                        <b>
                            prácticas religiosas propias del medioevo español, que al mezclarse con
                            la tradición chilota dieron origen a una religiosidad popular muy
                            singular.
                        </b>
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Expresión de ella son las grandes <b>festividades religiosas.</b> Cada
                        iglesia tiene su fiesta patronal, pero las comunidades celebran además a
                        otros cristos y santos importantes. Son momentos de encuentro y celebración
                        comunitaria en las que se manifiestan las principales tradiciones del
                        archipiélago, como las mingas, la música y la gastronomía. Se realizan
                        además durante estas fiestas procesiones y pasacalles muy distintivas.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Otras expresiones de esta religiosidad popular son los{' '}
                        <b>
                            cantos y rezos “a la chilota”, los santos vestidos y los elementos
                            decorativos de las iglesias
                        </b>
                        , así como la propia organización de la comunidad religiosa.
                    </p>
                </div>
                <div className="container mx-auto md:mt-[50px] my-5">
                    <ComunidadGallery />
                </div>
            </section>

            <section className="md:pt-[100px] px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto flex justify-center mb-[20px] md:mb-[70px]">
                    <h1 className="font-semibold text-tinto text-[24px] xl:text-[48px] text-center">
                        COMUNIDADES: ORGULLO Y COMPROMISO
                    </h1>
                </div>
                <div className="container mx-auto flex flex-col md:px-20">
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Hoy, el sentimiento religioso sigue muy arraigado en las comunidades
                        locales, que{' '}
                        <b>
                            mantienen vivas a las iglesias y sienten un profundo orgullo por ellas.
                        </b>
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        <b>
                            Son las propias comunidades las que están a cargo del cuidado y
                            mantención de los templos,
                        </b>{' '}
                        mediante un trabajo voluntario y muy dedicado. Para ello, definen una
                        estructura de roles, entre los que destaca el Fiscal.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        <b>Los fiscales</b> tienen su origen en las misiones circulares y eran
                        personas locales que eran designadas por los sacerdotes para cuidar las
                        iglesias y hacerse cargo de los rituales religiosos en su ausencia, que era
                        la mayor parte del año. Era un cargo que se ejercía con mucha autonomía y
                        que perdura hasta el día de hoy en muchas iglesias.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Otro rol relevante es el de los Supremos, que se encargan de organizar las
                        fiestas patronales. También existen los patrones de iglesia, patrones de
                        llaves, patrones de imágenes y rezadores, entre otros. Estos roles suelen
                        ser tradiciones familiares que se traspasan de generación en generación.
                    </p>
                </div>
                <div className="container mx-auto md:mt-[50px] my-5">
                    <ComunidadGallerySecundaria />
                </div>
            </section>
            <section className="md:mb-[100px] md:pb-[100px] md:h-auto">
                <div className="container mx-auto">
                    <Link href="/#comunidades" alt="PAGINA DE INICIO">
                        <Image
                            src="/btn-volver.svg"
                            alt="ir"
                            width={240}
                            height={60}
                            className="transition-all ease-cubic-bezier float-end hover:scale-[1.1] md:mt-[60px] md:w-[180px] hidden xl:block"
                        />
                    </Link>
                </div>
            </section>
        </main>
    );
}
