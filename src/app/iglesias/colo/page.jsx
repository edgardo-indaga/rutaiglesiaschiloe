import Image from 'next/image';
import Link from 'next/link';
import ColoGallery from '@/components/ColoGaleria';

export const metadata = {
    title: 'PTI | Iglesia San Antonio de Colo ',
};

export default function IglesiaColo() {
    return (
        <main>
            <section className="md:h-screen relative">
                <Image
                    src="/iglesias/colo/colo-01.webp"
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
                        Iglesia San Antonio de Colo
                    </h1>
                </div>
                <div className="container mx-auto flex md:mt-[70px]">
                    <div className="md:w-4/12 flex flex-row items-center">
                        <Image src="/iglesias/icono-01.svg" alt="Icono 01" width={77} height={56} />
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Construcción: <b className="md:font-medium">1890</b>
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
                            Patrono: <b className="md:font-medium">San Antonio</b>
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
                            Fiesta Patronal: <b className="md:font-medium">13 de junio</b>
                        </p>
                    </div>
                </div>
                <div className="container mx-auto md:mt-[70px]">
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        De entre las iglesias que forman parte del Sitio de Patrimonio Mundial, la
                        de Colo es una de las más pequeñas, rústicas y acogedoras. Es una versión de
                        menor tamaño de la iglesia de Quicaví, que al ser restaurada por la
                        comunidad, perdió uno de los pisos de su torre. Si bien muchas de las
                        iglesias están construidas sobre rocas, en la de Colo esto se puede
                        evidenciar fácilmente.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Al tratarse de una localidad principalmente rural, la iglesia de Colo se
                        alza solitaria, con sólo un par de casas al frente y dándole la espalda al
                        estuario del río del mismo nombre. Un sendero desciende por el acantilado
                        hasta una cueva natural en medio del bosque, que se dice fue lugar de
                        reunión de brujos. Junto a la iglesia destaca un hermoso cementerio.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        El sacerdote Mariano Puga, conocido como el “cura obrero” y recordado en
                        todo Chile por su compromiso con los derechos humanos durante la dictadura
                        militar, fue párroco de la iglesia de Colo y vivió durante 12 años con una
                        familia del lugar. Sus misas eran muy populares y convocaban a personas de
                        todo el archipiélago Se le recuerda con mucho cariño por la comunidad local,
                        que lo veía recorrer las islas cercanas “mojado hasta los huesos” y tocando
                        el acordeón. Tras su muerte, sus cenizas fueron esparcidas en el lugar.
                    </p>
                </div>
            </section>
            <section>
                <div
                    className="container mx-auto bg-cover bg-no-repeat bg-center md:h-screen flex justify-center align-middle items-center"
                    style={{ backgroundImage: "url('/iglesias/colo/colo-02.webp')" }}
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
                    <ColoGallery />
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
