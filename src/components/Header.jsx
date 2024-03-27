'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import logoCorfo from '/public/logo-corfo-color.svg';

const styles = {
    navLinks:
        'font-barlow cursor-pointer uppercase text-tinto xl:text-[20px] xl:font-regular xl:leading-[20px] xl:px-[20px]',

    linksMobile:
        'font-barlow cursor-pointer uppercase text-blanco text-[18px] py-[15px] font-regular',
};
export default function HeaderPrincipal() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [bgColor, setBgColor] = useState('bg-transparent');
    const [key, setKey] = useState(Math.random());
    const pathname = usePathname();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 150) {
                setBgColor('bg-[#EFEBE1F2]');
                setKey(Math.random()); // Esto forzará un renderizado
            } else {
                setBgColor('bg-transparent');
                setKey(Math.random()); // Esto forzará un renderizado
            }
        };

        window.addEventListener('scroll', changeBackground);
        return () => window.removeEventListener('scroll', changeBackground);
    }, []);

    return (
        <header className={`fixed z-50 w-screen ${bgColor}`} id="header" key={key}>
            <div className="container mx-auto my-[10px]">
                <nav className="flex items-center h-[60px] px-[20px] md:mx-[12px] nav-header xl:h-[100px] xl:px-[30px] xl:mx-auto">
                    <div className="flex w-full items-center justify-between">
                        <Link href="/">
                            <Image
                                src="/logo_vector.svg"
                                alt="Logo PTI Iglesias Patrimoniales de Chiloé"
                                width={260}
                                height={160}
                                priority
                                className="w-[110px] md:w-[180px] md:h-auto"
                            />
                        </Link>
                        <div className="hidden xl:flex">
                            <ul className="hidden xl:flex">
                                <li className={styles.navLinks}>
                                    <Link
                                        className={`link ${pathname === '/' ? 'active' : ''}`}
                                        href="/"
                                        style={{ fontWeight: pathname === '/' ? '500' : 'normal' }}
                                    >
                                        Inicio
                                    </Link>
                                </li>

                                <li className={styles.navLinks}>
                                    <Link
                                        className={`link ${
                                            pathname === '/iglesias' ? 'active' : ''
                                        }`}
                                        href="/iglesias"
                                        style={{
                                            fontWeight: pathname === '/iglesias' ? '500' : 'normal',
                                        }}
                                    >
                                        Iglesias
                                    </Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link
                                        className={`link ${
                                            pathname === '/descargables' ? 'active' : ''
                                        }`}
                                        href="/descargables"
                                        style={{
                                            fontWeight:
                                                pathname === '/descargables' ? '500' : 'normal',
                                        }}
                                    >
                                        Descargables
                                    </Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link
                                        className={`link ${
                                            pathname === '/contacto' ? 'active' : ''
                                        }`}
                                        style={{
                                            fontWeight: pathname === '/contacto' ? '500' : 'normal',
                                        }}
                                        href="/contacto"
                                    >
                                        Contacto
                                    </Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <a
                                        href="https://youtube.com/@RutaIglesiasdeChiloe?si=a94OUR7dnIUZVf3a"
                                        target={'_blank'}
                                        rel="noreferrer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="26"
                                            height="26"
                                            fill="currentColor"
                                            className="bi bi-youtube"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* BARS MENU MOBILE */}

                        <div className="flex xl:hidden">
                            <button onClick={toggleMenu}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    data-slot="icon"
                                    className="h-9 w-9"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* MENU MOBILE */}

                    <div
                        className={
                            menuOpen
                                ? 'fixed top-[-22px] left-[-20px] w-[105vw] h-[105vh] nav-mobile p-10 ease-in-out duration-500 xl:hidden'
                                : 'fixed left-[-100%] top-[-22px] h-[105vh] p-10 ease-in-out duration-500'
                        }
                    >
                        <div className="flex w-full items-center justify-end">
                            <button onClick={toggleMenu}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="black"
                                    data-slot="icon"
                                    className="h-8 w-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col items-center py-4 pt-1">
                            <ul className="flex flex-col items-center">
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="/">Inicio</Link>
                                </li>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="/iglesias">Iglesias</Link>
                                </li>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="/patrimonio">Patrimonio de la Humanidad</Link>
                                </li>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="/historia">La historia</Link>
                                </li>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="/arquitectura">La Arquitectura</Link>
                                </li>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="/comunidades">Las Comunidades</Link>
                                </li>

                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="/contacto">Contacto</Link>
                                </li>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="/descargables">Descargables</Link>
                                </li>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <a
                                        href="https://youtube.com/@RutaIglesiasdeChiloe?si=a94OUR7dnIUZVf3a"
                                        target={'_blank'}
                                        rel="noreferrer"
                                    >
                                        Youtube
                                    </a>
                                </li>
                            </ul>

                            <div className="mt-[50px] flex">
                                <Image
                                    src="/logo_vector_wh.svg"
                                    alt="Logo PTI Iglesias Patrimoniales de Chiloé"
                                    width={260}
                                    height={160}
                                    priority
                                    className="w-[120px]"
                                />
                                <Link href="https://www.corfo.cl/" target={'_blank'}>
                                    <Image
                                        src={logoCorfo}
                                        alt={'Logo Corfo'}
                                        className="w-[100px] pt-[20px] ml-[10px]"
                                    ></Image>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
