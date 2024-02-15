import React from 'react'
import { IoArrowUndo } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { SiWindows10 } from "react-icons/si";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { Disclosure } from '@headlessui/react';

const SelectCategory = () => {
    return (
        <>
            <div className="header w-full h-20 bg-gray-200 flex items-center px-8">
                <Link to=''>
                    <IoArrowUndo className='size-6'/>
                </Link>
            </div>
            <div className="max-w-screen-lg mx-auto my-5">
                <div className="header font-bold text-2xl text-center bg-black text-white rounded-lg py-4">
                    POST YOUR AD
                </div>
                <div className="border border-gray-400 p-4 rounded-lg mt-8">
                    <div className='text-lg font-semibold  rounded-lg p-2'>CHOOSE A CATEGORY</div>
                    <Disclosure>
                        <Disclosure.Button className="w-full">
                            <div className='flex items-center w-full bg-white shadow p-4 mt-4 rounded-lg border-b-2 border-black'>
                                <div className="flex-none">
                                    <SiWindows10 className='size-8'/>
                                </div>
                                <div className="grow text-start">
                                    <div className='text-base font-bold ms-5'>Windows</div>
                                </div>
                                <div className="flex-none">
                                    <BsArrowDownSquareFill className='size-8'/>
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className='py-4 flex gap-4'>
                                <Link to='/selected-category' className='text-white w-auto bg-black border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Laptop</Link>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Pc</Link>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Sper Parts</Link>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="w-full">
                            <div className='flex items-center w-full bg-white shadow p-4 mt-4 rounded-lg border-b-2 border-black'>
                                <div className="flex-none">
                                    <SiWindows10 className='size-8'/>
                                </div>
                                <div className="grow text-start">
                                    <div className='text-base font-bold ms-5'>Mac</div>
                                </div>
                                <div className="flex-none">
                                    <BsArrowDownSquareFill className='size-8'/>
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className='py-4 flex gap-4'>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>MacBook</Link>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>IMac</Link>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Sper Parts</Link>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="w-full">
                            <div className='flex items-center w-full bg-white shadow p-4 mt-4 rounded-lg border-b-2 border-black'>
                                <div className="flex-none">
                                    <SiWindows10 className='size-8'/>
                                </div>
                                <div className="grow text-start">
                                    <div className='text-base font-bold ms-5'>Chromebook</div>
                                </div>
                                <div className="flex-none">
                                    <BsArrowDownSquareFill className='size-8'/>
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className='py-4 flex gap-4'>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Specification</Link>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="w-full">
                            <div className='flex items-center w-full bg-white shadow p-4 mt-4 rounded-lg border-b-2 border-black'>
                                <div className="flex-none">
                                    <SiWindows10 className='size-8'/>
                                </div>
                                <div className="grow text-start">
                                    <div className='text-base font-bold ms-5'>Mobile</div>
                                </div>
                                <div className="flex-none">
                                    <BsArrowDownSquareFill className='size-8'/>
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className='py-4 flex gap-4'>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>iPhone</Link>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Android</Link>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="w-full">
                            <div className='flex items-center w-full bg-white shadow p-4 mt-4 rounded-lg border-b-2 border-black'>
                                <div className="flex-none">
                                    <SiWindows10 className='size-8'/>
                                </div>
                                <div className="grow text-start">
                                    <div className='text-base font-bold ms-5'>Tablets</div>
                                </div>
                                <div className="flex-none">
                                    <BsArrowDownSquareFill className='size-8'/>
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className='py-4 flex gap-4'>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Android</Link>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Ipad</Link>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Windows</Link>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="w-full">
                            <div className='flex items-center w-full bg-white shadow p-4 mt-4 rounded-lg border-b-2 border-black'>
                                <div className="flex-none">
                                    <SiWindows10 className='size-8'/>
                                </div>
                                <div className="grow text-start">
                                    <div className='text-base font-bold ms-5'>Photocopy Machine</div>
                                </div>
                                <div className="flex-none">
                                    <BsArrowDownSquareFill className='size-8'/>
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className='py-4 flex gap-4'>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Specification</Link>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                    <Disclosure>
                        <Disclosure.Button className="w-full">
                            <div className='flex items-center w-full bg-white shadow p-4 mt-4 rounded-lg border-b-2 border-black'>
                                <div className="flex-none">
                                    <SiWindows10 className='size-8'/>
                                </div>
                                <div className="grow text-start">
                                    <div className='text-base font-bold ms-5'>Servers</div>
                                </div>
                                <div className="flex-none">
                                    <BsArrowDownSquareFill className='size-8'/>
                                </div>
                            </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                            <div className='py-4 flex gap-4'>
                                <Link to='' className='text-white w-auto bg-black border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Specification</Link>
                            </div>
                        </Disclosure.Panel>
                    </Disclosure>
                </div>
            </div>
        </>
    )
}

export default SelectCategory