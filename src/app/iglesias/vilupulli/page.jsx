import Image from 'next/image';
import Link from 'next/link';
import VilupulliGallery from '@/components/VilupulliGaleria';
export const metadata = {
    title: 'PTI | Iglesia San Antonio de Padua de Vilupulli',
};

export default function IglesiaVilupulli() {
    return (
        <main>
            <section className="md:h-screen relative">
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
                <div className="container mx-auto">
                    <h1 className="text-tinto md:text-[30px] font-semibold uppercase">
                        Iglesia San Antonio de Padua de Vilupulli
                    </h1>
                </div>
                <div className="container mx-auto flex md:mt-[70px]">
                    <div className="md:w-4/12 flex flex-row items-center">
                        <Image src="/iglesias/icono-01.svg" alt="Icono 01" width={77} height={56} />
                        <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:ml-[30px] md:mr-[20px]">
                            Construcción: <b className="md:font-medium">Alrededor de 1900</b>
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
                            Patrono: <b className="md:font-medium">San Antonio de Padua</b>
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
                            Fiesta Patronal: <b className="md:font-medium">13 de junio</b>
                        </p>
                    </div>
                </div>
                <div className="container mx-auto md:mt-[70px]">
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Se dice que la iglesia de Vilupulli posee la torre más esbelta y delicada de
                        todos los templos del archipiélago. Construida por la comunidad a través de
                        mingas, esta iglesia tiene una historia rica en leyendas. Se dice que unos
                        niños de la escuela fueron sorprendidos jugando con calaveras que salían de
                        las excavaciones durante la construcción. Este evento dio origen a la
                        creencia de que la iglesia fue erigida sobre un cementerio, o que algunos
                        fieles del lugar fueron sepultados bajo el antiguo templo.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Entre las imágenes de la iglesia, destaca la Virgen sentada, que representa
                        a la Inmaculada Concepción en un trono de madera, pisando a un demonio en
                        forma de serpiente. Esta imagen es única en el archipiélago y se asocia
                        directamente con la localidad, dado que nombre mapudungún de Vilupulli, se
                        traduce como Loma de la culebra o Colina de la serpiente.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        Muchas personas recuerdan que alrededor de 1940 llegó la campana y que para
                        lograr subirla hasta lo alto de la torre tuvo que participar gran parte de
                        la comunidad local.
                    </p>
                    <p className="text-tinto md:text-[26px] font-thin md:leading-[34px] md:mb-[25px]">
                        También se cuenta que Charles Darwin visitó la iglesia de Vilupulli en 1843.
                    </p>
                </div>
            </section>
            <section>
                <div
                    className="container mx-auto bg-cover bg-no-repeat bg-center md:h-screen flex justify-center align-middle items-center"
                    style={{ backgroundImage: "url('/iglesias/vilupulli/vilupulli-02.webp')" }}
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
                    <VilupulliGallery />
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
