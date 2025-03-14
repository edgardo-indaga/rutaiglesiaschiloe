import Image from 'next/image';
import Link from 'next/link';

// Componente Galeria, Arrays de imagenes altura de las filas
import GalleryChurch from '@components/GalleryChurch/GalleryChurch';
import NerconPhotoGallery from '@components/GalleryChurch/NerconPhotoGallery';

// Componente de Ubicacion de la Iglesia
import UbicacionIglesia from '@/components/UbicacionIglesia';
// Componente de Mas Atractivos
import MoreAttraction from '@/components/MoreAttraction';

export const metadata = {
    title: 'PTI | Iglesia Nuestra Señora de Gracia de Nercón',
};
export default function IglesiaNercon() {
    const lng = -73.7854; // longitud del centro del mapa
    const lat = -42.5011614; // latitud del centro del mapa
    const pdfEsp = '/uploads/nercon-es.pdf';
    const pdfEng = '/uploads/nercon-en.pdf';

    return (
        <main>
            <section className="relative h-[680px] md:h-screen">
                <Image
                    src="/iglesias/nercon/nercon-01.webp"
                    alt="Iglesia Nuestra Señora de Gracia de Nercón"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>

            <section className="px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto flex justify-center">
                    <h1 className="font-semibold text-tinto md:text-[40px] text-[30px] text-center leading-[38px] md:leading-[48px] uppercase">
                        Iglesia Nuestra Señora de Gracia de Nercón
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
                            Construcción: <b className="md:font-medium">1879</b>
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
                            <b className="md:font-medium">Virgen de Gracia y Arcángel San Miguel</b>
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
                        <p className="font-thin text-tinto text-[18px] md:text-center md:w-[300px] md:text-[26px] md:leading-[34px] ml-[18px] md:ml-[30px] md:mr-[20px]">
                            Fiesta Patronal: <b className="md:font-medium">8 y 29 de septiembre</b>
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-beige px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto md:px-20">
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Al visitar esta iglesia inmediatamente llaman la atención su{' '}
                        <b>bello antejardín y el cementerio tradicional</b> que la acompañan.
                        Destacan también el vistoso color celeste utilizado tanto en la fachada como
                        en los nichos que albergan a los santos; y las columnas interiores pintadas
                        imitando el mármol.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        <b>
                            Tras la última restauración se dejó a la vista el “esqueleto” de la
                            iglesia,
                        </b>
                        lo que permite al visitante recorrer el entretecho para apreciar la parte
                        exterior de la bóveda y el uso de ensambles y tarugos de madera.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Se cuenta que la <b>figura de San Miguel pisando a Lucifer</b> fue
                        confeccionada por un artesano local a partir de un madero recogido del
                        bosque.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La Virgen de Gracia vela por sus fieles desde el nicho central, vestida de
                        prendas rosadas que le renuevan cada año familias que se ofrecen para
                        cuidarla. Otra imagen más pequeña de la patrona fue encontrada por un
                        lugareño en 1.730, al lado de la actual iglesia, donde anteriormente se
                        ubicaba la capilla.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        <b>
                            Se expone en su interior una lancha chilota y cuelgan del techo pequeñas
                            embarcaciones.
                        </b>{' '}
                        Estas son ofrendas de fieles navegantes, para quienes antiguamente la
                        iglesia cumplía el rol de faro.
                    </p>
                </div>

                <UbicacionIglesia lng={lng} lat={lat} />

                <MoreAttraction pdfEsp={pdfEsp} pdfEng={pdfEng} />
            </section>

            <section className="md:pt-[100px] px-5 py-10 md:px-0">
                <div
                    className="container mx-auto flex items-center justify-center bg-cover bg-center bg-no-repeat align-middle md:h-[720px] h-[360px]"
                    style={{ backgroundImage: "url('/iglesias/nercon/nercon-02.webp')" }}
                >
                    <Link href="/recorridos/iglesia-nercon/index.html" target={'_blank'}>
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
                    <GalleryChurch slides={NerconPhotoGallery} rowHeight={200} />
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
