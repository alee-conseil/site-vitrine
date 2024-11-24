import { devis } from '@/content/general';
import { formationsData } from '@/data/formationsData';

import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from "react";

import DatePicker from "react-datepicker";
import { BsCalendar } from 'react-icons/bs';

import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import { getNextMondaysSeparatedBy3Weeks } from '@/utils/functions';
import { datesDisplayedNumber, fixedReferenceDate } from '@/utils/constants';


const montserratNormalFont = Montserrat({ weight: "400", subsets: ["latin"] });
const montserratBoldFont = Montserrat({ weight: "700", subsets: ["latin"] });

type Props = {
    formation: string;
    formationDate: Date;
}

interface FormDevisInputs {
    formation: string;
    entreprise: string;
    fullname: string;
    telephone: string;
    email: string;
    message: string;
}

interface DevisProps {
    formation: string;
    entreprise: string;
    fullname: string;
    telephone: string;
    email: string;
    message: string;
    date: Date;
}

export default function DevisForm({ formation, formationDate }: Props) {
    const router = useRouter();

    const [devisDate, setDevisDate] = useState(new Date(formationDate));
    const [devisInputs, setDevisInputs] = useState<FormDevisInputs>({
        formation: '',
        entreprise: '',
        fullname: '',
        telephone: '',
        email: '',
        message: ''
    });
    const handleDevisInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setDevisInputs((prevState) => ({
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
    const handleSendDevis = async (args: DevisProps) => {
        const searchFormation = formationsData.find((element) => element.title.toLowerCase() === formation?.toLowerCase());
        if (searchFormation) {
            try {
                setLoading(true);
                const response = await fetch("/api/mailing/devis", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        formation: searchFormation.title,
                        price: searchFormation.price,
                        duration: searchFormation.duration,
                        entreprise: args.entreprise,
                        fullname: args.fullname,
                        telephone: args.telephone,
                        email: args.email,
                        message: args.message,
                        date: args.date
                    })
                })

                const data = await response.json();

                if (!response.ok) {
                    triggerToaster("error", data.message);
                    throw new Error(data.message);
                }
                triggerToaster("success", "Votre demande de devis a été envoyé avec succés")
                setDevisInputs({ // Wipe the devis inputs Data to prevent spam
                    formation: '',
                    entreprise: '',
                    fullname: '',
                    telephone: '',
                    email: '',
                    message: ''
                })
                setLoading(false);
                setTimeout(() => {
                    router.replace("/formations");
                }, 2750); // Redirect to /formations page after 2.75s
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        } else {
            alert("Formation non trouvée!");
        }
    }
    const handleSubmit = async () => {
        if ((formation !== "" || devisInputs.formation !== "") && devisInputs.entreprise !== "" && devisInputs.telephone !== "" && devisInputs.email !== "" && devisInputs.fullname !== "") {
            if (!loading) {
                await handleSendDevis({
                    formation: formation || devisInputs.formation,
                    entreprise: devisInputs.entreprise,
                    fullname: devisInputs.fullname,
                    telephone: devisInputs.telephone,
                    email: devisInputs.email,
                    message: devisInputs.message,
                    date: devisDate
                });
            }
        } else {
            alert("Veuillez entrer les informations nécéssaires!");
        }
    }

    const nextDates = getNextMondaysSeparatedBy3Weeks(fixedReferenceDate, datesDisplayedNumber).map((string) => new Date(string));



    return (
        <div className='flex flex-col justify-start items-center mt-10 mb-4 mx-2 py-6 px-5 box-shadow2 w-[464px] bg-white gap-5'>
            <div className="flex flex-col justify-start items-start w-full gap-3">
                <h2 className={montserratBoldFont.className + " font-bold text-4xl text-purple-600 text-left"}>Demande de Devis</h2>
                <p className="text-xs font-semibold text-left text-black">
                    {devis.description}
                </p>
            </div>

            {/* Form */}
            <form className={montserratNormalFont.className + " flex flex-col justify-start items-stretch gap-3 w-full"}>
                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="formation" className="flex justify-center items-center text-sm gap-1">
                        <h3 className="font-semibold text-sm text-black text-left">Formation</h3>
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="flex justify-center items-center border border-zinc-300 w-full">
                        <input
                            name="formation"
                            readOnly={formation?.length !== 0}
                            type="text"
                            placeholder='Formation'
                            className="py-2 px-5 w-full text-zinc-500 font-medium"
                            value={(formation?.length !== 0) ? formation : devisInputs.formation}
                            onChange={handleDevisInputChange}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="entreprise" className="flex justify-center items-center text-sm gap-1">
                        <h3 className="font-semibold text-sm text-black text-left">Entreprise</h3>
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="flex justify-center items-center border border-zinc-300 w-full">
                        <input
                            name="entreprise"
                            type="text"
                            placeholder='Entreprise'
                            className="py-2 px-5 w-full text-black"
                            value={devisInputs.entreprise}
                            onChange={handleDevisInputChange}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="fullname" className="flex justify-center items-center text-sm gap-1">
                        <h3 className="font-semibold text-sm text-black text-left">Nom & Prénom</h3>
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="flex justify-center items-center relative border border-zinc-300 w-full">
                        <input
                            name="fullname"
                            type="text"
                            placeholder='Nom & Prénom'
                            className="py-2 px-5 w-full text-black"
                            value={devisInputs.fullname}
                            onChange={handleDevisInputChange}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="email" className="flex justify-center items-center text-sm gap-1">
                        <h3 className="font-semibold text-sm text-black text-left">Email</h3>
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="flex justify-center items-center relative border border-zinc-300 w-full">
                        <input
                            name="email"
                            type="email"
                            placeholder='Email'
                            className="py-2 px-5 w-full text-black"
                            value={devisInputs.email}
                            onChange={handleDevisInputChange}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="telephone" className="flex justify-center items-center text-sm gap-1">
                        <h3 className="font-semibold text-sm text-black text-left">Téléphone</h3>
                    </label>
                    <div className="flex justify-center items-center relative border border-zinc-300 w-full">
                        <input
                            name="telephone"
                            type="tel"
                            placeholder='Téléphone'
                            className="py-2 px-5 w-full text-black"
                            value={devisInputs.telephone}
                            onChange={handleDevisInputChange}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="message" className="flex justify-center items-center text-sm gap-1">
                        <h3 className="font-semibold text-sm text-black text-left">Message</h3>
                    </label>
                    <div className="flex justify-center items-center relative border border-zinc-300 w-full">
                        <textarea
                            name="message"
                            placeholder='Message'
                            className="py-2 px-5 w-full text-black min-h-[40px]"
                            value={devisInputs.message}
                            onChange={handleDevisInputChange}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="date" className="flex justify-center items-center text-sm gap-1">
                        <h3 className="font-semibold text-sm text-black text-left">Date</h3>
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="flex justify-start items-center border border-zinc-300 w-full py-2 px-5 gap-3">
                        <BsCalendar className="h-6 w-6" color='#828282' />
                        <DatePicker
                            className='text-black'
                            dateFormat="dd/MM/yyyy"
                            selected={devisDate}
                            onSelect={setDevisDate}
                            onChange={() => { }}
                            highlightDates={nextDates}
                            includeDates={nextDates}
                            showDisabledMonthNavigation
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