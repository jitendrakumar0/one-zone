import React from 'react'
import Header from '../components/header/Header'
import { Link } from 'react-router-dom'
import { MdAutorenew, MdDelete } from 'react-icons/md'
import { ImPower } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { AiFillDelete } from 'react-icons/ai';
import Footer from '../../components/Footer/Footer';
import lap1 from '../../asstes/img/lap1.svg'
import lap2 from '../../asstes/img/lap2.svg'
import lap3 from '../../asstes/img/lap3.svg'
import lap5 from '../../asstes/img/lap5.svg'
import lap6 from '../../asstes/img/lap6.svg'

const FeaturedPost = () => {
    return (
        <>
            <Header/>
            <div  id='featured' className="relative md:py-8 py-4 bg-gray-100">
            {/* <div  className=' -top-[123px] h-[123px] w-full bg-red-400'></div> */}
                <div className="max-w-screen-xl mx-auto px-4 z-[1] relative">
                    <div className="flex items-center pb-2 md:pb-8">
                        <div className="grow">
                            <div className="md:text-2xl text-xl text-black font-bold">
                                Featured
                            </div>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-5'>
                        <div className="flex flex-wrap w-full h-full items-stretch">
                            <div className="w-full flex flex-col sm:flex-row relative items-stretch gap-6 border-b lg:py8 p-4 border border-gray-400 shadow-lg rounded-xl shadow-gray/20">
                                <div className=" w-full sm:w-[40%] shrink-0 grid items-center justify-center">
                                    <img className="w-full object-contain" src={lap1} alt="jk" />
                                </div>
                                <div className="shrink">
                                    <div className='flex flex-col justify-between'>
                                        <div className="w-full">
                                            <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box] mb-2">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                        </div>
                                        <div className="w-full shrink-0 ">
                                            <div className="grow flex items-center gap-3">
                                                <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                                <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                                <div className="text-lime-600">36% off</div>
                                            </div>
                                            <div className='text-sm font-bold text-yellow-600'>2 Days Left</div>
                                            <div className='text-xs font-bold text-center bg-yellow-600 border-red-60 px-2 py-3 flex items-center justify-center text-white absolute top-0 writtingMode rounded-tl-xl rounded-br-xl left-0 shadow rtl:right-0 rtl:left-auto rtl:rounded-tr-xl rtl:rounded-tl-none rtl:rounded-bl-xl rtl:rounded-br-none'>PREMIUM</div>
                                        </div>
                                        <div className='flex w-full gap-4'>
                                            <button className='relative z-10 text-white w-auto ms-auto bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full text-xs font-bold px-4 uppercase py-1 text-center inline-flex items-center justify-center gap-1 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'><RxCross2 className='text-lg' />Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full h-full items-stretch">
                            <div className="w-full flex flex-col sm:flex-row relative items-stretch gap-6 border-b lg:py8 p-4 border border-gray-400 shadow-lg rounded-xl shadow-gray/20">
                                <div className="w-full sm:w-[40%] shrink-0 grid items-center justify-center">
                                    <img className="w-full object-contain" src={lap2} alt="jk" />
                                </div>
                                <div className="shrink">
                                    <div className='flex flex-col justify-between'>
                                        <div className="w-full">
                                            <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box] mb-2">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                        </div>
                                        <div className="w-full shrink-0 ">
                                            <div className="grow flex items-center gap-3">
                                                <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                                <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                                <div className="text-lime-600">36% off</div>
                                            </div>
                                            <div className='text-sm font-bold text-teal-600'>1 Month Left</div>
                                            <div className='text-xs font-bold text-center bg-teal-500 border-red-60 px-2 py-3 flex items-center justify-center text-white absolute top-0 writtingMode rounded-tl-xl rounded-br-xl left-0 rtl:right-0 rtl:left-auto rtl:rounded-tr-xl rtl:rounded-tl-none rtl:rounded-bl-xl rtl:rounded-br-none shadow '>STANDARD</div>
                                        </div>
                                        <div className='flex w-full gap-4'>
                                            <button className='relative z-10 text-white w-auto ms-auto bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full text-xs font-bold px-4 uppercase py-1 text-center inline-flex items-center justify-center gap-1 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'><RxCross2 className='text-lg' />Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full h-full items-stretch">
                            <div className="w-full flex-col sm:flex-row flex relative items-stretch gap-6 border-b lg:py8 p-4 border border-gray-400 shadow-lg rounded-xl shadow-gray/20">
                                <div className="w-full sm:w-[40%] shrink-0 grid items-center justify-center">
                                    <img className="w-full object-contain" src='https://rukminim2.flixcart.com/image/312/312/ky7lci80/tablet/e/d/m/sm-x205nzaeinu-samsung-original-imagahrshg78gwvb.jpeg?q=70'alt="jk" />
                                </div>
                                <div className="shrink">
                                    <div className='flex flex-col justify-between'>
                                        <div className="w-full">
                                            <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box] mb-2">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                        </div>
                                        <div className="w-full shrink-0 ">
                                            <div className="grow flex items-center gap-3">
                                                <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                                <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                                <div className="text-lime-600">36% off</div>
                                            </div>
                                            <div className='text-sm font-bold text-gray-600'>15 Days Left</div>
                                            <div className='text-xs font-bold text-center bg-gray-500 border-red-60 px-2 py-3 flex items-center justify-center text-white absolute top-0 writtingMode rounded-tl-xl rounded-br-xl left-0 shadow rtl:right-0 rtl:left-auto rtl:rounded-tr-xl rtl:rounded-tl-none rtl:rounded-bl-xl rtl:rounded-br-none'>BASIC</div>
                                        </div>
                                        <div className='flex w-full gap-4'>
                                            <button className='relative z-10 text-white w-auto ms-auto bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full text-xs font-bold px-4 uppercase py-1 text-center inline-flex items-center justify-center gap-1 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'><RxCross2 className='text-lg' />Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full h-full items-stretch">
                            <div className="w-full flex flex-col sm:flex-row relative items-stretch gap-6 border-b lg:py8 p-4 border border-gray-400 shadow-lg rounded-xl shadow-gray/20">
                                <div className="w-full sm:w-[40%] shrink-0 grid items-center justify-center">
                                    <img className="w-full object-contain" src={lap5} alt="jk" />
                                </div>
                                <div className="shrink">
                                    <div className='flex flex-col justify-between'>
                                        <div className="w-full">
                                            <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box] mb-2">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                        </div>
                                        <div className="w-full shrink-0 ">
                                            <div className="grow flex items-center gap-3">
                                                <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                                <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                                <div className="text-lime-600">36% off</div>
                                            </div>
                                            <div className='text-sm font-bold text-red-600'>1 Day Left</div>
                                            <div className='text-xs font-bold text-center bg-red-600 border-red-60 px-2 py-3 flex items-center justify-center text-white absolute top-0 writtingMode rounded-tl-xl rounded-br-xl left-0 shadow rtl:right-0 rtl:left-auto rtl:rounded-tr-xl rtl:rounded-tl-none rtl:rounded-bl-xl rtl:rounded-br-none'>BASIC</div>
                                        </div>
                                        <div className='flex w-full gap-4'>
                                            <button className='relative z-10 text-white w-auto ms-auto bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full text-xs font-bold px-4 uppercase py-1 text-center inline-flex items-center justify-center gap-1 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'><RxCross2 className='text-lg' />Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full h-full items-stretch relative z-10">
                        <div className="layer bg-gray-200 rounded-xl w-full h-full absolute top-0 left-0 z-4"></div>
                            <div className="w-full flex flex-col sm:flex-row relative items-stretch gap-6 border-b lg:py8 p-4 border border-gray-400 shadow-lg rounded-xl shadow-gray/20">
                                <div className="w-full sm:w-[40%] shrink-0 grid grayscale items-center justify-center">
                                    <img className="w-full object-contain" src={lap6} alt="jk" />
                                </div>
                                <div className="shrink">
                                    <div className='flex flex-col justify-between'>
                                        <div className="w-full grayscale">
                                            <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box] mb-2">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                        </div>
                                        <div className="w-full shrink-0">
                                            <div className="grow flex items-center gap-3 grayscale">
                                                <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                                <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                                <div className="text-lime-600">36% off</div>
                                            </div>
                                            <div className='text-sm font-bold text-red-600'>Expired</div>
                                            <div className='text-xs font-bold grayscale text-center bg-red-600 border-red-60 px-2 py-3 flex items-center justify-center text-white absolute top-0 writtingMode rounded-tl-xl rounded-br-xl left-0 shadow rtl:right-0 rtl:left-auto rtl:rounded-tr-xl rtl:rounded-tl-none rtl:rounded-bl-xl rtl:rounded-br-none'>BASIC</div>
                                        </div>
                                        <div className='flex w-full gap-2 justify-end relative z-50'>
                                            <button className='relative z-10 text-black w-auto bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'><ImPower className='size-5' />Renew Plan
                                            </button>
                                            <button className='relative z-10 text-white w-auto bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full text-xs font-bold px-2 uppercase py-2 ms-2 text-center inline-flex items-center justify-center gap-1 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'><AiFillDelete className='text-lg' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
                    {/* <Swiper
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
                        <SwiperSlide className='swiperSlider relative'> */}
                            
                        {/* </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'> */}
                            
                        {/* </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'> */}

                        {/* new card */}
                        
                                {/* <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-6 border-b lg:py8 p-5 border border-yellow-600 shadow-lg bg-gradient-to-b from-white to-yellow-100 rounded-xl shadow-theme1/20">
                                        <div className=" w-full shrink-0 grid items-center justify-center">
                                            <img className="w-full aspect-[1/0.7] object-contain" src="https://rukminim2.flixcart.com/image/312/312/ky7lci80/tablet/e/d/m/sm-x205nzaeinu-samsung-original-imagahrshg78gwvb.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className='flex flex-col justify-between'>
                                            <div className="w-full">
                                                <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                            </div>
                                            <div className="w-full shrink-0 ">
                                                <div className="grow flex items-center gap-3">
                                                    <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                                    <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                                    <div className="text-lime-600">36% off</div>
                                                </div>
                                                <div className='text-sm font-bold text-yellow-600'>2 Days Left</div>
                                                <div className='text-xs font-bold text-center bg-yellow-600 border-red-60 px-4 py-2 flex items-center justify-center text-white absolute rounded-bl-lg rounded-tr-lg top-[25px] -left-[20px] shadow border-b-2 border-white'>PREMIUM</div>
                                            </div>
                                            <div className='flex w-full gap-4'>
                                                <button className='relative z-10 text-white w-auto ms-auto bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full text-xs font-bold px-4 uppercase py-2 text-center inline-flex items-center justify-center gap-1 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'><RxCross2 className='text-lg' />Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-6 border-b lg:py8 p-5 border border-teal-500 shadow-lg bg-gradient-to-b from-white to-teal-100 rounded-xl shadow-theme1/20">
                                        <div className=" w-full shrink-0 grid items-center justify-center">
                                            <img className="w-full aspect-[1/0.7] object-contain" src="https://m.media-amazon.com/images/I/61jyqpkeJQL._AC_UY218_.jpg" alt="jk" />
                                        </div>
                                        <div className='flex flex-col justify-between'>
                                            <div className="w-full">
                                                <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                            </div>
                                            <div className="w-full shrink-0 ">
                                                <div className="grow flex items-center gap-3">
                                                    <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                                    <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                                    <div className="text-lime-600">36% off</div>
                                                </div>
                                                <div className='text-sm font-bold text-teal-500'>1 Month Left</div>
                                                <div className='text-xs font-bold text-center bg-teal-500 border-red-60 px-4 py-2 flex items-center justify-center text-white absolute rounded-bl-lg rounded-tr-lg top-[25px] -left-[20px] shadow border-b-2 border-white'>STANDARD</div>
                                            </div>
                                            <div className='flex w-full gap-4'>
                                                <button className='relative z-10 text-white w-auto ms-auto bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full text-xs font-bold px-4 uppercase py-2 text-center inline-flex items-center justify-center gap-1 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'><RxCross2 className='text-lg' />Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-6 border-b lg:py8 p-5 border border-red-600 shadow-lg bg-gradient-to-b from-white to-red-100 rounded-xl shadow-theme1/20">
                                        <div className=" w-full shrink-0 grid items-center justify-center">
                                            <img className="w-full aspect-[1/0.7] object-contain" src="https://m.media-amazon.com/images/I/61jyqpkeJQL._AC_UY218_.jpg" alt="jk" />
                                        </div>
                                        <div className='flex flex-col justify-between'>
                                            <div className="w-full">
                                                <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                            </div>
                                            <div className="w-full shrink-0 ">
                                                <div className="grow flex items-center gap-3">
                                                    <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                                    <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                                    <div className="text-lime-600">36% off</div>
                                                </div>
                                                <div className='text-sm font-bold text-red-500'>1 Month Left</div>
                                                <div className='text-xs font-bold text-center bg-red-600 border-red-600 px-4 py-2 flex items-center justify-center text-white absolute rounded-bl-lg rounded-tr-lg top-[25px] -left-[20px] shadow border-b-2 border-white'>BASIC</div>
                                            </div>
                                            <div className='flex w-full gap-4'>
                                                <button className='relative z-10 text-white w-auto ms-auto bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full text-xs font-bold px-4 uppercase py-2 text-center inline-flex items-center justify-center gap-1 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'><RxCross2 className='text-lg' />Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                        {/* </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'> */}

                        {/* <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-6 border-b lg:py-8 p-5 border border-gray-400 shadow-lg bg-white/60 rounded-xl shadow-theme1/20">
                                        <div className=" w-full shrink-0 grid items-center justify-center">
                                            <img className="w-full " src="https://m.media-amazon.com/images/I/61jyqpkeJQL._AC_UY218_.jpg" alt="jk" />
                                        </div>
                                        <div className="w-full">
                                            <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                        </div>
                                        <div className="w-full shrink-0 flex">
                                            <div className="grow flex items-center gap-3">
                                                <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                                <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                                <div className="text-lime-600">36% off</div>
                                            </div>
                                            <div className='text-xs font-bold text-center border-teal-500 bg-teal-100 px-2 py-1 flex items-center justify-center text-black absolute rounded-bl-xl rounded-tr-xl top-0 right-0 border-l border-b shadow'>STANDARD</div>
                                        </div>
                                        <div className='flex w-full gap-4'>
                                        <button className='relative z-10 text-white w-auto bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full text-xs font-bold px-4 uppercase py-1 text-center inline-flex items-center justify-center gap-1 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'><RxCross2 className='text-lg' />Cancel</button>
                                            <div className='relative z-10 text-black w-full border-teal-500 bg-teal-100 rounded-tr-xl rounded-bl-xl border font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300'>1 Month Left</div>
                                        </div>
                                    </div>
                                </div> */}

                        {/* </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'> */}
                                
                        {/* </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'> */}
                        {/* <div className="flex flex-wrap w-full h-full items-stretch">
                            <div className="w-full flex flex-wrap relative items-stretch gap-6 border-b lg:py-8 p-5 border border-gray-400 shadow-lg bg-white/60 rounded-xl shadow-theme1/20">
                                <div className=" w-full shrink-0 grid items-center justify-center">
                                    <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70" alt="jk" />
                                </div>
                                <div className="w-full">
                                    <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                </div>
                                <div className="w-full shrink-0 flex">
                                    <div className="grow flex items-center gap-3">
                                        <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                        <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                        <div className="text-lime-600">36% off</div>
                                    </div>
                                    <div className='text-xs font-bold text-center border-red-400 bg-red-100 px-2 py-1 flex items-center justify-center text-black absolute rounded-bl-xl rounded-tr-xl top-0 right-0 border-l border-b shadow'>BASIC</div>
                                </div>
                                
                                <div className='flex w-full gap-4'>
                                    <button className='relative z-10 text-white w-auto bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full text-xs font-bold px-4 uppercase py-1 text-center inline-flex items-center justify-center gap-1 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'><RxCross2 className='text-lg' />Cancel</button>
                                    
                                    <div className='relative z-10 text-black w-full border-red-400 bg-red-100 rounded-tr-xl rounded-bl-xl border font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300'>15 Days Left</div>
                                </div>
                            </div>
                        </div> */}

                        {/* </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'> */}
                        {/* <div className="flex flex-wrap w-full h-full items-stretch ">
                            <div className='w-full border-b lg:py-8 p-5 border relative border-gray-400 shadow-lg bg-gradient-to-b from-white to-gray-200 rounded-xl shadow-theme1/20 '>
                                <div className="grayscale flex flex-wrap   items-stretch gap-8">
                                    <div className=" w-full shrink-0 grid items-center justify-center">
                                        <img className="w-full aspect-[1/0.6] object-contain" src="https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70" alt="jk" />
                                    </div>
                                    <div className='text-xs font-bold text-center bg-red-600 border-red-60 px-4 py-2 flex items-center justify-center text-white absolute rounded-bl-lg rounded-tr-lg -top-[10px] -left-[35px] shadow border-b-2 border-white'>BASIC</div>
                                    <div className="w-full">
                                        <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                    </div>
                                    <div className="w-full shrink-0 flex">
                                        <div className="grow flex items-center gap-3">
                                            <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                            <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                            <div className="text-lime-600">36% off</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex w-full items-center mt-3 justify-between'>
                                    <div className='flex items-center'>
                                        <button className='relative z-10 text-black w-auto bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'><ImPower className='size-5' />Renew Plan
                                        </button>
                                        <button className='relative z-10 text-white w-auto bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full text-xs font-bold px-2 uppercase py-2 ms-2 text-center inline-flex items-center justify-center gap-1 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'><AiFillDelete className='text-lg' /></button>
                                    </div>
                                    <div className='font-bold text-base text-black'>Expired</div>
                                </div>
                            </div>
                        </div> */}

                        {/* </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'> */}
                                

                        {/* </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'> */}
                                

                        {/* </SwiperSlide>
                    </Swiper> */}
                    </div>
                    <div className="w-full text-center py-8">
                        {/* <Link to='/seller-productdetail' className="relative z-10 text-black bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40"><TfiReload className='size-5' /> Load More</Link> */}
                    </div>
                    
                </div>
            </div> 
            <Footer/>
        </>
    )
}

export default FeaturedPost