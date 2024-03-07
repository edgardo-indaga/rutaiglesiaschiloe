import Image from 'next/image';
import Link from 'next/link';
import CastroGallery from '@/components/CastroGaleria';
export const metadata = {
    title: 'PTI | Iglesia San Francisco de Castro',
};
export default function IglesiaCastro() {
    return (
        <main>
            <section className="relative md:h-screen">
                <Image
                    src="/iglesias/castro/castro-01.webp"
                    alt="Iglesia San Francisco de Castro"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>

            <section className="md:py-[100px]">
                <div className="container mx-auto flex justify-center">
                    <h1 className="font-semibold text-tinto xl:text-[48px] uppercase">
                        Iglesia San Francisco de Castro
                    </h1>
                </div>
                <div className="container mx-auto flex md:pt-[70px]">
                    <div className="md:w-4/12 flex flex-col items-center">
                        <Image
                            src="/iglesias/icono-01.svg"
                            alt="Icono 01"
                            width={77}
                            height={56}
                            className="md:h-[90px] md:w-auto md:mb-[20px]"
                        />
                        <p className="font-thin text-tinto text-center md:w-[300px] md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Construcción: <b className="md:font-medium">1910</b>
                        </p>
                    </div>
                    <div className="md:w-4/12 flex flex-col items-center">
                        <Image
                            src="/iglesias/icono-02.svg"
                            alt="Icono 01"
                            width={43}
                            height={117}
                            className="md:h-[90px] md:w-auto md:mb-[20px]"
                        />
                        <p className="font-thin text-tinto text-center md:w-[300px] md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Patrono: <b className="md:font-medium">San Francisco</b>
                        </p>
                    </div>
                    <div className="md:w-4/12 flex flex-col items-center">
                        <Image
                            src="/iglesias/icono-03.svg"
                            alt="Icono 01"
                            width={107}
                            height={143}
                            className="md:h-[90px] md:w-auto md:mb-[20px]"
                        />
                        <p className="font-thin text-tinto text-center md:w-[300px] md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Fiesta Patronal: <b className="md:font-medium">4 de octubre</b>
                        </p>
                    </div>
                </div>
            </section>

            <section className="md:py-[100px] bg-beige">
                <div className="container mx-auto md:px-20">
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La primera iglesia de Castro fue construida en 1.567 y, al igual que varias
                        reconstrucciones posteriores, fue destruida por un incendio.{' '}
                        <b>
                            La predecesora de la iglesia actual que se erigía en el mismo sitio, se
                            quemó en 1.902.
                        </b>{' '}
                        De ella se conservan bellas fotografías.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La Iglesia San Francisco de Castro es el principal templo del archipiélago y
                        símbolo de su capital. Se trata de una construcción monumental{' '}
                        <b>
                            cuyo diseño original, proveniente de Europa, consideraba la utilización
                            de piedra y hormigón para su construcción. Sin embargo, los carpinteros
                            locales decidieron levantarla a la usanza chilota: en madera.
                        </b>
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Su aspecto exterior se diferencia del modelo tradicional de arquitectura
                        religiosa chilota, sin embargo, en su interior se experimenta la misma
                        sensación que en las demás iglesias patrimoniales, caracterizada por la
                        calidez de los espacios, el olor a madera nativa, la peculiaridad de la
                        imaginería religiosa influenciada por tradiciones locales, y la vivacidad
                        los ritos típicos del archipiélago.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Su fachada se ha pintado de diversos colores durante su historia, pasando
                        por el naranjo y el celeste hasta el actual amarillo con morado, que se dice
                        era su color original.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Entre las imágenes religiosas destacan el{' '}
                        <b>
                            arcángel Miguel, victorioso sobre Satanás y una réplica del famoso Jesús
                            de Nazareno de Caguach.
                        </b>
                    </p>
                </div>
                <div className="container mx-auto flex justify-center">
                    <Link href="#" alt="Volver a paginas Iglesias">
                        <Image
                            src="/btn-atractivos.svg"
                            alt="ir"
                            width={570}
                            height={64}
                            className="transition-all ease-cubic-bezier float-end hover:scale-[1.1] md:mt-[60px] md:w-[430px] md:mr-[50px]"
                        />
                    </Link>
                </div>
            </section>

            <section className="md:pt-[100px]">
                <div
                    className="container mx-auto flex items-center justify-center bg-cover bg-center bg-no-repeat align-middle md:h-[720px]"
                    style={{ backgroundImage: "url('/iglesias/castro/castro-02.webp')" }}
                >
                    <Link href="#">
                        <Image
                            src="/iglesias/icono-04.svg"
                            alt="icono 360"
                            width={183}
                            height={73}
                        />
                    </Link>
                </div>
            </section>

            <section className="md:py-[100px]">
                <div className="container mx-auto">
                    <CastroGallery />
                </div>
                <div className="container mx-auto flex justify-end">
                    <Link href="/iglesias" alt="Volver a paginas Iglesias">
                        <Image
                            src="/btn-volver.svg"
                            alt="ir"
                            width={240}
                            height={60}
                            className="transition-all ease-cubic-bezier float-end hover:scale-[1.1] md:mt-[60px] md:w-[180px]"
                        />
                    </Link>
                </div>
            </section>
        </main>
    );
}
