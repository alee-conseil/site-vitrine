import AnimatedElement from '@/components/AnimatedElement';
import ContactUsForm from '@/components/ContactUsForm';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ReturnToTop from '@/components/ReturnToTop';
import { pageMetadata } from '@/content/general';
import { homepage } from "@/content/pages";
import { googleMapsEmbed } from '@/utils/constants';

import { IBM_Plex_Sans, Lato, Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const montserratFont = Montserrat({ weight: "400", subsets: ["latin"] });
const latoFont = Lato({ weight: "400", subsets: ["latin"] });
const ibmFont = IBM_Plex_Sans({ weight: "700", subsets: ["latin"] });
const montserratBoldFont = Montserrat({ weight: "700", subsets: ["latin"] });

export const metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  metadataBase: new URL(pageMetadata.baseUrl),
  alternates: {
      canonical: '/',
      languages: {
        'fr-MA': '/',
      },
    },
    icons: {
      icon: 'https://www.aleeconseil.com/icon.png',
      shortcut: 'https://www.aleeconseil.com/shortcut-icon.png',
      apple: 'https://www.aleeconseil.com/apple-icon.png',
    },
    openGraph: {
      title: pageMetadata.title,
      description: pageMetadata.description,
      siteName: pageMetadata.siteName,
      url: 'https://www.aleeconseil.com',
      images: {
        url: 'https://www.aleeconseil.com/icon.png',
        width: 96,
        height: 96,
      },
      locale: 'fr-MA',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': 'large',
        'max-image-preview': 'large',
        'max-snippet': 1024,
      }
    },
    themeColor: "#644E9B",
    category: 'technology'
}

export default function Home() {
  return (
    <div
      itemScope
      itemType="https://schema.org/Website"
      className="flex flex-col justify-center items-center bg-ac-gray w-full"
    >
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

      {/* Navbar  */}
      <Navbar />

      {/* Hero  */}
      <Hero />

      {/* Nos Services */}
      <div id='services' className="flex justify-center items-center bg-ac-bleu rounded-t-3xl w-full pb-28 px-4 pt-20">
        <div className="flex flex-col justify-start items-center gap-8 xm:gap-16">
          <h2 className={montserratFont.className + " font-medium text-4xl xm:text-5xl text-center text-white"}>Nos Services</h2>
          <div itemProp='offers' className="flex flex-col md:flex-row justify-between items-center md:items-start gap-20 md:gap-56">

            {/* Formations Service  */}
            <div itemScope itemType='https://schema.org/Offer' className="flex flex-col justify-start items-center gap-4 max-w-[236px]">
              <Image itemProp='image' className='w-24 h-24' width={96} height={96} src="/Homepage/formations.png" alt='service-formation' />
              <h2 itemProp='name' className={latoFont.className + " font-semibold text-2xl xm:text-3xl leading-7 text-center text-white"}>Formation</h2>
              <p itemProp='description' className={latoFont.className + " font-medium text-sm xm:text-base leading-5 text-center text-white"}>
                {homepage.formations}
              </p>
              <Link href={"/formations"}>
                <div className="flex justify-center items-center rounded-sm bg-white px-5 py-2 cursor-pointer">
                  <h3 className={ibmFont.className + " text-ac-bleu uppercase text-xl font-bold"}>Catalogue</h3>
                </div>
              </Link>
            </div>
            {/* Conseil Service  */}
            <div itemScope itemType='https://schema.org/Offer' className="flex flex-col justify-start items-center gap-4 max-w-[236px]">
              <Image itemProp='image' className='w-24 h-24' width={96} height={96} src="/Homepage/conseil.png" alt='service-conseil' />
              <h2 itemProp='name' className={latoFont.className + " font-semibold text-2xl xm:text-3xl leading-7 text-center text-white"}>Qualité Logicielle</h2>
              <p itemProp='description' className={latoFont.className + " font-medium text-sm xm:text-base leading-5 text-center text-white"}>
                {homepage.conseil}
              </p>
              <Link href={"/conseil"}>
                <div className="flex justify-center items-center rounded-sm bg-white px-5 py-2 cursor-pointer">
                  <h3 className={ibmFont.className + " text-ac-bleu uppercase text-xl font-bold"}>Services</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden">
        <h2 className="">Formation</h2>
        <h2 className="">Cypress</h2>
        <h2 className="">Postman</h2>
        <h2 className="">Robot framework</h2>
        <h2 className="">Robot</h2>
        <h2 className="">Framework</h2>
        <h2 className="">Formation soap ui</h2>
        <h2 className="">Soap UI</h2>
        <h2 className="">SoapUI</h2>
        <h2 className="">Formation automatisation des tests</h2>
        <h2 className="">Automatisation des tests</h2>
        <h2 className="">Automatisation</h2>
        <h2 className="">Tests</h2>
        <h2 className="">Playwright</h2>
        <h2 className="">Selenium</h2>
        <h2 className="">tests api</h2>
        <h2 className="">tests visuel</h2>
      </div>

      {/* Contact Us */}
      <div className="flex flex-col xm:flex-row justify-center items-start gap-8 w-full pt-8 bg-ac-gray -translate-y-6 rounded-t-3xl ">
        <AnimatedElement
          className="flex flex-col justify-start items-center gap-4 w-full"
          type="popup"
          duration={300}
          delay={0}
        >
          <h2 className={montserratBoldFont.className + " font-bold text-4xl text-black text-left"}><span className='text-ac-violet'>Nous</span> Trouver</h2>
          <Image src="/Homepage/hand-drawn-arrow.png" width={96} height={96} alt='Arrow' />
          <iframe
            className='w-[270px] fold:w-80 sm:w-[450px] xm:w-[400px] lg:w-[450px] rounded-2xl box-shadow2 '
            width="450"
            height="600"
            loading="lazy"
            allowFullScreen={true}
            src={googleMapsEmbed}
          ></iframe>
        </AnimatedElement>

        <AnimatedElement
          className="flex flex-col justify-start items-center gap-4 w-full"
          type="popup"
          duration={300}
          delay={300}
        >
          <div className="flex flex-col justify-start items-center gap-4 w-full">
            <h2 className={montserratBoldFont.className + " font-bold text-4xl text-black text-left"}>Contactez-<span className='text-ac-violet'>nous</span></h2>
            <Image src="/Homepage/hand-drawn-arrow2.png" width={96} height={96} alt='Arrow2' />
            <ContactUsForm />
          </div>
        </AnimatedElement>
      </div>

      {/* Footer  */}
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