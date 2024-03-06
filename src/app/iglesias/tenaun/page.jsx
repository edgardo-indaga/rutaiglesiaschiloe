import Image from 'next/image';
import Link from 'next/link';
import TenaunGallery from '@/components/TenaunGaleria';
export const metadata = {
    title: 'PTI | Iglesia Nuestra Señora del Patrocinio de Tenaún',
};

export default function IglesiaTenaun() {
    return (
        <main>
            <section className="relative md:h-screen">
                <Image
                    src="/iglesias/tenaun/tenaun-01.webp"
                    alt="Iglesia Nuestra Señora del Patrocinio de Tenaún"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>
            <section className="md:py-[100px]">
                <div className="container mx-auto">
                    <h1 className="font-semibold uppercase text-tinto md:text-[30px]">
                        Iglesia Nuestra Señora del Patrocinio de Tenaún
                    </h1>
                </div>
                <div className="container mx-auto flex md:mt-[70px]">
                    <div className="flex flex-row items-center md:w-4/12">
                        <Image src="/iglesias/icono-01.svg" alt="Icono 01" width={77} height={56} />
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Construcción: <b className="md:font-medium">1842</b>
                        </p>
                    </div>
                    <div className="flex flex-row items-center md:w-4/12">
                        <Image
                            src="/iglesias/icono-02.svg"
                            alt="Icono 01"
                            width={43}
                            height={117}
                            className="md:h-[90px] md:w-auto"
                        />
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Patrono: <b className="md:font-medium">Nuestra Señora del Patrocinio</b>
                        </p>
                    </div>
                    <div className="flex flex-row items-center md:w-4/12">
                        <Image
                            src="/iglesias/icono-03.svg"
                            alt="Icono 01"
                            width={107}
                            height={143}
                            className="md:h-[100px] md:w-auto"
                        />
                        <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Fiesta Patronal: <b className="md:font-medium">30 de enero</b>
                        </p>
                    </div>
                </div>
                <div className="container mx-auto md:mt-[70px]">
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La iglesia de Tenaún, junto con la de Castro, se distingue por sus tres
                        torres, ya que la gran mayoría de las iglesias patrimoniales del
                        archipiélago cuentan con solo una. También llaman la atención su colorida
                        pintura exterior y las dos grandes estrellas azules que adornan su fachada.
                        Si bien según la información que se entrega en el lugar, la iglesia data de
                        1.877, un documento parroquial confirma que su construcción se inició en el
                        año 1.842.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        En su interior, la iglesia cuenta con un tradicional púlpito desde donde
                        antiguamente los sacerdotes predicaban sus sermones. Además, se exhiben
                        antiguos reclinatorios con diseños personalizados que pertenecían a los
                        fieles de la iglesia en el pasado.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Al interior de la iglesia se encuentran tres lápidas funerarias del siglo
                        XIX, que pertenecen a la familia Cheuqueman. Según se cuenta, se trata de
                        los donantes del terreno donde se ubica la actual iglesia, quienes descansan
                        enterrados bajo su estructura.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Si bien la patrona de la iglesia es Nuestra Señora del Patrocinio, se
                        celebra también a otros santos, como la Virgen de Lourdes, la Virgen del
                        Carmen, la Virgen del Tránsito, Jesús Nazareno, Nuestra Señora del Rosario,
                        San Pedro y la Virgen de Gracia. La imagen de esta última luce un bello
                        vestido de lana tejido a palillo por su antigua patrona.
                    </p>
                </div>
            </section>
            <section>
                <div
                    className="container mx-auto flex items-center justify-center bg-cover bg-center bg-no-repeat align-middle md:h-screen"
                    style={{ backgroundImage: "url('/iglesias/tenaun/tenaun-02.webp')" }}
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
                    <TenaunGallery />
                </div>
                <div className="container mx-auto flex justify-end">
                    <Link href="#" alt="Volver a paginas Iglesias">
                        <Image
                            src="/btn-atractivos.svg"
                            alt="ir"
                            width={570}
                            height={64}
                            className="transition-all ease-cubic-bezier float-end hover:scale-[1.1] md:mt-[60px] md:w-[430px] md:mr-[50px]"
                        />
                    </Link>
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
