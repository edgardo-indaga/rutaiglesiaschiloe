import Image from 'next/image';
import Link from 'next/link';

import thumbCastro from '/public/iglesias/thumb-castro.webp';
import thumbNercon from '/public/iglesias/thumb-nercon.webp';
import thumbDalcahue from '/public/iglesias/thumb-dalcahue.webp';
import thumbRilan from '/public/iglesias/thumb-rilan.webp';
import thumbChelin from '/public/iglesias/thumb-chelin.webp';
import thumbSanJuan from '/public/iglesias/thumb-sanjuan.webp';
import thumbTenaun from '/public/iglesias/thumb-tenaun.webp';
import thumbColo from '/public/iglesias/thumb-colo.webp';
import thumbAchao from '/public/iglesias/thumb-achao.webp';
import thumbQuinchao from '/public/iglesias/thumb-quinchao.webp';
import thumbCaguach from '/public/iglesias/thumb-caguach.webp';
import thumbChonchi from '/public/iglesias/thumb-chonchi.webp';
import thumbVilupulli from '/public/iglesias/thumb-vilipulli.webp';
import thumbIchuac from '/public/iglesias/thumb-ichuac.webp';
import thumbAldachildo from '/public/iglesias/thumb-aldachildo.webp';
import thumbDetif from '/public/iglesias/thumb-detif.webp';
export default function ThumbIglesiasMobile() {
    return (
        <section className="py-[50px] block md:hidden" id="listadoiglesias">
            <div className="container mx-auto px-5">
                <h1 className="font-semibold text-tinto text-[24px] mb-[20px] md:text-[40px] md:mb-[20px] text-center">
                    16 IGLESIAS PATRIMONIO DE LA HUMANIDAD
                </h1>
            </div>

            <div className="container mx-auto flex flex-wrap px-5">
                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbCastro}
                            alt="castro"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/castro"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            SAN FRANCISCO DE CASTRO
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbNercon}
                            alt="nercon"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/nercon"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Nuestra Señora de Gracia de NERCÓN
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbDalcahue}
                            alt="dalcahue"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/dalcahue"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Nuestra Señora de los Dolores de DALCAHUE
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbRilan}
                            alt="rilan"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/rilan"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Nuestra Señora de los Dolores de Rilán
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbChelin}
                            alt="chelin"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/chelin"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Nuestra Señora del Rosario de CHELÍN
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbSanJuan}
                            alt="San Juan"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/sanjuan"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Iglesia San Juan Bautista de SAN JUAN
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbTenaun}
                            alt="Tenaun"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/tenaun"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Nuestra Señora del Patrocinio de TENAÚN
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbColo}
                            alt="Colo"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/colo"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Iglesia San Antonio de COLO
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbAchao}
                            alt="Achao"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/achao"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Iglesia Santa María de Loreto de ACHAO
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbQuinchao}
                            alt="Quinchao"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/quinchao"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Iglesia Nuestra Señora de la Gracia de QUINCHAO
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbCaguach}
                            alt="Caguach"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/caguach"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Iglesia Jesús Nazareno de CAGUACH
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbChonchi}
                            alt="Chonchi"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/chonchi"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Nuestra Señora del Rosario de CHONCHI
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbVilupulli}
                            alt="Vilupulli"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/vilupulli"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Iglesia San Antonio de Padua de VILUPULLI
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbIchuac}
                            alt="Vilupulli"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/ichuac"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Iglesia Natividad de María de ICHUAC
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbAldachildo}
                            alt="Aldachildo"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/aldachildo"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Iglesia Jesús Nazareno de ALDACHILDO
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbDetif}
                            alt="Aldachildo"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/iglesias/detif"
                            className="text-blanco text-[18px] text-center z-20 uppercase px-2"
                        >
                            Iglesia Santiago Apóstol de DETIF
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
