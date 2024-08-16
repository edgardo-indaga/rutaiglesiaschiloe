import Image from 'next/image';
import Link from 'next/link';

export default function QRHeader() {
    return (
        <header className="relative w-screen z-10 md:h-[160px] h-[90px]">
            <div className="container mx-auto flex flex-row justify-between py-[10px] max-w-[1024px]">
                <Link href="/">
                    <Image
                        src="/logo-pti-white.svg"
                        alt="Logo PTI"
                        width={215}
                        height={126}
                        priority
                        className="h-[80px] md:h-[120px]"
                    />
                </Link>
                <Link href="/">
                    <Image
                        src="/logo-laruta.svg"
                        alt="QR Code"
                        width={100}
                        height={110}
                        className="h-[80px] md:h-[140px] mr-[20px] md:mr-0"
                    />
                </Link>
            </div>
        </header>
    );
}
