export const metadata = {
    title: 'PTI | Protocolo',
};
export default function Protocolo() {
    return (
        <main>
            <div className="container mx-auto md:py-[200px]">
                <embed
                    src="/protocolo.pdf"
                    type="application/pdf"
                    style={{ height: '100vh', width: '100%', margin: 'auto', display: 'block' }}
                />
            </div>
        </main>
    );
}
