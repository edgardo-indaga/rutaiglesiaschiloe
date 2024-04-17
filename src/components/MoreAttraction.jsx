import Image from 'next/image';

export default function MoreAttraction({ pdfEsp, pdfEng }) {
    return (
        <>
            <div className="container mx-auto md:flex flex-col justify-center items-center hidden">
                <a href={pdfEsp} target="_blank" rel="noreferrer noopener">
                    <Image
                        src="/mas-atractivos.svg"
                        alt="ir"
                        width={570}
                        height={64}
                        className="transition-all ease-cubic-bezier float-end hover:scale-[1.1] md:mt-[60px] md:w-[430px] md:mr-[50px]"
                    />
                </a>
                <a href={pdfEng} target="_blank" rel="noreferrer noopener">
                    <Image
                        src="/more-attraction.svg"
                        alt="ir"
                        width={570}
                        height={64}
                        className="transition-all ease-cubic-bezier float-end hover:scale-[1.1] md:mt-[30px] md:w-[430px] md:mr-[50px]"
                    />
                </a>
            </div>
            <div className="flex flex-col justify-center md:justify-start xl:hidden">
                <a
                    href={pdfEsp}
                    className="font-light bg-morado text-blanco text-[14px] leading-[16px] mt-[60px] py-[12px] px-[20px]"
                >
                    Conoce más atractivos y servicios de la zona
                </a>
                <a
                    href={pdfEng}
                    className="font-light bg-morado text-blanco text-[14px] leading-[16px] mt-[20px] py-[12px] px-[20px]"
                >
                    Discover more attractions and services in the area
                </a>
            </div>
        </>
    );
}
