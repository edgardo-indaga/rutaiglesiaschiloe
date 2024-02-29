import Image from 'next/image';
import Link from 'next/link';
import DetifGallery from '@/components/DetifGaleria';

export const metadata = {
    title: 'PTI | Iglesia Nuestra Señora Detif',
};

export default function IglesiaDetif() {
    return (
        <main>
            <section className="md:h-screen relative">
                <Image
                    src="/iglesias/detif/detif-01.webp"
                    alt="Iglesia Nuestra Señora de los Dolores de DALCAHUE"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto">
                    <h1 className="text-tinto md:text-[30px] font-semibold uppercase">
                        Iglesia Santiago Apóstol de detif
                    </h1>
                </div>
                <div className="container mx-auto flex md:mt-[70px]">
                    <div className="md:w-4/12 flex flex-row items-center">
                        <Image src="/iglesias/icono-01.svg" alt="Icono 01" width={77} height={56} />
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Construcción: <b className="md:font-medium">Principios del siglo XIX</b>
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
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Patrono: <b className="md:font-medium">Jesús Nazareno</b>
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
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Fiesta Patronal: <b className="md:font-medium">24 de marzo</b>
                        </p>
                    </div>
                </div>
                <div className="container mx-auto md:mt-[70px]">
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Se desconoce el año exacto de construcción de la iglesia de Detif, que
                        destaca por su emplazamiento al estar construida muy cerca de una gran
                        playa, y en las faldas de un acantilado.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        A pesar de ser una de las iglesias más pequeñas del Sitio de Patrimonio
                        Mundial, su tamaño no le resta encanto, sino que la hace aún más acogedora.
                        La antigua explanada frente a la iglesia ha sido transformada en un hermoso
                        jardín, añadiendo belleza al entorno.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        En el interior de la iglesia, se pueden apreciar pequeños barcos de madera
                        que cuelgan de la nave principal. Se cuenta que estos barcos fueron
                        instalados como ofrenda por navegantes locales que regresaron con vida,
                        añadiendo un toque de tradición marinera a este espacio sagrado.
                    </p>
                </div>
            </section>
            <section>
                <div
                    className="container mx-auto bg-cover bg-no-repeat bg-center md:h-screen flex justify-center align-middle items-center"
                    style={{ backgroundImage: "url('/iglesias/detif/detif-02.webp')" }}
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
                    <DetifGallery />
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
