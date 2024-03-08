import Image from 'next/image';
import Link from 'next/link';
import VilupulliGallery from '@/components/VilupulliGaleria';
export const metadata = {
    title: 'PTI | Iglesia San Antonio de Padua de Vilupulli',
};

export default function IglesiaVilupulli() {
    return (
        <main>
            <section className="relative md:h-screen">
                <Image
                    src="/iglesias/vilupulli/vilupulli-01.webp"
                    alt="Iglesia Nuestra Señora de los Dolores de DALCAHUE"
                    fill={true}
                    priority={true}
                    quality={100}
                    className="object-cover object-center"
                />
            </section>

            <section className="md:py-[100px]">
                <div className="container mx-auto flex justify-center">
                    <h1 className="font-semibold text-tinto xl:text-[48px] uppercase">
                        Iglesia San Antonio de Padua de Vilupulli
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
                            Construcción: <b className="md:font-medium">Alrededor de 1900</b>
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
                            Patrono: <b className="md:font-medium">San Antonio de Padua</b>
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
                            Fiesta Patronal: <b className="md:font-medium">13 de junio</b>
                        </p>
                    </div>
                </div>
            </section>

            <section className="md:py-[100px] bg-beige">
                <div className="container mx-auto md:px-20">
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Se dice que la iglesia de Vilupulli{' '}
                        <b>
                            posee la torre más esbelta y delicada de todos los templos del
                            archipiélago.
                        </b>{' '}
                        Construida por la comunidad a través de mingas, esta iglesia tiene una
                        historia rica en leyendas. Se dice que{' '}
                        <b>
                            unos niños de la escuela fueron sorprendidos jugando con calaveras que
                            salían de las excavaciones durante la construcción.
                        </b>{' '}
                        Este evento dio origen a la creencia de que la iglesia fue erigida sobre un
                        cementerio, o que algunos fieles del lugar fueron sepultados bajo el antiguo
                        templo.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Entre las imágenes de la iglesia, destaca la{' '}
                        <b>&apos;Virgen sentada&quot;</b>, que representa a la Inmaculada Concepción
                        en un trono de madera, <b>pisando a un demonio en forma de serpiente</b>.
                        Esta imagen es única en el archipiélago y se asocia directamente con la
                        localidad, dado que nombre mapudungún de Vilupulli, se traduce como
                        <b>&apos;Loma de la culebra&quot;</b> o &apos;Colina de la serpiente&quot;.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        Muchas personas recuerdan que alrededor de 1940 llegó la campana y que para
                        lograr subirla hasta lo alto de la torre tuvo que participar gran parte de
                        la comunidad local.
                    </p>
                    <p className="font-thin text-tinto md:text-[26px] md:leading-[34px] md:mb-[25px]">
                        También se cuenta que <b>Charles Darwin visitó la iglesia de Vilupulli</b>{' '}
                        en 1843.
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
                    style={{ backgroundImage: "url('/iglesias/vilupulli/vilupulli-02.webp')" }}
                >
                    <Link href="/recorridos/iglesia-vilupulli/index.html" target={'_blank'}>
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
                    <VilupulliGallery />
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
