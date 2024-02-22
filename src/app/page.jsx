import Image from 'next/image';
import CarouselHome from '@/components/Carousel';
import YoutubeVideo from '@/components/Youtube';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <section className="md:h-auto">
                <div className="container">
                    <CarouselHome />
                    <h1 className="font-barlow uppercase text-tinto md:text-[40px] md:font-semibold md:leading-[57px] absolute top-[50%] left-[60%] z-20">
                        REFLEJOS DE UNA FORMA DE VIDA
                    </h1>
                </div>
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto flex justify-center items-center align-middle">
                    <YoutubeVideo />
                </div>
            </section>
            <section className="md:h-[900px] bg-beige md:py-[100px]">
                <div className="container mx-auto flex">
                    <div className="md:w-5/12">
                        <Image
                            src="/home-01.webp"
                            alt="PATRIMONIO DE LA HUMANIDAD"
                            width={1300}
                            height={1503}
                        />
                    </div>
                    <div className="md:w-7/12 md:pt-[170px] md:leading-[57px] ">
                        <h1 className="text-tinto md:text-[40px] font-semibold md:mb-[20px]">
                            PATRIMONIO DE LA HUMANIDAD
                        </h1>
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px]">
                            16 iglesias del archipiélago conforman el Sitio de Patrimonio Mundial,
                            declarado por la UNESCO
                        </p>
                        <Link href="/patrimonio" alt="PATRIMONIO DE LA HUMANIDAD">
                            <Image
                                src="/btn-mas.svg"
                                alt="ir"
                                width={240}
                                height={60}
                                className="md:mt-[60px] md:w-[180px]"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
