import Image from 'next/image';

export default function QRImages({ images }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center px-[20px] md:px-0 mt-[30px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative w-full"
                        style={{ paddingBottom: `${(image.height / image.width) * 100}%` }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="md:my-[20px] my-[10px] md:py-[20px] py-[10px] object-cover"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
