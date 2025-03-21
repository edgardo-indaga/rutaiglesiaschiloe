'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const style = {
    imgResposive:
        'w-[180px] sm:w-[200px] md:h-[200px] xl:w-[250px] xl:h-[250px] 2xl:w-[300px] 2xl:h-[300px]',
};

export default function ThumbIglesias() {
    const [isHoverCastro, setIsHoverCastro] = useState(false);
    const [isHoverNercon, setIsHoverNercon] = useState(false);
    const [isHoverDalcahue, setIsHoverDalcahue] = useState(false);
    const [isHoverRilan, setIsHoverRilan] = useState(false);
    const [isHoverChelin, setIsHoverChelin] = useState(false);
    const [isHoverSanJuan, setIsHoverSanJuan] = useState(false);
    const [isHoverTenaun, setIsHoverTenaun] = useState(false);
    const [isHoverColo, setIsHoverColo] = useState(false);
    const [isHoverAchao, setIsHoverAchao] = useState(false);
    const [isHoverQuinchao, setIsHoverQuinchao] = useState(false);
    const [isHoverCaguach, setIsHoverCaguach] = useState(false);
    const [isHoverChonchi, setIsHoverChonchi] = useState(false);
    const [isHoverVilipulli, setIsHoverVilipulli] = useState(false);
    const [isHoverIchuac, setIsHoverIchuac] = useState(false);
    const [isHoverAldachildo, setIsHoverAldachildo] = useState(false);
    const [isHoverDetif, setIsHoverDetif] = useState(false);

    return (
        <section
            className="pb-[40px] px-[5px] md:pb-[100px] md:px-0 hidden md:block"
            id="listadoiglesias"
        >
            <div className="container mx-auto md:pb-[40px]">
                <div className="md:w-full">
                    <h1 className="font-semibold text-tinto md:text-[30px] ml-[10px]">
                        16 IGLESIAS PATRIMONIO DE LA HUMANIDAD
                    </h1>
                </div>
            </div>
            <div className="container mx-auto flex flex-wrap">
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverCastro(true)}
                        onMouseLeave={() => setIsHoverCastro(false)}
                    >
                        <div className={`md:w-[300] md:h-[300px] ${isHoverCastro ? 'hidden' : ''}`}>
                            <Image
                                src="/iglesias/thumb-castro.webp"
                                alt="Iglesias 01"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>

                        <Link
                            href="/iglesias/castro"
                            className={`bg-beige flex justify-center items-center text-tinto font-medium uppercase text-center md:w-[300px] md:h-[300px] md:px-[20px] md:text-[20px]  ${
                                isHoverCastro ? '' : 'hidden'
                            }`}
                        >
                            SAN FRANCISCO DE CASTRO
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverNercon(true)}
                        onMouseLeave={() => setIsHoverNercon(false)}
                    >
                        <div className={`md:w-[300] md:h-[300px] ${isHoverNercon ? 'hidden' : ''}`}>
                            <Image
                                src="/iglesias/thumb-nercon.webp"
                                alt="Iglesias 02"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>

                        <Link
                            href="/iglesias/nercon"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverNercon ? '' : 'hidden'
                            }`}
                        >
                            Iglesia Nuestra Señora de Gracia de NERCÓN
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverDalcahue(true)}
                        onMouseLeave={() => setIsHoverDalcahue(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHoverDalcahue ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/iglesias/thumb-dalcahue.webp"
                                alt="Iglesias 03"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>

                        <Link
                            href="/iglesias/dalcahue"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverDalcahue ? '' : 'hidden'
                            }`}
                        >
                            Iglesia Nuestra Señora de los Dolores de DALCAHUE
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverRilan(true)}
                        onMouseLeave={() => setIsHoverRilan(false)}
                    >
                        <div className={`md:w-[300] md:h-[300px] ${isHoverRilan ? 'hidden' : ''}`}>
                            <Image
                                src="/iglesias/thumb-rilan.webp"
                                alt="Iglesias 04"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>

                        <Link
                            href="/iglesias/rilan"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverRilan ? '' : 'hidden'
                            }`}
                        >
                            Iglesia Santa María de Rilán
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverChelin(true)}
                        onMouseLeave={() => setIsHoverChelin(false)}
                    >
                        <div className={`md:w-[300] md:h-[300px] ${isHoverChelin ? 'hidden' : ''}`}>
                            <Image
                                src="/iglesias/thumb-chelin.webp"
                                alt="Iglesias 05"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>

                        <Link
                            href="/iglesias/chelin"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverChelin ? '' : 'hidden'
                            }`}
                        >
                            Iglesia Nuestra Señora del Rosario de CHELÍN
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverSanJuan(true)}
                        onMouseLeave={() => setIsHoverSanJuan(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHoverSanJuan ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/iglesias/thumb-sanjuan.webp"
                                alt="Iglesias 06"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>

                        <Link
                            href="/iglesias/sanjuan"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverSanJuan ? '' : 'hidden'
                            }`}
                        >
                            Iglesia San Juan Bautista de SAN JUAN
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverTenaun(true)}
                        onMouseLeave={() => setIsHoverTenaun(false)}
                    >
                        <div className={`md:w-[300] md:h-[300px] ${isHoverTenaun ? 'hidden' : ''}`}>
                            <Image
                                src="/iglesias/thumb-tenaun.webp"
                                alt="Iglesias 07"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>

                        <Link
                            href="/iglesias/tenaun"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverTenaun ? '' : 'hidden'
                            }`}
                        >
                            Iglesia Nuestra Señora del Patrocinio de TENAÚN
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverColo(true)}
                        onMouseLeave={() => setIsHoverColo(false)}
                    >
                        <div className={`md:w-[300] md:h-[300px] ${isHoverColo ? 'hidden' : ''}`}>
                            <Image
                                src="/iglesias/thumb-colo.webp"
                                alt="Iglesias 08"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/iglesias/colo"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverColo ? '' : 'hidden'
                            }`}
                        >
                            Iglesia San Antonio de COLO
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverAchao(true)}
                        onMouseLeave={() => setIsHoverAchao(false)}
                    >
                        <div className={`md:w-[300] md:h-[300px] ${isHoverAchao ? 'hidden' : ''}`}>
                            <Image
                                src="/iglesias/thumb-achao.webp"
                                alt="Iglesias 09"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/iglesias/achao"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverAchao ? '' : 'hidden'
                            }`}
                        >
                            Iglesia Santa María de Loreto de ACHAO
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverQuinchao(true)}
                        onMouseLeave={() => setIsHoverQuinchao(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHoverQuinchao ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/iglesias/thumb-quinchao.webp"
                                alt="Iglesias 10"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/iglesias/quinchao"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverQuinchao ? '' : 'hidden'
                            }`}
                        >
                            Iglesia Nuestra Señora de la Gracia de QUINCHAO
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverCaguach(true)}
                        onMouseLeave={() => setIsHoverCaguach(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHoverCaguach ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/iglesias/thumb-caguach.webp"
                                alt="Iglesias 11"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/iglesias/caguach"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverCaguach ? '' : 'hidden'
                            }`}
                        >
                            Iglesia Jesús Nazareno de CAGUACH
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverChonchi(true)}
                        onMouseLeave={() => setIsHoverChonchi(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHoverChonchi ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/iglesias/thumb-chonchi.webp"
                                alt="Iglesias 12"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/iglesias/chonchi"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverChonchi ? '' : 'hidden'
                            }`}
                        >
                            Iglesia Nuestra Señora del Rosario de CHONCHI
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverVilipulli(true)}
                        onMouseLeave={() => setIsHoverVilipulli(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${
                                isHoverVilipulli ? 'hidden' : ''
                            }`}
                        >
                            <Image
                                src="/iglesias/thumb-vilipulli.webp"
                                alt="Iglesias 13"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/iglesias/vilupulli"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverVilipulli ? '' : 'hidden'
                            }`}
                        >
                            Iglesia San Antonio de Padua de VILUPULLI
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverIchuac(true)}
                        onMouseLeave={() => setIsHoverIchuac(false)}
                    >
                        <div className={`md:w-[300] md:h-[300px] ${isHoverIchuac ? 'hidden' : ''}`}>
                            <Image
                                src="/iglesias/thumb-ichuac.webp"
                                alt="Iglesias 14"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/iglesias/ichuac"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverIchuac ? '' : 'hidden'
                            }`}
                        >
                            Iglesia Natividad de María de ICHUAC
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverAldachildo(true)}
                        onMouseLeave={() => setIsHoverAldachildo(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${
                                isHoverAldachildo ? 'hidden' : ''
                            }`}
                        >
                            <Image
                                src="/iglesias/thumb-aldachildo.webp"
                                alt="Iglesias 15"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/iglesias/aldachildo"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverAldachildo ? '' : 'hidden'
                            }`}
                        >
                            Iglesia Jesús Nazareno de ALDACHILDO
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHoverDetif(true)}
                        onMouseLeave={() => setIsHoverDetif(false)}
                    >
                        <div className={`md:w-[300] md:h-[300px] ${isHoverDetif ? 'hidden' : ''}`}>
                            <Image
                                src="/iglesias/thumb-detif.webp"
                                alt="Iglesias 16"
                                height={300}
                                width={300}
                                priority={true}
                                quality={100}
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/iglesias/detif"
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHoverDetif ? '' : 'hidden'
                            }`}
                        >
                            Iglesia Santiago Apóstol de DETIF
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
