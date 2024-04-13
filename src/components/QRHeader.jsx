import Image from 'next/image';
import Link from 'next/link';

export default function QRHeader() {
    return (
        <header className="fixed w-screen z-10">
            <div className="container mx-auto flex flex-row justify-between py-[10px]">
                <Link href="/">
                    <Image
                        src="/logo-pti-white.svg"
                        alt="Logo PTI"
                        width={215}
                        height={126}
                        priority
                        className="h-[100px] md:h-[140px]"
                    />
                </Link>
                <Link href="/">
                    <Image
                        src="/logo-laruta.svg"
                        alt="QR Code"
                        width={100}
                        height={110}
                        className="h-[100px] md:h-[140px] mr-[20px] md:mr-0"
                    />
                </Link>
            </div>
        </header>
    );
}
