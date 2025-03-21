import Image from 'next/image';
import Link from 'next/link';

// Componente Galeria, Arrays de imagenes altura de las filas
import GalleryChurch from '@components/GalleryChurch/GalleryChurch';
import ChonchiPhotoGallery from '@components/GalleryChurch/ChonchiPhotoGallery';

// Componente de Ubicacion de la Iglesia
import UbicacionIglesia from '@/components/UbicacionIglesia';
// Componente de Mas Atractivos
import MoreAttraction from '@/components/MoreAttraction';

export const metadata = {
    title: 'PTI | Iglesia Nuestra Señora del Rosario de Chonchi',
};

export default function IglesiaChonchi() {
    const lng = -73.7737; // longitud del centro del mapa
    const lat = -42.62412; // latitud del centro del mapa
    const pdfEsp = '/uploads/chonchi-es.pdf';
    const pdfEng = '/uploads/chonchi-en.pdf';
    return (
        <main>
            <section className="relative h-[680px] md:h-screen">
                <Image
                    src="/iglesias/chonchi/chonchi-01.webp"
                    alt="PTI | Iglesia Nuestra Señora del Rosario de Chonchi"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>

            <section className="px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto flex justify-center">
                    <h1 className="font-semibold text-tinto md:text-[40px] text-[30px] text-center leading-[38px] md:leading-[48px] uppercase">
                        Iglesia Nuestra Señora del Rosario de Chonchi
                    </h1>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row pt-10 md:pt-[70px]">
                    <div className="w-full md:w-4/12 flex md:flex-col items-center mb-5 md:mb-0">
                        <Image
                            src="/iglesias/icono-01.svg"
                            alt="Icono 01"
                            width={77}
                            height={56}
                            className="h-[60px] md:h-[90px] md:w-auto md:mb-[20px] text-center"
                        />
                        <p className="font-thin text-tinto text-[18px] md:text-center md:w-[300px] md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px] ml-[31px]">
                            Construcción: <b className="md:font-medium">1893</b>
                        </p>
                    </div>
                    <div className="w-full md:w-4/12 flex md:flex-col items-center mb-5 md:mb-0">
                        <Image
                            src="/iglesias/icono-02.svg"
                            alt="Icono 01"
                            width={43}
                            height={117}
                            className="h-[60px] md:h-[90px] md:w-auto md:mb-[20px] ml-[30px] md:ml-0"
                        />
                        <p className="font-thin text-tinto text-[18px] md:text-center md:w-[300px] md:text-[26px] md:leading-[34px] ml-[34px] md:mr-[20px] ">
                            Patrono:{' '}
                            <b className="md:font-medium">
                                Nuestra Señora del Rosario y San Carlos de Borromeo
                            </b>
                        </p>
                    </div>
                    <div className="w-full md:w-4/12 flex md:flex-col items-center mb-5 md:mb-0">
                        <Image
                            src="/iglesias/icono-03.svg"
                            alt="Icono 01"
                            width={107}
                            height={143}
                            className="h-[60px] md:h-[90px] md:w-auto md:mb-[20px]"
                        />
                        <p className="font-thin text-tinto text-[18px] md:text-center md:w-[300px] md:text-[26px] md:leading-[34px] ml-[30px] md:mr-[20px]">
                            Fiesta Patronal:{' '}
                            <b className="md:font-medium">7 de octubre y 4 de noviembre</b>
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-beige px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto md:px-20">
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La iglesia de Chonchi destaca de inmediato por el colorido de su fachada y
                        su torre. En su interior, llaman la atención las{' '}
                        <b>
                            figuras geométricas talladas entre y sobre los pilares, además de las
                            estrellas blancas que adornan su bóveda central.
                        </b>{' '}
                        Según los lugareños, estas estrellas representan las constelaciones del
                        cielo nocturno con un nivel de detalle tan impresionante que, a la fecha, no
                        han podido ser restauradas.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La iglesia actual está construida sobre otra más antigua, lo que se puede
                        evidenciar al observar las bases de la antigua iglesia a través de una pieza
                        de vidrio ubicada en el suelo del altar.{' '}
                        <b>
                            Los altares lucen curiosos y coloridos diseños, los cuales fueron
                            descubiertos por un sacerdote al raspar la última capa de pintura.
                        </b>
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Cada año, durante el día de su fiesta, la imagen de la patrona, Nuestra
                        Señora del Rosario, recibe un nuevo vestido. Además, la comunidad celebra a
                        San Carlos de Borromeo, dado que es el patrono de la Parroquia, que abarca
                        más de 20 capillas de la zona.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La comunidad recuerda vívidamente el temporal de 2002, ya que derribó la
                        torre de la iglesia. Afortunadamente, esta pudo ser reconstruida al año
                        siguiente.
                    </p>
                </div>

                <UbicacionIglesia lng={lng} lat={lat} />

                <MoreAttraction pdfEsp={pdfEsp} pdfEng={pdfEng} />
            </section>

            <section className="md:pt-[100px] px-5 py-10 md:px-0">
                <div
                    className="container mx-auto flex items-center justify-center bg-cover bg-center bg-no-repeat align-middle md:h-[720px] h-[360px]"
                    style={{ backgroundImage: "url('/iglesias/chonchi/chonchi-02.webp')" }}
                >
                    <Link href="/recorridos/iglesia-chonchi/index.html" target={'_blank'}>
                        <Image
                            src="/iglesias/icono-04.svg"
                            alt="icono 360"
                            width={183}
                            height={73}
                        />
                    </Link>
                </div>
            </section>

            <section className="md:py-[100px] md:h-auto px-5 py-10 md:px-0">
                <div className="container mx-auto">
                    <GalleryChurch slides={ChonchiPhotoGallery} rowHeight={200} />
                </div>
                <div className="container mx-auto flex justify-end">
                    <Link href="/iglesias#listadoiglesias" alt="Volver a paginas Iglesias">
                        <Image
                            src="/btn-volver.svg"
                            alt="ir"
                            width={240}
                            height={60}
                            className="transition-all ease-cubic-bezier float-end hover:scale-[1.1] md:mt-[60px] md:w-[180px] hidden xl:block"
                        />
                    </Link>
                </div>
                <div className="flex flex-row justify-end xl:hidden">
                    <Link
                        href="/iglesias#listadoiglesias"
                        className="font-light bg-morado text-blanco text-[16px] leading-[16px] my-[30px] py-[12px] px-[20px]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 float-left mr-3"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5 8.25 12l7.5-7.5"
                            />
                        </svg>
                        Volver
                    </Link>
                </div>
            </section>
        </main>
    );
}
