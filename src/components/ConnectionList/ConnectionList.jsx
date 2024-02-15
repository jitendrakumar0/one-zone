import React from 'react'
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
                
            <div className="realtive md:py-8 lg:py-10 bg-gray-100">
                <div className="max-w-screen-xl mx-auto p-4 z-[1] relative">
                    <div className="flex items-center pb-2 md:pb-8">
                        <div className="grow">
                            <div className="md:text-2xl text-xl text-black font-bold">
                                Categories
                            </div>
                        </div>
                        <div className="inline-flex gap-2 items-center">
                            <div className="connectionprev sm:flex hidden  border hover:bg-black transition hover:text-white  hover:border  items-center justify-center rounded-lg w-9 h-9 absolute z-10 end-[60px] top-[18px] border-black"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg></div>
                            <div className="connectionnext sm:flex hidden  border hover:bg-black transition hover:text-white  hover:border  items-center justify-center rounded-lg w-9 h-9 absolute z-10 end-[60px] top-[18px] border-black">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={2.5}
                        spaceBetween={5}
                        pagination={{
                        clickable: true,
                        }}    
                        navigation={{
                        prevEl: '.connectionprev',
                        nextEl: '.connectionnext',
                        }}
                        breakpoints={{
                        360: {
                            slidesPerView: 2.5,
                        },
                        576: {
                            slidesPerView: 3.5,
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
                            <Link to="/windowsProducts" className="collectioncard duration-300 md:hover:scale-95 border-2 border-transparent md:hover:border-theme1/40 group  cursor-pointer block rounded-xl shadow-sm py-6 bg-white ">
                                <div className="bg-white mx-auto md:w-24 sm:w-20 w-16 overflow-hidden md:px-7 px-5 flex items-center justify-center relative *:relative *:z-0 before:absolute before:z-10 before:inset-0 before:bg-theme1 before:mix-blend-overlay">
                                <GrWindows className='size-full object-contain duration-300 md:group-hover:scale-105 '/>
                                    {/* <img src={Windows} alt="frame" className="size-full object-contain duration-300 md:group-hover:scale-105 grayscale"/> */}
                                </div>
                                <div className="text-black sm:text-lg text-base font-semibold sm:mt-5 mt-3 text-center">Windows</div>
                                <div className="text-gray-500 font-semibold text-sm text-center sm:mt-1">8 Items</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/windowsProducts" className="collectioncard duration-300 md:hover:scale-95 border-2 border-transparent md:hover:border-theme1/40 group cursor-pointer block rounded-xl shadow-sm py-6 bg-white">
                                <div className="bg-white mx-auto md:w-24 sm:w-20 w-16 overflow-hidden md:px-7 px-5 flex items-center justify-center relative *:relative *:z-0 before:absolute before:z-10 before:inset-0 before:bg-theme1 before:mix-blend-overlay">
                                <BsApple className='size-full object-contain duration-300 md:group-hover:scale-105 grayscale'/>
                                    {/* <img src={apple} alt="frame" className="size-full object-contain duration-300 md:group-hover:scale-105 grayscale"/> */}
                                </div>
                                <div className="text-black sm:text-lg text-base font-semibold sm:mt-5 mt-3 text-center">Apple</div>
                                <div className="text-gray-500 font-semibold text-sm text-center sm:mt-1">8 Items</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/windowsProducts" className="collectioncard duration-300 md:hover:scale-95 border-2 border-transparent md:hover:border-theme1/40 group cursor-pointer block rounded-xl shadow-sm py-6 bg-white">
                                <div className="bg-white mx-auto md:w-24 sm:w-20 w-16 overflow-hidden md:px-7 px-5 flex items-center justify-center relative *:relative *:z-0 before:absolute before:z-10 before:inset-0 before:bg-theme1 before:mix-blend-overlay">
                                <BsBrowserChrome className='size-full object-contain duration-300 md:group-hover:scale-105 grayscale' />
                                    {/* <img src={cromebook} alt="frame" className="size-full object-contain duration-300 md:group-hover:scale-105 grayscale"/> */}
                                </div>
                                <div className="text-black sm:text-lg text-base font-semibold sm:mt-5 mt-3 text-center">ChromeBook</div>
                                <div className="text-gray-500 font-semibold text-sm text-center sm:mt-1">8 Items</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/windowsProducts" className="collectioncard duration-300 md:hover:scale-95 border-2 border-transparent md:hover:border-theme1/40 group cursor-pointer block rounded-xl shadow-sm py-6 bg-white">
                                <div className="bg-white mx-auto md:w-24 sm:w-20 w-16 overflow-hidden md:px-7 px-5 flex items-center justify-center relative *:relative *:z-0 before:absolute before:z-10 before:inset-0 before:bg-theme1 before:mix-blend-overlay">
                                <FaMobile className='size-full object-contain duration-300 md:group-hover:scale-105 grayscale'/>
                                    {/* <img src={tab} alt="frame" className="size-full object-contain duration-300 md:group-hover:scale-105 grayscale"/> */}
                                </div>
                                <div className="text-black sm:text-lg text-base font-semibold sm:mt-5 mt-3 text-center">Mob & Tab</div>
                                <div className="text-gray-500 font-semibold text-sm text-center sm:mt-1">8 Items</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/windowsProducts" className="collectioncard duration-300 md:hover:scale-95 border-2 border-transparent md:hover:border-theme1/40 group cursor-pointer block rounded-xl shadow-sm py-6 bg-white">
                                <div className="bg-white mx-auto md:w-24 sm:w-20 w-16 overflow-hidden md:px-7 px-5 flex items-center justify-center relative *:relative *:z-0 before:absolute before:z-10 before:inset-0 before:bg-theme1 before:mix-blend-overlay">
                                <BsFillPrinterFill className='size-full object-contain duration-300 md:group-hover:scale-105 grayscale' />
                                    {/* <img src={printers} alt="frame" className="size-full object-contain duration-300 md:group-hover:scale-105 grayscale"/> */}
                                </div>
                                <div className="text-black sm:text-lg text-base font-semibold sm:mt-5 mt-3 text-center"> Printers</div>
                                <div className="text-gray-500 font-semibold text-sm text-center sm:mt-1">8 Items</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/windowsProducts" className="collectioncard duration-300 md:hover:scale-95 border-2 border-transparent md:hover:border-theme1/40 group cursor-pointer block rounded-xl shadow-sm py-6 bg-white">
                                <div className="bg-white mx-auto md:w-24 sm:w-20 w-16 overflow-hidden md:px-7 px-5 flex items-center justify-center relative *:relative *:z-0 before:absolute before:z-10 before:inset-0 before:bg-theme1 before:mix-blend-overlay">
                                <FaServer className='size-full object-contain duration-300 md:group-hover:scale-105 grayscale'/>
                                    {/* <img src={server} alt="frame" className="size-full object-contain duration-300 md:group-hover:scale-105 grayscale"/> */}
                                </div>
                                <div className="text-black sm:text-lg text-base font-semibold sm:mt-5 mt-3 text-center">Server</div>
                                <div className="text-gray-500 font-semibold text-sm text-center sm:mt-1">8 Items</div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/windowsProducts" className="collectioncard duration-300 md:hover:scale-95 border-2 border-transparent md:hover:border-theme1/40 group cursor-pointer block rounded-xl shadow-sm py-6 bg-white">
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
