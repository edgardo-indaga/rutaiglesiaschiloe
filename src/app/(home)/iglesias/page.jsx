import ThumbCompIglesias from '@/components/ThumbCompIglesias';
import ThumbIglesias from '@/components/Thumb-Iglesias';
import ThumbCompIglesiasMobile from '@/components/ThumbCompIglesiasMobile';
import ThumbIglesiasMobile from '@/components/ThumbIglesiasMobile';

import HeaderPage from '@/components/HeaderPage/HeaderPage';
import HeaderImg from '@public/iglesias/iglesia-01.webp';

export const metadata = {
    title: 'PTI | Las Iglesias',
};

export default function LasIglesias() {
    return (
        <main>
            <HeaderPage HeaderTitle="IGLESIAS DE CHILOÉ" HeaderImg={HeaderImg} />
            <ThumbCompIglesias />
            <ThumbCompIglesiasMobile />
            <ThumbIglesias />
            <ThumbIglesiasMobile />
        </main>
    );
}
