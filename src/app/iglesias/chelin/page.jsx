import Image from 'next/image';
import Link from 'next/link';
import ChelinGallery from '@/components/ChelinGaleria';
export const metadata = {
    title: 'PTI | Iglesia Nuestra Señora del Rosario de Chelín ',
};

export default function IglesiaColo() {
    return (
        <main>
            <section className="md:h-screen relative">
                <Image
                    src="/iglesias/chelin/chelin-01.webp"
                    alt="Iglesia Nuestra Señora del Rosario de Chelín "
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto">
                    <h1 className="text-tinto md:text-[30px] font-semibold uppercase">
                        Iglesia Nuestra Señora del Rosario de Chelín
                    </h1>
                </div>
                <div className="container mx-auto flex md:mt-[70px]">
                    <div className="md:w-4/12 flex flex-row items-center">
                        <Image src="/iglesias/icono-01.svg" alt="Icono 01" width={77} height={56} />
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Construcción: <b className="md:font-medium">1888</b>
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
                            Patrono: <b className="md:font-medium">Nuestra Señora del Rosario</b>
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
                            Fiesta Patronal:{' '}
                            <b className="md:font-medium">30 de agosto (Jesús Nazareno)</b>
                        </p>
                    </div>
                </div>
                <div className="container mx-auto md:mt-[70px]">
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        La iglesia de Chelín es una de las más apartadas del archipiélago, por lo
                        que no es de fácil acceso. Sobresale por su llamativa fachada, decorada con
                        seis columnas de estilo neoclásico y dos ventanas circulares.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        En su interior, se destaca de entre otras iglesias del archipiélago por su
                        predominante pintura blanca, que la dota de una luminosidad y pulcritud
                        notable. Al igual que en las iglesias de Nercón y Detif, la pintura de sus
                        columnas interiores imita el mármol.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Si bien su patrona oficial es Nuestra Señora del Rosario, la principal
                        fiesta que se celebra en la isla es en honor a Jesús Nazareno.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Por un sendero se llega a un cementerio tradicional, con tumbas en forma de
                        pequeñas casas chilotas, que sirven de residencia a las almas de los
                        difuntos. Más arriba por el mismo sendero, se encuentra la Gruta de la
                        Virgen del Carmen, desde la cual se puede disfrutar de una vista panorámica
                        de la iglesia y su explanada, la localidad de Chelín y, cruzando el canal,
                        la isla de Quehui.
                    </p>
                </div>
            </section>
            <section>
                <div
                    className="container mx-auto bg-cover bg-no-repeat bg-center md:h-screen flex justify-center align-middle items-center"
                    style={{ backgroundImage: "url('/iglesias/chelin/chelin-02.webp')" }}
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
                    <ChelinGallery />
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
