import { footer } from '@/content/general';

import { Lato, Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import { PiMapPinLine } from "react-icons/pi";
import { TbMailFilled } from "react-icons/tb";


const latoFont = Lato({ weight: "400", subsets: ['latin'] });
const robotoFont = Roboto({ weight: "400", subsets: ['latin'] });

type Props = {}

export default function Footer({ }: Props) {
    return (
        <>
            <div id='footer' className='hidden translate-y-1 bg-purple-600 rounded-t-[25px] w-full md:flex justify-between items-stretch py-12 px-6 xm:px-24 lg:px-36 xl:px-48 gap-4'>
                <div className="flex flex-col justify-between items-start">
                    <div className="w-full flex justify-start items-center">
                        {/* Logo  */}
                        <Image className='w-30 h-30 object-contain object-center brightness-150' src="/logo.png" height={200} width={200} alt='Alee Conseil' />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <p className="text-sm text-white">{footer.copyright1}</p>
                        <p className="text-sm text-white">{footer.copyright2}</p>
                    </div>
                </div>
                <div className="flex justify-end items-start gap-12">
                    <div className="flex flex-col justify-start items-stretch gap-4">
                        <p className={latoFont + "text-sm font-semibold text-white uppercase"}>Alee Conseil</p>
                        <div className="flex flex-col justify-start items-start gap-2">
                            {/* <p className={robotoFont + "text-sm font-light text-white"}>Qui sommes-nous?</p> */}
                            <Link href={"/formations"}><p className={robotoFont + "text-sm font-light text-white"}>Formation</p></Link>
                            <Link href={"/conseil"}><p className={robotoFont + "text-sm font-light text-white"}>Conseil</p></Link>
                            <Link href={"/blogs"}><p className={robotoFont + "text-sm font-light text-white"}>Blog</p></Link>
                            <Link href={"/contactez-nous"}><p className={robotoFont + "text-sm font-light text-white"}>Contact</p></Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-stretch gap-8">
                        <div className="flex flex-col justify-start items-stretch gap-4">
                            <div className="flex justify-start items-center gap-3">
                                <PiMapPinLine size={20} color='white' />
                                <p className={robotoFont + "text-sm font-light text-white whitespace-normal max-w-[180px]"}>
                                    {footer.address}
                                </p>
                            </div>
                            <div className="flex justify-start items-center gap-3">
                                <MdOutlinePhone size={20} color='white' />
                                <a href={"tel:" + footer.phone} className={robotoFont + "text-sm font-light text-white whitespace-normal max-w-[180px]"}>
                                    {footer.phone}
                                </a>
                            </div>
                            <div className="flex justify-start items-center gap-3">
                                <TbMailFilled size={20} color='white' />
                                <a href={"mailto:" + footer.email} className={robotoFont + "text-sm font-light text-white whitespace-normal max-w-[180px]"}>
                                    {footer.email}
                                </a>
                            </div>
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
                    </div>
                </div>
            </div>

            {/* Mobile Version  */}
            <div className='md:hidden bg-ac-violet rounded-t-[25px] w-full flex flex-col justify-between items-stretch py-8 px-6 xm:px-24 lg:px-36 xl:px-48 gap-4'>
                <div className="w-full flex justify-center items-center">
                    {/* Logo  */}
                    <Image className='w-30 h-30 object-contain object-center brightness-150' src="/logo.png" height={200} width={200} alt='Alee Conseil-mobile' />
                </div>
                <div className="flex flex-col justify-end items-center gap-16">
                    <div className="flex flex-col justify-start items-stretch gap-4">
                        <p className={latoFont + "text-sm font-semibold text-white uppercase"}>Alee Conseil</p>
                        <div className="flex flex-col justify-start items-start gap-2">
                            {/* <p className={robotoFont + "text-sm font-light text-white"}>Qui sommes-nous?</p> */}
                            <Link href={"/formations"}><p className={robotoFont + "text-sm font-light text-white"}>Formation</p></Link>
                            <Link href={"/conseil"}><p className={robotoFont + "text-sm font-light text-white"}>Conseil</p></Link>
                            <Link href={"/blogs"}><p className={robotoFont + "text-sm font-light text-white"}>Blog</p></Link>
                            <Link href={"/contactez-nous"}><p className={robotoFont + "text-sm font-light text-white"}>Contact</p></Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-stretch gap-8">
                        <div className="flex flex-col justify-start items-stretch gap-4">
                            <div className="flex justify-start items-center gap-3">
                                <PiMapPinLine size={20} color='white' />
                                <p className={robotoFont + "text-sm font-light text-white whitespace-normal max-w-[180px]"}>
                                    {footer.address}
                                </p>
                            </div>
                            <div className="flex justify-start items-center gap-3">
                                <MdOutlinePhone size={20} color='white' />
                                <a href={"tel:" + footer.phone} className={robotoFont + "text-sm font-light text-white whitespace-normal max-w-[180px]"}>
                                    {footer.phone}
                                </a>
                            </div>
                            <div className="flex justify-start items-center gap-3">
                                <TbMailFilled size={20} color='white' />
                                <a href={"mailto:" + footer.email} className={robotoFont + "text-sm font-light text-white whitespace-normal max-w-[180px]"}>
                                    {footer.email}
                                </a>
                            </div>
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
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-8 mb-2">
                    <p className="text-sm text-white">{footer.copyright1}</p>
                    <p className="text-sm text-white">{footer.copyright2}</p>
                </div>
            </div>
        </>
    )
}