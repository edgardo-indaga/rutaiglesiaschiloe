import Image from 'next/image';
import Link from 'next/link';
import RilanGallery from '@/components/RilanGaleria';
export const metadata = {
    title: 'PTI | Iglesia Santa María de Rilan',
};
export default function IglesiaRilan() {
    return (
        <main>
            <section className="relative h-[680px] md:h-screen">
                <Image
                    src="/iglesias/rilan/rilan-01.webp"
                    alt="Iglesia Santa María de Rilan"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>

            <section className="px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto flex justify-center">
                    <h1 className="font-semibold text-tinto md:text-[40px] text-[30px] text-center leading-[38px] md:leading-[48px] uppercase">
                        Iglesia Santa María de Rilán
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
                            Construcción: <b className="md:font-medium">1908</b>
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
                            Patrono: <b className="md:font-medium">Nuestra Señora de Lourdes</b>
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
                            Fiesta Patronal: <b className="md:font-medium">11 de febrero</b>
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-beige px-5 py-10 md:py-[100px] md:px-0">
                <div className="container mx-auto md:px-20">
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La construcción de la iglesia de Rilán comenzó en 1.908 y tardó más de 10
                        años. Recién la 1.920 la comunidad logró finalizar el proyecto.{' '}
                        <b>
                            Las maderas para su construcción fueron llevadas desde Dalcahue en
                            yuntas de bueyes y balsas a remo.
                        </b>
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Combina diferentes estilos y está construida con diversas maderas nativas,
                        como tepa, ulmo, tineo y alerce. Destaca su{' '}
                        <b>
                            colorida bóveda de crucerías, característica de la arquitectura gótica.
                        </b>{' '}
                        Estas bóvedas se construyen mediante la intersección de dos o más arcos que
                        se cruzan y se entrelazan en el techo, creando una estructura compleja y muy
                        decorativa.
                    </p>
                    <p className="font-thin text-tinto text-[18px] mb-[20px] leading-normal md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Junto a la Virgen de Lourdes, además de la bandera chilena{' '}
                        <b>
                            se expone una bandera huilliche, en reconocimiento de este pueblo
                            originario
                        </b>{' '}
                        que fue clave en la construcción de las iglesias chilotas y que influyó
                        fuertemente en los ritos y tradiciones que se desarrollan en torno a ellas.
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
                    style={{ backgroundImage: "url('/iglesias/rilan/rilan-02.webp')" }}
                >
                    <Link href="/recorridos/iglesia-rilan/index.html" target={'_blank'}>
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
                    <RilanGallery />
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
