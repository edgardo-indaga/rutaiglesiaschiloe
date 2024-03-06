import VideoArquitectura from '@/components/VideoArquitectura';
import ArquitecturaGallery from '@/components/ArquitecturaGaleria';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'PTI | La Arquitectura',
};
export default function LaArquitectura() {
    return (
        <main>
            <section className="relative md:h-screen">
                <Image
                    src="/arquitectura/arquitectura-01.webp"
                    alt="Arquitectura"
                    fill={true}
                    priority={true} // Prioritize the image for faster loading
                    quality={100} // Maintain image quality
                    className="object-cover object-top"
                />
                <div className="container mx-auto flex items-center justify-center md:h-screen">
                    <h1 className="z-10 font-semibold text-blanco md:text-[40px]">
                        LA ARQUITECTURA
                    </h1>
                </div>
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto flex items-center justify-center align-middle">
                    <VideoArquitectura />
                </div>
            </section>
            <section className="bg-beige md:py-[100px]">
                <div className="container mx-auto flex justify-center md:mb-[70px]">
                    <h1 className="font-semibold text-tinto xl:text-[48px]">
                        LEGADO ARQUITECTÓNICO
                    </h1>
                </div>
                <div className="container mx-auto flex flex-col md:px-20">
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:pb-[40px]">
                        <b>
                            La carpintería tradicional chilota es fruto del profundo conocimiento
                            que los pueblos originarios, chonos y veliches, tenían de las
                            propiedades de las maderas nativas del archipiálago.{' '}
                        </b>
                        Estos saberes son el resultado de una necesidad de adaptarse al medio que
                        requirió de mucho ingenio.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:pb-[40px]">
                        Las iglesias de Chiloé son la expresión monumental de esta maestría y
                        creatividad. En ellas, cada madera nativa, ya fuera el ciprés, el coihue, el
                        alerce, el mañío, el laurel, la tepa, el canelo, o el arrayán, cumplía una
                        función particular.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:pb-[40px]">
                        Destaca en estas obras el{' '}
                        <b>
                            uso de técnicas constructivas tradicionales, como los ensambles,
                            empalmes y detalles ornamentales.
                        </b>
                        Debido a la escasez de metales en las islas, en la obra gruesa casi no se
                        utilizaban clavos de hierro, sino remaches de madera.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:pb-[40px]">
                        Las iglesias patrimoniales de Chiloé, representantes de la{' '}
                        <b>Escuela Chilota de Arquitectura Religiosa en Madera</b> responden a un
                        <b>modelo tipológico</b> muy distintivo, ya que tienen todas la misma
                        estructura básica:
                    </p>
                    <ul className="list-disc md:ml-[50px] md:pb-[40px]">
                        <li className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:py-[10px]">
                            Una fachada caracterizada por un pórtico y una torre-campanario, que
                            puede tener uno o dos tambores (o pisos).
                        </li>
                        <li className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:py-[10px]">
                            Un volumen horizontal con techo a dos aguas.
                        </li>
                        <li className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:py-[10px]">
                            Tres naves en su interior, la central con el techo habitualmente
                            abovedado.
                        </li>
                        <li className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:py-[10px]">
                            Una gran explanada frente a la edificación.
                        </li>
                    </ul>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px]">
                        Las 16 iglesias reconocidas como Patrimonio de la Humanidad son
                        <b>representativas de un conjunto mucho mayor de iglesias,</b> distribuidas
                        tanto en el archipiélago de Chiloé como en el Seno de Reloncaví.
                    </p>
                </div>
            </section>
            <section className="md:py-[100px] md:mb-[100px] md:h-auto">
                <div className="container mx-auto">
                    <ArquitecturaGallery />
                    <Link href="/#arquitectura" alt="PAGINA DE INICIO">
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
