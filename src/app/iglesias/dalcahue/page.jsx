import Image from 'next/image';
import Link from 'next/link';
import DalcahueGallery from '@/components/DalcahueGaleria';
export const metadata = {
    title: 'PTI | Iglesia Nuestra Señora de los Dolores de Dalcahue',
};
export default function IglesiaDalcahue() {
    return (
        <main>
            <section className="relative md:h-screen">
                <Image
                    src="/iglesias/dalcahue/dalcahue-01.webp"
                    alt="Iglesia Nuestra Señora de los Dolores de DALCAHUE"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto">
                    <h1 className="font-semibold uppercase text-tinto md:text-[30px]">
                        Iglesia Nuestra Señora de los Dolores de Dalcahue
                    </h1>
                </div>
                <div className="container mx-auto flex md:mt-[70px]">
                    <div className="flex flex-row items-center md:w-4/12">
                        <Image src="/iglesias/icono-01.svg" alt="Icono 01" width={77} height={56} />
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Construcción: <b className="md:font-medium">1893</b>
                        </p>
                    </div>
                    <div className="flex flex-row items-center md:w-4/12">
                        <Image
                            src="/iglesias/icono-02.svg"
                            alt="Icono 01"
                            width={43}
                            height={117}
                            className="md:h-[90px] md:w-auto"
                        />
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Patrono: <b className="md:font-medium">Nuestra Señora de los Dolores</b>
                        </p>
                    </div>
                    <div className="flex flex-row items-center md:w-4/12">
                        <Image
                            src="/iglesias/icono-03.svg"
                            alt="Icono 01"
                            width={107}
                            height={143}
                            className="md:h-[100px] md:w-auto"
                        />
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Fiesta Patronal: <b className="md:font-medium">15 de septiembre</b>
                        </p>
                    </div>
                </div>
                <div className="container mx-auto md:mt-[70px]">
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La iglesia de Dalcahue fue construida sobre los cimientos de la antigua
                        capilla misional levantada por los jesuitas. Tal como ocurrió en otras
                        ciudades del archipiélago, la explanada frente a la iglesia fue transformada
                        en la plaza principal de la ciudad.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La imagen de la patrona Nuestra Señora de los Dolores, tallada en madera,
                        luce un hermoso vestido de lana, cuidadosamente tejido a mano; y aros de
                        madera y fibra vegetal. También destacan las 12 estaciones del vía crucis,
                        finamente talladas en madera.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        El Cristo situado detrás del altar cuenta con bisagras en las axilas y
                        clavos removibles, lo que sugiere que fue concebido para la ceremonia del
                        desclave, que se celebra durante el Viernes Santo y que conmemora el momento
                        en que el cuerpo de Jesús fue retirado de la cruz después de su crucifixión.
                    </p>
                </div>
            </section>
            <section>
                <div
                    className="container mx-auto flex items-center justify-center bg-cover bg-center bg-no-repeat align-middle md:h-screen"
                    style={{ backgroundImage: "url('/iglesias/dalcahue/dalcahue-02.webp')" }}
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
                    <DalcahueGallery />
                </div>
                <div className="container mx-auto flex justify-end">
                    <Link href="#" alt="Volver a paginas Iglesias">
                        <Image
                            src="/btn-atractivos.svg"
                            alt="ir"
                            width={570}
                            height={64}
                            className="transition-all ease-cubic-bezier float-end hover:scale-[1.1] md:mt-[60px] md:w-[430px] md:mr-[50px]"
                        />
                    </Link>
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
