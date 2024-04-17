'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const style = {
    imgResposive:
        'w-[180px] sm:w-[200px] md:h-[200px] xl:w-[250px] xl:h-[250px] 2xl:w-[300px] 2xl:h-[300px] object-cover',
};

export default function ThumbDescargables() {
    const [isHovereditem01, setIsHovereditem01] = useState(false);
    const [isHovereditem02, setIsHovereditem02] = useState(false);
    const [isHovereditem03, setIsHovereditem03] = useState(false);
    const [isHovereditem04, setIsHovereditem04] = useState(false);
    const [isHovereditem05, setIsHovereditem05] = useState(false);
    const [isHovereditem06, setIsHovereditem06] = useState(false);
    const [isHovereditem07, setIsHovereditem07] = useState(false);
    const [isHovereditem08, setIsHovereditem08] = useState(false);
    const [isHovereditem09, setIsHovereditem09] = useState(false);
    const [isHovereditem10, setIsHovereditem10] = useState(false);
    const [isHovereditem11, setIsHovereditem11] = useState(false);
    const [isHovereditem12, setIsHovereditem12] = useState(false);
    const [isHovereditem13, setIsHovereditem13] = useState(false);
    const [isHovereditem14, setIsHovereditem14] = useState(false);
    const [isHovereditem15, setIsHovereditem15] = useState(false);
    const [isHovereditem16, setIsHovereditem16] = useState(false);
    const [isHovereditem17, setIsHovereditem17] = useState(false);
    const [isHovereditem18, setIsHovereditem18] = useState(false);
    const [isHovereditem19, setIsHovereditem19] = useState(false);
    const [isHovereditem20, setIsHovereditem20] = useState(false);

    return (
        <section className="hidden py-[40px] px-[5px] md:py-[100px] md:px-0 xl:block">
            <div className="container mx-auto flex flex-wrap">
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem01(true)}
                        onMouseLeave={() => setIsHovereditem01(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem01 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/thumb-item01.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/protocolo.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem01 ? '' : 'hidden'
                            }`}
                        >
                            PROTOCOLO
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem02(true)}
                        onMouseLeave={() => setIsHovereditem02(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem02 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/thumb-item02.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/pasaporte.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem02 ? '' : 'hidden'
                            }`}
                        >
                            PASAPORTE
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem03(true)}
                        onMouseLeave={() => setIsHovereditem03(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem03 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/rutaiglesias.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/fichageneral-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem03 ? '' : 'hidden'
                            }`}
                        >
                            CHILOÉ Y LA RUTA DE LAS IGLESIAS
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem04(true)}
                        onMouseLeave={() => setIsHovereditem04(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem04 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/achao.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/achao-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem04 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem05(true)}
                        onMouseLeave={() => setIsHovereditem05(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem05 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/aldachildo.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/aldachildo-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem05 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem06(true)}
                        onMouseLeave={() => setIsHovereditem06(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem06 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/caguach.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/caguach-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem06 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem07(true)}
                        onMouseLeave={() => setIsHovereditem07(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem07 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/castro.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/castro-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem07 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem08(true)}
                        onMouseLeave={() => setIsHovereditem08(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem08 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/chelin.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/chelin-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem08 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem09(true)}
                        onMouseLeave={() => setIsHovereditem09(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem09 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/chonchi.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/chonchi-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem09 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem10(true)}
                        onMouseLeave={() => setIsHovereditem10(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem10 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/colo.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/colo-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem10 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem11(true)}
                        onMouseLeave={() => setIsHovereditem11(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem11 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/dalcahue.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/dalcahue-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem11 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem12(true)}
                        onMouseLeave={() => setIsHovereditem12(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem12 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/detif.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/detif-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem12 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem13(true)}
                        onMouseLeave={() => setIsHovereditem13(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem13 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/ichuac.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/ichuac-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem13 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem14(true)}
                        onMouseLeave={() => setIsHovereditem14(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem14 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/nercon.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/nercon-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem14 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem15(true)}
                        onMouseLeave={() => setIsHovereditem15(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem15 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/quinchao.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/quinchao-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem15 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem16(true)}
                        onMouseLeave={() => setIsHovereditem16(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem16 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/rilan.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/rilan-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem16 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem17(true)}
                        onMouseLeave={() => setIsHovereditem17(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem17 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/sanjuan.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/sanjuan-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem17 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>

                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem18(true)}
                        onMouseLeave={() => setIsHovereditem18(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem18 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/tenaun.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/tenaun-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem18 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>
                <div className="flex w-6/12 items-center justify-center align-middle mb-[15px] md:mb-[25px] md:w-3/12">
                    <div
                        onMouseEnter={() => setIsHovereditem19(true)}
                        onMouseLeave={() => setIsHovereditem19(false)}
                    >
                        <div
                            className={`md:w-[300] md:h-[300px] ${isHovereditem19 ? 'hidden' : ''}`}
                        >
                            <Image
                                src="/descargables/vilupulli.webp"
                                alt="Item 01"
                                height={300}
                                width={300}
                                priority={true} // Prioritize the image for faster loading
                                quality={100} // Maintain image quality
                                className={style.imgResposive}
                            />
                        </div>
                        <Link
                            href="/uploads/vilupulli-es.pdf"
                            target={'_blank'}
                            className={`md:w-[300px] md:h-[300px] md:px-[20px] bg-beige flex justify-center items-center text-tinto md:text-[20px] md:font-medium uppercase text-center ${
                                isHovereditem19 ? '' : 'hidden'
                            }`}
                        >
                            Atractivos y servicios en la zona
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
