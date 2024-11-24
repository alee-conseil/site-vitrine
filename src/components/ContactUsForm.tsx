"use client";

import { contactus } from '@/content/general';
import { ContactUsPayload } from '@/utils/interfaces';

import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';

const montserratNormalFont = Montserrat({ weight: "400", subsets: ["latin"] });
const montserratBoldFont = Montserrat({ weight: "700", subsets: ["latin"] });

type Props = {
}

interface FormContactInputs {
    nom: string;
    prenom: string;
    telephone: string;
    email: string;
    message: string;
}

export default function ContactUsForm({ }: Props) {
    const router = useRouter();

    const [contactInputs, setContactInputs] = useState<FormContactInputs>({
        nom: '',
        prenom: '',
        telephone: '',
        email: '',
        message: ''
    });
    const handleContactInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactInputs((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const [loading, setLoading] = useState(false);
    const triggerToaster = (type: string, message: string) => {
        if (type === "success") {
          toast.success(message);
        } else {
          if (type === "error") {
            toast.error(message);
          }
        }
      }
    const handleSendEmail = async (args: ContactUsPayload) => {
        try {
            setLoading(true);
            const response = await fetch("/api/mailing/contactus", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nom: args.nom,
                    prenom: args.prenom,
                    telephone: args.telephone,
                    email: args.email,
                    message: args.message,
                })
            })

            const data = await response.json();

            if (!response.ok) {
                console.log(data.message.message);
                triggerToaster("error", "Erreur de configuration de serveur");
                throw new Error(data.message.message);
            }
            triggerToaster("success", "Votre email a été envoyé avec succés")
            setContactInputs({
                nom: '',
                prenom: '',
                telephone: '',
                email: '',
                message: ''
            });
            setLoading(false);
            setTimeout(() => {
                router.replace("/");
            }, 2750); // Redirect to /formations page after 2s
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    const handleSubmit = async () => {
        if (contactInputs.nom !== "" && contactInputs.prenom !== "" && contactInputs.telephone !== "" && contactInputs.email !== "" && contactInputs.message !== "") {
            if (!loading) {
                await handleSendEmail({
                    nom: contactInputs.nom,
                    prenom: contactInputs.prenom,
                    telephone: contactInputs.telephone,
                    email: contactInputs.email,
                    message: contactInputs.message
                });
            }
        } else {
            alert("Veuillez entrer les informations nécéssaires!");
        }
    }

    return (
        <div className='flex flex-col justify-start items-center mb-4 mx-2 py-6 px-5 box-shadow2 max-w-[464px] bg-white gap-5'>
            <div className="flex flex-col justify-start items-start w-full gap-3">
                <p className="text-black text-xs font-semibold text-left">
                    {contactus.description}
                </p>
            </div>

            {/* Form */}
            <form className={montserratNormalFont.className + " flex flex-col justify-start items-stretch gap-3 w-full"}>
                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="nom" className="flex justify-center items-center text-sm gap-1">
                        <h3 className="font-semibold text-sm text-black text-left">Nom</h3>
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="flex justify-center items-center border border-zinc-300 w-full">
                        <input
                            name="nom"
                            type="text"
                            placeholder='Nom'
                            className="py-2 px-5 w-full text-black  focus:outline focus:outline-purple-600 focus:outline-2 focus:rounded  focus:outline focus:outline-purple-600 focus:outline-2 focus:rounded"
                            value={contactInputs.nom}
                            onChange={handleContactInputChange}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="prenom" className="flex justify-center items-center text-sm gap-1">
                        <h3 className="font-semibold text-sm text-black text-left">Prénom</h3>
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="flex justify-center items-center border border-zinc-300 w-full">
                        <input
                            name="prenom"
                            type="text"
                            placeholder='Prénom'
                            className="py-2 px-5 w-full text-black  focus:outline focus:outline-purple-600 focus:outline-2 focus:rounded  focus:outline focus:outline-purple-600 focus:outline-2 focus:rounded"
                            value={contactInputs.prenom}
                            onChange={handleContactInputChange}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="telephone" className="flex justify-center items-center text-sm gap-1">
                        <h3 className="font-semibold text-sm text-black text-left">Téléphone</h3>
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="flex justify-center items-center border border-zinc-300 w-full">
                        <input
                            name="telephone"
                            type="tel"
                            placeholder='Téléphone'
                            className="py-2 px-5 w-full text-black  focus:outline focus:outline-purple-600 focus:outline-2 focus:rounded"
                            value={contactInputs.telephone}
                            onChange={handleContactInputChange}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="email" className="flex justify-center items-center text-sm gap-1">
                        <h3 className="font-semibold text-sm text-black text-left">Email</h3>
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="flex justify-center items-center border border-zinc-300 w-full">
                        <input
                            name="email"
                            type="email"
                            placeholder='Email'
                            className="py-2 px-5 w-full text-black  focus:outline focus:outline-purple-600 focus:outline-2 focus:rounded"
                            value={contactInputs.email}
                            onChange={handleContactInputChange}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="message" className="flex justify-center items-center text-sm gap-1">
                        <h3 className="font-semibold text-sm text-black text-left">Message</h3>
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="flex justify-center items-center border border-zinc-300 w-full">
                        <textarea
                            name="message"
                            placeholder='Message'
                            className="py-2 px-5 w-full text-black  focus:outline focus:outline-purple-600 focus:outline-2 focus:rounded min-h-[40px]"
                            value={contactInputs.message}
                            onChange={handleContactInputChange}
                        />
                    </div>
                </div>
            </form>
            
            <div onClick={handleSubmit} className={"bg-purple-600 py-3 px-6 w-full " + (!loading && "cursor-pointer")}>
                {!loading
                    ? <p className={montserratBoldFont.className + " text-white text-base font-bold text-center uppercase"}>Envoyer</p>
                    : <div className="flex justify-center items-center gap-2.5 p-[5px]">
                        <div className="rounded-full bg-white w-3.5 h-3.5 animate-loading1"></div>
                        <div className="rounded-full bg-white w-3.5 h-3.5 animate-loading2"></div>
                        <div className="rounded-full bg-white w-3.5 h-3.5 animate-loading3"></div>
                    </div>
                }
            </div>
        </div>
    )
}