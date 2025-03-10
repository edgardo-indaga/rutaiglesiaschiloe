import { ContactForm } from './form';

import HeaderPage from '@/components/HeaderPage/HeaderPage';
import HeaderImg from '@public/contacto/contacto-01.webp';

export const metadata = {
    title: 'PTI | Servicios Turísticos',
};
export default function Contacto() {
    return (
        <main>
            <HeaderPage HeaderTitle="PROXIMAMENTE" HeaderImg={HeaderImg} />

            {/*<section className="md:py-[100px] py-10 px-5 md:px-0">
                <div className="container mx-auto flex items-center">
                    <ContactForm />
                </div>
            </section>*/}
        </main>
    );
}
