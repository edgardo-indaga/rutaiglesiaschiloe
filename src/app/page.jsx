import Image from 'next/image';
import CarouselHome from '@/components/Carousel';
import YoutubeVideo from '@/components/Youtube';
import HotSpotsMapa from '@/components/HotSpotsMapa';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <section className="md:h-auto">
                <div className="container">
                    <CarouselHome />
                    <h1 className="font-barlow uppercase text-tinto md:text-[40px] md:font-semibold md:leading-[57px] absolute md:top-[50%] md:left-[52.9%] z-20">
                        REFLEJOS DE UNA FORMA DE VIDA
                    </h1>
                </div>
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto flex justify-center items-center align-middle">
                    <YoutubeVideo />
                </div>
            </section>
            <section className="md:h-[900px] bg-beige md:py-[100px]" id="patrimonio">
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
                    <div className="md:w-7/12 md:pt-[170px] md:leading-[57px] ">
                        <h1 className="text-tinto md:text-[40px] font-semibold md:mb-[20px]">
                            PATRIMONIO DE LA HUMANIDAD
                        </h1>
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px]">
                            16 iglesias del archipiélago conforman el Sitio de Patrimonio Mundial,
                            declarado por la UNESCO.
                        </p>
                        <Link href="/patrimonio" alt="PATRIMONIO DE LA HUMANIDAD">
                            <Image
                                src="/btn-mas.svg"
                                alt="ir"
                                width={240}
                                height={60}
                                quality={100}
                                className="md:mt-[60px] md:w-[180px] hover:scale-[1.1] transition-all ease-cubic-bezier"
                            />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto">
                    <HotSpotsMapa />
                </div>
            </section>
            <section className="md:h-[900px] bg-beige" id="historia">
                <div className="container mx-auto flex">
                    <div className="md:w-7/12">
                        <h1 className="text-tinto md:text-[40px] font-semibold md:mb-[20px] md:mt-[-120px]">
                            LA HISTORIA
                        </h1>
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px]">
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
                                className="md:mt-[60px] md:w-[180px] hover:scale-[1.1] transition-all ease-cubic-bezier"
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
                className="bg-cover bg-no-repeat bg-center md:h-screen"
                style={{ backgroundImage: "url('./home-03.webp')" }}
            >
                <div className="container mx-auto">
                    <h1 className="font-barlow uppercase text-tinto md:text-[40px] md:font-semibold md:leading-[57px] md:pt-[270px] md:pl-[300px]">
                        TESTIGOS DEL PASADO
                    </h1>
                </div>
            </section>
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
                    <div className="md:w-7/12 md:pt-[170px] md:leading-[57px]">
                        <h1 className="text-tinto md:text-[40px] font-semibold md:mb-[20px]">
                            LA ARQUITECTURA
                        </h1>
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px]">
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
                                className="md:mt-[60px] md:w-[180px] hover:scale-[1.1] transition-all ease-cubic-bezier"
                            />
                        </Link>
                    </div>
                </div>
            </section>
            <section className="md:h-[900px] bg-beige md:py-[100px]">
                <div className="container mx-auto flex">
                    <div className="md:w-7/12 md:pt-[170px] md:leading-[57px]">
                        <h1 className="text-tinto md:text-[40px] font-semibold md:mb-[20px]">
                            LAS COMUNIDADES
                        </h1>
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px]">
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
                                className="md:mt-[60px] md:w-[180px] hover:scale-[1.1] transition-all ease-cubic-bezier"
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
                            className="md:mt-[-70px] md:h-[850px] md:w-auto"
                        />
                    </div>
                </div>
            </section>
            <section
                className="bg-cover bg-no-repeat bg-center md:h-screen"
                style={{ backgroundImage: "url('./home-06.webp')" }}
            >
                <div className="container mx-auto flex justify-end items-center md:h-screen">
                    <div className="md:w-6/12 md:leading-[57px]">
                        <h1 className="text-blanco md:text-[40px] font-semibold md:mb-[20px]">
                            PROTOCOLO DE VISITA
                        </h1>
                        <p className="text-blanco md:text-[26px] font-thin md:leading-[34px]">
                            Las iglesias de Chiloé no son museos, sino lugares de culto donde se
                            debe mantener una siempre actitud de respeto.
                        </p>
                        <Link href="/protocolo.pdf" target="_blank" alt="PROTOCOLO DE VISITA">
                            <Image
                                src="/btn-mas-wh.svg"
                                alt="ir"
                                width={240}
                                height={60}
                                quality={100}
                                className="md:mt-[60px] md:w-[180px] hover:scale-[1.1] transition-all ease-cubic-bezier"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
