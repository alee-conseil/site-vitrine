// Change file name to "page.tsx" to get started

"use client";

import AnimatedElement from '@/components/AnimatedElement';
import { footer } from '@/content/general';
import { K2D, Poppins, Roboto } from 'next/font/google';
import Image from 'next/image';
import Script from 'next/script';
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

type Props = {}
const k2d = K2D({ weight: "500", subsets: ["latin"] });
const poppins = Poppins({ weight: "600", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Homepage({ }: Props) {

    return (
        <div className="flex flex-col justify-center items-center w-full bg-ac-gray">
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-6L5ZVZDMVJ" />
            <Script id="google-analytics">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
        
                gtag('config', 'G-6L5ZVZDMVJ');
                `}
            </Script>

            <div className="relative flex flex-col justify-start items-center gap-9 mb-9 w-[95%] md:w-11/12 background-logo">
                <Image src="/logo2.png" className='w-48 xs:w-96 sm:w-[512px] h-48 xs:h-96 sm:h-[512px] absolute opacity-[.03] -rotate-[23deg] left-0 md:left-16 top-36 xs:top-12 z-0' width={512} height={512} alt='Logo2' />
                <div className="flex flex-col justify-start items-center gap-16 w-full px-4 md:px-16 xm:px-24 py-12 sm:py-16 xm:py-24 border-b-2 fold:border-b-4 border-x-2 fold:border-x-4 border-purple-600 rounded-b-3xl z-30">
                    <div className="flex flex-col justify-start items-center gap-10 xs:gap-[75px]">
                        <Image className='w-[374px] h-[187px] object-cover object-center' src="../../public/icone.png" width={374} height={187} alt="JumpIT" />
                        <h1 className={k2d.className + " text-center text-black text-4xl md:text-5xl w-10/12"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris in condimentum
                        </h1>
                    </div>
                    <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-12 md:gap-2">
                        <AnimatedElement type="popup" duration={500} delay={0}>
                            <div className="flex flex-col justify-start items-center md:items-start gap-5 max-w-[250px] cursor-pointer transition duration-300 hover:scale-125">
                                <h2 className={poppins.className + " text-center md:text-left text-4xl text-purple-600"}>Formations</h2>
                                <p className={roboto.className + " text-center md:text-left text-black text-lg italic"}>
                                    Vestibulum consequat augue nec mi rhoncus iaculis
                                </p>
                            </div>
                        </AnimatedElement>
                        <AnimatedElement type="popup" duration={500} delay={500}>
                            <div className="flex flex-col justify-start items-center md:items-end gap-5 max-w-[250px] cursor-pointer transition duration-300 hover:scale-125">
                                <h2 className={poppins.className + " text-center md:text-right text-4xl text-ac-violet"}>Consultant?</h2>
                                <p className={roboto.className + " text-center md:text-right text-black text-lg italic"}>
                                    consectetur adipiscing elit mauris in condimentum consectetur adipiscing
                                </p>
                            </div>
                        </AnimatedElement>
                        <div className="hidden md:block origin-bottom-right scale-y-75 scale-x-150 absolute right-8 -top-[150%]">
                            <AnimatedElement type="popup" delay={500} duration={500}>
                                <Image src="/Homepage2/effect2.svg" width={225} height={243} alt='Homepage' />
                            </AnimatedElement>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-evenly items-center w-full gap-4 z-30">
                    <AnimatedElement type="popup" duration={500} delay={0}>
                        <h3 className={poppins.className + ' text-center md:text-left text-purple-600 text-2xl font-bold w-[250px] fold:w-[300px] transition cursor-pointer group'}>
                            Nos formations
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-purple-600"></span>
                        </h3>
                    </AnimatedElement>
                    <div className="h-1 md:h-6 w-6 md:w-1 bg-black rounded-xl"></div>
                    <AnimatedElement type="popup" duration={500} delay={0}>
                        <h3 className={poppins.className + ' text-center md:text-right text-ac-violet text-2xl font-bold w-[250px] fold:w-[300px] transition cursor-pointer group'}>
                            Je suis un Consultant
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-1 bg-ac-violet"></span>
                        </h3>
                    </AnimatedElement>
                </div>

            </div>
            {/* Footer 2 */}
            <div className="flex justify-center items-center w-full bg-purple-600">
                <div className="flex flex-col md:flex-row justify-start md:justify-between items-center w-full py-6 px-24 gap-6 md:gap-2">
                    <div className="flex justify-center md:justify-start items-center w-[200px] lg:w-[300px]">
                        <Image className='object-cover object-center w-[118px] h-[62px] brightness-150' src="/icone.png" width={118} height={62} alt='JumpIT' />
                    </div>
                    <div className="relative flex justify-center items-center gap-8">
                        <a target='_blank' rel="noopener" href={footer.socialLinks.linkedin} className="flex justify-center items-center">
                            <AiFillLinkedin size={25} color='white' />
                            <div className="w-9 h-9 absolute bg-white opacity-10 rounded-full"></div>
                        </a>
                        <a target='_blank' rel="noopener" href={footer.socialLinks.youtube} className="flex justify-center items-center">
                            <AiFillYoutube size={25} color='white' />
                            <div className="w-9 h-9 absolute bg-white opacity-10 rounded-full"></div>
                        </a>
                    </div>
                    <div className="flex flex-col justify-start items-center md:items-start w-[200px] lg:w-[300px] gap-1.5">
                        <p className="text-sm text-center md:text-left text-white">Copyright © 2023 JumpIT SARL</p>
                        <p className="text-sm text-center md:text-left text-white">Tout droit réservé</p>
                    </div>
                </div>
            </div>
        </div>
    )
}