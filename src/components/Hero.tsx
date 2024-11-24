import { homepage } from '@/content/pages';
import { Jost, K2D, Roboto } from 'next/font/google';

const taglineFont = K2D({ weight: "400", subsets: ['latin'] });
const miniTaglineFont = Roboto({ weight: "400", subsets: ['latin'] });
const buttonFont = Jost({ weight: "400", subsets: ['latin'] });
type Props = {}

export default function Hero({ }: Props) {
    return (
        <div className='relative flex w-full px-1 fold:px-12 xm:px-24 lg:px-36 xl:px-48 py-24 sm:py-20 md:py-24 xm:py-32'>
            <div className="parallax-bg absolute inset-0 h-full bg-fixed bg-center"></div>
            {/* Web Overlay  */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-full z-20 hero-gradient"></div>

            {/* Mobile Overlay  */}
            <div className="md:hidden block absolute top-0 left-0 w-full h-full z-20 hero-gradient-mobile"></div>

            <div className="flex flex-col justify-center items-center gap-12 z-30">
                <div className="flex flex-col justify-center items-start gap-4">
                    <div className="hidden">
                        <h1>Cypress Postman {`Robot framework`} SoapUI {`Automatisation des tests`} Playwright Selenium</h1>
                    </div>
                    <h2 className={taglineFont.className + " max-w-[270px] fold:max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl text-black whitespace-normal text-4xl sm:text-5xl"}>
                        {homepage.tagline}
                    </h2>
                    <h2 className={miniTaglineFont + " text-black text-md sm:text-lg italic max-w-sm md:max-w-md"}>
                        {homepage.subtagline}
                    </h2>
                </div>
                <a href="#services">
                    <div className="flex justify-center items-center bg-purple-600 p-5 max-w-[200px] group hover:bg-transparent border-2 border-purple-600 transition duration-300 cursor-pointer">
                        <p className={buttonFont + " uppercase text-xl font-bold text-white group-hover:text-purple-600 transition duration-300"}>Nos Services</p>
                    </div>
                </a>
            </div>
        </div>
    )
}