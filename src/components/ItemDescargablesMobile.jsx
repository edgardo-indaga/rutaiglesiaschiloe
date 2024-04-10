import Image from 'next/image';
import Link from 'next/link';

import thumbItem01 from '/public/descargables/thumb-item01.webp';
import thumbItem02 from '/public/descargables/thumb-item02.webp';

export default function ThumbDescargablesMobile() {
    return (
        <section className="py-10 px-5 xl:hidden">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <Link href="/uploads/protocolo.pdf" className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-tinto text-[18px] font-[600] absolute mt-[20px] ml-[20px]">
                            PROTOCOLO
                        </h2>
                        <Image
                            src={thumbItem01}
                            alt="Protocolo"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </Link>
                <Link href="/uploads/pasaporte.pdf" className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px]">
                            PASAPORTE
                        </h2>
                        <Image
                            src={thumbItem02}
                            alt="Pasaporte"
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
