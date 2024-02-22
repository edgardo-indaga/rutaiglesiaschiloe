import './HotSpotsMapa.css';

import Image from 'next/image';
import Link from 'next/link';

import Mapa from '/public/mapa/mapa-sin-iglesias.webp';
import Villipulli from '/public/mapa/villipulli.png';
import Chonchi from '/public/mapa/chonchi.png';

export default function HotSpotsMapa() {
    return (
        <section className="hotspots--wrapper">
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
                    height={224}
                    width={249}
                    className="img--villipulli"
                />
            </Link>
            <Link href="#" className="hotspot hotspot--Chonchi">
                <Image src={Chonchi} alt="Iglesia de Chonchi" height={122} width={125} />
            </Link>
            <Link href="#" className="hotspot"></Link>
            <Link href="#" className="hotspot"></Link>
            <Link href="#" className="hotspot"></Link>
            <Link href="#" className="hotspot"></Link>
            <Link href="#" className="hotspot"></Link>
            <Link href="#" className="hotspot"></Link>
            <Link href="#" className="hotspot"></Link>
            <Link href="#" className="hotspot"></Link>
            <Link href="#" className="hotspot"></Link>
            <Link href="#" className="hotspot"></Link>
            <Link href="#" className="hotspot"></Link>
            <Link href="#" className="hotspot"></Link>
            <Link href="#" className="hotspot"></Link>
            <Link href="#" className="hotspot"></Link>
        </section>
    );
}
