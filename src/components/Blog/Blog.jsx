import React from 'react'
import blogImg from '../../asstes/img/blog01.png'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Blog = () => {
    return (
        <>
            <div class="px-5 md:px-10 py-10">
                <div class="heading text-3xl font-bold text-center mb-5">
                    Latest Blog
                </div>

        <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 4,
                },
                }}
                modules={[Pagination]}
                className="mySwiper *:py-5"
            >
                <SwiperSlide>
                    <a href="javascript:;">
                        <div class="mainCard h-full group shadow-xl transition-all duration-300 rounded-lg">
                            <div class="swiperImg overflow-hidden rounded-lg rounded-b-none">
                                <img src={blogImg} alt="blogPost" class="h-full w-full"/>
                            </div>
                            <div class="cardBody px-4 py-8">
                                <div class="flex items-center">
                                    <div class="date text-black font-semibold pb-3 text-base">
                                        Sep 14, 2023
                                    </div>
                                </div>
                                <div class="cardMainHeading text-lg overflow-hidden text-ellipsis line-clamp-3">
                                    <a href="javascript:;" class="text-black font-semibold group-hover:underline transition-all duration-300">
                                        Laptop computer with blue pink and a blank screen.
                                    </a>
                                </div>
                                <div class="flex items-center pt-10 gap-3">
                                    <a href="javascript:;">
                                        <div class="hover:bg-black hover:text-white transition-all duration-300 text-base border-2 rounded-md py-2 px-5">
                                            Load More
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="javascript:;">
                        <div class="mainCard h-full group shadow-xl transition-all duration-300 rounded-lg">
                            <div class="swiperImg overflow-hidden rounded-lg rounded-b-none">
                                <img src={blogImg} alt="blogPost" class="h-full w-full"/>
                            </div>
                            <div class="cardBody px-4 py-8">
                                <div class="flex items-center">
                                    <div class="date text-black font-semibold pb-3 text-base">
                                        Sep 14, 2023
                                    </div>
                                </div>
                                <div class="cardMainHeading text-lg overflow-hidden text-ellipsis line-clamp-3">
                                    <a href="javascript:;" class="text-black font-semibold group-hover:underline transition-all duration-300">
                                        Laptop computer with blue pink and a blank screen.
                                    </a>
                                </div>
                                <div class="flex items-center pt-10 gap-3">
                                    <a href="javascript:;">
                                        <div class="hover:bg-black hover:text-white transition-all duration-300 text-base border-2 rounded-md py-2 px-5">
                                            Load More
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="javascript:;">
                        <div class="mainCard h-full group shadow-xl transition-all duration-300 rounded-lg">
                            <div class="swiperImg overflow-hidden rounded-lg rounded-b-none">
                                <img src={blogImg} alt="blogPost" class="h-full w-full"/>
                            </div>
                            <div class="cardBody px-4 py-8">
                                <div class="flex items-center">
                                    <div class="date text-black font-semibold pb-3 text-base">
                                        Sep 14, 2023
                                    </div>
                                </div>
                                <div class="cardMainHeading text-lg overflow-hidden text-ellipsis line-clamp-3">
                                    <a href="javascript:;" class="text-black font-semibold group-hover:underline transition-all duration-300">
                                        Laptop computer with blue pink and a blank screen.
                                    </a>
                                </div>
                                <div class="flex items-center pt-10 gap-3">
                                    <a href="javascript:;">
                                        <div class="hover:bg-black hover:text-white transition-all duration-300 text-base border-2 rounded-md py-2 px-5">
                                            Load More
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="javascript:;">
                        <div class="mainCard h-full group shadow-xl transition-all duration-300 rounded-lg">
                            <div class="swiperImg overflow-hidden rounded-lg rounded-b-none">
                                <img src={blogImg} alt="blogPost" class="h-full w-full"/>
                            </div>
                            <div class="cardBody px-4 py-8">
                                <div class="flex items-center">
                                    <div class="date text-black font-semibold pb-3 text-base">
                                        Sep 14, 2023
                                    </div>
                                </div>
                                <div class="cardMainHeading text-lg overflow-hidden text-ellipsis line-clamp-3">
                                    <a href="javascript:;" class="text-black font-semibold group-hover:underline transition-all duration-300">
                                        Laptop computer with blue pink and a blank screen.
                                    </a>
                                </div>
                                <div class="flex items-center pt-10 gap-3">
                                    <a href="javascript:;">
                                        <div class="hover:bg-black hover:text-white transition-all duration-300 text-base border-2 rounded-md py-2 px-5">
                                            Load More
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                </SwiperSlide>
                
            </Swiper>


            <div class="swiper-button-next after:content-[*] size-[40px] transition-all duration-300  bg-white border border-blue-500 text-black rounded-full right-[-10px] p-2">
                    <div class="">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-full w-full" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                    </div>
            </div>
            <div class="swiper-button-prev after:content-[*] size-[40px] transition-all duration-300  bg-white border border-blue-500 text-black rounded-full left-[-10px] p-2">
                    <div class="rotate-180">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-full w-full" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                    </div>
            </div>
    </div>
        </>
    )
}

export default Blog