import Image from 'next/image';
import Link from 'next/link';
import iglesiaCastro from '@public/iglesias-vector/castro-iglesia.png';

const styles = {
    tituloIglesia: 'text-tinto text-[18px] capitalize',
    btnVer: 'bg-morado text-blanco uppercase text-center font-barlow py-[2px] w-[60px] text-[14px] mt-[20px]',
};

export default function IglesiasItems({ data, tituloPage }) {
    return (
        <section className="py-[50px] block md:hidden" id="listadoiglesias">
            <div className="container mx-auto px-5">
                <h1 className="text-center font-bold text-tinto text-[40px] mb-[10px] md:text-[60px]">
                    {tituloPage}
                </h1>
            </div>

            <div className="container mx-auto px-5">
                {data.map((item) => (
                    <div className="flex flex-row mb-[10px]" key={item.id}>
                        <div className="w-5/12 flex justify-center">
                            <Image
                                src={item.image}
                                alt={'Iglesia de Castro'}
                                height={150}
                                width={200}
                                className="h-[150px] w-auto"
                            />
                        </div>
                        <div className="w-7/12 flex flex-col h-[160px] justify-center pl-[5px]">
                            <h1 className={styles.tituloIglesia}>{item.name}</h1>
                            <Link href={item.url} className={styles.btnVer}>
                                {item.linkTitle}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
