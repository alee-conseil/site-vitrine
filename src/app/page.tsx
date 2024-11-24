import { IBM_Plex_Sans, Lato, Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Graph } from 'schema-dts';
import AnimatedElement from '../components/AnimatedElement';
import ContactUsForm from '../components/ContactUsForm';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ReturnToTop from '../components/ReturnToTop';
import { pageMetadata } from '../content/general';
import { homepage } from "../content/pages";
import { googleMapsEmbed } from '../utils/constants';

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
      'fr': '/',
    },
  },
  icons: {
    icon: { url: '../../public/icone.png', type: 'image/x-icon', sizes: '48x48' },
    shortcut: [
      {
        url:'../../public/icone.png',
        sizes: '128x128'
      },
      {
        url: ['../../public/icone.png'],
        sizes: '192x192'
      }],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '../../public/icone.png',
        sizes: '180x180'
      },
      {
        rel: 'apple-touch-icon',
        url: '../../public/icone.png',
        sizes: '76x76'
      },
      {
        rel: 'apple-touch-icon',
        url: '../../public/icone.png',
        sizes: '120x120'
      },
      {
        rel: 'apple-touch-icon',
        url: '../../public/icone.png',
        sizes: '152x152'
      },
      {
        rel: 'apple-touch-icon',
        url: '../../public/icone.png',
        sizes: '180x180'
      },
      {
        rel: 'icon',
        url: '../../public/icone.png',
        type: 'image/x-icon',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        url: '../../public/icone.png',
        type: 'image/x-icon',
        sizes: '32x32'
      }
    ],
  },
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    siteName: pageMetadata.siteName,
    url: 'https://www.aleeconseil.com',
    images: {
      url: '../../public/icone.png',
      width: 48,
      height: 48,
    },
    locale: 'fr',
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

const graph: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.aleeconseil.com',
      inLanguage: 'fr',
      name: 'JumpIT',
      alternateName: 'JumpIT',
      url: 'https://www.aleeconseil.com',
      offers: [
        {
          '@type': 'Offer',
          name: 'Formations',
          description: 'Nous proposons des formations en différentes technologies en automatisation des tests'
        },
        {
          '@type': 'Offer',
          name: 'Qualité Logicielle',
          description: 'Nous vous aidons à accroitre votre confiance dans la qualité de vos produits logiciels'
        },
      ],
      author: {
        '@type': 'Organization',
        name: 'JumpIT',
        image: '/icones.png',
        legalName: 'JumpIT',
        logo: '/icones.png',
        url: 'https://www.aleeconseil.com',
        keywords: ['Formation', 'Conseil', 'Blog', 'Contact'],
        address: 'Rue Al Borj, Résidence Zineb, Appt12, Rabat 10020, Maroc',
        telephone: '+212 6 62 88 28 41',
        email: 'contact@aleeconseil.com'
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          name: 'JumpIT - Formations',
          item: 'https://www.aleeconseil.com/formations',
          position: 1
        },
        {
          '@type': 'ListItem',
          name: 'JumpIT - Conseil',
          item: 'https://www.aleeconseil.com/conseil',
          position: 2
        },
        {
          '@type': 'ListItem',
          name: 'JumpIT - Blogs',
          item: 'https://www.aleeconseil.com/blogs',
          position: 3
        },
        {
          '@type': 'ListItem',
          name: 'Contactez-nous',
          item: 'https://www.aleeconseil.com/contactez-nous',
          position: 4
        },
      ]
    }
  ]
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-ac-gray w-full">
      {/* Add Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      {/* Add Google search console config */}
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
      <div id='services' className="flex justify-center items-center bg-purple-600 rounded-t-3xl w-full pb-28 px-4 pt-20">
        <div className="flex flex-col justify-start items-center gap-8 xm:gap-16">
          <h2 className={montserratFont.className + " font-medium text-4xl xm:text-5xl text-center text-white"}>Nos Services</h2>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-20 md:gap-56">

            {/* Formations Service  */}
            <div className="flex flex-col justify-start items-center gap-4 max-w-[236px] ">
              <Image className='w-24 h-24' width={96} height={96} src="/Homepage/formations.png" alt='Cypress Postman ...' />
              <h2 className={latoFont.className + " font-semibold text-2xl xm:text-3xl leading-7 text-center text-white"}>Formation</h2>
              <p className={latoFont.className + " font-medium text-sm xm:text-base leading-5 text-center text-white"}>
                {homepage.formations}
              </p>
              <Link href={"/formations"}>
                <div className="flex justify-center items-center rounded-sm bg-white px-5 py-2 cursor-pointer">
                  <h3 className={ibmFont.className + " text-purple-600 uppercase text-xl font-bold"}>Catalogue</h3>
                </div>
              </Link>
            </div>
            {/* Conseil Service  */}
            <div className="flex flex-col justify-start items-center gap-4 max-w-[236px]">
              <Image className='w-24 h-24' width={96} height={96} src="/Homepage/conseil.png" alt='Conseil Automatisation ...' />
              <h2 className={latoFont.className + " font-semibold text-2xl xm:text-3xl leading-7 text-center text-white"}>Qualité Logicielle</h2>
              <p className={latoFont.className + " font-medium text-sm xm:text-base leading-5 text-center text-white"}>
                {homepage.conseil}
              </p>
              <Link href={"/conseil"}>
                <div className="flex justify-center items-center rounded-sm bg-white px-5 py-2 cursor-pointer">
                  <h3 className={ibmFont.className + " text-purple-600 uppercase text-xl font-bold"}>Services</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="flex flex-col xm:flex-row justify-center items-start gap-8 w-full pt-8 bg-ac-gray -translate-y-6 rounded-t-3xl ">
        <AnimatedElement
          className="flex flex-col justify-start items-center gap-4 w-full"
          type="popup"
          duration={300}
          delay={0}
        >
          <h2 className={montserratBoldFont.className + " font-bold text-4xl text-black text-left"}><span className='text-purple-600'>Nous</span> Trouver</h2>
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
            <h2 className={montserratBoldFont.className + " font-bold text-4xl text-black text-left"}>Contactez-<span className='text-purple-600 '>nous</span></h2>
            <Image src="/Homepage/hand-drawn-arrow2.png" width={96} height={96} alt='Arrow2' />
            <ContactUsForm />
          </div>
        </AnimatedElement>
      </div>

      <div className="flex flex-col justify-center items-center w-full mx-8 mt-16 mb-8 gap-8 xm:gap-16">
        <b className={montserratFont.className + " font-medium text-4xl xm:text-5xl text-center text-purple-600"}>Ils Nous Font Confiance</b>
        <div className="grid grid-cols-1 sm:grid-cols-2 xm:grid-cols-3 gap-4 justify-items-center items-center justify-center">
          <div className="h-[150px] w-[280px] fold:w-[330px] xm:w-[280px] lg:w-[330px]  flex justify-center items-center bg-neutral-200 cursor-pointer group">
            <Image className='grayscale group-hover:grayscale-0 transition duration-200 my-2' src="/trustBy/RAJA.png" width={200} height={150} alt='RAJA' />
          </div>
          <div className="h-[150px] w-[280px] fold:w-[330px] xm:w-[280px] lg:w-[330px]  flex justify-center items-center bg-neutral-200 cursor-pointer group">
            <Image className='grayscale group-hover:grayscale-0 cursor-pointer transition duration-200 my-2' src="/trustBy/SITENCO.png" width={200} height={150} alt='SITENCO' />
          </div>
          <div className="h-[150px] w-[280px] fold:w-[330px] xm:w-[280px] lg:w-[330px]  flex justify-center items-center bg-neutral-200 cursor-pointer group">
            <Image className='grayscale group-hover:grayscale-0 cursor-pointer transition duration-200 my-2' src="/trustBy/ATA.png" width={150} height={150} alt='ATA' />
          </div>
          <div className="h-[150px] w-[280px] fold:w-[330px] xm:w-[280px] lg:w-[330px]  flex justify-center items-center bg-neutral-200 cursor-pointer group">
            <Image className='grayscale group-hover:grayscale-0 cursor-pointer transition duration-200 my-2' src="/trustBy/3ISCHOOL.png" width={200} height={150} alt='3ISCHOOL' />
          </div>
          <div className="h-[150px] w-[280px] fold:w-[330px] xm:w-[280px] lg:w-[330px]  lg:col-start-2 flex justify-center items-center bg-neutral-200 cursor-pointer group">
            <Image className='grayscale group-hover:grayscale-0 cursor-pointer transition duration-200 my-2' src="/trustBy/WERINGROUP.png" width={200} height={150} alt='WERINGROUP' />
          </div>
          <div className="h-[150px] w-[280px] fold:w-[330px] xm:w-[280px] lg:w-[330px]  lg:col-start-3 flex justify-center items-center bg-neutral-200 cursor-pointer group">
            <Image className='grayscale group-hover:grayscale-0 cursor-pointer transition duration-200 my-2' src="/trustBy/WILDCODESCHOOL.png" width={200} height={150} alt='WILDCODESCHOOL' />
          </div>
        </div>
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

      <div className="hidden">
        <p>JumpIT</p>
        <p>JumpIT</p>
        <p>JumpIT</p>
        <h2><strong>{`Formation Cypress`}</strong></h2>
        <h2><strong>{`Formation Postman`}</strong></h2>
        <h2><strong>{`Cypress Formation`}</strong></h2>
        <h2><strong>{`Tests api`}</strong></h2>
        <h2><strong>{`Tests Cypress`}</strong></h2>
        <h2><strong>{`Formation Robot framework`}</strong></h2>
      </div>
      <div className="hidden">
        <h3>{`Cypress`}</h3>
        <h3>{`Postman`}</h3>
        <h3>{`Cypress Formation`}</h3>
        <h3>{`Robot framework`}</h3>
        <h3>{`Selenium`}</h3>
        <h3>{`SoapUI`}</h3>
        <h3>{`Playwright`}</h3>
        <h3>{`Tests api`}</h3>
        <h3>{`Tests visuel`}</h3>
        <h3>{`Automatisation des tests`}</h3>
      </div>
    </div>
  )
}