import React from 'react'
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import collectionImg from '../../asstes/img/Frame_2_360x.webp'
import Windows from '../../asstes/img/windows.svg'
import apple from '../../asstes/img/apple.svg'
import collectionImgg from '../../asstes/img/Server.svg'
import cromebook from '../../asstes/img/Chromebook.svg'
import tab from '../../asstes/img/mobile&tablet.svg'
import printers from '../../asstes/img/printer.svg'
import server from '../../asstes/img/Server.svg'
import { Link } from 'react-router-dom';
import { GrWindows } from "react-icons/gr";
import { BsApple } from "react-icons/bs";
import { BsBrowserChrome } from "react-icons/bs";
import { FaMobile } from "react-icons/fa6";
import { BsFillPrinterFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";

export const ConnectionList = () => {
    return (  
        <>
                
            <div className="realtive py-5 sm:py-8 lg:py-10 bg-[#F5F5F7]">
                <div className="max-w-screen-xl mx-auto p-4 z-[1]">
                    <div className="flex items-center pb-8">
                        <div className="flex-1">
                            <div className="md:text-2xl text-xl text-black font-bold">
                                Categories
                            </div>
                        </div>
                        <div className="flex-none relative">
                            <div className="swiper-button-next cursor-pointer navigationNext after:content-[*] md:size-8 size-6 transition-all duration-300 bg-white border border-black text-white rounded-full right-[-10px] md:p-2 p-1">
                                <div className="">
                                    <svg stroke="currentColor" fill="black" strokeWidth="0" viewBox="0 0 24 24" className="h-full w-full" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                                </div>
                            </div>
                            <div className="swiper-button-prev cursor-pointer navigationPrev absolute after:content-[*] md:size-8 size-6 transition-all top-0 duration-300 bg-white border border-black text-white rounded-full sm:-left-11 -left-10 md:p-2 p-1">
                                <div className="rotate-180">
                                    <svg stroke="currentColor" fill="black" strokeWidth="0" viewBox="0 0 24 24" className="h-full w-full" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={5}
                        pagination={{
                        clickable: true,
                        }}    
                        navigation={{
                            prevEl: '.navigationPrev',
                            nextEl: '.navigationNext',
                        }}
                        breakpoints={{
                        360: {
                            slidesPerView: 2.5,
                        },
                        576: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 4.5,
                        },
                        992: {
                            slidesPerView: 6,
                            spaceBetween:20
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween:20
                        },
                        1400: {
                            slidesPerView: 6,
                            spaceBetween:20
                        },
                        }}
                        modules={[Pagination,Navigation]}
                        className="collectionSwiper"
                    >
                        <SwiperSlide>
                            <Link to="/windows-products" className="collectioncard duration-300 md:hover:scale-95 border-2 border-transparent md:hover:border-theme1/40 group  cursor-pointer block rounded-xl shadow-sm py-6 bg-white ">
                                <div className="bg-white mx-auto md:w-24 sm:w-20 w-16 overflow-hidden md:px-7 px-5 flex items-center justify-center relative *:relative *:z-0 before:absolute before:z-10 before:inset-0 before:bg-theme1 before:mix-blend-overlay">
                                <GrWindows className='size-full object-contain duration-300 md:group-hover:scale-105 '/>
                                    {/* <img src={Windows} alt="frame" className="size-full object-contain duration-300 md:group-hover:scale-105 grayscale"/> */}
                                </div>
                                <div className="text-black sm:text-lg text-base font-semibold sm:mt-5 mt-3 text-center">Windows</div>
                                <div className="text-gray-500 font-semibold text-sm text-center sm:mt-1">8 Items</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/windows-products" className="collectioncard duration-300 md:hover:scale-95 border-2 border-transparent md:hover:border-theme1/40 group cursor-pointer block rounded-xl shadow-sm py-6 bg-white">
                                <div className="bg-white mx-auto md:w-24 sm:w-20 w-16 overflow-hidden md:px-7 px-5 flex items-center justify-center relative *:relative *:z-0 before:absolute before:z-10 before:inset-0 before:bg-theme1 before:mix-blend-overlay">
                                <BsApple className='size-full object-contain duration-300 md:group-hover:scale-105 grayscale'/>
                                    {/* <img src={apple} alt="frame" className="size-full object-contain duration-300 md:group-hover:scale-105 grayscale"/> */}
                                </div>
                                <div className="text-black sm:text-lg text-base font-semibold sm:mt-5 mt-3 text-center">Apple</div>
                                <div className="text-gray-500 font-semibold text-sm text-center sm:mt-1">8 Items</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/windows-products" className="collectioncard duration-300 md:hover:scale-95 border-2 border-transparent md:hover:border-theme1/40 group cursor-pointer block rounded-xl shadow-sm py-6 bg-white">
                                <div className="bg-white mx-auto md:w-24 sm:w-20 w-16 overflow-hidden md:px-7 px-5 flex items-center justify-center relative *:relative *:z-0 before:absolute before:z-10 before:inset-0 before:bg-theme1 before:mix-blend-overlay">
                                <BsBrowserChrome className='size-full object-contain duration-300 md:group-hover:scale-105 grayscale' />
                                    {/* <img src={cromebook} alt="frame" className="size-full object-contain duration-300 md:group-hover:scale-105 grayscale"/> */}
                                </div>
                                <div className="text-black sm:text-lg text-base font-semibold sm:mt-5 mt-3 text-center">ChromeBook</div>
                                <div className="text-gray-500 font-semibold text-sm text-center sm:mt-1">8 Items</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/windows-products" className="collectioncard duration-300 md:hover:scale-95 border-2 border-transparent md:hover:border-theme1/40 group cursor-pointer block rounded-xl shadow-sm py-6 bg-white">
                                <div className="bg-white mx-auto md:w-24 sm:w-20 w-16 overflow-hidden md:px-7 px-5 flex items-center justify-center relative *:relative *:z-0 before:absolute before:z-10 before:inset-0 before:bg-theme1 before:mix-blend-overlay">
                                <FaMobile className='size-full object-contain duration-300 md:group-hover:scale-105 grayscale'/>
                                    {/* <img src={tab} alt="frame" className="size-full object-contain duration-300 md:group-hover:scale-105 grayscale"/> */}
                                </div>
                                <div className="text-black sm:text-lg text-base font-semibold sm:mt-5 mt-3 text-center">Mob & Tab</div>
                                <div className="text-gray-500 font-semibold text-sm text-center sm:mt-1">8 Items</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/windows-products" className="collectioncard duration-300 md:hover:scale-95 border-2 border-transparent md:hover:border-theme1/40 group cursor-pointer block rounded-xl shadow-sm py-6 bg-white">
                                <div className="bg-white mx-auto md:w-24 sm:w-20 w-16 overflow-hidden md:px-7 px-5 flex items-center justify-center relative *:relative *:z-0 before:absolute before:z-10 before:inset-0 before:bg-theme1 before:mix-blend-overlay">
                                <BsFillPrinterFill className='size-full object-contain duration-300 md:group-hover:scale-105 grayscale' />
                                    {/* <img src={printers} alt="frame" className="size-full object-contain duration-300 md:group-hover:scale-105 grayscale"/> */}
                                </div>
                                <div className="text-black sm:text-lg text-base font-semibold sm:mt-5 mt-3 text-center"> Printers</div>
                                <div className="text-gray-500 font-semibold text-sm text-center sm:mt-1">8 Items</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/windows-products" className="collectioncard duration-300 md:hover:scale-95 border-2 border-transparent md:hover:border-theme1/40 group cursor-pointer block rounded-xl shadow-sm py-6 bg-white">
                                <div className="bg-white mx-auto md:w-24 sm:w-20 w-16 overflow-hidden md:px-7 px-5 flex items-center justify-center relative *:relative *:z-0 before:absolute before:z-10 before:inset-0 before:bg-theme1 before:mix-blend-overlay">
                                <FaServer className='size-full object-contain duration-300 md:group-hover:scale-105 grayscale'/>
                                    {/* <img src={server} alt="frame" className="size-full object-contain duration-300 md:group-hover:scale-105 grayscale"/> */}
                                </div>
                                <div className="text-black sm:text-lg text-base font-semibold sm:mt-5 mt-3 text-center">Server</div>
                                <div className="text-gray-500 font-semibold text-sm text-center sm:mt-1">8 Items</div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                    
                </div>
            </div>
        </>
    )
}
