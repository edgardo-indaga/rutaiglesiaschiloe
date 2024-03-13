import Image from 'next/image';
import Link from 'next/link';

import thumbItem01 from '/public/descargables/thumb-item01.webp';

export default function ThumbDescargablesMobile() {
    return (
        <section className="py-10 px-5 xl:hidden">
            <div className="container mx-auto flex flex-wrap">
                <div className="w-[165px] relative h-[165px] mx-[4px] my-[4px]">
                    <div className="opacity-70">
                        <Image
                            src={thumbItem01}
                            alt="Item 01"
                            fill={true}
                            quality={100}
                            priority={true}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-[165px] h-[165px] flex items-center justify-center bg-tinto z-20">
                        <Link
                            href="/uploads/protocolo.pdf"
                            target={'_blank'}
                            className="text-blanco text-[18px] text-center z-20"
                        >
                            PROTOCOLO
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
