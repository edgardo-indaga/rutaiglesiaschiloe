import Image from 'next/image';
import VideoComunidades from '@/components/VideoComunidades';
import ComunidadGallery from '@/components/ComunidadGaleria';
import ComunidadGallerySecundaria from '@/components/ComunidadGaleriaSecundaria';
import PatrimonioGallery from '@/components/PatrimonioGaleria';
import Link from 'next/link';
export const metadata = {
    title: 'PTI | Las Comunidades',
};
export default function LaComunidad() {
    return (
        <main>
            <section className="bg-cover bg-no-repeat bg-top md:h-screen">
                <Image
                    src="/comunidades/comunidades-01.webp"
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
            <section className="md:py-[100px]">
                <div className="container mx-auto flex justify-center items-center align-middle">
                    <VideoComunidades />
                </div>
            </section>
            <section className="md:py-[100px] bg-beige">
                <div className="container mx-auto flex flex-col">
                    <p className="text-tinto md:text-[26px] font-medium md:leading-[34px] md:mb-[50px]">
                        ¿QUÉ SIGNIFICA ESTE RECONOCIMIENTO?
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        La historia de Chiloé está marcada por su geografía insular y su consecuente
                        aislamiento del resto de Chile. Esta condición dio origen a manifestaciones
                        culturales únicas y muy arraigadas.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        La cultura de bordemar combinada con el trabajo agrícola, la mitología, la
                        gastronomía y artesanía tradicional, el folclore, el oficio carpintero y la
                        arquitectura, son solo algunas de ellas.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Este aislamiento fue un factor importante en la conservación de prácticas
                        religiosas propias del medioevo español, que al mezclarse con la tradición
                        chilota dieron origen a una religiosidad popular muy singular.{' '}
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Expresión de ella son las grandes festividades religiosas. Cada iglesia
                        tiene su fiesta patronal, pero las comunidades celebran además a otros
                        cristos y santos importantes. Son momentos de encuentro y celebración
                        comunitaria en las que se manifiestan las principales tradiciones del
                        archipiélago, como las mingas, la música y la gastronomía. Se realizan
                        además durante estas fiestas procesiones y pasacalles muy distintivas.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Otras expresiones de esta religiosidad popular son los cantos y rezos “a la
                        chilota”, los santos vestidos y los elementos decorativos de las iglesias,
                        así como la propia organización de la comunidad religiosa
                    </p>
                </div>
                <div className="container mx-auto md:mt-[50px]">
                    <ComunidadGallery />
                </div>
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto flex flex-col">
                    <p className="text-tinto md:text-[26px] font-medium md:leading-[34px] md:mb-[50px]">
                        COMUNIDADES: ORGULLO Y COMPROMISO
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Hoy, el sentimiento religioso sigue muy arraigado en las comunidades
                        locales, que mantienen vivas a las iglesias y sienten un profundo orgullo
                        por ellas.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Son las propias comunidades las que están a cargo del cuidado y mantención
                        de los templos, mediante un trabajo voluntario y muy dedicado. Para ello,
                        definen una estructura de roles, entre los que destaca el Fiscal.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Los fiscales tienen su origen en las misiones circulares y eran personas
                        locales que eran designadas por los sacerdotes para cuidar las iglesias y
                        hacerse cargo de los rituales religiosos en su ausencia, que era la mayor
                        parte del año. Era un cargo que se ejercía con mucha autonomía y que perdura
                        hasta el día de hoy en muchas iglesias.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Otro rol relevante es el de los Supremos, que se encargan de organizar las
                        fiestas patronales. También existen los patrones de iglesia, patrones de
                        llaves, patrones de imágenes y rezadores, entre otros. Estos roles suelen
                        ser tradiciones familiares que se traspasan de generación en generación.
                    </p>
                </div>
                <div className="container mx-auto md:mt-[50px]">
                    <ComunidadGallerySecundaria />
                </div>
            </section>
            <section className="md:h-auto md:py-[100px] md:mb-[100px]">
                <div className="container mx-auto">
                    <PatrimonioGallery />
                    <Link href="/#comunidades" alt="PAGINA DE INICIO">
                        <Image
                            src="/btn-volver.svg"
                            alt="ir"
                            width={240}
                            height={60}
                            className="md:mt-[60px] md:w-[180px] hover:scale-[1.1] transition-all ease-cubic-bezier float-end"
                        />
                    </Link>
                </div>
            </section>
        </main>
    );
}
