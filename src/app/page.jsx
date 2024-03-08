import Image from 'next/image';
import CarouselHome from '@/components/Carousel';
import YoutubeVideo from '@/components/Youtube';
import HotSpotsMapa from '@/components/HotSpotsMapa';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <section className="h-screen">
                <CarouselHome />
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto flex items-center justify-center align-middle">
                    <YoutubeVideo />
                </div>
            </section>
            <section className="bg-beige md:h-[900px] md:py-[100px]" id="patrimonio">
                <div className="container mx-auto flex">
                    <div className="md:w-5/12">
                        <Image
                            src="/home-01.webp"
                            alt="PATRIMONIO DE LA HUMANIDAD"
                            width={1300}
                            height={1503}
                            quality={100}
                        />
                    </div>
                    <div className="md:pt-[170px] md:leading-[57px] md:w-7/12">
                        <h1 className="font-semibold text-tinto md:text-[40px] md:mb-[20px]">
                            PATRIMONIO DE LA HUMANIDAD
                        </h1>
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px]">
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
                                className="transition-all ease-cubic-bezier hover:scale-[1.1] md:mt-[60px] md:w-[180px]"
                            />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto flex justify-center md:mb-[70px]">
                    <h1 className="font-semibold text-tinto xl:text-[48px]">
                        16 IGLESIAS DEL SITIO DE PATRIMONIO MUNDIAL
                    </h1>
                </div>
                <div className="container mx-auto">
                    <HotSpotsMapa />
                </div>
            </section>
            <section className="bg-beige md:h-[900px]" id="historia">
                <div className="container mx-auto flex">
                    <div className="md:w-7/12">
                        <h1 className="font-semibold text-tinto md:text-[40px] md:mb-[20px] md:mt-[-120px]">
                            LA HISTORIA
                        </h1>
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px]">
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
                                className="transition-all ease-cubic-bezier hover:scale-[1.1] md:mt-[60px] md:w-[180px]"
                            />
                        </Link>
                    </div>
                    <div className="md:w-5/12">
                        <Image
                            src="/home-02.webp"
                            alt="La Historia"
                            width={1300}
                            height={1503}
                            quality={100}
                            className="md:mt-[-380px]"
                        />
                    </div>
                </div>
            </section>

            <section
                className="bg-cover bg-center bg-no-repeat md:h-screen"
                style={{ backgroundImage: "url('./home-07.webp')" }}
            ></section>

            <section className="md:h-[900px] md:py-[100px]" id="arquitectura">
                <div className="container mx-auto flex">
                    <div className="md:w-5/12">
                        <Image
                            src="/home-04.webp"
                            alt="La Historia"
                            width={1300}
                            height={1462}
                            quality={100}
                        />
                    </div>
                    <div className="md:pt-[170px] md:leading-[57px] md:w-7/12">
                        <h1 className="font-semibold text-tinto md:text-[40px] md:mb-[20px]">
                            LA ARQUITECTURA
                        </h1>
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px]">
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
                                className="transition-all ease-cubic-bezier hover:scale-[1.1] md:mt-[60px] md:w-[180px]"
                            />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="bg-beige md:h-[900px] md:py-[100px]" id="comunidades">
                <div className="container mx-auto flex">
                    <div className="md:pt-[170px] md:leading-[57px] md:w-7/12">
                        <h1 className="font-semibold text-tinto md:text-[40px] md:mb-[20px]">
                            LAS COMUNIDADES
                        </h1>
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px]">
                            Son las propias comunidades las que mantienen vivas a las iglesias y
                            están a cargo su cuidado y mantención.
                        </p>
                        <Link href="/comunidades" alt="LAS COMUNIDADES">
                            <Image
                                src="/btn-mas.svg"
                                alt="ir"
                                width={240}
                                height={60}
                                quality={100}
                                className="transition-all ease-cubic-bezier hover:scale-[1.1] md:mt-[60px] md:w-[180px]"
                            />
                        </Link>
                    </div>
                    <div className="md:w-5/12">
                        <Image
                            src="/home-05.webp"
                            alt="La Historia"
                            width={1300}
                            height={1895}
                            quality={100}
                            className="md:mt-[-70px] md:h-[800px] md:w-auto"
                        />
                    </div>
                </div>
            </section>

            <section
                className="bg-cover bg-center bg-no-repeat md:h-screen"
                style={{ backgroundImage: "url('./home-06.webp')" }}
            >
                <div className="container mx-auto flex items-center justify-end md:h-screen">
                    <div className="md:leading-[57px] md:w-6/12">
                        <h1 className="font-semibold text-blanco md:text-[40px] md:mb-[20px]">
                            PROTOCOLO DE VISITA
                        </h1>
                        <p className="font-thin text-blanco md:text-[26px] md:leading-[34px] md:w-[460px]">
                            Las iglesias de Chiloé no son museos, sino lugares de culto donde se
                            debe mantener siempre una siempre actitud de respeto.
                        </p>
                        <Link href="/protocolo" target="_blank" alt="PROTOCOLO DE VISITA">
                            <Image
                                src="/btn-mas-wh.svg"
                                alt="ir"
                                width={240}
                                height={60}
                                quality={100}
                                className="transition-all ease-cubic-bezier hover:scale-[1.1] md:mt-[60px] md:w-[180px]"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
