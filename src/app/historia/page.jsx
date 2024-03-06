import VideoHistoria from '@/components/VideoHistoria';
import HistoriaGallery from '@/components/HistoriaGaleria';
import Image from 'next/image';
import Link from 'next/link';
export const metadata = {
    title: 'PTI | La Historia',
};
export default function LaHistoria() {
    return (
        <main>
            <section className="relative md:h-screen">
                <Image
                    src="/historia/historia-01.webp"
                    alt="LA HISTORIA"
                    fill={true}
                    priority={true} // Prioritize the image for faster loading
                    quality={100} // Maintain image quality
                    className="object-cover object-top"
                />
                <div className="container mx-auto flex items-center justify-center md:h-screen">
                    <h1 className="z-10 font-semibold text-blanco md:text-[40px]">LA HISTORIA</h1>
                </div>
            </section>

            <section className="md:py-[100px]">
                <div className="container mx-auto flex items-center justify-center align-middle">
                    <VideoHistoria />
                </div>
            </section>
            <section className="bg-beige md:py-[100px]">
                <div className="container mx-auto flex justify-center md:mb-[70px]">
                    <h1 className="font-semibold text-tinto xl:text-[48px]">TESTIGOS DEL PASADO</h1>
                </div>
                <div className="container mx-auto flex flex-col md:px-20">
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Las iglesias de Chiloé son el resultado de un sincretismo cultural único,
                        que se produce del rico intercambio entre españoles y pueblos originarios.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Este sincretismo tiene sus raíces en un proceso histórico llamado{' '}
                        <b>Misión circular</b>, que se desarrolló durante la Colonia, entre los
                        siglos XVII y XVIII, y que fue implementado primero por los jesuitas y luego
                        por los franciscanos para la evangelización del archipiélago.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Esta misión consistía en un{' '}
                        <b>recorrido anual por parte de los sacerdotes</b>, que partían desde la
                        ciudad de Castro cuando el clima era propicio. Navegaban en dalcas de madera
                        enfrentando las duras condiciones climáticas de la región. Durante estas
                        visitas,{' '}
                        <b>
                            los misioneros organizaban a las comunidades indígenas alrededor de una
                            iglesia central
                        </b>
                        , que se convertía en el punto focal de la vida religiosa, social y
                        cultural.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Estas iglesias se erigían en sitios costeros que ya tenían una importancia
                        ritual y social para los pueblos originarios, tanto canoeros como
                        huilliches. Dado que las visitas de los misioneros eran esporádicas, una vez
                        que se establecían comunidades de creyentes en los distintos sectores,{' '}
                        <b>
                            se designaba a personas locales para cuidar las iglesias y prestar
                            servicios religiosos básicos
                        </b>
                        . Así nacieron los patrones de iglesia y los fiscales, que perduran hasta
                        hoy.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Ya en el período Republicano, durante los siglos XIX y principios del XX, se
                        continuó con la construcción de estos templos, siguiendo el mismo modelo
                        arquitectónico.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Las iglesias que se pueden visitar en la actualidad son generalmente
                        construcciones posteriores a las originales. Las primeras capillas, así como
                        muchas de las que les sucedieron, sufrieron la destrucción causada por
                        incendios o por las adversidades del clima.
                    </p>
                </div>
            </section>
            <section className="md:py-[100px] md:mb-[100px] md:h-auto">
                <div className="container mx-auto">
                    <HistoriaGallery />

                    <Link href="/#historia" alt="PAGINA DE INICIO">
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
