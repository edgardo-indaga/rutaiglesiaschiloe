'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const styles = {
    navLinks:
        'font-barlow cursor-pointer uppercase text-tinto xl:text-[20px] xl:font-regular xl:leading-[20px] xl:px-[20px] hover:font-medium',
    linksMobile:
        'font-barlow cursor-pointer uppercase text-blanco text-[18px] py-[15px] font-regular',
};
export default function HeaderPrincipal() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="fixed z-50 w-screen scroll-[800px] bg-transparent" id="principal">
            <div className="container mx-auto my-[10px]">
                <nav className="flex items-center h-[130px] px-[20px] xl:h-[130px] xl:px-[30px] mx-[12px] xl:mx-auto nav-header ">
                    <div className="flex w-full items-center justify-between">
                        <Link href="/">
                            <Image
                                src="/logo_vector.svg"
                                alt="Logo PTI Iglesias Patrimoniales de Chiloé"
                                width={260}
                                height={160}
                                priority
                                className="w-[160px] md:w-[220px] md:h-auto"
                            />
                        </Link>
                        <div className="hidden xl:flex">
                            <ul className="hidden xl:flex">
                                <li className={styles.navLinks}>
                                    <Link href="/">Inicio</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link href="#">Iglesias</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link href="#">Protocolo</Link>
                                </li>
                                <li className={styles.navLinks}>
                                    <Link href="#">Contacto</Link>
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
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col pt-1 py-4 items-center">
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
                                    <Link href="#">Iglesias</Link>
                                </li>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="#">Protocolo</Link>
                                </li>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="#">Patrimonio de la Humanidad</Link>
                                </li>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="#">La historia</Link>
                                </li>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="#">La Arquitectura</Link>
                                </li>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="#">Las Comunidades</Link>
                                </li>

                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="#">Contacto</Link>
                                </li>
                            </ul>

                            {/* REDES SOCIALES MOBILE*/}

                            <ul className="flex flex-row mt-[50px]">
                                <li className="py-[2px] px-[8px]">
                                    <Link
                                        href="https://www.instagram.com/crowadvance/"
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="32"
                                            width="32"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="py-[2px] px-[8px]">
                                    <Link
                                        href="https://www.facebook.com/advancecrow/"
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="30"
                                            width="30"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="py-[2px] px-[8px]">
                                    <Link
                                        href="https://www.linkedin.com/company/crow-advance"
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="30"
                                            width="30"
                                            viewBox="0 0 448 512"
                                            className="text-blanco"
                                        >
                                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>

                            <div className="mt-[50px]">
                                <Image
                                    src="/logo_vector_wh.svg"
                                    alt="Logo PTI Iglesias Patrimoniales de Chiloé"
                                    width={260}
                                    height={160}
                                    priority
                                    className="w-[180px]"
                                />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
