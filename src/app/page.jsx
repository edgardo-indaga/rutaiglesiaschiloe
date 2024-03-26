import Image from 'next/image';
import CarouselHome from '@/components/Carousel';
import CarouselMobile from '@/components/CarouselMobile';
import YoutubeVideo from '@/components/Youtube';
import HotSpotsMapa from '@/components/HotSpotsMapa';
import Link from 'next/link';
import { Dosis } from 'next/font/google';

const dosis = Dosis({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    style: ['normal'],
});

export default function Inicio() {
    return (
        <main>
            <section className="hidden h-screen md:block">
                <CarouselHome />
            </section>

            <section className="block h-[680px] md:hidden">
                <CarouselMobile />
                <h1
                    className={`text-slider absolute z-20 top-[300px] text-blanco text-left text-[28px] leading-[38px] font-[600] px-[40px] ${dosis.className}`}
                >
                    RUTA DE LAS <br />
                    IGLESIAS DE CHILOÉ
                </h1>
            </section>

            <section className="py-10 md:py-[100px]">
                <div className="container mx-auto flex items-center justify-center align-middle">
                    <YoutubeVideo />
                </div>
            </section>

            <section
                className="px-5 py-10 bg-beige md:h-[900px] md:py-[100px] md:px-0"
                id="patrimonio"
            >
                <div className="container mx-auto flex flex-col md:flex-row">
                    <div className="order-2 flex justify-center md:order-1 md:w-5/12">
                        <Image
                            src="/home-01.webp"
                            alt="PATRIMONIO DE LA HUMANIDAD"
                            width={1300}
                            height={1503}
                            quality={100}
                            className="w-[280px] md:w-full"
                        />
                    </div>
                    <div className="order-1 md:pt-[170px] md:leading-[57px] md:order-2 md:w-7/12">
                        <h1 className="font-semibold text-tinto text-[24px] mb-[20px] md:text-[40px] md:mb-[20px]">
                            PATRIMONIO DE LA HUMANIDAD
                        </h1>
                        <p className="font-thin text-tinto text-[18px] mb-[20px] md:text-[26px] md:leading-[34px]">
                            16 iglesias del archipiélago conforman el Sitio de Patrimonio Mundial,
                            declarado por la UNESCO en el año 2000.
                        </p>
                        <Link href="/patrimonio" alt="PATRIMONIO DE LA HUMANIDAD">
                            <Image
                                src="/btn-mas.svg"
                                alt="ir"
                                width={240}
                                height={60}
                                quality={100}
                                className="hidden transition-all ease-cubic-bezier w-[130px] hover:scale-[1.1] md:mt-[60px] md:w-[180px] xl:flex"
                            />
                        </Link>
                        <div className="flex justify-center md:justify-start xl:hidden">
                            <Link
                                href="/iglesias"
                                className="font-light bg-morado text-blanco text-[16px] leading-[16px] my-[30px] py-[12px] px-[20px]"
                            >
                                Conoce más
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-[70px] md:py-[100px]">
                <div className="container mx-auto flex justify-center md:mb-[70px]">
                    <h1 className="text-center font-semibold text-tinto text-[24px] leading-[32px] xl:text-[48px]">
                        16 IGLESIAS DEL SITIO DE PATRIMONIO MUNDIAL
                    </h1>
                </div>
                <div className="container mx-auto hidden md:block">
                    <HotSpotsMapa />
                </div>
                <div className="container mx-auto flex flex-col items-center pt-10 md:hidden">
                    <Image
                        src="/mapa/mapa-con-iglesias.webp"
                        alt="Mapa con Iglesias"
                        width={1330}
                        height={1260}
                        quality={100}
                    />
                    <Link
                        href="/iglesias"
                        className="font-light bg-morado text-blanco text-[16px] leading-[16px] mt-[50px] py-[10px] px-[20px]"
                    >
                        Conoce más
                    </Link>
                </div>
            </section>

            <section className="bg-beige md:h-[900px] py-[50px] md:py-0 px-5 md:px-0" id="historia">
                <div className="container mx-auto flex flex-col md:flex-row">
                    <div className="md:w-7/12">
                        <h1 className="text-center font-semibold text-tinto text-[24px] leading-[32px] md:text-[40px] md:mb-[20px] md:mt-[-120px] md:text-left md:leading-normal mb-[20px]">
                            LA HISTORIA
                        </h1>
                        <p className="font-thin text-tinto text-[18px] mb-[20px] md:text-[26px] md:leading-[34px]">
                            Las iglesias de Chiloé son el resultado de un sincretismo cultural
                            único, que se produce del rico intercambio entre españoles y pueblos
                            originarios.
                        </p>
                        <Link href="/historia" alt="PATRIMONIO DE LA HUMANIDAD">
                            <Image
                                src="/btn-mas.svg"
                                alt="ir"
                                width={240}
                                height={60}
                                quality={100}
                                className="transition-all ease-cubic-bezier hover:scale-[1.1] md:mt-[60px] md:w-[180px] md:flex hidden"
                            />
                        </Link>
                        <div className="flex justify-center md:justify-start xl:hidden">
                            <Link
                                href="/historia"
                                className="font-light bg-morado text-blanco text-[16px] leading-[16px] my-[30px] py-[12px] px-[20px]"
                            >
                                Conoce más
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-5/12 flex justify-center">
                        <Image
                            src="/home-02.webp"
                            alt="La Historia"
                            width={1300}
                            height={1503}
                            quality={100}
                            className="md:mt-[-300px] w-[260px] md:w-full"
                        />
                    </div>
                </div>
            </section>

            <section
                className="bg-cover bg-center bg-no-repeat md:h-screen hidden md:flex"
                style={{ backgroundImage: "url('./home-07.webp')" }}
            ></section>

            <section className="md:h-[900px] md:py-[100px] px-5 py-10 md:px-0" id="arquitectura">
                <div className="container mx-auto flex md:flex-row flex-col">
                    <div className="md:w-5/12 order-2 md:order-1 flex justify-center">
                        <Image
                            src="/home-04.webp"
                            alt="La Historia"
                            width={1300}
                            height={1462}
                            quality={100}
                            className="w-[280px] md:w-full"
                        />
                    </div>
                    <div className="md:pt-[170px] md:leading-[57px] md:w-7/12 order-1 md:order-2">
                        <h1 className="font-semibold text-tinto text-[24px] mb-[20px] md:text-[40px] md:mb-[20px] text-center md:text-left">
                            LA ARQUITECTURA
                        </h1>
                        <p className="font-thin text-tinto text-[18px] mb-[20px] md:text-[26px] md:leading-[34px]">
                            Las iglesias de Chiloé son la expresión monumental de la maestría y
                            creatividad de la carpintería chilota.
                        </p>
                        <Link href="/arquitectura" alt="LA ARQUITECTURA">
                            <Image
                                src="/btn-mas.svg"
                                alt="ir"
                                width={240}
                                height={60}
                                quality={100}
                                className="hidden transition-all ease-cubic-bezier w-[130px] hover:scale-[1.1] md:mt-[60px] md:w-[180px] xl:flex"
                            />
                        </Link>
                        <div className="flex justify-center md:justify-start xl:hidden">
                            <Link
                                href="/arquitectura"
                                className="font-light bg-morado text-blanco text-[16px] leading-[16px] my-[30px] py-[12px] px-[20px]"
                            >
                                Conoce más
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="bg-beige md:h-[900px] py-[50px] md:py-[100px] px-5 md:px-0"
                id="comunidades"
            >
                <div className="container mx-auto flex md:flex-row flex-col">
                    <div className="md:pt-[170px] md:leading-[57px] md:w-7/12 flex flex-col justify-center">
                        <h1 className="text-center font-semibold text-tinto text-[24px] leading-[32px] md:text-[40px] md:mb-[20px] md:mt-[-120px] md:text-left md:leading-normal mb-[20px]">
                            LAS COMUNIDADES
                        </h1>
                        <p className="font-thin text-tinto text-[18px] mb-[20px] md:text-[26px] md:leading-[34px]">
                            Son las propias comunidades las que mantienen vivas a las iglesias y
                            están a cargo de su cuidado y mantención.
                        </p>
                        <Link href="/comunidades" alt="LAS COMUNIDADES">
                            <Image
                                src="/btn-mas.svg"
                                alt="ir"
                                width={240}
                                height={60}
                                quality={100}
                                className="transition-all ease-cubic-bezier hover:scale-[1.1] md:mt-[60px] md:w-[180px] md:flex hidden"
                            />
                        </Link>
                        <div className="flex justify-center md:justify-start xl:hidden">
                            <Link
                                href="/comunidades"
                                className="font-light bg-morado text-blanco text-[16px] leading-[16px] my-[30px] py-[12px] px-[20px]"
                            >
                                Conoce más
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-5/12 flex justify-center">
                        <Image
                            src="/home-05.webp"
                            alt="La Historia"
                            width={1300}
                            height={1895}
                            quality={100}
                            className="md:mt-[-70px] md:h-[800px] md:w-auto w-[250px]"
                        />
                    </div>
                </div>
            </section>

            <section
                className="bg-cover bg-center bg-no-repeat md:h-screen hidden xl:block"
                style={{ backgroundImage: "url('./home-06.webp')" }}
            >
                <div className="container mx-auto flex items-center justify-end md:h-screen h-[500px] px-5 md:px-0">
                    <div className="md:leading-[57px] md:w-6/12">
                        <h1 className="text-center font-semibold text-blanco text-[24px] leading-[32px] md:text-[40px] md:mb-[20px] md:text-left md:leading-normal mb-[20px]">
                            PROTOCOLO DE VISITA
                        </h1>
                        <p className="font-thin text-blanco md:text-[26px] md:leading-[34px] md:w-[460px]  text-[18px] mb-[20px] ">
                            Las iglesias de Chiloé no son museos, sino lugares de culto donde se
                            debe mantener siempre una actitud de respeto.
                        </p>
                        <Link
                            href="/uploads/protocolo.pdf"
                            target="_blank"
                            alt="PROTOCOLO DE VISITA"
                        >
                            <Image
                                src="/btn-mas-wh.svg"
                                alt="ir"
                                width={240}
                                height={60}
                                quality={100}
                                className="transition-all ease-cubic-bezier hover:scale-[1.1] md:mt-[60px] md:w-[180px] md:flex hidden"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            <section
                className="md:hidden bg-cover bg-center bg-no-repeat px-5"
                style={{ backgroundImage: "url('./home-08.webp')" }}
            >
                <div className="container mx-auto flex flex-col justify-center h-[720px] pl-[80px]">
                    <h1 className="font-semibold text-blanco text-[24px] leading-[32px] mb-[30px]">
                        PROTOCOLO DE VISITA
                    </h1>
                    <p className="font-thin text-blanco text-[20px] mb-[30px] ">
                        Las iglesias de Chiloé no son museos, sino lugares de culto donde se debe
                        mantener siempre una actitud de respeto.
                    </p>
                    <div className="flex justify-start xl:hidden">
                        <Link
                            href="/uploads/protocolo.pdf"
                            className="font-light bg-morado text-blanco text-[16px] leading-[16px] py-[12px] px-[20px]"
                        >
                            Conoce más
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
