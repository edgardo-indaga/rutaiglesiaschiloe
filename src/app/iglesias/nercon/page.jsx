import Image from 'next/image';
import Link from 'next/link';
import NerconGallery from '@/components/NerconGaleria';

export const metadata = {
    title: 'PTI | Iglesia Nuestra Señora de Gracia de Nercón',
};
export default function IglesiaNercon() {
    return (
        <main>
            <section className="relative md:h-screen">
                <Image
                    src="/iglesias/nercon/nercon-01.webp"
                    alt="Iglesia Nuestra Señora de Gracia de Nercón"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>

            <section className="md:py-[100px]">
                <div className="container mx-auto flex justify-center">
                    <h1 className="font-semibold text-tinto xl:text-[48px] uppercase">
                        Iglesia Nuestra Señora de Gracia de Nercón
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
                            Construcción: <b className="md:font-medium">1879</b>
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
                            Patrono:{' '}
                            <b className="md:font-medium">Virgen de Gracia y Arcángel San Miguel</b>
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
                            Fiesta Patronal: <b className="md:font-medium">8 y 29 de septiembre</b>
                        </p>
                    </div>
                </div>
            </section>

            <section className="md:py-[100px] bg-beige">
                <div className="container mx-auto md:px-20">
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Al visitar esta iglesia inmediatamente llaman la atención su{' '}
                        <b>bello antejardín y el cementerio tradicional</b> que la acompañan.
                        Destacan también el vistoso color celeste utilizado tanto en la fachada como
                        en los nichos que albergan a los santos; y las columnas interiores pintadas
                        imitando el mármol.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        <b>
                            Tras la última restauración se dejó a la vista el “esqueleto” de la
                            iglesia,
                        </b>
                        lo que permite al visitante recorrer el entretecho para apreciar la parte
                        exterior de la bóveda y el uso de ensambles y tarugos de madera.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Se cuenta que la <b>figura de San Miguel pisando a Lucifer</b> fue
                        confeccionada por un artesano local a partir de un madero recogido del
                        bosque.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La Virgen de Gracia vela por sus fieles desde el nicho central, vestida de
                        prendas rosadas que le renuevan cada año familias que se ofrecen para
                        cuidarla. Otra imagen más pequeña de la patrona fue encontrada por un
                        lugareño en 1.730, al lado de la actual iglesia, donde anteriormente se
                        ubicaba la capilla.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        <b>
                            Se expone en su interior una lancha chilota y cuelgan del techo pequeñas
                            embarcaciones.
                        </b>{' '}
                        Estas son ofrendas de fieles navegantes, para quienes antiguamente la
                        iglesia cumplía el rol de faro.
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
                    style={{ backgroundImage: "url('/iglesias/nercon/nercon-02.webp')" }}
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
                    <NerconGallery />
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
