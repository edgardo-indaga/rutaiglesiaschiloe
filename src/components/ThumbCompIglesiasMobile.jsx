import Image from 'next/image';
import Link from 'next/link';

import thumbpatrimonio from '/public/iglesias/iglesia-02.webp';
import thumbhistoria from '/public/iglesias/iglesia-03.webp';
import thumbparquitectura from '/public/iglesias/iglesia-04.webp';
import thumbcomunidad from '/public/iglesias/iglesia-05.webp';
export default function ThumbCompIglesiasMobile() {
    return (
        <section className="pt-[50px] block md:hidden">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <Link href="/patrimonio" className="my-5">
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-tinto text-[18px] font-[600] absolute mt-[20px] ml-[20px]">
                            PATRIMONIO DE <br />
                            LA HUMANIDAD
                        </h2>
                        <Image
                            src={thumbpatrimonio}
                            alt="patrimonio"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </Link>
                <Link href="/historia" className="my-5">
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-tinto text-[18px] font-[600] absolute mt-[20px] ml-[20px]">
                            LA HISTORIA
                        </h2>
                        <Image
                            src={thumbhistoria}
                            alt="LA HISTORIA"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </Link>
                <Link href="/arquitectura" className="my-5">
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-tinto text-[18px] font-[600] absolute mt-[20px] ml-[20px]">
                            LA ARQUITECTURA
                        </h2>
                        <Image
                            src={thumbparquitectura}
                            alt="LA ARQUITECTURA"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </Link>
                <Link href="/comunidades" className="my-5">
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-tinto text-[18px] font-[600] absolute mt-[20px] ml-[20px]">
                            LAS COMUNIDADES
                        </h2>
                        <Image
                            src={thumbcomunidad}
                            alt="LAS COMUNIDADES"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </Link>
            </div>
        </section>
    );
}
