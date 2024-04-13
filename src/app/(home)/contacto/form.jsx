'use client';

import { useState } from 'react';

export const ContactForm = () => {
    const [isSubmitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/contact', {
                // Replace with your actual API route for SMTP
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    message,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            });

            if (res.status === 200) {
                setSubmitted(true);
            } else {
                console.error('Error sending email:', await res.text());
                // Show an error message to the user
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            // Show an error message to the user
        }
    };

    return isSubmitted ? (
        <div className="container mx-auto md:h-[450px]">
            <div className="flex flex-col items-center justify-center h-[300px] md:h-[450px]">
                <h1 className="text-center font-normal font-questrial text-negro text-[18px] md:mt-[150px] md:text-[20px] md:w-[700px]">
                    ¡Gracias por ponerte en contacto con nosotros! Tu mensaje ha sido recibido con
                    éxito. Nos esforzaremos por responder a tu consulta lo antes posible. <br />
                    ¡Ten un gran día!
                </h1>
            </div>
        </div>
    ) : (
        <div className="container mx-auto md:mt-[70px]">
            <form onSubmit={onSubmit} className="flex flex-col items-center">
                <div className="md:my-[15px] md:w-6/12 my-2 w-full">
                    <input
                        className="border-[1px] border-solid border-[#581945] py-[12px] px-[16px] bg-amarillo w-full text-[#581945] placeholder-[#581945] placeholder:uppercase"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre Completo *"
                        autoComplete="name"
                        required
                    />
                </div>

                <div className="md:my-[15px] md:w-6/12 my-2 w-full">
                    <input
                        className="border-[1px] border-solid border-[#581945] py-[12px] px-[16px] bg-amarillo w-full text-[#581945] placeholder-[#581945] placeholder:uppercase"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email *"
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="md:my-[15px] md:w-6/12 my-2 w-full">
                    <input
                        className="border-[1px] border-solid border-[#581945] py-[12px] px-[16px] bg-amarillo w-full text-[#581945] placeholder-[#581945] placeholder:uppercase"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="number"
                        placeholder="Número de teléfono"
                        autoComplete="tel"
                    />
                </div>

                <div className="md:my-[15px] md:w-6/12 my-2 w-full">
                    <textarea
                        className="border-[1px] border-solid border-[#581945] py-[12px] px-[16px] bg-amarillo text-[#581945] placeholder-[#581945] placeholder:uppercase w-full h-[200px]"
                        placeholder="Deja tu mensaje aquí *"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="flex flex-col items-end my-2 md:my-[15px] md:mt-[30px] md:w-6/12">
                    <button
                        type="submit"
                        className="bg-[#581945] uppercase text-[18px] font-[400] leading-[16px] text-blanco border-[#581945] py-[15px] px-[60px] hover:bg-amarillo hover:border-[1px] hover:border-solid hover:border-[#581945] hover:text-[#581945]"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};
