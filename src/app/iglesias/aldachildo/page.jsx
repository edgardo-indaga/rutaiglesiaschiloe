import Image from 'next/image';
import Link from 'next/link';
import AldachildoGallery from '@/components/AldachildoGaleria';

export const metadata = {
    title: 'PTI | Iglesia Jesús Nazareno de Aldachildo',
};

export default function IglesiaAldachildo() {
    return (
        <main>
            <section className="relative md:h-screen">
                <Image
                    src="/iglesias/aldachildo/aldachildo-01.webp"
                    alt="Iglesia Nuestra Señora de los Dolores de DALCAHUE"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>

            <section className="md:py-[100px]">
                <div className="container mx-auto flex justify-center">
                    <h1 className="font-semibold text-tinto xl:text-[48px] uppercase">
                        Iglesia Jesús Nazareno de Aldachildo
                    </h1>
                </div>
                <div className="container mx-auto flex md:pt-[70px]">
                    <div className="md:w-4/12 flex flex-col items-center">
                        <Image
                            src="/iglesias/icono-01.svg"
                            alt="Icono 01"
                            width={77}
                            height={56}
                            className="md:h-[90px] md:w-auto md:mb-[20px]"
                        />
                        <p className="font-thin text-tinto text-center md:w-[300px] md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Construcción: <b className="md:font-medium">1905</b>
                        </p>
                    </div>
                    <div className="md:w-4/12 flex flex-col items-center">
                        <Image
                            src="/iglesias/icono-02.svg"
                            alt="Icono 01"
                            width={43}
                            height={117}
                            className="md:h-[90px] md:w-auto md:mb-[20px]"
                        />
                        <p className="font-thin text-tinto text-center md:w-[300px] md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Patrono: <b className="md:font-medium">Jesús Nazareno</b>
                        </p>
                    </div>
                    <div className="md:w-4/12 flex flex-col items-center">
                        <Image
                            src="/iglesias/icono-03.svg"
                            alt="Icono 01"
                            width={107}
                            height={143}
                            className="md:h-[90px] md:w-auto md:mb-[20px]"
                        />
                        <p className="font-thin text-tinto text-center md:w-[300px] md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Fiesta Patronal: <b className="md:font-medium">31 de agosto</b>
                        </p>
                    </div>
                </div>
            </section>

            <section className="md:py-[100px] bg-beige">
                <div className="container mx-auto md:px-20">
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La comunidad cuenta que la{' '}
                        <b>
                            iglesia de Aldachildo se &apos;salvó de milagro&quot; en 1995, cuando
                            estuvo a punto de ser demolida
                        </b>{' '}
                        debido a su paupérrimo estado de conservación. Se dice que esto estuvo tan
                        cerca de ocurrir, que varias personas locales ya habían donado papas y
                        recursos para financiar las obras de construcción de una nueva iglesia.
                        Afortunadamente,{' '}
                        <b>tras ser declarada Monumento Nacional, pudo ser restaurada.</b>
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Al igual que la iglesia de Vilupulli,{' '}
                        <b>llama la atención su estilizada torre.</b>
                        En el interior destaca su bóveda central, que luce estrellas pintadas con
                        productos naturales de la zona, al igual que las{' '}
                        <b>flores rojas y amarillas que adornan los arcos entre los pilares.</b>
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Hoy, la comunidad se mantiene organizada para la celebración de las fiestas
                        patronales. La fiesta de Jesús Nazareno está a cargo de la Sociedad de Jesús
                        Nazareno, de la que participan alrededor de 30 personas; mientras que la
                        fiesta de la Virgen Purísima, el 8 de diciembre, es organizada por la
                        Congregación Hijas de María, una agrupación compuesta exclusivamente por
                        mujeres.
                    </p>
                </div>
                <div className="container mx-auto flex justify-center">
                    <Link href="#" alt="Volver a paginas Iglesias">
                        <Image
                            src="/btn-atractivos.svg"
                            alt="ir"
                            width={570}
                            height={64}
                            className="transition-all ease-cubic-bezier float-end hover:scale-[1.1] md:mt-[60px] md:w-[430px] md:mr-[50px]"
                        />
                    </Link>
                </div>
            </section>

            <section className="md:pt-[100px]">
                <div
                    className="container mx-auto flex items-center justify-center bg-cover bg-center bg-no-repeat align-middle md:h-[720px]"
                    style={{ backgroundImage: "url('/iglesias/aldachildo/aldachildo-02.webp')" }}
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
                    <AldachildoGallery />
                </div>
                <div className="container mx-auto flex justify-end">
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
