import React from 'react'
import 'swiper/css';
import { Link } from 'react-router-dom';
import { BiMessageSquareDetail } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";

const Featured = ({setIsOpenSaftey}) => {
    return (
        <>
            <div  id='featured' className="relative md:py-8 py-4 bg-gray-100">
            {/* <div  className=' -top-[123px] h-[123px] w-full bg-red-400'></div> */}
                <div className="max-w-screen-xl mx-auto px-4 z-[1] relative">
                    <div className="flex items-center pb-2 md:pb-8">
                        <div className="grow">
                            <div className="md:text-2xl text-xl text-black font-bold">
                                Featured
                            </div>
                        </div>
                        {/* <div className="inline-flex gap-2 items-center">
                            <div className="featuredprev sm:flex hidden border hover:bg-black transition hover:text-white hover:border items-center justify-center rounded-lg size-8 border-black [&.swiper-button-disabled]:opacity-40"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg></div>
                            <div className="featurednext sm:flex hidden border hover:bg-black transition hover:text-white hover:border items-center justify-center rounded-lg size-8 border-black [&.swiper-button-disabled]:opacity-40">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                            </div>
                        </div> */}
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
                                <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-6 border-b lg:py-8 p-5 border border-red-400 shadow-lg  bg-white/60 rounded-xl shadow-theme1/20">
                                        <div className=" w-full shrink-0 grid items-center justify-center">
                                            {/* <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button> */}
                                            <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/ky7lci80/tablet/e/d/m/sm-x205nzaeinu-samsung-original-imagahrshg78gwvb.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className="w-full">
                                            <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                            {/* <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                <li>Intel Core i3 Processor (11th Gen)</li>
                                                <li>8 GB DDR4 RAM</li>
                                                <li>64 bit Windows 11 Operating System</li>
                                                <li>512 GB SSD</li>
                                                <li>39.62 cm (15.6 Inch) Display</li>
                                                <li>1 Year Onsite Warranty</li>
                                            </ul> */}
                                        </div>
                                        <div className="w-full shrink-0 flex">
                                            <div className="grow flex items-center gap-3">
                                                <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                                <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                                <div className="text-lime-600">36% off</div>
                                            </div>
                                            {/* <div className="shrink-0">
                                                <Link to='/seller-productdetail' className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40"> <BiMessageSquareDetail className='size-5' /> View Detail</Link>
                                            </div> */}
                                            <div className='text-xs font-bold bg-gray-200 px-4 py-1 text-black rounded-full absolute top-4 left-4 border-2'>2 Days Left</div>
                                            <div className='text-xs font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-br-lg rounded-tl-lg border-red px-4 py-2 text-white  absolute top-4 right-4 border-2 border-b-black shadow '>PREMIUM</div>
                                        </div>
                                        
                                        <div className='flex w-full gap-4'>
                                            <button className='relative z-10 text-white w-full bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'>Cancel</button>
                                            <button className='relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Renew Plan</button>
                                        </div>
                                    </div>
                                </div>


                        {/* </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'> */}
                        <div className="flex flex-wrap w-full h-full items-stretch">
                                    <div className="w-full flex flex-wrap relative items-stretch gap-6 border-b lg:py-8 p-5 border border-gray-400 shadow-lg bg-white/60 rounded-xl shadow-theme1/20">
                                        <div className=" w-full shrink-0 grid items-center justify-center">
                                            {/* <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button> */}
                                            <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className="w-full">
                                            <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                            {/* <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                <li>Intel Core i3 Processor (11th Gen)</li>
                                                <li>8 GB DDR4 RAM</li>
                                                <li>64 bit Windows 11 Operating System</li>
                                                <li>512 GB SSD</li>
                                                <li>39.62 cm (15.6 Inch) Display</li>
                                                <li>1 Year Onsite Warranty</li>
                                            </ul> */}
                                        </div>
                                        <div className="w-full shrink-0 flex">
                                            <div className="grow flex items-center gap-3">
                                                <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                                <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                                <div className="text-lime-600">36% off</div>
                                            </div>
                                            {/* <div className="shrink-0">
                                                <Link to='/seller-productdetail' className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40"> <BiMessageSquareDetail className='size-5' /> View Detail</Link>
                                            </div> */}
                                            <div className='text-xs font-bold bg-gray-200 px-4 py-1 text-black rounded-full absolute top-4 left-4 border-2'>1 Month Left</div>
                                            <div className='text-xs font-bold bg-green-600 rounded-br-lg rounded-tl-lg px-4 py-2 text-white absolute top-4 right-4 border-2 bg-gradient-to-r from-teal-600 to-green-500 border-white border-b-black shadow'>STANDARD</div>
                                        </div>
                                        
                                        <div className='flex w-full gap-4'>
                                            <button className='relative z-10 text-white w-full bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'>Cancel</button>
                                            <button className='relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Renew Plan</button>
                                        </div>
                                    </div>
                                </div>
                        {/* </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'> */}
                                
                        {/* </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'> */}
                        <div className="flex flex-wrap w-full h-full items-stretch">
                            <div className="w-full flex flex-wrap relative items-stretch gap-6 border-b lg:py-8 p-5 border border-gray-400 shadow-lg bg-white/60 rounded-xl shadow-theme1/20">
                                <div className=" w-full shrink-0 grid items-center justify-center">
                                    {/* <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black p-2 flex items-center justify-center absolute top-3 right-3">
                                        <FaRegHeart className="size-full" />
                                    </button> */}
                                    <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70" alt="jk" />
                                </div>
                                <div className="w-full">
                                    <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                    {/* <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                        <li>Intel Core i3 Processor (11th Gen)</li>
                                        <li>8 GB DDR4 RAM</li>
                                        <li>64 bit Windows 11 Operating System</li>
                                        <li>512 GB SSD</li>
                                        <li>39.62 cm (15.6 Inch) Display</li>
                                        <li>1 Year Onsite Warranty</li>
                                    </ul> */}
                                </div>
                                <div className="w-full shrink-0 flex">
                                    <div className="grow flex items-center gap-3">
                                        <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                        <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                        <div className="text-lime-600">36% off</div>
                                    </div>
                                    {/* <div className="shrink-0">
                                        <Link to='/seller-productdetail' className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40"> <BiMessageSquareDetail className='size-5' /> View Detail</Link>
                                    </div> */}
                                    <div className='text-xs font-bold bg-gray-200 px-4 py-1 text-black rounded-full absolute top-4 left-4 border-2'>15 Days Left</div>
                                    <div className='text-xs font-bold bg-yellow-800 px-4 py-2  text-white rounded-br-lg rounded-tl-lg shadow absolute top-4 right-4 border-2 border-b-black border-white-800 bg-gradient-to-r from-red-500 to-orange-500'>BASIC</div>
                                </div>
                                
                                <div className='flex w-full gap-4'>
                                    <button className='relative z-10 text-white w-full bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'>Cancel</button>
                                    <button className='relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Renew Plan</button>
                                </div>
                            </div>
                        </div>

                        {/* </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'> */}
                        <div className="flex flex-wrap w-full h-full items-stretch ">
                            <div className='w-full   border-b lg:py-8 p-5 border relative border-gray-400 shadow-lg bg-white/60 rounded-xl shadow-theme1/20 '>
                                <div className="grayscale flex flex-wrap   items-stretch gap-8">
                                    <div className=" w-full shrink-0 grid items-center justify-center">
                                        {/* <button className="z-10 size-8 rounded-full bg-white shadow-md shadow-black/20 md:hover:bg-white duration-300 text-black p-2 flex items-center justify-center absolute top-3 right-3">
                                            <FaRegHeart className="size-full" />
                                        </button> */}
                                        <img className="w-full " src="https://rukminim2.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70" alt="jk" />
                                    </div>
                                <div className=''>
                                    <div className='text-xs font-bold bg-gray-200 px-4 py-1 text-black rounded-full absolute -top-1 md:-top-3 left-0 border-2'>Expired</div>
                                    <div className='text-xs font-bold bg-yellow-800 px-4 py-2 text-white rounded-br-lg rounded-tl-lg absolute -top-2 md:-top-4 right-0 border-2 border-b-black bg-gradient-to-r from-red-500 to-orange-500 border-white shadow'>BASIC</div>
                                </div>
                                    <div className="w-full">
                                        <Link to="/seller-productdetail" className="before:absolute before:inset-0 before:z-0 w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                        {/* <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                            <li>Intel Core i3 Processor (11th Gen)</li>
                                            <li>8 GB DDR4 RAM</li>
                                            <li>64 bit Windows 11 Operating System</li>
                                            <li>512 GB SSD</li>
                                            <li>39.62 cm (15.6 Inch) Display</li>
                                            <li>1 Year Onsite Warranty</li>
                                        </ul> */}
                                    </div>
                                    <div className="w-full shrink-0 flex">
                                        <div className="grow flex items-center gap-3">
                                            <div className="w-auto md:text-lg font-bold text-black">$31,990</div>
                                            <del className="w-auto text-gray-600 font-semibold md:text-sm text-xs">$49,990</del>
                                            <div className="text-lime-600">36% off</div>
                                        </div>
                                        {/* <div className="shrink-0">
                                            <Link to='/seller-productdetail' className="relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40"> <BiMessageSquareDetail className='size-5' /> View Detail</Link>
                                        </div> */}
                                    </div>
                                </div>
                                <div className='flex w-full gap-4 mt-3'>
                                    <button className='relative z-10 text-white w-full bg-red-600 border-2 border-red-600 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-600 shadow-md shadow-black/40'>Remove</button>
                                    <button className='relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Renew Plan</button>
                                </div>
                            </div>
                        </div>

                        {/* </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'> */}
                                

                        {/* </SwiperSlide>
                        <SwiperSlide className='swiperSlider relative'> */}
                                

                        {/* </SwiperSlide>
                    </Swiper> */}
                    </div>
                    <div className="w-full text-center py-8">
                        <Link to='/seller-productdetail' className="relative z-10 text-black bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40"><TfiReload className='size-5' /> Load More</Link>
                    </div>
                    
                </div>
            </div>                                          
        </>
    )
}

export default Featured