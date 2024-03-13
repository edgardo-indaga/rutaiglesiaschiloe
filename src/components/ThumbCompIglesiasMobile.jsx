import Image from 'next/image';
import Link from 'next/link';

import thumbpatrimonio from '/public/iglesias/iglesia-02.webp';
import thumbhistoria from '/public/iglesias/iglesia-03.webp';
import thumbparquitectura from '/public/iglesias/iglesia-04.webp';
import thumbcomunidad from '/public/iglesias/iglesia-05.webp';
export default function ThumbCompIglesiasMobile() {
    return (
        <section className="pt-[50px] block md:hidden">
            <div className="container mx-auto flex flex-wrap px-5 justify-between">
                <div className="w-[155] relative h-[155px] mx-[4px] my-[10px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbpatrimonio}
                            alt="Patrimonio"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[155px] h-[155px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/patrimonio"
                            className="text-blanco text-[18px] text-center z-20"
                        >
                            PATRIMONIO DE LA HUMANIDAD
                        </Link>
                    </div>
                </div>

                <div className="w-[155] relative h-[155px] mx-[4px] my-[10px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbhistoria}
                            alt="Historia"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[155px] h-[155px] flex items-center justify-center bg-tinto z-20">
                        <Link href="/historia" className="text-blanco text-[18px] text-center z-20">
                            LA HISTORIA
                        </Link>
                    </div>
                </div>

                <div className="w-[155] relative h-[155px] mx-[4px] my-[10px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbparquitectura}
                            alt="Patrimonio"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[155px] h-[155px] flex items-center justify-center bg-tinto z-20">
                        <Link href="/historia" className="text-blanco text-[18px] text-center z-20">
                            LA ARQUITECTURA
                        </Link>
                    </div>
                </div>

                <div className="w-[155] relative h-[155px] mx-[4px] my-[10px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbcomunidad}
                            alt="Patrimonio"
                            fill={true}
                            quality={100}
                            className="object-cover"
                        />
                    </div>

                    <div className="w-[155px] h-[155px] flex items-center justify-center bg-tinto z-20">
                        <Link href="/historia" className="text-blanco text-[18px] text-center z-20">
                            LAS COMUNIDADES
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
