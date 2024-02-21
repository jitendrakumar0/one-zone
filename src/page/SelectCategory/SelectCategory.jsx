import React from 'react'
import { Link } from 'react-router-dom';
import { BsApple, BsArrowDownSquareFill, BsBrowserChrome, BsFillPrinterFill } from "react-icons/bs";
import { Disclosure } from '@headlessui/react';
import Header from '../../sellerPage/components/header/Header';
import { GrWindows } from 'react-icons/gr';
import { FaMobile, FaServer } from 'react-icons/fa6';
import Footer from '../../components/Footer/Footer';

const SelectCategory = () => {
    return (
        <>
        <Header/>
            <div className="max-w-screen-md  mx-auto my-5 px-4">
                <div className="header font-bold text-xl md:text-2xl text-center bg-black text-theme1 rounded-lg py-2 md:py-4">
                    Add Your Product
                </div>
                <div className="border border-gray-400 p-4 rounded-lg mt-8">
                    <div className='text-lg font-semibold  rounded-lg p-2'>CHOOSE A CATEGORY</div>
                    <Disclosure>
                        <Disclosure.Button className="w-full">
                            <div className='flex items-center w-full bg-white shadow p-4 mt-4 rounded-lg border-b-2 border-black'>
                                <div className="flex-none">
                                    <GrWindows className='sm:size-8 size-6'/>
                                </div>
                                <div className="grow text-start">
                                    <div className='text-base font-bold ms-5'>Windows</div>
                                </div>
                                <div className="flex-none">
                                    <BsArrowDownSquareFill className='sm:size-8 size-6'/>
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className='py-4 flex gap-4'>
                                <Link to='/edit-productdetail' className='text-white w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Laptop</Link>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Pc</Link>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Sper Parts</Link>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="w-full">
                            <div className='flex items-center w-full bg-white shadow p-4 mt-4 rounded-lg border-b-2 border-black'>
                                <div className="flex-none">
                                    <BsApple className='sm:size-8 size-6'/>
                                </div>
                                <div className="grow text-start">
                                    <div className='text-base font-bold ms-5'>Mac</div>
                                </div>
                                <div className="flex-none">
                                    <BsArrowDownSquareFill className='sm:size-8 size-6'/>
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className='py-4 flex gap-4'>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>MacBook</Link>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>IMac</Link>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Sper Parts</Link>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="w-full">
                            <div className='flex items-center w-full bg-white shadow p-4 mt-4 rounded-lg border-b-2 border-black'>
                                <div className="flex-none">
                                    <BsBrowserChrome className='sm:size-8 size-6'/>
                                </div>
                                <div className="grow text-start">
                                    <div className='text-base font-bold ms-5'>Chromebook</div>
                                </div>
                                <div className="flex-none">
                                    <BsArrowDownSquareFill className='sm:size-8 size-6'/>
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className='py-4 flex gap-4'>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Specification</Link>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="w-full">
                            <div className='flex items-center w-full bg-white shadow p-4 mt-4 rounded-lg border-b-2 border-black'>
                                <div className="flex-none">
                                    <FaMobile className='sm:size-8 size-6'/>
                                </div>
                                <div className="grow text-start">
                                    <div className='text-base font-bold ms-5'>Mobile</div>
                                </div>
                                <div className="flex-none">
                                    <BsArrowDownSquareFill className='sm:size-8 size-6'/>
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className='py-4 flex gap-4'>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>iPhone</Link>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Android</Link>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="w-full">
                            <div className='flex items-center w-full bg-white shadow p-4 mt-4 rounded-lg border-b-2 border-black'>
                                <div className="flex-none">
                                    <FaMobile className='sm:size-8 size-6'/>
                                </div>
                                <div className="grow text-start">
                                    <div className='text-base font-bold ms-5'>Mob & Tab</div>
                                </div>
                                <div className="flex-none">
                                    <BsArrowDownSquareFill className='sm:size-8 size-6'/>
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className='py-4 flex gap-4'>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Android</Link>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Ipad</Link>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Windows</Link>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="w-full">
                            <div className='flex items-center w-full bg-white shadow p-4 mt-4 rounded-lg border-b-2 border-black'>
                                <div className="flex-none">
                                    <BsFillPrinterFill className='sm:size-8 size-6'/>
                                </div>
                                <div className="grow text-start">
                                    <div className='text-base font-bold ms-5'>Photocopy Machine</div>
                                </div>
                                <div className="flex-none">
                                    <BsArrowDownSquareFill className='sm:size-8 size-6'/>
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className='py-4 flex gap-4'>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Specification</Link>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="w-full">
                            <div className='flex items-center w-full bg-white shadow p-4 mt-4 rounded-lg border-b-2 border-black'>
                                <div className="flex-none">
                                    <FaServer className='sm:size-8 size-6'/>
                                </div>
                                <div className="grow text-start">
                                    <div className='text-base font-bold ms-5'>Servers</div>
                                </div>
                                <div className="flex-none">
                                    <BsArrowDownSquareFill className='sm:size-8 size-6'/>
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className='py-4 flex gap-4'>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Specification</Link>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SelectCategory