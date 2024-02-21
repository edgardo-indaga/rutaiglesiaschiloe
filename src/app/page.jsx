import CarouselHome from '@/components/Carousel';
import YoutubeVideo from '@/components/Youtube';

export default function Home() {
    return (
        <main>
            <section className="h-[1000px] bg-beige">
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
        </main>
    );
}
