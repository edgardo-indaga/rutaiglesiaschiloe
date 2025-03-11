import Image from 'next/image';
import Link from 'next/link';

export default function FooterPrincipal() {
    return (
        <footer className="bg-tinto">
            <div className="container mx-auto">
                <div className="flex h-auto flex-wrap items-center justify-center py-4 align-middle md:h-[150px] md:flex-row">
                    <Link href="/">
                        <Image
                            src="/PTI-logo.svg"
                            alt="Logo PTI"
                            width={215}
                            height={126}
                            priority
                            className="m-2 mx-4 w-[100px] md:w-[100px] md:mr-4"
                        />
                    </Link>

                    <Link href="https://www.corfo.cl/" target={'_blank'}>
                        <Image
                            src="/logo-footer-07.svg"
                            alt="Logo Corfo"
                            width={120}
                            height={60}
                            priority
                            className="m-2 mx-4 w-[100px] md:w-[100px] md:ml-4"
                        />
                    </Link>

                    <Link href="https://www.indap.gob.cl/" target={'_blank'}>
                        <Image
                            src="/logo-footer-03.svg"
                            alt="Logo Corfo"
                            width={183}
                            height={60}
                            priority
                            className="m-2 mx-4 w-[100px] md:w-[100px] md:ml-4"
                        />
                    </Link>

                    <Link href="https://www.sernatur.cl/" target={'_blank'}>
                        <Image
                            src="/logo-footer-04.svg"
                            alt="Logo Corfo"
                            width={183}
                            height={60}
                            priority
                            className="m-2 mx-4 w-[60px] md:w-[70px] md:ml-4"
                        />
                    </Link>

                    <Link href="https://www.cultura.gob.cl/los-lagos/">
                        <Image
                            src="/logo-seremi-cultura.png"
                            alt="Logo Seremi"
                            width={568}
                            height={567}
                            priority
                            className="m-2 mx-4 w-[60px] md:w-[110px] md:ml-4"
                        />
                    </Link>

                    <Link href="https://www.aiep.cl/">
                        <Image
                            src="/logo-aiep.png"
                            alt="Logo AIEP"
                            width={1200}
                            height={640}
                            priority
                            className="m-2 mx-4 w-[60px] md:w-[120px] md:ml-4"
                        />
                    </Link>

                    <Link href="https://turismopehuen.cl/" >
                        <Image
                            src="/logo-turismo-puhuen.png"
                            alt="Logo Turismo Puhuen"
                            width={1200}
                            height={640}
                            priority
                            className="m-2 mx-4 w-[60px] md:w-[120px] md:ml-4"
                        />
                    </Link>

                    <Link href="https://iglesiaschiloe.cl/" target={'_blank'}>
                        <Image
                            src="/logo-fundacion.png"
                            alt="Logo Corfo"
                            width={183}
                            height={60}
                            priority
                            className="m-2 mx-4 w-[80px] md:w-[190px] md:ml-4"
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
