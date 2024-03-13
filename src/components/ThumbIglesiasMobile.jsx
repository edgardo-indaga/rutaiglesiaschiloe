import Image from 'next/image';
import Link from 'next/link';

export default function ThumbIglesiasMobile() {
    return (
        <section className="py-[50px] block md:hidden">
            <div className="container mx-auto px-5">
                <h1 className="font-semibold text-tinto text-[24px] mb-[20px] md:text-[40px] md:mb-[20px] text-center">
                    16 IGLESIAS PATRIMONIO DE LA HUMANIDAD
                </h1>
            </div>

            <div className="container mx-auto flex flex-wrap px-5">
                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src="/iglesias/thumb-castro.webp"
                            alt="Patrimonio"
                            objectFit="cover"
                            fill={true}
                            quality={100}
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
                            src="/iglesias/thumb-nercon.webp"
                            alt="Patrimonio"
                            objectFit="cover"
                            fill={true}
                            quality={100}
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
                            src="/iglesias/thumb-dalcahue.webp"
                            alt="Patrimonio"
                            objectFit="cover"
                            fill={true}
                            quality={100}
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
                            src="/iglesias/thumb-rilan.webp"
                            alt="Patrimonio"
                            objectFit="cover"
                            fill={true}
                            quality={100}
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
                            src="/iglesias/thumb-chelin.webp"
                            alt="Patrimonio"
                            objectFit="cover"
                            fill={true}
                            quality={100}
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
                            src="/iglesias/thumb-sanjuan.webp"
                            alt="Patrimonio"
                            objectFit="cover"
                            fill={true}
                            quality={100}
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
            </div>
        </section>
    );
}
