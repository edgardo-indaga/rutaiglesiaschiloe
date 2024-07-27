import Image from 'next/image';
import ThumbDescargables from '@/components/ItemDescargables';
import ThumbDescargablesMobile from '@/components/ItemDescargablesMobile';

import HeaderImg from '@public/descargables/descargables-01.webp';
import HeaderPage from '@components/HeaderPage/HeaderPage';

export const metadata = {
    title: 'PTI | Descargables',
};

export default function Descargables() {
    return (
        <main>
            <HeaderPage HeaderTitle="DESCARGABLES" HeaderImg={HeaderImg} />
            <ThumbDescargables />
            <ThumbDescargablesMobile />
        </main>
    );
}
