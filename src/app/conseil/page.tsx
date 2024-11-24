import { Lato, Montserrat, Poppins } from 'next/font/google';
import Image from 'next/image';
import AnimatedElement from '../../components/AnimatedElement';
import ConseilCurvyLine from '../../components/Conseil/ConseilCurvyLine';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ReturnToTop from '../../components/ReturnToTop';
import { pageMetadata } from '../../content/general';
import { conseil } from '../../content/pages';
import Script from 'next/script';

const montserratFont = Montserrat({ subsets: ["latin"] })
const latoFont = Lato({ weight: "400", subsets: ["latin"] })
const poppinsFont = Poppins({ weight: "600", subsets: ["latin"] })

export const metadata = {
  title: "JumpIT - Conseil",
  description: pageMetadata.description,
  metadataBase: new URL(pageMetadata.baseUrl),
  alternates: {
    canonical: '/conseil',
    languages: {
      'fr': '/conseil',
    },
  },
  icons: {
    icon: { url: '/icones.png', type: 'image/x-icon', sizes: '48x48' },
    shortcut: [
      {
        url: '/icones.png',
        sizes: '128x128'
      },
      {
        url: '/icones.png',
        sizes: '192x192'
      }],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/icones.png',
        sizes: '180x180'
      },
      {
        rel: 'apple-touch-icon',
        url: '/icones.png',
        sizes: '76x76'
      },
      {
        rel: 'apple-touch-icon',
        url: '/icones.png',
        sizes: '120x120'
      },
      {
        rel: 'apple-touch-icon',
        url: '/icones.png',
        sizes: '152x152'
      },
      {
        rel: 'apple-touch-icon',
        url: '/icones.png',
        sizes: '180x180'
      },
      {
        rel: 'icon',
        url: '/icones.png',
        type: 'image/x-icon',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        url: '/icones.png',
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
      url: '/icones.png',
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

type Props = {}

export default function Conseil({ }: Props) {
  return (
    <div className="flex flex-col justify-between items-center bg-ac-gray w-full min-h-[100vh]">
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
      <div className="flex flex-col justify-start items-center bg-ac-gray w-full">
        <Navbar />
        {/* Conseil Page Hero */}
        <div className="flex justify-center sm:justify-end items-center w-full relative">
          {/* Parallax Background */}
          <div className="parallax-conseil absolute inset-0 bg-fixed bg-center"></div>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full z-20 bg-[#00000050]"></div>
          <a href='#formations' className="flex flex-col justify-start items-center mt-20 mb-24 mx-4 sm:mr-[10%] xm:mr-[15%] rounded-xl bg-purple-600 gap-3 py-3 px-4 sm:py-6 sm:px-8 xm:px-12 z-30">
            <h1 className={montserratFont.className + " text-3xl sm:text-4xl xm:text-5xl font-medium text-white text-center max-w-[270px] fold:max-w-[350px] xs:max-w-xs"}>
              Conseil
            </h1>
            <h2 className={latoFont.className + " text-xs sm:text-sm xm:text-base font-medium text-white text-center max-w-[300px] sm:max-w-sm"}>
              {conseil.hero}
            </h2>
          </a>
        </div>
        <div className="hidden">
          <h2><strong>Consultation</strong></h2>
          <h2><strong>Audit</strong></h2>
          <h2><strong>Prestation</strong></h2>
          <h2><strong>Off-Shore</strong></h2>
          <h2><strong>Qualité Logicielle</strong></h2>
          <h2><strong>{`Qualité Logicielle`}</strong></h2>

          <h2 className=""><strong>{`Formation Cypress`}</strong></h2>
          <h2 className=""><strong>{`Formation Postman`}</strong></h2>
          <h2 className=""><strong>{`Cypress Formation`}</strong></h2>
          <h2 className=""><strong>{`Tests api`}</strong></h2>
          <h2 className=""><strong>{`Tests Cypress`}</strong></h2>
          <h2 className=""><strong>{`Formation Robot framework`}</strong></h2>
        </div>
        {/* Offres de Consultations */}
        <div className="w-full flex flex-col justify-start items-center gap-16 rounded-t-3xl -translate-y-5 z-30 bg-ac-gray pt-14 pb-36 px-10 md:px-20">
          <div className="flex justify-center items-center w-full relative">
            <div className="flex justify-center items-center bg-ac-gray z-20 p-2 xm:p-4">
              <h2 className={montserratFont.className + " text-purple-600 text-3xl xm:text-5xl font-semibold text-center"}>Nos offres de Consultation</h2>
            </div>
            <div className="absolute w-full h-px bg-purple-600 z-10"></div>
          </div>
          <ConseilCurvyLine />
          {/* Liste des Offres */}
          <div className="w-full flex flex-col justify-start items-center gap-40">
            {/* Offre 1 */}
            <div className="flex flex-row justify-center sm:justify-between items-center sm:mr-4 md:mr-10 xm:mr-20 w-full gap-4">
              <AnimatedElement type='from-left' duration={500} delay={0}>
                <Image className='hidden sm:block max-w-xs lg:max-w-md max-h-72 xm:max-h-60 lg:max-h-72 object-contain object-center' src="/Conseil/cloud.png" width={448} height={288} alt='audit' />
              </AnimatedElement>
              <div className="flex flex-col justify-center items-center gap-8 sm:gap-16">
                <h2 className={poppinsFont.className + " font-semibold text-center text-4xl text-black"}><strong>Audit</strong></h2>
                <Image className='sm:hidden w-full max-w-sm max-h-60 object-contain object-center' src="/Conseil/cloud.png" width={448} height={288} alt='Audit' />
                <h2 className={montserratFont.className + " text-base text-black text-center font-medium w-full max-w-sm sm:max-w-md"}>
                  <strong>{conseil.audit}</strong>
                </h2>
              </div>
            </div>
            {/* Offre 2 */}
            <div className="flex flex-row-reverse justify-center sm:justify-between items-center sm:ml-4 md:ml-10 xm:ml-20 w-full gap-4">
              <AnimatedElement type='from-left' duration={500} delay={0}>
                <Image className='hidden sm:block max-w-xs lg:max-w-md max-h-72 xm:max-h-60 lg:max-h-72 object-contain object-center' src="/Conseil/cyber-security.png" width={448} height={288} alt='prestation' />
              </AnimatedElement>
              <div className="flex flex-col justify-center items-center gap-8 sm:gap-16">
                <h2 className={poppinsFont.className + " font-semibold text-center text-4xl text-black"}><strong>Prestation</strong></h2>
                <Image className='sm:hidden w-full max-w-sm max-h-72 object-contain object-center' src="/Conseil/cyber-security.png" width={448} height={288} alt='Prestation' />
                <h3 className={montserratFont.className + " text-base text-black text-center font-medium w-full max-w-sm sm:max-w-md"}>
                  <strong>{conseil.prestation}</strong>
                </h3>
              </div>
            </div>
            {/* Offre 3 */}
            <div className="flex flex-row justify-center sm:justify-between items-center sm:mr-4 md:mr-10 xm:mr-20 w-full gap-4">
              <AnimatedElement type='from-left' duration={500} delay={0}>
                <Image className='hidden sm:block max-w-sm lg:max-w-md max-h-72 xm:max-h-60 lg:max-h-72 object-contain object-center' src="/Conseil/testing.png" width={448} height={288} alt='off-shore' />
              </AnimatedElement>
              <div className="flex flex-col justify-center items-center gap-8 sm:gap-16">
                <h2 className={poppinsFont.className + " font-semibold text-center text-4xl text-black"}><strong>Off-Shore</strong></h2>
                <Image className='sm:hidden w-full max-w-sm max-h-72 object-contain object-center' src="/Conseil/testing.png" width={448} height={288} alt='Off-shore' />
                <h3 className={montserratFont.className + " text-base text-black text-center font-medium w-full max-w-sm sm:max-w-md"}>
                  <strong>{conseil.offshore}</strong>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}