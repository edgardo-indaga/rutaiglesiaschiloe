import React from 'react';
import Image from 'next/image';
import flagUk from '@public/uk-flag.svg';

const styles = {
    navLinks:
        'font-barlow cursor-pointer uppercase text-tinto xl:text-[20px] xl:font-regular xl:leading-[20px] xl:px-[20px] flex',

    linksMobile:
        'font-barlow cursor-pointer uppercase text-blanco text-[18px] py-[15px] font-regular',
};

const GoogleTranslateButton = () => {
    const handleTranslate = () => {
        const googleTranslateScript = document.createElement('script');
        googleTranslateScript.src =
            '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(googleTranslateScript);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: 'es', // Cambia esto al idioma de tu página
                    includedLanguages: 'es,en', // Idiomas disponibles
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                },
                'google_translate_element'
            );
        };
    };

    return (
        <li className={styles.navLinks}>
            <button onClick={handleTranslate}>
                <Image src={flagUk} alt="UK" className="w-[27px]" />
            </button>
            <div id="google_translate_element" className="w-[120px]"></div>
        </li>
    );
};

export default GoogleTranslateButton;
