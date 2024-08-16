import Image from 'next/image';

export default function QRChurchesMaps({ titleContent }) {
    const mapChurch = '/qr/mapa-con-iglesias.webp';
    return (
        <>
            <div className="container mx-auto max-w-[1024px] mt-[40px]">
                <div className="flex justify-center mt-[30px] px-[20px] md:px-0">
                    <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                        {titleContent}
                    </h2>
                </div>
                <div className="flex justify-center mt-[30px] px-[20px] md:px-0 md:h-[900px]">
                    <Image src={mapChurch} alt={'Mapa Church'} height={1330} width={1260} />
                </div>
            </div>
        </>
    );
}
