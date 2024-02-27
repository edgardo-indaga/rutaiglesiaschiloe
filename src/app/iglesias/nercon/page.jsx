import Image from 'next/image';
import Link from 'next/link';
import NerconGallery from '@/components/NerconGaleria';

export const metadata = {
    title: 'PTI | Iglesia Nuestra Señora de Gracia de Nercón',
};
export default function IglesiaNercon() {
    return (
        <main>
            <section className="md:h-screen relative">
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
                <div className="container mx-auto">
                    <h1 className="text-tinto md:text-[30px] font-semibold uppercase">
                        Iglesia Nuestra Señora de Gracia de Nercón
                    </h1>
                </div>
                <div className="container mx-auto flex md:mt-[70px]">
                    <div className="md:w-4/12 flex flex-row items-center">
                        <Image src="/iglesias/icono-01.svg" alt="Icono 01" width={77} height={56} />
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:ml-[30px]">
                            Construcción: <b className="md:font-medium">1879</b>
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
                            Patrono:{' '}
                            <b className="md:font-medium">Virgen de Gracia y Arcángel San Miguel</b>
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
                            Fiesta Patronal: <b className="md:font-medium">8 y 29 de septiembre</b>
                        </p>
                    </div>
                </div>
                <div className="container mx-auto md:mt-[70px]">
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Al visitar esta iglesia inmediatamente llaman la atención su bello
                        antejardín y el cementerio tradicional que la acompañan. Destacan también el
                        vistoso color celeste utilizado tanto en la fachada como en los nichos que
                        albergan a los santos; y las columnas interiores pintadas imitando el
                        mármol.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Tras la última restauración se dejó a la vista el “esqueleto” de la iglesia,
                        lo que permite al visitante recorrer el entretecho para apreciar la parte
                        exterior de la bóveda y el uso de ensambles y tarugos de madera.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Se cuenta que la figura de San Miguel pisando a Lucifer fue confeccionada
                        por un artesano local a partir de un madero recogido del bosque.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        La Virgen de Gracia vela por sus fieles desde el nicho central, vestida de
                        prendas rosadas que le renuevan cada año familias que se ofrecen para
                        cuidarla. Otra imagen más pequeña de la patrona fue encontrada por un
                        lugareño en 1.730, al lado de la actual iglesia, donde anteriormente se
                        ubicaba la capilla.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Se expone en su interior una lancha chilota y cuelgan del techo pequeñas
                        embarcaciones. Estas son ofrendas de fieles navegantes, para quienes
                        antiguamente la iglesia cumplía el rol de faro.
                    </p>
                </div>
            </section>
            <section>
                <div
                    className="container mx-auto bg-cover bg-no-repeat bg-center md:h-screen flex justify-center align-middle items-center"
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
