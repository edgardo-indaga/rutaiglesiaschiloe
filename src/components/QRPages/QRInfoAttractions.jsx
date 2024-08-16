import Image from 'next/image';

export default function QRInfoAttractions({
    titleAttraction,
    pinOne,
    pinTwo,
    distanceAttractionOne,
    extentAttractionOne,
    infoAttraction,
    distanceAttractionTwo,
    extentAttractionTwo,
}) {
    return (
        <>
            <div className="flex justify-center mt-[30px] px-[20px] md:px-0">
                <h2 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                    {titleAttraction}
                </h2>
            </div>
            <div className="grid grid-cols-3 mt-[30px] px-[20px] md:px-0">
                <div className="col-span-1 flex flex-col">
                    <div className="flex">
                        <Image
                            src={pinOne}
                            alt={'Pin Uno'}
                            height={54}
                            width={33}
                            className="md:mr-[20px] mr-[10px] h-[44px] w-[23] md:h-[54px] md:w-[33px]"
                        />
                        <div>
                            <h2 className="font-bold text-tinto  text-[20px] md:text-[60px] md:leading-[60px]">
                                {distanceAttractionOne}
                            </h2>
                            <h3 className="font-normal text-tinto  text-[16px] md:text-[40px] md:leading-[42px]">
                                {extentAttractionOne}
                            </h3>
                        </div>
                    </div>
                    <div className="flex mt-[10px]">
                        <Image
                            src={pinTwo}
                            alt={'Pin Dos'}
                            height={54}
                            width={33}
                            className="md:mr-[20px] mr-[10px] h-[44px] w-[23] md:h-[54px] md:w-[33px]"
                        />
                        <div>
                            <h2 className="font-bold text-tinto  text-[20px] md:text-[60px] md:leading-[60px]">
                                {distanceAttractionTwo}
                            </h2>
                            <h3 className="font-normal text-tinto  text-[16px] md:text-[40px] md:leading-[42px]">
                                {extentAttractionTwo}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-span-2">
                    <p className="text-justify text-tinto text-[18px] leading-[28px] pl-[20px] md:text-[34px] md:leading-[40px] md:py-[20px]">
                        {infoAttraction}
                    </p>
                </div>
            </div>
        </>
    );
}
