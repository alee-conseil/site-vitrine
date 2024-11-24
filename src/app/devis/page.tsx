"use client";

import Footer from '@/components/Footer';
import DevisForm from '@/components/Formation/DevisForm';
import Navbar from '@/components/Navbar';
import { useSearchParams } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReturnToTop from '../../components/ReturnToTop';
import { namifySlug } from '../../utils/functions';
import Script from 'next/script';

type Props = {}

export default function Devis({ }: Props) {
    // Prendre le nom de la formation d'aupres l'url (params)
    const searchParams = useSearchParams();

    const formation = searchParams.get("formation") !== null ? searchParams.get("formation")! : "";

    function isValidDatePattern(input: string): boolean {
        const datePatternRegex = /^\d{4}-\d{2}-\d{2}$/;
        return datePatternRegex.test(input);
    }

    var formationDate;

    const searchParamsDateString = searchParams.get("date");

    if (searchParamsDateString !== null) {
        if (isValidDatePattern(searchParamsDateString)) {
            formationDate = new Date(searchParamsDateString);
        } else {
            formationDate = new Date();
        }
    } else {
        formationDate = new Date();
    }

    return (
        <div className="flex flex-col justify-between items-center w-full min-h-[100vh] bg-ac-gray">
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-6L5ZVZDMVJ" />
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-6L5ZVZDMVJ');
        `}
            </Script>

            <ReturnToTop />
            <div className="flex flex-col justify-start items-center w-full h-full bg-ac-gray mb-24">
                <Navbar />
                <div className="flex w-full h-44 bg-purple-600 rounded-b-lg xs:rounded-b-xl sm:rounded-b-2xl xm:rounded-b-3xl -mb-28"></div>
                <div className="flex justify-center items-center w-full bg-transparent -translate-y-6 rounded-t-3xl">
                    <DevisForm
                        formation={namifySlug(formation)}
                        formationDate={formationDate}
                    />
                </div>
            </div>

            <Footer />
            <ToastContainer
                className="mt-16"
                position="top-center"
                autoClose={2000}
                closeOnClick
                pauseOnHover={false}
                newestOnTop={true}
                theme="light"
            />
        </div>
    )
}