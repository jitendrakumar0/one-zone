import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa';
import { RiChat1Line } from 'react-icons/ri';
import { IoLocationSharp } from "react-icons/io5";
import user from '../../asstes/img/user.png'
import SafetyModal from '../chat/Component/SafetyModal';

const UserDetail = () => {
    const [isOpenSaftey, setIsOpenSaftey] = useState(false)
    const [isOpenLogin, setisOpenLogin] = useState(false)
    const [isOpenRegister, setIsOpenRegister] = useState(false)
    return (
        <>
        <Header isOpenLogin={isOpenLogin}  setisOpenLogin={setisOpenLogin} isOpenRegister={isOpenRegister} setIsOpenRegister={setIsOpenRegister} />
            <div className='max-w-screen-xl justify-between mx-auto md:h-[calc(100vh-174px)]  overflow-hidden p-4'>
                <div className='flex flex-col md:flex-row md:h-full'>
                    <div className=" flex-none md:w-80 w-full md:h-full">
                        <div className="userDetail border p-4 rounded-lg bg-white md:h-full">
                            <div className="object-cover overflow-hidden size-52 rounded-lg  m-auto"><img className='size-full rounded-lg' src={user} alt="" />
                            </div>
                            <div className='rounded-lg border p-4 bg-gray-100'>
                                <div className='text-lg font-bold text-black'>Rohit Sharma</div>
                                <div className='text-md font-normal text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, deleniti.</div>
                                <Link to='' className='flex items-center mt-2'>
                                    <IoLocationSharp className='size-5 text-gray-600'/>
                                    <div className='text-md curdor-pointer font-normal text-gray-600'>123 B New colony</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grow md:mx-5 mt-5 md:mt-0 md:h-full overflow-y-auto">
                        <div className='grid lg:grid-cols-2 grid-col-1 gap-4'>
                            <div className="flex flex-wrap items-stretch">
                                <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                    <div className=" w-full  shrink-0 grid items-center justify-center">
                                        <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                            <FaRegHeart className="size-full" />
                                        </button>
                                        <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70" alt="jk" />
                                    </div>
                                    <div className="w-full">
                                        <Link to='/product-detail' className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                        <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80 rtl:ms-5">
                                            <li>Intel Core i3 Processor (11th Gen)</li>
                                            <li>8 GB DDR4 RAM</li>
                                            <li>64 bit Windows 11 Operating System</li>
                                            <li>512 GB SSD</li>
                                            <li>39.62 cm (15.6 Inch) Display</li>
                                            <li>1 Year Onsite Warranty</li>
                                        </ul>
                                    </div>
                                    <div className="w-full shrink-0 flex">
                                        <div className="grow">
                                            <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                            <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                        </div>
                                        <div className="shrink-0">
                                            <button onClick={()=>{setIsOpenSaftey(true)}} className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-stretch">
                                <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                    <div className=" w-full  shrink-0 grid items-center justify-center">
                                        <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                            <FaRegHeart className="size-full" />
                                        </button>
                                        <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70" alt="jk" />
                                    </div>
                                    <div className="w-full">
                                        <Link to='/product-detail' className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                        <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80 rtl:ms-5">
                                            <li>Intel Core i3 Processor (11th Gen)</li>
                                            <li>8 GB DDR4 RAM</li>
                                            <li>64 bit Windows 11 Operating System</li>
                                            <li>512 GB SSD</li>
                                            <li>39.62 cm (15.6 Inch) Display</li>
                                            <li>1 Year Onsite Warranty</li>
                                        </ul>
                                    </div>
                                    <div className="w-full shrink-0 flex">
                                        <div className="grow">
                                            <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                            <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                        </div>
                                        <div className="shrink-0">
                                            <button onClick={()=>{setIsOpenSaftey(true)}} className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-stretch">
                                <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                    <div className=" w-full  shrink-0 grid items-center justify-center">
                                        <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                            <FaRegHeart className="size-full" />
                                        </button>
                                        <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70" alt="jk" />
                                    </div>
                                    <div className="w-full">
                                        <Link to='/product-detail' className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                        <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80 rtl:ms-5">
                                            <li>Intel Core i3 Processor (11th Gen)</li>
                                            <li>8 GB DDR4 RAM</li>
                                            <li>64 bit Windows 11 Operating System</li>
                                            <li>512 GB SSD</li>
                                            <li>39.62 cm (15.6 Inch) Display</li>
                                            <li>1 Year Onsite Warranty</li>
                                        </ul>
                                    </div>
                                    <div className="w-full shrink-0 flex">
                                        <div className="grow">
                                            <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                            <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                        </div>
                                        <div className="shrink-0">
                                            <button onClick={()=>{setIsOpenSaftey(true)}} className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-stretch">
                                <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                    <div className=" w-full  shrink-0 grid items-center justify-center">
                                        <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                            <FaRegHeart className="size-full" />
                                        </button>
                                        <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70" alt="jk" />
                                    </div>
                                    <div className="w-full">
                                        <Link to='/product-detail' className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                        <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80 rtl:ms-5">
                                            <li>Intel Core i3 Processor (11th Gen)</li>
                                            <li>8 GB DDR4 RAM</li>
                                            <li>64 bit Windows 11 Operating System</li>
                                            <li>512 GB SSD</li>
                                            <li>39.62 cm (15.6 Inch) Display</li>
                                            <li>1 Year Onsite Warranty</li>
                                        </ul>
                                    </div>
                                    <div className="w-full shrink-0 flex">
                                        <div className="grow">
                                            <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                            <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                        </div>
                                        <div className="shrink-0">
                                            <button onClick={()=>{setIsOpenSaftey(true)}} className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="flex flex-wrap items-stretch">
                                <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                    <div className=" w-full  shrink-0 grid items-center justify-center">
                                        <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                            <FaRegHeart className="size-full" />
                                        </button>
                                        <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70" alt="jk" />
                                    </div>
                                    <div className="w-full">
                                        <Link to='/product-detail' className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                        <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80 rtl:ms-5">
                                            <li>Intel Core i3 Processor (11th Gen)</li>
                                            <li>8 GB DDR4 RAM</li>
                                            <li>64 bit Windows 11 Operating System</li>
                                            <li>512 GB SSD</li>
                                            <li>39.62 cm (15.6 Inch) Display</li>
                                            <li>1 Year Onsite Warranty</li>
                                        </ul>
                                    </div>
                                    <div className="w-full shrink-0 flex">
                                        <div className="grow">
                                            <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                            <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                        </div>
                                        <div className="shrink-0">
                                            <button onClick={()=>{setIsOpenSaftey(true)}} className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
            <SafetyModal isOpenSaftey={isOpenSaftey} setIsOpenSaftey={setIsOpenSaftey}/>
        </>
    )
}

export default UserDetail