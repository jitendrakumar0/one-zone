import React from 'react';
import productImg from '../../asstes/img/product-1.png';
import banner from '../../asstes/img/banner.png'
import { Pagination,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { RiChat1Line } from 'react-icons/ri';

const SellingProducts = () => {
    return (
        <>
        <div className="max-w-screen-xl mx-auto p-4 py-5 sm:py-8 lg:py-10 bg-[#F5F5F7]">
            <div className="flex justify-between items-center w-full mb-5">
                <div className="md:text-black md:text-3xl font-bold text-2xl">Best
                    Selling Products</div>
                <div className="text-md text-nowrap cursor-pointer text-[#09757A]">
                    View All
                    <span className="size-5 inline-block justify-center pt-1">
                        <svg stroke="white" fill="white"
                            strokeWidth="0" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path
                                d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap items-stretch gap-5">
                <div className="md:grow w-full md:pr-3">
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
            
                </div>
                <div className="md:w-1/2 lg:w-2/3 w-full shrink-0 relative">
                    
                    <div className="flex-none hidden lg:flex">
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
                    </div>
                    <div className="w-full">
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}  
                        navigation={{
                            prevEl: '.sellingPrev',
                            nextEl: '.sellingNext',
                        }}
                        modules={[Pagination,Navigation]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            500: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            992: {
                                slidesPerView: 1.6,
                                spaceBetween: 15,
                            },
                            1400: {
                                slidesPerView: 1.7,
                                spaceBetween: 15,
                            },
                        }}
                        className="mySwiper1"
                    >
                        <SwiperSlide>
                                <div className="flex flex-wrap w-full">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                        <div className=" w-full lg:relative shrink-0 grid items-center justify-center">
                                            <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full" src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70" alt="jk" />
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
                                                <div className="w-full md:text-lg font-bold text-theme1">₹31,990</div>
                                                <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                            </div>
                                            <div className="w-full">
                                                <Link className="text-white w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-transparent md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div className="flex flex-wrap w-full">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                        <div className=" w-full lg:relative shrink-0 grid items-center justify-center">
                                            <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full" src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70" alt="jk" />
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
                                                <div className="w-full md:text-lg font-bold text-theme1">₹31,990</div>
                                                <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                            </div>
                                            <div className="w-full">
                                                <Link className="text-white w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-transparent md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div className="flex flex-wrap w-full">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                        <div className=" w-full lg:relative shrink-0 grid items-center justify-center">
                                            <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full" src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70" alt="jk" />
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
                                                <div className="w-full md:text-lg font-bold text-theme1">₹31,990</div>
                                                <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                            </div>
                                            <div className="w-full">
                                                <Link className="text-white w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-transparent md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div className="flex flex-wrap w-full">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-8 border-b lg:py-8 p-5 border border-gray-200 shadow-lg bg-white rounded-xl shadow-theme1/20">
                                        <div className=" w-full lg:relative shrink-0 grid items-center justify-center">
                                            <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full" src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70" alt="jk" />
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
                                                <div className="w-full md:text-lg font-bold text-theme1">₹31,990</div>
                                                <div className="w-full text-gray-600 font-semibold md:text-sm text-xs">₹49,990 <span className="text-lime-600 pl-1">36% off</span></div>
                                            </div>
                                            <div className="w-full">
                                                <Link className="text-white w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-transparent md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
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