import Image from 'next/image';
import Link from 'next/link';
import CastroGallery from '@/components/CastroGaleria';
export const metadata = {
    title: 'PTI | Iglesia San Francisco de Castro',
};
export default function IglesiaCastro() {
    return (
        <main>
            <section className="md:h-screen relative">
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
                <div className="container mx-auto">
                    <h1 className="text-tinto md:text-[30px] font-semibold uppercase">
                        Iglesia San Francisco de CASTRO
                    </h1>
                </div>
                <div className="container mx-auto flex md:mt-[70px]">
                    <div className="md:w-4/12 flex flex-row items-center">
                        <Image src="/iglesias/icono-01.svg" alt="Icono 01" width={77} height={56} />
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:ml-[30px]">
                            Construcción: <b className="md:font-medium">1910</b>
                        </p>
                    </div>
                    <div className="md:w-4/12 flex flex-row items-center">
                        <Image
                            src="/iglesias/icono-02.svg"
                            alt="Icono 01"
                            width={43}
                            height={117}
                            className="md:h-[90px] md:w-auto"
                        />
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:ml-[30px]">
                            Patrono: <b className="md:font-medium">San Francisco</b>
                        </p>
                    </div>
                    <div className="md:w-4/12 flex flex-row items-center">
                        <Image
                            src="/iglesias/icono-03.svg"
                            alt="Icono 01"
                            width={107}
                            height={143}
                            className="md:h-[100px] md:w-auto"
                        />
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:ml-[30px]">
                            Fiesta Patronal: <b className="md:font-medium">4 de octubre</b>
                        </p>
                    </div>
                </div>
                <div className="container mx-auto md:mt-[70px]">
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        La primera iglesia de Castro fue construida en 1.567 y, al igual que varias
                        reconstrucciones posteriores, fue destruida por un incendio. La predecesora
                        de la iglesia actual que se erigía en el mismo sitio, se quemó en 1.902. De
                        ella se conservan bellas fotografías.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        La Iglesia San Francisco de Castro es el principal templo del archipiélago y
                        símbolo de su capital. Se trata de una construcción monumental cuyo diseño
                        original, proveniente de Europa, consideraba la utilización de piedra y
                        hormigón para su construcción. Sin embargo, los carpinteros locales
                        decidieron levantarla a la usanza chilota: en madera.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Su aspecto exterior se diferencia del modelo tradicional de arquitectura
                        religiosa chilota, sin embargo, en su interior se experimenta la misma
                        sensación que en las demás iglesias patrimoniales, caracterizada por la
                        calidez de los espacios, el olor a madera nativa, la peculiaridad de la
                        imaginería religiosa influenciada por tradiciones locales, y la vivacidad
                        los ritos típicos del archipiélago.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Su fachada se ha pintado de diversos colores durante su historia, pasando
                        por el naranjo y el celeste hasta el actual amarillo con morado, que se dice
                        era su color original.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Entre las imágenes religiosas destacan el arcángel Miguel, victorioso sobre
                        Satanás y una réplica del famoso Jesús de Nazareno de Caguach.
                    </p>
                </div>
            </section>
            <section>
                <div
                    className="container mx-auto bg-cover bg-no-repeat bg-center md:h-screen flex justify-center align-middle items-center"
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
                    <Link href="#" alt="Volver a paginas Iglesias">
                        <Image
                            src="/btn-atractivos.svg"
                            alt="ir"
                            width={570}
                            height={64}
                            className="md:mt-[60px] md:w-[430px] hover:scale-[1.1] transition-all ease-cubic-bezier float-end md:mr-[50px]"
                        />
                    </Link>
                    <Link href="/iglesias" alt="Volver a paginas Iglesias">
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
