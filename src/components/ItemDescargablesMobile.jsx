import Image from 'next/image';

import thumbItem01 from '/public/descargables/thumb-item01.webp';
import thumbItem02 from '/public/descargables/thumb-item02.webp';
import thumbItem03 from '/public/descargables/rutaiglesias-mobile.webp';
import thumbIglesia01 from '/public/descargables/achao-mobile.webp';
import thumbIglesia02 from '/public/descargables/aldachildo.webp';
import thumbIglesia03 from '/public/descargables/caguach-mobile.webp';
import thumbIglesia04 from '/public/descargables/castro-mobile.webp';
import thumbIglesia05 from '/public/descargables/chelin-mobile.webp';
import thumbIglesia06 from '/public/descargables/chonchi-mobile.webp';
import thumbIglesia07 from '/public/descargables/colo-mobile.webp';
import thumbIglesia08 from '/public/descargables/dalcahue-mobile.webp';
import thumbIglesia09 from '/public/descargables/detif-mobile.webp';
import thumbIglesia10 from '/public/descargables/ichuac-mobile.webp';
import thumbIglesia11 from '/public/descargables/nercon-mobile.webp';
import thumbIglesia12 from '/public/descargables/quinchao-mobile.webp';
import thumbIglesia13 from '/public/descargables/rilan-mobile.webp';
import thumbIglesia14 from '/public/descargables/sanjuan-mobile.webp';
import thumbIglesia15 from '/public/descargables/tenaun-mobile.webp';
import thumbIglesia16 from '/public/descargables/vilupulli-mobile.webp';

export default function ThumbDescargablesMobile() {
    const linkItem01 = '/uploads/achao-es.pdf';
    const linkItem02 = '/uploads/aldachildo-es.pdf';
    const linkItem03 = '/uploads/castro-es.pdf';
    const linkItem04 = '/uploads/chelin-es.pdf';
    const linkItem05 = '/uploads/chonchi-es.pdf';
    const linkItem06 = '/uploads/colo-es.pdf';
    const linkItem07 = '/uploads/dalcahue-es.pdf';
    const linkItem08 = '/uploads/detif-es.pdf';
    const linkItem09 = '/uploads/ichuac-es.pdf';
    const linkItem10 = '/uploads/nercon-es.pdf';
    const linkItem11 = '/uploads/quinchao-es.pdf';
    const linkItem12 = '/uploads/rilan-es.pdf';
    const linkItem13 = '/uploads/sanjuan-es.pdf';
    const linkItem14 = '/uploads/tenaun-es.pdf';
    const linkItem15 = '/uploads/chonchi-es.pdf';
    const linkItem16 = '/uploads/vilupulli-es.pdf';
    const linkItem17 = '/uploads/fichageneral-es.pdf';

    return (
        <section className="py-10 px-5 xl:hidden">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <a href="/uploads/protocolo.pdf" className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-tinto text-[18px] font-[600] absolute mt-[20px] ml-[20px]">
                            PROTOCOLO
                        </h2>
                        <Image
                            src={thumbItem01}
                            alt="Protocolo"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                {/*<a href="/uploads/pasaporte-new.pdf" className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px]">
                            PASAPORTE
                        </h2>
                        <Image
                            src={thumbItem02}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>*/}
                <a href={linkItem17} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Ver Ficha
                        </h2>
                        <Image
                            src={thumbItem03}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem01} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia01}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem02} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia02}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem03} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia03}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem04} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia04}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem05} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia05}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem06} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia06}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem07} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia07}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem08} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia08}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem09} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia09}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem10} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia10}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem11} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia11}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem12} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia12}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem13} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia13}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem14} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia14}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem15} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia15}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
                <a href={linkItem16} className="my-5" target={'_blank'}>
                    <div className="w-[320px] h-[366]">
                        <h2 className="text-beige text-[18px] font-[600] absolute mt-[20px] ml-[20px] uppercase">
                            Atractivos y servicios en
                            <br />
                            la zona
                        </h2>
                        <Image
                            src={thumbIglesia16}
                            alt="Pasaporte"
                            quality={100}
                            style={{
                                objectFit: 'cover',
                                height: '366px',
                            }}
                        />
                    </div>
                </a>
            </div>
        </section>
    );
}
