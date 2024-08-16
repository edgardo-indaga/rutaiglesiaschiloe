import Image from 'next/image';

export default function QRCircleImage({ imageCircle }) {
    return (
        <>
            <div className="flex justify-center px-[20px] md:px-0">
                <Image
                    src={imageCircle}
                    alt={'Imagen Circulo'}
                    width={470}
                    height={470}
                    className="border-[6px] border-tinto rounded-[50%] w-[550px] h-[550px] object-cover"
                />
            </div>
        </>
    );
}
