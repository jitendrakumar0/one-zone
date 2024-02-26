import React from 'react';
import { Pagination,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { RiChat1Line } from 'react-icons/ri';

const SellingProducts = ({setIsOpenSaftey}) => {
    return (
        <>
        <div className="max-w-screen-xl mx-auto px-4 py-4 sm:py-8 lg:py-10 bg-gray-100 relative">
            <div className="flex justify-between items-center w-full mb-2 md:mb-5">
                <div className="md:text-black md:text-3xl font-bold text-2xl flex items-center max-sm:w-full max-sm:justify-between">Best Selling   
                    <Link to='/windows-products' className="text-sm font-bold bg-slate-200  px-3 py-1 rounded-lg ms-4 flex items-center">
                        View All
                        <span className="size-4 inline-block justify-center">
                            <svg stroke="white" fill="currentColor"
                                strokeWidth="0" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path
                                    d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                            </svg>
                        </span>
                    </Link>
                    </div>
                <div className="inline-flex gap-2 items-center">
                    {/* <Link to='/windows-products' className="text">
                        View All
                        <span className="size-5 inline-block justify-center pt-1 hover:text-theme1">
                            <svg stroke="white" fill="currentColor"
                                strokeWidth="0" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path
                                    d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                            </svg>
                        </span>
                    </Link> */}
                        <div className="prev rtl:order-2 sm:flex hidden border hover:bg-black transition hover:text-white hover:border items-center justify-center rounded-lg size-8 border-black [&.swiper-button-disabled]:opacity-40"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg></div>
                        <div className="next sm:flex hidden border hover:bg-black transition hover:text-white hover:border items-center justify-center rounded-lg size-8 border-black [&.swiper-button-disabled]:opacity-40">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </div>
                </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap items-stretch gap-5">
                {/* <div className="md:grow w-full md:pr-3">
                    <div
                        className={`overflow-hidden h-full rounded-xl relative z-0 pb-24 *:relative *:z-10  p-4 before:absolute before:size-full before:inset-0 before:bg-black/20 before:z-10`}>
                        <img src={banner} className='object-cover object-center !absolute !inset-0 size-full !z-0' alt="kuch nahi" />
                        <div className=" relative px-3 z-50 pl-3">
                            <div className="text-2xl font-semibold text-white">Hot
                                Collection</div>
                            <div className=" text-white py-3">Lorem ipsum dolor, sit
                                amet consectetur adipisicing elit. Voluptatum,
                                provident?
                            </div>
                            <Link className="text-white">Shop Now</Link>
                        </div>
                    </div>
            
                </div> */}
                <div className=" w-full shrink-0 relative">
                    
                    {/* <div className="flex-none hidden lg:flex">
                        <div className="swiper-button-next absolute top-[50%] translate-y-[-50%] z-50 cursor-pointer sellingNext after:content-[*] md:size-10 size-8 transition-all duration-300 bg-white border border-black text-white rounded-full right-[-20px] md:p-2 p-1">
                            <div className="">
                                <svg stroke="currentColor" fill="black" strokeWidth="0" viewBox="0 0 24 24" className="h-full w-full" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                            </div>
                        </div>
                        <div className="swiper-button-prev translate-y-[-50%] z-50 sellingPrev absolute after:content-[*] md:size-10 size-8 transition-all duration-300 bg-white border border-black text-white rounded-full top-[50%] left-[-15px] md:p-2 p-1">
                            <div className="rotate-180">
                                <svg stroke="currentColor" fill="black" strokeWidth="0" viewBox="0 0 24 24" className="h-full w-full" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                            </div>
                        </div>
                    </div> */}
                    <div className="w-full">
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}  
                        navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                        }}
                        modules={[Pagination,Navigation]}
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
                        className="mySwiper1"
                    >
                        <SwiperSlide className='swiperSlider'>
                                <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                        <div className=" w-full  shrink-0 grid items-center justify-center">
                                            <button className="size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className="w-full">
                                            <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
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
                                                <button onClick={()=>{setIsOpenSaftey(true)}} className="text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiperSlider'>
                        <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                        <div className=" w-full shrink-0 grid items-center justify-center">
                                            <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className="w-full flex flex-col justify-between">
                                            <Link to="/product-detail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                            <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80 rtl:ms-5">
                                                <li>Intel Core i3 Processor (11th Gen)</li>
                                                <li>8 GB DDR4 RAM</li>
                                                <li>64 bit Windows 11 Operating System</li>
                                                <li>512 GB SSD</li>
                                                <li>39.62 cm (15.6 Inch) Display</li>
                                                <li>1 Year Onsite Warranty</li>
                                            </ul>
                                        <div className="w-full shrink-0 flex">
                                            <div className="grow">
                                                <div className="w-full md:text-lg font-bold text-black">₹31,990</div>
                                                <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                            </div>
                                            <div className="shrink-0">
                                                <button onClick={()=>{setIsOpenSaftey(true)}} className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                                            </div>
                                            {/* <div className='text-xs font-bold bg-theme1 px-4 py-1 rounded-md absolute top-4 left-4 border-2 border-b-black'>FEATURED</div> */}
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiperSlider'>
                                <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                        <div className=" w-full  shrink-0 grid items-center justify-center">
                                            <button className="size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/ky7lci80/tablet/e/d/m/sm-x205nzaeinu-samsung-original-imagahrshg78gwvb.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className="w-full">
                                            <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
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
                                                <button onClick={()=>{setIsOpenSaftey(true)}} className="text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiperSlider'>
                                <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                        <div className=" w-full  shrink-0 grid items-center justify-center">
                                            <button className="size-8 rounded-full hover:bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/l5fnhjk0/computer/4/d/z/inspiron-7420-thin-and-light-laptop-dell-original-imagg45kbtghzthr.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className="w-full">
                                            <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
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
                                                <button onClick={()=>{setIsOpenSaftey(true)}} className="text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SellingProducts