"use client";

import { IBM_Plex_Sans_Condensed } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { HiMenuAlt2, HiOutlineArrowRight } from "react-icons/hi";


const ibmFont = IBM_Plex_Sans_Condensed({ weight: "700", subsets: ['latin'] })

type Props = {}

export default function Navbar({ }: Props) {
    const [showMenu, setShowMenu] = useState(false);
    // const [searchBar, setSearchBar] = useState(false);
    return (
        <div className={ibmFont.className + ' flex justify-center items-center w-full bg-white box-shadow sticky top-0 z-50'}>
            <div className="flex justify-between items-center w-11/12 lg:w-10/12 gap- xl:gap-8">
                {/* Hamburger Menu  */}
                <div onClick={() => setShowMenu(prev => !prev)} className="xm:hidden relative border-2 border-ac-violet rounded-md cursor-pointer">
                    <HiMenuAlt2 size={35} color='#644E9B' />
                </div>
                <div className={`xm:hidden flex justify-start items-center absolute top-20 left-0 w-full bg-white transition ${showMenu ? "translate-x-0 duration-300" : "-translate-x-full duration-75"}`}>
                    <ul className="flex flex-col justify-start items-center mx-4 w-full bg-white rounded gap-1 py-2 my-2">
                        <Link className='w-11/12 sm:w-10/12 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer' href={"/formations"}>
                            <p className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 ">Formation</p>
                        </Link>
                        <Link className='w-11/12 sm:w-10/12 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer' href={"/conseil"}>
                            <p className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 ">Conseil</p>
                        </Link>
                        <Link className='w-11/12 sm:w-10/12 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer' href={"/blogs"}>
                            <p className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 ">Blog</p>
                        </Link>
                        <Link href={"/contactez-nous"}>
                            <li className="w-11/12 sm:w-10/12 flex justify-center items-center bg-purple-600 rounded-lg gap-1 py-2.5 px-5 mt-2 cursor-pointer">
                                <p className="text-base uppercase font-bold text-center text-white whitespace-nowrap">Contactez-nous</p>
                                <HiOutlineArrowRight size={25} color='white' />
                            </li>
                        </Link>
                    </ul>
                </div>
                {/* Logo  */}
                <Link href={"/"}>
                    <div className="flex w-36 h-20 overflow-hidden cursor-pointer">
                        <Image className='w-30 h-30 object-cover object-center' src="/icone.png" height={300} width={300} alt='JumpIT' />
                    </div>
                </Link>
                {/* Navs  */}
                <div className="hidden xm:flex justify-start items-center gap-8 xl:gap-8">
                    <Link href={"/formations"}>
                        <p className="text-sm lg:text-base uppercase font-semibold text-center text-black whitespace-nowrap select-none cursor-pointer hover:text-gray-600">Formation</p>
                    </Link>
                    <Link href={"/conseil"}>
                        <p className="text-sm lg:text-base uppercase font-semibold text-center text-black whitespace-nowrap select-none cursor-pointer hover:text-gray-600">Conseil</p>
                    </Link>
                    <Link href={"/blogs"}>
                        <p className="text-sm lg:text-base uppercase font-semibold text-center text-black whitespace-nowrap select-none cursor-pointer hover:text-gray-600">Blog</p>
                    </Link>
                    {/* <p className="text-sm lg:text-base uppercase font-semibold text-center text-black whitespace-nowrap select-none cursor-pointer hover:text-gray-600">Qui sommes-nous?</p> */}
                </div>
                {/* Contactez-nous  */}
                <div className="flex justify-center items-center gap-4">
                    <div className="w-6 flex justify-center items-center cursor-pointer hover:drop-shadow-md"></div>
                    <Link href={"/contactez-nous"}>
                        <div className="hidden xm:flex justify-center items-center bg-purple-600 rounded-full gap-1 py-2.5 px-5 w-fit cursor-pointer">
                            <p className="text-base uppercase font-bold text-center text-white whitespace-nowrap select-none">Contactez-nous</p>
                            <HiOutlineArrowRight size={25} color='white' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}