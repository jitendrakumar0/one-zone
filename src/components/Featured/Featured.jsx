import React from 'react'
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { RiChat1Line } from 'react-icons/ri';

const Featured = ({setIsOpenSaftey}) => {
    return (
        <>
            <div className="realtive md:py-8 lg:py-10 bg-gray-100">
                <div className="max-w-screen-xl mx-auto p-4 z-[1] relative">
                    <div className="flex items-center pb-2 md:pb-8">
                        <div className="grow">
                            <div className="md:text-2xl text-xl text-black font-bold">
                                Featured
                            </div>
                        </div>
                        <div className="inline-flex gap-2 items-center">
                            <div className="featuredprev sm:flex hidden border hover:bg-black transition hover:text-white hover:border items-center justify-center rounded-lg size-8 border-black [&.swiper-button-disabled]:opacity-40"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg></div>
                            <div className="featurednext sm:flex hidden border hover:bg-black transition hover:text-white hover:border items-center justify-center rounded-lg size-8 border-black [&.swiper-button-disabled]:opacity-40">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
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
                        prevEl: '.featuredprev',
                        nextEl: '.featurednext',
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            500: {
                                slidesPerView: 1.6,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 1.8,
                                spaceBetween: 15,
                            },
                            992: {
                                slidesPerView: 2.5,
                                spaceBetween: 15,
                            }, 
                            1200: {
                                slidesPerView: 2.5,
                                spaceBetween: 15,
                            },
                            1400: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                        }}
                        modules={[Pagination,Navigation]}
                        className="collectionSwiper"
                    >
                        <SwiperSlide className='swiperSlider relative'>
                                <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-400 shadow-lg bg-white/60 rounded-xl shadow-theme1/20">
                                        <div className=" w-full shrink-0 grid items-center justify-center">
                                            <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className="w-full">
                                            <Link to="/product-detail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
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
                                            <div className="grow">
                                                <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                                <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                            </div>
                                            <div className="shrink-0">
                                                <button onClick={()=>{setIsOpenSaftey(true)}} className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                                            </div>
                                            <div className='text-xs font-bold bg-theme1 px-4 py-1 rounded absolute top-4 left-4'>FEATURED</div>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'>
                                <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-400 shadow-lg bg-white/60 rounded-xl shadow-theme1/20">
                                        <div className=" w-full shrink-0 grid items-center justify-center">
                                            <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className="w-full">
                                            <Link to="/product-detail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
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
                                            <div className="grow">
                                                <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                                <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                            </div>
                                            <div className="shrink-0">
                                                <button onClick={()=>{setIsOpenSaftey(true)}} className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                                            </div>
                                            <div className='text-xs font-bold bg-theme1 px-4 py-1 rounded absolute top-4 left-4'>FEATURED</div>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'>
                                <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-400 shadow-lg bg-white/60 rounded-xl shadow-theme1/20">
                                        <div className=" w-full shrink-0 grid items-center justify-center">
                                            <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/ky7lci80/tablet/e/d/m/sm-x205nzaeinu-samsung-original-imagahrshg78gwvb.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className="w-full">
                                            <Link to="/product-detail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
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
                                            <div className="grow">
                                                <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                                <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                            </div>
                                            <div className="shrink-0">
                                                <button onClick={()=>{setIsOpenSaftey(true)}} className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                                            </div>
                                            <div className='text-xs font-bold bg-theme1 px-4 py-1 rounded absolute top-4 left-4'>FEATURED</div>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'>
                                <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-400 shadow-lg bg-white/60 rounded-xl shadow-theme1/20">
                                        <div className=" w-full shrink-0 grid items-center justify-center">
                                            <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/l5fnhjk0/computer/4/d/z/inspiron-7420-thin-and-light-laptop-dell-original-imagg45kbtghzthr.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className="w-full">
                                            <Link to="/product-detail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
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
                                            <div className="grow">
                                                <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                                <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                            </div>
                                            <div className="shrink-0">
                                                <button onClick={()=>{setIsOpenSaftey(true)}} className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                                            </div>
                                            <div className='text-xs font-bold bg-theme1 px-4 py-1 rounded absolute top-4 left-4'>FEATURED</div>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'>
                                <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-400 shadow-lg bg-white/60 rounded-xl shadow-theme1/20">
                                        <div className=" w-full shrink-0 grid items-center justify-center">
                                            <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/l5fnhjk0/computer/4/d/z/inspiron-7420-thin-and-light-laptop-dell-original-imagg45kbtghzthr.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className="w-full">
                                            <Link to="/product-detail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
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
                                            <div className="grow">
                                                <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                                <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                            </div>
                                            <div className="shrink-0">
                                                <button onClick={()=>{setIsOpenSaftey(true)}} className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                                            </div>
                                            <div className='text-xs font-bold bg-theme1 px-4 py-1 rounded absolute top-4 left-4'>FEATURED</div>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                    </Swiper>
                    
                </div>
            </div>                                          
        </>
    )
}

export default Featured