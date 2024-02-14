import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import { AllSideMenu } from '../userProfile/UserProfile';
import { FaHeart } from 'react-icons/fa';
import { RiChat1Line } from 'react-icons/ri';

const Wishlist = () => {
    return (
        <>
            <Header />
            <div className="md:py-8 lg:py-10">
                <div className="max-w-screen-xl mx-auto p-4">
                    <div className="w-full bg-white rounded-xl shadow-xl md:px-10 md:py-6 p-5">
                        <div className="title-area w-full flex justify-between items-center border-b border-gray-200">
                            <h1 className="md:text-2xl sm:text-xl text-lg text-black font-bold text-center pb-5">
                                Wishlist
                            </h1>
                        </div>
                        <div className="profile-wrapper w-full md:mt-8 mt-0 flex md:space-x-10">
                            <div className="w-[236px] min-h-[600px] border-r border-[rgba(0, 0, 0, 0.1)] max-md:hidden">
                                <AllSideMenu />
                            </div>
                            <div className="flex-1">
                                <div className="item-body dashboard-wrapper w-full">
                                    <div className="grid gap-6 md:grid-cols-2 grid-cols-1">
                                        <div className="flex h-full items-stretch">
                                            <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                                <div className=" w-full lg:relative shrink-0 grid items-center justify-center">
                                                    <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                        <FaHeart className="size-full" />
                                                    </button>
                                                    <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70" alt="jk" />
                                                </div>
                                                <div className="w-full">
                                                    <div className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</div>
                                                    <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                        <li>Intel Core i3 Processor (11th Gen)</li>
                                                        <li>8 GB DDR4 RAM</li>
                                                        <li>64 bit Windows 11 Operating System</li>
                                                        <li>512 GB SSD</li>
                                                        <li>39.62 cm (15.6 Inch) Display</li>
                                                        <li>1 Year Onsite Warranty</li>
                                                    </ul>
                                                </div>
                                                <div className="w-full shrink-0 flex">
                                                    <div className="w-full grow">
                                                        <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                                        <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                                    </div>
                                                    <div className="w-full">
                                                        <Link className="text-black w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex h-full items-stretch">
                                            <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                                <div className=" w-full lg:relative shrink-0 grid items-center justify-center">
                                                    <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                        <FaHeart className="size-full" />
                                                    </button>
                                                    <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70" alt="jk" />
                                                </div>
                                                <div className="w-full">
                                                    <div className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</div>
                                                    <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                        <li>Intel Core i3 Processor (11th Gen)</li>
                                                        <li>8 GB DDR4 RAM</li>
                                                        <li>64 bit Windows 11 Operating System</li>
                                                        <li>512 GB SSD</li>
                                                        <li>39.62 cm (15.6 Inch) Display</li>
                                                        <li>1 Year Onsite Warranty</li>
                                                    </ul>
                                                </div>
                                                <div className="w-full shrink-0 flex">
                                                    <div className="w-full grow">
                                                        <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                                        <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                                    </div>
                                                    <div className="w-full">
                                                        <Link className="text-black w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex h-full items-stretch">
                                            <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                                <div className=" w-full lg:relative shrink-0 grid items-center justify-center">
                                                    <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                        <FaHeart className="size-full" />
                                                    </button>
                                                    <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70" alt="jk" />
                                                </div>
                                                <div className="w-full">
                                                    <div className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</div>
                                                    <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                        <li>Intel Core i3 Processor (11th Gen)</li>
                                                        <li>8 GB DDR4 RAM</li>
                                                        <li>64 bit Windows 11 Operating System</li>
                                                        <li>512 GB SSD</li>
                                                        <li>39.62 cm (15.6 Inch) Display</li>
                                                        <li>1 Year Onsite Warranty</li>
                                                    </ul>
                                                </div>
                                                <div className="w-full shrink-0 flex">
                                                    <div className="w-full grow">
                                                        <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                                        <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                                    </div>
                                                    <div className="w-full">
                                                        <Link className="text-black w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex h-full items-stretch">
                                            <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                                <div className=" w-full lg:relative shrink-0 grid items-center justify-center">
                                                    <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                        <FaHeart className="size-full" />
                                                    </button>
                                                    <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70" alt="jk" />
                                                </div>
                                                <div className="w-full">
                                                    <div className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</div>
                                                    <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                        <li>Intel Core i3 Processor (11th Gen)</li>
                                                        <li>8 GB DDR4 RAM</li>
                                                        <li>64 bit Windows 11 Operating System</li>
                                                        <li>512 GB SSD</li>
                                                        <li>39.62 cm (15.6 Inch) Display</li>
                                                        <li>1 Year Onsite Warranty</li>
                                                    </ul>
                                                </div>
                                                <div className="w-full shrink-0 flex">
                                                    <div className="w-full grow">
                                                        <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                                        <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                                    </div>
                                                    <div className="w-full">
                                                        <Link className="text-black w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}


export default Wishlist

