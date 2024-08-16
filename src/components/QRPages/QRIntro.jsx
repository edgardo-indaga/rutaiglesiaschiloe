import Image from 'next/image';

export default function QRIntro({ imgChurch, titlePage, firstText, listTexts }) {
    return (
        <div className="container mx-auto px-[20px] md:max-w-[1024px] md:px-0">
            <h2 className="font-bold text-tinto text-[40px] mb-[50px] md:text-[60px]">
                {titlePage}
            </h2>
            <div className="md:grid md:grid-cols-3">
                <div className="flex justify-center md:col-span-1">
                    <Image
                        src={imgChurch}
                        alt={'Iglesia de Achao'}
                        width={260}
                        height={327}
                        style={{
                            objectFit: 'cover',
                        }}
                        className="h-auto w-[300px]"
                    />
                </div>
                <div className="flex h-[327] md:col-span-2 md:items-center">
                    <p
                        className="text-justify text-tinto text-[22px] leading-[30px] py-[10px] md:text-[28px] md:leading-[38px] md:py-[20px]"
                        dangerouslySetInnerHTML={{ __html: firstText }}
                    />
                </div>
            </div>
            <div>
                {listTexts.map((listText, index) => (
                    <p
                        key={index}
                        className="text-justify text-tinto text-[22px] leading-[30px] py-[10px] md:text-[28px] md:leading-[38px] md:py-[20px]"
                        dangerouslySetInnerHTML={{ __html: listText.text }}
                    />
                ))}
            </div>
        </div>
    );
}
