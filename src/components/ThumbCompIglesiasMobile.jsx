import Image from 'next/image';
import Link from 'next/link';

export default function ThumbCompIglesiasMobile() {
    return (
        <section className="pt-[50px] block md:hidden">
            <div className="container mx-auto flex flex-wrap px-5">
                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src="/iglesias/iglesia-02.webp"
                            alt="Patrimonio"
                            objectFit="cover"
                            fill={true}
                            quality={100}
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/patrimonio"
                            className="text-blanco text-[18px] text-center z-20"
                        >
                            PATRIMONIO DE LA HUMANIDAD
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src="/iglesias/iglesia-03.webp"
                            alt="Patrimonio"
                            objectFit="cover"
                            fill={true}
                            quality={100}
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link href="/historia" className="text-blanco text-[18px] text-center z-20">
                            LA HISTORIA
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src="/iglesias/iglesia-04.webp"
                            alt="Patrimonio"
                            objectFit="cover"
                            fill={true}
                            quality={100}
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link href="/historia" className="text-blanco text-[18px] text-center z-20">
                            LA ARQUITECTURA
                        </Link>
                    </div>
                </div>

                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src="/iglesias/iglesia-05.webp"
                            alt="Patrimonio"
                            objectFit="cover"
                            fill={true}
                            quality={100}
                        />
                    </div>

                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link href="/historia" className="text-blanco text-[18px] text-center z-20">
                            LAS COMUNIDADES
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
