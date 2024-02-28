import Image from 'next/image';
import Link from 'next/link';

export default function FooterPrincipal() {
    return (
        <footer className="bg-tinto">
            <div className="container mx-auto">
                <div className="flex md:h-[140px] justify-center items-center align-middle">
                    <Image
                        src="/PTI-logo.svg"
                        alt="Logo PTI"
                        width={215}
                        height={126}
                        priority
                        className="md:mr-4 md:w-[180px]"
                    />
                    <Link href="https://corfo.cl/sites/cpp/homecorfo" target={'_blank'}>
                        <Image
                            src="/logo-corfo.svg"
                            alt="Logo Corfo"
                            width={183}
                            height={60}
                            priority
                            className="md:ml-4 md:w-[150px]"
                        />
                    </Link>
                </div>
            </div>
            <div className="container-fluid flex justify-center items-center align-middle md:h-[40px] bg-[#581945]">
                <p className="text-blanco">
                    Desarrollado por{' '}
                    <Link href="https://indaga.me" className="font-semibold" target="_blank">
                        Indaga
                    </Link>
                </p>
            </div>
        </footer>
    );
}
