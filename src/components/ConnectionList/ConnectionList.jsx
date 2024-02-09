import React from 'react'
import { Pagination } from 'swiper/modules';
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

export const ConnectionList = () => {
    return (
        <>
                
            <div class="realtive lg:py-10 bg-[#F5F5F7]">
                <div class="mx-auto max-w-7xl px-6 lg:px-8 z-[1]">
                    <div class="flex items-center mb-10">
                        <div class="flex-1">
                            <div class="md:text-3xl text-2xl text-black font-bold mt-5">
                                Categories
                            </div>
                        </div>
                        <div class="flex-none relative">
                            <div class="swiper-button-next after:content-[*] md:size-9 size-7 transition-all duration-300 bg-black border border-black text-white rounded-full right-[-10px] md:p-2 p-1">
                                <div class="">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-full w-full" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                                </div>
                            </div>
                            <div class="swiper-button-prev absolute after:content-[*] md:size-9 size-7 transition-all top-0 duration-300 bg-black border border-black text-white rounded-full sm:-left-10 -left-10 md:p-2 p-1">
                                <div class="rotate-180">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-full w-full" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
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
                breakpoints={{
                540: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 6,
                },
                }}
                modules={[Pagination]}
                className="collectionSwiper"
            >
                <SwiperSlide>
                    <Link to="/windows-products" class="collectioncard duration-300 group ">
                        <div class="bg-white mx-auto md:size-36 sm:size-24 size-20 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={Windows} alt="frame" class="md:size-16 size-12 object-contain duration-300 md:group-hover:scale-105"/>
                        </div>
                        <div class="text-black sm:text-xl text-lg font-semibold sm:mt-5 mt-3 text-center">Windows</div>
                        <div class="text-gray-700 text-sm text-center sm:mt-1">8 Items</div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="collectioncard duration-300 group">
                        <div class="bg-white mx-auto md:size-36 sm:size-24 size-20 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={apple} alt="frame" class="md:size-16 size-12 object-contain duration-300 md:group-hover:scale-105"/>
                        </div>
                        <div class="text-black sm:text-xl text-lg font-semibold sm:mt-5 mt-3 text-center">Apple</div>
                        <div class="text-gray-700 text-sm text-center sm:mt-1">8 Items</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="collectioncard duration-300 group">
                        <div class="bg-white mx-auto md:size-36 sm:size-24 size-20 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={cromebook} alt="frame" class="md:size-16 size-12 object-contain duration-300 md:group-hover:scale-105"/>
                        </div>
                        <div class="text-black sm:text-xl text-lg font-semibold sm:mt-5 mt-3 text-center">ChromeBook</div>
                        <div class="text-gray-700 text-sm text-center sm:mt-1">8 Items</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="collectioncard duration-300 group">
                        <div class="bg-white mx-auto md:size-36 sm:size-24 size-20 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={tab} alt="frame" class="md:size-16 size-12 object-contain duration-300 md:group-hover:scale-105"/>
                        </div>
                        <div class="text-black sm:text-xl text-lg font-semibold sm:mt-5 mt-3 text-center">Mob & Tab</div>
                        <div class="text-gray-700 text-sm text-center sm:mt-1">8 Items</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="collectioncard duration-300 group">
                        <div class="bg-white mx-auto md:size-36 sm:size-24 size-20 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={printers} alt="frame" class="md:size-16 size-12 object-contain duration-300 md:group-hover:scale-105"/>
                        </div>
                        <div class="text-black sm:text-xl text-lg font-semibold sm:mt-5 mt-3 text-center"> Printers</div>
                        <div class="text-gray-700 text-sm text-center sm:mt-1">8 Items</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="collectioncard duration-300 group">
                        <div class="bg-white mx-auto md:size-36 sm:size-24 size-20 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={server} alt="frame" class="md:size-16 size-12 object-contain duration-300 md:group-hover:scale-105"/>
                        </div>
                        <div class="text-black sm:text-xl text-lg font-semibold sm:mt-5 mt-3 text-center">Server</div>
                        <div class="text-gray-700 text-sm text-center sm:mt-1">8 Items</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="collectioncard duration-300 group">
                        <div class="bg-white mx-auto md:size-36 sm:size-24 size-20 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={server} alt="frame" class="md:size-16 size-12 object-contain duration-300 md:group-hover:scale-105"/>
                        </div>
                        <div class="text-black sm:text-xl text-lg font-semibold sm:mt-5 mt-3 text-center">Server</div>
                        <div class="text-gray-700 text-sm text-center sm:mt-1">8 Items</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/windows-products" class="collectioncard duration-300 group">
                        <div class="bg-white mx-auto md:size-36 sm:size-24 size-20 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={Windows} alt="frame" class="md:size-16 size-12 object-contain duration-300 md:group-hover:scale-105"/>
                        </div>
                        <div class="text-black sm:text-xl text-lg font-semibold sm:mt-5 mt-3 text-center">Windows</div>
                        <div class="text-gray-700 text-sm text-center sm:mt-1">8 Items</div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="collectioncard duration-300 group">
                        <div class="bg-white mx-auto md:size-36 sm:size-24 size-20 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={apple} alt="frame" class="md:size-16 size-12 object-contain duration-300 md:group-hover:scale-105"/>
                        </div>
                        <div class="text-black sm:text-xl text-lg font-semibold sm:mt-5 mt-3 text-center">Apple</div>
                        <div class="text-gray-700 text-sm text-center sm:mt-1">8 Items</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="collectioncard duration-300 group">
                        <div class="bg-white mx-auto md:size-36 sm:size-24 size-20 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={cromebook} alt="frame" class="md:size-16 size-12 object-contain duration-300 md:group-hover:scale-105"/>
                        </div>
                        <div class="text-black sm:text-xl text-lg font-semibold sm:mt-5 mt-3 text-center">ChromeBook</div>
                        <div class="text-gray-700 text-sm text-center sm:mt-1">8 Items</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="collectioncard duration-300 group">
                        <div class="bg-white mx-auto md:size-36 sm:size-24 size-20 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={tab} alt="frame" class="md:size-16 size-12 object-contain duration-300 md:group-hover:scale-105"/>
                        </div>
                        <div class="text-black sm:text-xl text-lg font-semibold sm:mt-5 mt-3 text-center">Mob & Tab</div>
                        <div class="text-gray-700 text-sm text-center sm:mt-1">8 Items</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="collectioncard duration-300 group">
                        <div class="bg-white mx-auto md:size-36 sm:size-24 size-20 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={printers} alt="frame" class="md:size-16 size-12 object-contain duration-300 md:group-hover:scale-105"/>
                        </div>
                        <div class="text-black sm:text-xl text-lg font-semibold sm:mt-5 mt-3 text-center"> Printers</div>
                        <div class="text-gray-700 text-sm text-center sm:mt-1">8 Items</div>
                    </div>
                </SwiperSlide>
            </Swiper>
                    
                </div>
            </div>
        </>
    )
}
