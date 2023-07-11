import { Lato, Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillLinkedin, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import { PiMapPinLine } from "react-icons/pi";
import { TbMailFilled } from "react-icons/tb";


const latoFont = Lato({ weight: "400", subsets: ['latin'] });
const robotoFont = Roboto({ weight: "400", subsets: ['latin'] });

type Props = {}

export default function Footer({ }: Props) {
    return (
        <>
            <div id='footer' className='hidden bg-ac-violet rounded-t-[25px] w-full md:flex justify-between items-stretch py-12 px-6 xm:px-24 lg:px-36 xl:px-48 gap-4'>
                <div className="flex flex-col justify-between items-start">
                    <div className="w-full flex justify-start items-center">
                        {/* Logo  */}
                        <Image className='w-36 h-20 object-cover object-center brightness-150' src="/logo.png" height={400} width={400} alt='AleeConseil' />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <p className="text-sm text-white">Copyright © 2023 Alee Conseil SARL</p>
                        <p className="text-sm text-white">Tout droit réservé</p>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-12">
                    <div className="flex flex-col justify-start items-stretch gap-4">
                        <p className={latoFont + "text-sm font-semibold text-white uppercase"}>Alee Conseil</p>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <p className={robotoFont + "text-sm font-light text-white"}>Qui sommes-nous?</p>
                            <Link href={"/blogs"}><p className={robotoFont + "text-sm font-light text-white"}>Blog</p></Link>
                            <Link href={"/consultez-nous"}><p className={robotoFont + "text-sm font-light text-white"}>Prenez un rendez-vous</p></Link>
                            <Link href={"/formations"}><p className={robotoFont + "text-sm font-light text-white"}>Formations</p></Link>
                            <Link href={"/consulting"}><p className={robotoFont + "text-sm font-light text-white"}>Consultations</p></Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-stretch gap-8">
                        <div className="flex flex-col justify-start items-stretch gap-4">
                            <div className="flex justify-start items-center gap-3">
                                <PiMapPinLine size={20} color='white' />
                                <p className={robotoFont + "text-sm font-light text-white whitespace-normal max-w-[180px]"}>49, avenue de Pichon 66366 Saint Éric</p>
                            </div>
                            <div className="flex justify-start items-center gap-3">
                                <MdOutlinePhone size={20} color='white' />
                                <p className={robotoFont + "text-sm font-light text-white whitespace-normal max-w-[180px]"}>+33 5 18 19 48 92</p>
                            </div>
                            <div className="flex justify-start items-center gap-3">
                                <TbMailFilled size={20} color='white' />
                                <p className={robotoFont + "text-sm font-light text-white whitespace-normal max-w-[180px]"}>lorem@company.ma</p>
                            </div>
                        </div>
                        <div className="relative flex justify-between items-center gap-4">
                            <div className="flex justify-center items-center">
                                <AiOutlineInstagram size={25} color='white' />
                                <div className="w-9 h-9 absolute bg-white opacity-10 rounded-full"></div>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiFillLinkedin size={25} color='white' />
                                <div className="w-9 h-9 absolute bg-white opacity-10 rounded-full"></div>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiOutlineTwitter size={25} color='white' />
                                <div className="w-9 h-9 absolute bg-white opacity-10 rounded-full"></div>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiFillYoutube size={25} color='white' />
                                <div className="w-9 h-9 absolute bg-white opacity-10 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Version  */}
            <div className='md:hidden bg-ac-violet rounded-t-[25px] w-full flex flex-col justify-between items-stretch py-12 px-6 xm:px-24 lg:px-36 xl:px-48 gap-4'>
                <div className="w-full flex justify-center items-center">
                    {/* Logo  */}
                    <Image className='w-36 h-20 object-cover object-center brightness-150' src="/logo.png" height={400} width={400} alt='AleeConseil' />
                </div>
                <div className="flex flex-col justify-end items-center gap-16">
                    <div className="flex flex-col justify-start items-stretch gap-4">
                        <div className="flex flex-col justify-start items-start gap-2">
                            <p className={robotoFont + "text-sm font-light text-white"}>Qui sommes-nous?</p>
                            <Link href={"/blogs"}><p className={robotoFont + "text-sm font-light text-white"}>Blog</p></Link>
                            <Link href={"/consultez-nous"}><p className={robotoFont + "text-sm font-light text-white"}>Prenez un rendez-vous</p></Link>
                            <Link href={"/formations"}><p className={robotoFont + "text-sm font-light text-white"}>Formations</p></Link>
                            <Link href={"/consulting"}><p className={robotoFont + "text-sm font-light text-white"}>Consultations</p></Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-stretch gap-8">
                        <div className="flex flex-col justify-start items-stretch gap-4">
                            <div className="flex justify-start items-center gap-3">
                                <PiMapPinLine size={20} color='white' />
                                <p className={robotoFont + "text-sm font-light text-white whitespace-normal max-w-[180px]"}>49, avenue de Pichon 66366 Saint Éric</p>
                            </div>
                            <div className="flex justify-start items-center gap-3">
                                <MdOutlinePhone size={20} color='white' />
                                <p className={robotoFont + "text-sm font-light text-white whitespace-normal max-w-[180px]"}>+33 5 18 19 48 92</p>
                            </div>
                            <div className="flex justify-start items-center gap-3">
                                <TbMailFilled size={20} color='white' />
                                <p className={robotoFont + "text-sm font-light text-white whitespace-normal max-w-[180px]"}>lorem@company.ma</p>
                            </div>
                        </div>
                        <div className="relative flex justify-between items-center gap-4">
                            <div className="flex justify-center items-center">
                                <AiOutlineInstagram size={25} color='white' />
                                <div className="w-9 h-9 absolute bg-white opacity-10 rounded-full"></div>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiFillLinkedin size={25} color='white' />
                                <div className="w-9 h-9 absolute bg-white opacity-10 rounded-full"></div>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiOutlineTwitter size={25} color='white' />
                                <div className="w-9 h-9 absolute bg-white opacity-10 rounded-full"></div>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiFillYoutube size={25} color='white' />
                                <div className="w-9 h-9 absolute bg-white opacity-10 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center my-8">
                    <p className="text-sm text-white">Copyright © 2023 Alee Conseil SARL</p>
                    <p className="text-sm text-white">Tout droit réservé</p>
                </div>
            </div>
        </>
    )
}