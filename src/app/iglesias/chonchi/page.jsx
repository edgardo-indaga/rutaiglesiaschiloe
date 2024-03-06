import Image from 'next/image';
import Link from 'next/link';
import ChonchiGallery from '@/components/ChonchiGaleria';
export const metadata = {
    title: 'PTI | Iglesia Nuestra Señora del Rosario de Chonchi',
};

export default function IglesiaChonchi() {
    return (
        <main>
            <section className="relative md:h-screen">
                <Image
                    src="/iglesias/chonchi/chonchi-01.webp"
                    alt="PTI | Iglesia Nuestra Señora del Rosario de Chonchi"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto">
                    <h1 className="font-semibold uppercase text-tinto md:text-[30px]">
                        PTI | Iglesia Nuestra Señora del Rosario de Chonchi
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
                            Patrono:
                            <b className="md:font-medium">
                                Nuestra Señora del Rosario y San Carlos de Borromeo
                            </b>
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
                            Fiesta Patronal:{' '}
                            <b className="md:font-medium">7 de octubre y 4 de noviembre</b>
                        </p>
                    </div>
                </div>
                <div className="container mx-auto md:mt-[70px]">
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La iglesia de Chonchi destaca de inmediato por el colorido de su fachada y
                        su torre. En su interior, llaman la atención las figuras geométricas
                        talladas entre y sobre los pilares, además de las estrellas blancas que
                        adornan su bóveda central. Según los lugareños, estas estrellas representan
                        las constelaciones del cielo nocturno con un nivel de detalle tan
                        impresionante que, a la fecha, no han podido ser restauradas.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La iglesia actual está construida sobre otra más antigua, lo que se puede
                        evidenciar al observar las bases de la antigua iglesia a través de una pieza
                        de vidrio ubicada en el suelo del altar. Los altares lucen curiosos y
                        coloridos diseños, los cuales fueron descubiertos por un sacerdote al raspar
                        la última capa de pintura.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Cada año, durante el día de su fiesta, la imagen de la patrona, Nuestra
                        Señora del Rosario, recibe un nuevo vestido. Además, la comunidad celebra a
                        San Carlos de Borromeo, dado que es el patrono de la Parroquia, que abarca
                        más de 20 capillas de la zona.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La comunidad recuerda vívidamente el temporal de 2002, ya que derribó la
                        torre de la iglesia. Afortunadamente, esta pudo ser reconstruida al año
                        siguiente.
                    </p>
                </div>
            </section>
            <section>
                <div
                    className="container mx-auto flex items-center justify-center bg-cover bg-center bg-no-repeat align-middle md:h-screen"
                    style={{ backgroundImage: "url('/iglesias/chonchi/chonchi-02.webp')" }}
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
                    <ChonchiGallery />
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
