import Image from 'next/image';
import Link from 'next/link';
import RilanGallery from '@/components/RilanGaleria';
export const metadata = {
    title: 'PTI | Iglesia Santa María de Rilan',
};
export default function IglesiaRilan() {
    return (
        <main>
            <section className="relative md:h-screen">
                <Image
                    src="/iglesias/rilan/rilan-01.webp"
                    alt="Iglesia Santa María de Rilan"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>

            <section className="md:py-[100px]">
                <div className="container mx-auto flex justify-center">
                    <h1 className="font-semibold text-tinto xl:text-[48px] uppercase">
                        Iglesia Santa María de Rilán
                    </h1>
                </div>
                <div className="container mx-auto flex md:pt-[70px]">
                    <div className="md:w-4/12 flex flex-col items-center">
                        <Image
                            src="/iglesias/icono-01.svg"
                            alt="Icono 01"
                            width={77}
                            height={56}
                            className="md:h-[90px] md:w-auto md:mb-[20px]"
                        />
                        <p className="font-thin text-tinto text-center md:w-[300px] md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Construcción: <b className="md:font-medium">1908</b>
                        </p>
                    </div>
                    <div className="md:w-4/12 flex flex-col items-center">
                        <Image
                            src="/iglesias/icono-02.svg"
                            alt="Icono 01"
                            width={43}
                            height={117}
                            className="md:h-[90px] md:w-auto md:mb-[20px]"
                        />
                        <p className="font-thin text-tinto text-center md:w-[300px] md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Patrono: <b className="md:font-medium">Nuestra Señora de Lourdes</b>
                        </p>
                    </div>
                    <div className="md:w-4/12 flex flex-col items-center">
                        <Image
                            src="/iglesias/icono-03.svg"
                            alt="Icono 01"
                            width={107}
                            height={143}
                            className="md:h-[90px] md:w-auto md:mb-[20px]"
                        />
                        <p className="font-thin text-tinto text-center md:w-[300px] md:text-[26px] md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Fiesta Patronal: <b className="md:font-medium">11 de febrero</b>
                        </p>
                    </div>
                </div>
            </section>

            <section className="md:py-[100px] bg-beige">
                <div className="container mx-auto md:px-20">
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        La construcción de la iglesia de Rilán comenzó en 1.908 y tardó más de 10
                        años. Recién la 1.920 la comunidad logró finalizar el proyecto.{' '}
                        <b>
                            Las maderas para su construcción fueron llevadas desde Dalcahue en
                            yuntas de bueyes y balsas a remo.
                        </b>
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Combina diferentes estilos y está construida con diversas maderas nativas,
                        como tepa, ulmo, tineo y alerce. Destaca su{' '}
                        <b>
                            colorida bóveda de crucerías, característica de la arquitectura gótica.
                        </b>{' '}
                        Estas bóvedas se construyen mediante la intersección de dos o más arcos que
                        se cruzan y se entrelazan en el techo, creando una estructura compleja y muy
                        decorativa.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
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
                    <Link href="#" alt="Volver a paginas Iglesias">
                        <Image
                            src="/btn-atractivos.svg"
                            alt="ir"
                            width={570}
                            height={64}
                            className="transition-all ease-cubic-bezier float-end hover:scale-[1.1] md:mt-[60px] md:w-[430px] md:mr-[50px]"
                        />
                    </Link>
                </div>
            </section>

            <section className="md:pt-[100px]">
                <div
                    className="container mx-auto flex items-center justify-center bg-cover bg-center bg-no-repeat align-middle md:h-[720px]"
                    style={{ backgroundImage: "url('/iglesias/rilan/rilan-02.webp')" }}
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
                    <RilanGallery />
                </div>
                <div className="container mx-auto flex justify-end">
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
