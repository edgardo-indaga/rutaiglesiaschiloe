import Image from 'next/image';
import Link from 'next/link';
import AchaoGallery from '@/components/AchaoGaleria';
export const metadata = {
    title: 'PTI | Iglesia Santa María de Loreto de Achao',
};

export default function IglesiaAchao() {
    return (
        <main>
            <section className="md:h-screen relative">
                <Image
                    src="/iglesias/achao/achao-01.webp"
                    alt="Iglesia Santa María de Loreto de Achao"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto">
                    <h1 className="text-tinto md:text-[30px] font-semibold uppercase">
                        Iglesia Santa María de Loreto de Achao
                    </h1>
                </div>
                <div className="container mx-auto flex md:mt-[70px]">
                    <div className="md:w-4/12 flex flex-row items-center">
                        <Image src="/iglesias/icono-01.svg" alt="Icono 01" width={77} height={56} />
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Construcción: <b className="md:font-medium">1730</b>
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
                            Patrono: <b className="md:font-medium">Santa María de Loreto</b>
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
                            Fiesta Patronal: <b className="md:font-medium">10 de diciembre</b>
                        </p>
                    </div>
                </div>
                <div className="container mx-auto md:mt-[70px]">
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        La iglesia de Achao es reconocida como la construcción de madera más antigua
                        de Chile y se distingue de las demás iglesias chilotas por su estilo
                        interior recargado, propio del barroco. Tanto su bóveda principal como sus
                        altares, nichos y púlpito están adornados con finos y coloridos tallados de
                        madera.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Llama la atención que la patrona de la iglesia de Achao sea María de Loreto,
                        ya que su imagen no está presente en ninguna otra iglesia del archipiélago.
                        Hasta hace poco, se desconocía su origen. Un estudio histórico reveló que
                        provenía del Lago Nahuelhuapi, en Argentina, donde se estableció una misión
                        jesuita para evangelizar al pueblo poya. El misionero Nicolás Mascardi
                        recibió una imagen mariana del virrey del Perú para el templo que se
                        construiría allí. Durante una revuelta, los indígenas dieron muerte a los
                        misioneros y escondieron la imagen de la mujer blanca que los misioneros
                        habían traído con ellos. En medio de la devastación, la imagen fue
                        encontrada y trasladada a Chiloé, donde se convirtió en la patrona de la
                        iglesia de Achao. En el Lago Nahuelhuapi, podemos encontrar una réplica
                        idéntica de la imagen de Nuestra Señora del Loreto, que fue entregada a la
                        comunidad de Bariloche en el año 2006.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Una de las fiestas más importantes se celebra el 1° de enero con una
                        procesión en la que se trasladan las imágenes de las vírgenes de las
                        capillas rurales de la isla de Quinchao hasta la parroquia de la ciudad de
                        Achao.
                    </p>
                </div>
            </section>
            <section>
                <div
                    className="container mx-auto bg-cover bg-no-repeat bg-center md:h-screen flex justify-center align-middle items-center"
                    style={{ backgroundImage: "url('/iglesias/achao/achao-02.webp')" }}
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
                    <AchaoGallery />
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
