import Image from 'next/image';
import Link from 'next/link';
import ColoGallery from '@/components/ColoGaleria';

export const metadata = {
    title: 'PTI | Iglesia San Antonio de Colo ',
};

export default function IglesiaColo() {
    return (
        <main>
            <section className="relative h-[680px] md:h-screen">
                <Image
                    src="/iglesias/colo/colo-01.webp"
                    alt="Iglesia Nuestra Señora de los Dolores de DALCAHUE"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>

            <section className="px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto flex justify-center">
                    <h1 className="font-semibold text-tinto md:text-[40px] text-[30px] text-center leading-[38px] md:leading-[48px] uppercase">
                        Iglesia San Antonio de Colo
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
                            Construcción: <b className="md:font-medium">1890</b>
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
                            Patrono: <b className="md:font-medium">San Antonio</b>
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
                            Fiesta Patronal: <b className="md:font-medium">13 de junio</b>
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-beige px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto md:px-20">
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        De entre las iglesias que forman parte del Sitio de Patrimonio Mundial, la
                        de Colo es una de las más pequeñas, rústicas y acogedoras. Es una versión de
                        menor tamaño de la iglesia de Quicaví, que al ser restaurada por la
                        comunidad, perdió uno de los pisos de su torre.{' '}
                        <b>
                            Si bien muchas de las iglesias están construidas sobre rocas, en la de
                            Colo esto se puede evidenciar fácilmente.
                        </b>
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Al tratarse de una localidad principalmente rural, la iglesia de Colo se
                        alza solitaria, con sólo un par de casas al frente y dándole la espalda al
                        estuario del río del mismo nombre. Un sendero desciende por el acantilado
                        hasta una cueva natural en medio del bosque, que se dice fue lugar de
                        reunión de brujos. <b>Junto a la iglesia destaca un hermoso cementerio.</b>
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        El <b>sacerdote Mariano Puga</b>, conocido como el “cura obrero” y recordado
                        en todo Chile por su compromiso con los derechos humanos durante la
                        dictadura militar, fue párroco de la iglesia de Colo y{' '}
                        <b>vivió durante 12 años con una familia del lugar</b>. Sus misas eran muy
                        populares y convocaban a personas de todo el archipiélago Se le recuerda con
                        mucho cariño por la comunidad local, que lo veía recorrer las islas cercanas
                        “mojado hasta los huesos” y tocando el acordeón. Tras su muerte, sus cenizas
                        fueron esparcidas en el lugar.
                    </p>
                </div>
                <div className="container mx-auto flex justify-center">
                    <Link href="#" alt="Más Atractivos">
                        <Image
                            src="/btn-atractivos.svg"
                            alt="ir"
                            width={570}
                            height={64}
                            className="transition-all ease-cubic-bezier float-end hover:scale-[1.1] md:mt-[60px] md:w-[430px] md:mr-[50px] hidden xl:block"
                        />
                    </Link>
                </div>
                <div className="flex justify-center md:justify-start xl:hidden">
                    <Link
                        href="#"
                        className="font-light bg-morado text-blanco text-[16px] leading-[16px] my-[30px] py-[12px] px-[20px]"
                    >
                        Conoce más atractivos y servicios de la zona
                    </Link>
                </div>
            </section>

            <section className="md:pt-[100px] px-5 py-10 md:px-0">
                <div
                    className="container mx-auto flex items-center justify-center bg-cover bg-center bg-no-repeat align-middle md:h-[720px] h-[360px]"
                    style={{ backgroundImage: "url('/iglesias/colo/colo-02.webp')" }}
                >
                    <Link href="/recorridos/iglesia-colo/index.html" target={'_blank'}>
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
                    <ColoGallery />
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
