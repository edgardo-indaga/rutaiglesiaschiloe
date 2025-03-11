import Image from 'next/image';
import React from 'react';

export default function QRFooterGeneral({
    titleContent,
    titleContact,
    linkService,
    textService,
    linkServiceUno,
    textServiceUno,
    linkServiceDos,
    textServiceDos,
    linkServiceTres,
    textServiceTres,
}) {
    const instagram = '/qr/icon-instagram.svg';
    const web = '/qr/icon-web.svg';
    const corfo = '/qr/corfo.svg';
    const serpat = '/qr/logo-serpat.svg';
    const fundacion = '/qr/logo-fundacion.png';

    return (
        <>
            <div className="container mx-auto max-w-[1024px] mt-[40px] px-[30px]">
                <div className="flex justify-center mt-[30px] px-[20px] md:px-0">
                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        {titleContent}
                    </h2>
                </div>
                <div className="flex justify-center mt-[30px] md:mt-[40px] ">
                    <a
                        href={linkService}
                        target="_blank"
                        className="border-2 border-tinto rounded-[20px] text-tinto text-center text-[16px] py-[10px] px-[40px] font-medium md:py-[10px] md:text-[24px] hover:bg-tinto hover:text-[#F0EBE1]"
                    >
                        {textService}
                    </a>
                </div>
                <div className="flex justify-center mt-[30px] ">
                    <a
                        href={linkServiceUno}
                        target="_blank"
                        className="border-2 border-tinto rounded-[20px] text-tinto text-center text-[16px] py-[10px] px-[40px] font-medium md:py-[10px] md:text-[24px] hover:bg-tinto hover:text-[#F0EBE1]"
                    >
                        {textServiceUno}
                    </a>
                </div>
                <div className="flex justify-center mt-[30px] ">
                    <a
                        href={linkServiceDos}
                        target="_blank"
                        className="border-2 border-tinto rounded-[20px] text-tinto text-center text-[16px] py-[10px] px-[40px] font-medium md:py-[10px] md:text-[24px] hover:bg-tinto hover:text-[#F0EBE1]"
                    >
                        {textServiceDos}
                    </a>
                </div>
                <div className="flex justify-center mt-[30px]">
                    <a
                        href={linkServiceTres}
                        target="_blank"
                        className="border-2 border-tinto rounded-[20px] text-tinto text-center text-[16px] py-[10px] px-[40px] font-medium md:py-[10px] md:text-[24px] hover:bg-tinto hover:text-[#F0EBE1]"
                    >
                        {textServiceTres}
                    </a>
                </div>
                <div className="flex flex-col justify-center mt-[70px] md:mt-[100px] px-[20px] md:px-0">
                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        {titleContact}
                    </h2>
                    <div className="flex justify-center mt-[40px]">
                        <div className="flex flex-col items-center mx-[10px]">
                            <a href="https://www.instagram.com/rutaiglesiaschiloe/" target="_blank">
                                <Image src={instagram} alt={'Instagram'} width={70} height={70} />
                            </a>
                            <p className="text-tinto text-[14px] md:text-[18px]">
                                @rutaiglesiaschiloe
                            </p>
                        </div>
                        <div className="flex flex-col items-center mx-[10px]">
                            <a href="https://rutasiglesiaschiloe.cl" target="_blank">
                                <Image src={web} alt={'Instagram'} width={70} height={70} />
                            </a>
                            <p className="text-tinto text-[14px] md:text-[18px]">
                                www.rutaiglesiaschiloe.cl
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between mt-[70px] md:mt-[100px] px-[20px] md:px-0 border-t-2 border-tinto pt-[20px]">
                    <div className="flex flex-col md:justify-center items-center mb-[20px]">
                        <a href="https://www.corfo.cl/sites/cpp/homecorfo" target={'_blank'}>
                            <Image src={corfo} alt={'Logo Corfo'} height={68} width={130} className="w-[160px]"/>
                        </a>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-[16px] font-medium mb-[10px] text-center md:text-left">Colaboran</h3>
                        <div className="flex flex-col md:flex-row md:justify-between items-center">
                            <a href="https://www.iglesiaschiloe.cl/" target={'_blank'}>
                                <Image src={fundacion} alt={'Logo Fundacion'} height={110} width={290} className="w-[240px] mr-[15px] mb-[10px]"/>
                            </a>
                            <a href="https://www.patrimoniocultural.gob.cl/" target={'_blank'}>
                                <Image src={serpat} alt={'Logo Serpat'} height={557} width={1835} className="w-[200px] mb-[10px]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
