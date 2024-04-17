import Image from 'next/image';
import Link from 'next/link';
import CaguachGallery from '@/components/CaguachGaleria';
import UbicacionIglesia from '@/components/UbicacionIglesia';
import MoreAttraction from '@/components/MoreAttraction';
export const metadata = {
    title: 'PTI | Iglesia Jesús Nazareno de Caguach',
};

export default function IglesiaCaguach() {
    const lng = -73.2659598; // longitud del centro del mapa
    const lat = -42.5101368; // latitud del centro del mapa
    const pdfEsp = '/uploads/caguach-es.pdf';
    const pdfEng = '/uploads/caguach-en.pdf';
    return (
        <main>
            <section className="relative h-[680px] md:h-screen">
                <Image
                    src="/iglesias/caguach/caguach-01.webp"
                    alt="Iglesia Jesús Nazareno de Caguach"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>

            <section className="px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto flex justify-center">
                    <h1 className="font-semibold text-tinto md:text-[40px] text-[30px] text-center leading-[38px] md:leading-[48px] uppercase">
                        Iglesia Jesús Nazareno de Caguach
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
                            Construcción: <b className="md:font-medium">1919</b>
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
                            Patrono: <b className="md:font-medium">Jesús Nazareno</b>
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
                        <p className="font-thin text-tinto text-[18px] md:text-center md:w-[300px] md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Fiesta Patronal: <b className="md:font-medium">30 de agosto</b>
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-beige px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto md:px-20">
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        De entre las iglesias que conforman el Sitio de Patrimonio Mundial, la de
                        Caguach{' '}
                        <b>
                            es la más alejada de la isla grande y, por lo tanto, la de más difícil
                            acceso.
                        </b>{' '}
                        Sin embargo, es también{' '}
                        <b>lugar de la celebración religiosa más importante de todo Chiloé.</b> Cada
                        30 de agosto se celebra a Jesús Nazareno, movilizando a miles de fieles que
                        llegan desde todo el archipiélago.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        <b>
                            La imagen de Jesús Nazareno de Caguach, con su pelo natural y capa
                            morada, es la más venerada e imitada.
                        </b>{' '}
                        Según la leyenda, a fines del siglo XVIII, los habitantes de las islas de
                        Caguach, Alao, Apiao, Tac y Chaulinec vivían en conflicto constante. Con el
                        fin de unir a estos pueblos, el sacerdote franciscano Hilario Martínez les
                        llevó la imagen del Nazareno que estaba en Tenaún, con la idea de que
                        organizaran una fiesta en conjunto. Sin embargo, al no llegar a un acuerdo
                        sobre qué isla debía quedarse con la imagen,{' '}
                        <b>
                            se decidió realizar una competencia de embarcaciones a remo. Los remeros
                            de Caguach resultaron ganadores, por lo que la imagen quedó bajo su
                            resguardo.
                        </b>
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        En 1.919 un incendio destruyó la capilla de Caguach, sin embargo, la imagen
                        del Nazareno salió ilesa y la comunidad inició inmediatamente los trabajos
                        para levantar el nuevo templo. Desde hace algunos años, la fiesta del
                        Nazareno se celebra también el tercer domingo de enero, lo que permite que
                        más personas puedan rendirle homenaje a la imagen más popular del
                        archipiélago.
                    </p>
                </div>

                <UbicacionIglesia lng={lng} lat={lat} />

                <MoreAttraction pdfEsp={pdfEsp} pdfEng={pdfEng} />
            </section>

            <section className="md:pt-[100px] px-5 py-10 md:px-0">
                <div
                    className="container mx-auto flex items-center justify-center bg-cover bg-center bg-no-repeat align-middle md:h-[720px] h-[360px]"
                    style={{ backgroundImage: "url('/iglesias/caguach/caguach-02.webp')" }}
                >
                    <Link href="/recorridos/iglesia-caguach/index.html" target={'_blank'}>
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
                    <CaguachGallery />
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
