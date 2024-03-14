import Image from 'next/image';
import Link from 'next/link';

import iglesiaVilupulli from '/public/iglesias-vector/vilupulli-iglesia.png';
import iglesiaChonchi from '/public/iglesias-vector/chonchi-iglesia.png';
import iglesiaIchuac from '/public/iglesias-vector/ichuac-iglesia.png';
import iglesiaRilan from '/public/iglesias-vector/rilan-iglesia.png';
import iglesiaNercon from '/public/iglesias-vector/nercon-iglesia.png';
import iglesiaCastro from '/public/iglesias-vector/castro-iglesia.png';
import iglesiaDalcahue from '/public/iglesias-vector/dalcahue-iglesia.png';
import iglesiaSanJuan from '/public/iglesias-vector/sanjuan-iglesia.png';
import iglesiaColo from '/public/iglesias-vector/colo-iglesia.png';
import iglesiaTenaun from '/public/iglesias-vector/tenaun-iglesia.png';
import iglesiaAchao from '/public/iglesias-vector/achao-iglesia.png';
import iglesiaCaguach from '/public/iglesias-vector/caguach-iglesia.png';
import iglesiaQuinchao from '/public/iglesias-vector/quinchao-iglesia.png';
import iglesiaChelin from '/public/iglesias-vector/chelin-iglesia.png';
import iglesiaDetif from '/public/iglesias-vector/detif-iglesia.png';
import iglesiaAldachildo from '/public/iglesias-vector/aldachildo-iglesia.png';

const styles = {
    tituloIglesia: 'text-tinto text-[18px] capitalize',
    btnVer: 'bg-tinto text-blanco uppercase text-center font-barlow py-[2px] w-[60px] text-[14px] mt-[20px]',
};

export default function ThumbIglesiasMobile() {
    return (
        <section className="py-[50px] block md:hidden" id="listadoiglesias">
            <div className="container mx-auto px-5">
                <h1 className="font-semibold text-tinto text-[24px] mb-[20px] md:text-[40px] md:mb-[20px] text-center">
                    16 IGLESIAS PATRIMONIO DE LA HUMANIDAD
                </h1>
            </div>

            <div className="container mx-auto px-5">
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaCastro}
                            alt={'Iglesia de Castro'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>Iglesia San Francisco de Castro</h1>
                        <Link href="/iglesias/castro" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaNercon}
                            alt={'Iglesia de Nercón'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>
                            Iglesia Nuestra Señora de Gracia de Nercón
                        </h1>
                        <Link href="/iglesias/nercon" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaDalcahue}
                            alt={'Iglesia de Dalcahue'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>
                            Iglesia Nuestra Señora de los Dolores de Dalcahue
                        </h1>
                        <Link href="/iglesias/dalcahue" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaRilan}
                            alt={'Iglesia de Rilan'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>
                            Iglesia Nuestra Señora de los Dolores de Rilán
                        </h1>
                        <Link href="/iglesias/rilan" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaChelin}
                            alt={'Iglesia de Chelin'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>
                            Iglesia Nuestra Señora del Rosario de Chelín
                        </h1>
                        <Link href="/iglesias/chelin" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaSanJuan}
                            alt={'Iglesia de San Juan'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>
                            Iglesia San Juan Bautista de San Juan
                        </h1>
                        <Link href="/iglesias/sanjuan" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaTenaun}
                            alt={'Iglesia de Tenaún'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>
                            Iglesia Nuestra Señora del Patrocinio de Tenaún
                        </h1>
                        <Link href="/iglesias/tenaun" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaColo}
                            alt={'Iglesia de Colo'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>Iglesia San Antonio de Colo</h1>
                        <Link href="/iglesias/colo" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaAchao}
                            alt={'Iglesia de Achao'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>
                            Iglesia Santa María de Loreto de Achao
                        </h1>
                        <Link href="/iglesias/achao" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaQuinchao}
                            alt={'Iglesia de Quinchao'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>
                            Iglesia Nuestra Señora de la Gracia de Quinchao
                        </h1>
                        <Link href="/iglesias/quinchao" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaCaguach}
                            alt={'Iglesia Jesús Nazareno de CAGUACH'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>Iglesia Jesús Nazareno de Caguach</h1>
                        <Link href="/iglesias/caguach" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaChonchi}
                            alt={'Iglesia Nuestra Señora del Rosario de CHONCHI'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>
                            Iglesia Nuestra Señora del Rosario de Chonchi
                        </h1>
                        <Link href="/iglesias/chonchi" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaChonchi}
                            alt={'Iglesia San Antonio de Padua de VILUPULLI'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>
                            Iglesia San Antonio de Padua de Vilupulli
                        </h1>
                        <Link href="/iglesias/vilupulli" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaIchuac}
                            alt={'IIglesia Natividad de María de ICHUAC'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>
                            Iglesia Natividad de María de Ichuac
                        </h1>
                        <Link href="/iglesias/ichuac" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaAldachildo}
                            alt={'IIglesia Jesús Nazareno de ALDACHILDO'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>
                            Iglesia Jesús Nazareno de Aldachildo
                        </h1>
                        <Link href="/iglesias/aldachildo" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row mb-[10px]">
                    <div className="w-5/12 flex justify-center">
                        <Image
                            src={iglesiaDetif}
                            alt={'Iglesia Santiago Apóstol de DETIF'}
                            className="h-[150px] w-auto"
                        />
                    </div>
                    <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                        <h1 className={styles.tituloIglesia}>Iglesia Santiago Apóstol de Detif</h1>
                        <Link href="/iglesias/detif" className={styles.btnVer}>
                            VER
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
