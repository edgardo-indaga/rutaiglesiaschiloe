import './HotSpotsMapa.css';

import Image from 'next/image';
import Link from 'next/link';

import Mapa from '/public/mapa/mapa-sin-iglesias.webp';
import Villipulli from '/public/mapa/villipulli.png';
import Chonchi from '/public/mapa/chonchi.png';
import Ichuac from '/public/mapa/ichuac.png';
import Rilan from '/public/mapa/rilan.png';
import Nercon from '/public/mapa/nercon.png';
import Castro from '/public/mapa/castro.png';
import Dalcahue from '/public/mapa/dalcahue.png';
import SanJuan from '/public/mapa/sanjuan.png';
import Colo from '/public/mapa/colo.png';
import Tenaun from '/public/mapa/tenaun.png';
import Achao from '/public/mapa/achao.png';
import Caguach from '/public/mapa/caguach.png';
import Quinchao from '/public/mapa/quinchao.png';
import Chelin from '/public/mapa/chelin.png';
import Detif from '/public/mapa/detif.png';
import Aldachildo from '/public/mapa/aldachildo.png';

export default function HotSpotsMapa() {
    return (
        <div className="hotspots--wrapper">
            <Image
                src={Mapa}
                alt="Mapa de las Iglesias"
                height={1240}
                width={1290}
                className="hotspots--figure"
            />
            <Link href="#" className="hotspot hotspot--villipulli">
                <Image
                    src={Villipulli}
                    alt="Iglesia de Villipulli"
                    width={249}
                    height={224}
                    className="md:w-[110px] md:h-[122px]"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--Chonchi">
                <Image src={Chonchi} alt="Iglesia de Chonchi" width={125} height={122} />
            </Link>
            <Link href="#" className="hotspot hotspot--Ichuac">
                <Image
                    src={Ichuac}
                    alt="Iglesia de Ichuac"
                    width={289}
                    height={249}
                    className="md:h-[122px] md:w-auto"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--Rilan">
                <Image
                    src={Rilan}
                    alt="Iglesia de Rilán"
                    width={260}
                    height={224}
                    className="md:h-[130px] md:w-auto"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--Nercon">
                <Image
                    src={Nercon}
                    alt="Iglesia de Nercón"
                    width={289}
                    height={249}
                    className="md:h-[122px] md:w-auto"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--Castro">
                <Image
                    src={Castro}
                    alt="Iglesia de Castro"
                    width={294}
                    height={266}
                    className="md:h-[122px] md:w-auto"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--Dalcahue">
                <Image
                    src={Dalcahue}
                    alt="Iglesia de Dalcahue"
                    width={294}
                    height={266}
                    className="md:h-[126px] md:w-auto"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--SanJuan">
                <Image
                    src={SanJuan}
                    alt="Iglesia de San Juan"
                    width={294}
                    height={266}
                    className="md:h-[128px] md:w-auto"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--Colo">
                <Image
                    src={Colo}
                    alt="Iglesi de Colo"
                    width={294}
                    height={266}
                    className="md:h-[128px] md:w-auto"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--Tenaun">
                <Image
                    src={Tenaun}
                    alt="Iglesia de Tenaún"
                    width={294}
                    height={266}
                    className="md:h-[130px] md:w-auto"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--Achao">
                <Image
                    src={Achao}
                    alt="Iglesia de Achao"
                    width={294}
                    height={266}
                    className="md:h-[130px] md:w-auto"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--Caguach">
                <Image
                    src={Caguach}
                    alt="Iglesia de Caguach"
                    width={294}
                    height={266}
                    className="md:h-[130px] md:w-auto"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--Quinchao">
                <Image
                    src={Quinchao}
                    alt="Iglesia de Quinchao"
                    width={294}
                    height={266}
                    className="md:h-[130px] md:w-auto"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--Chelin">
                <Image
                    src={Chelin}
                    alt="Iglesia de Chelin"
                    width={294}
                    height={266}
                    className="md:h-[130px] md:w-auto"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--Detif">
                <Image
                    src={Detif}
                    alt="Iglesia de Detif"
                    width={294}
                    height={266}
                    className="md:h-[130px] md:w-auto"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--Aldachildo">
                <Image
                    src={Aldachildo}
                    alt="Iglesia de Aldachildo"
                    width={294}
                    height={266}
                    className="md:h-[130px] md:w-auto"
                />
            </Link>
        </div>
    );
}
