import React from 'react'
import banner from '../../asstes/img/product-1.png'

const HeroBanner = () => {
    return (
        <>
        <div className='herosection'>
        <div class="px-5 md:px-10 py-20 flex flex-col gap-y-5">
            <div class="upper flex flex-wrap items-center gap-y-4">
                <div class="swiperHome w-full lg:w-3/4">
                    <div class="lg:px-2">
                        <div class="swiper homeSwiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="lg:relative aspect-[4/1.75]">
                                        <img src={banner} alt="" class="h-full w-full object-cover overflow-hidden rounded-lg"/>
                                        <div class="lg:absolute bottom-0 text-center lg:text-start p-5 md:p-8 left-0 w-full lg:w-2/3 xl:w-1/2">
                                            <a href="javascript">
                                                <div class="lg:text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl !leading-[130%]">
                                                    Watch Wearable Device
                                                </div>
                                                <div class="text-sm sm:text-base md:text-lg lg:text-white/80 py-2 md:py-3">
                                                    Which can vary depending on the brand and model electronic device.
                                                </div>
                                                <div class="py-2 md:py-3">
                                                    <a href="javascript:;" class="py-2.5 md:py-3 px-4 md:px-5 inline-flex items-center gap-2 rounded-lg text-black bg-slate-200 hover:bg-slate-200/80 transition-all duration-500">
                                                        <span class="text-base font-semibold flex items-center gap-2">Shop Now <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></span>
                                                    </a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="lg:relative aspect-[4/1.75]">
                                        <img src={banner} alt="" class="h-full w-full object-cover overflow-hidden rounded-lg"/>
                                        <div class="lg:absolute bottom-0 text-center lg:text-start p-5 md:p-8 left-0 w-full lg:w-2/3 xl:w-1/2">
                                            <a href="javascript">
                                                <div class="lg:text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl !leading-[130%]">
                                                    Modern Mobile Phones
                                                </div>
                                                <div class="text-sm sm:text-base md:text-lg lg:text-white/80 py-2 md:py-3">
                                                    Mobile phone technology has advanced rapidly over the years, with various
                                                </div>
                                                <div class="py-2 md:py-3">
                                                    <a href="javascript:;" class="py-2.5 md:py-3 px-4 md:px-5 inline-flex items-center gap-2 rounded-lg text-black bg-slate-200 hover:bg-slate-200/80 transition-all duration-500">
                                                        <span class="text-base font-semibold flex items-center gap-2">Shop Now <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></span>
                                                    </a>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
                <div class="twocards w-full lg:w-1/4">
                    <div class="lg:px-3 flex flex-col gap-y-5">
                        <div class="relative">
                            <img src="./img/vedio-game.png" alt="" class="h-full w-full object-cover overflow-hidden rounded-lg"/>
                            <div class="absolute top-0 p-5 left-0">
                                <a href="javascript:;">
                                    <div class="text-white font-semibold text-xl !leading-[150%]">
                                        Special Discount<br/> 
                                        UP TO 50% OFF
                                    </div>
                                </a>
                                <div class="pt-3">
                                    <a href="javascript:;" class="text-white underline hover:text-white/80">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="relative">
                            <img src="./img/haedphone.png" alt="" class="h-full w-full object-cover overflow-hidden rounded-lg"/>
                            <div class="absolute top-0 p-5 left-0">
                                <a href="javascript:;">
                                    <div class="text-white font-semibold text-xl !leading-[150%]">
                                        Hot Deals<br/> 
                                        UP TO 30% OFF
                                    </div>
                                </a>
                                <div class="pt-3">
                                    <a href="javascript:;" class="text-white underline hover:text-white/80">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lower">
                <div class="flex items-center flex-wrap gap-y-4">
                    <div class="w-full lg:w-1/3">
                        <div class="relative lg:px-2">
                            <img src="./img/camera.png" alt="" class="h-full w-full object-cover overflow-hidden rounded-lg"/>
                            <div class="absolute top-1/2 -translate-y-2/4 p-5  left-0 w-2/3">
                                <a href="javascript:;">
                                    <div class="text-white font-bold text-xl !leading-[140%]">
                                        Hero Camera
                                    </div>
                                </a>
                                <div class="pt-2">
                                    <a href="javascript:;" class="text-white underline text-base hover:text-white/80 uppercase">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/3">
                        <div class="relative lg:px-2">
                            <img src="./img/ipad.png" alt="" class="h-full w-full object-cover overflow-hidden rounded-lg"/>
                            <div class="absolute top-1/2 -translate-y-2/4 p-5  left-0 w-2/3">
                                <a href="javascript:;">
                                    <div class="text-white font-bold text-xl !leading-[140%]">
                                        Apple iPad
                                    </div>
                                </a>
                                <div class="pt-2">
                                    <a href="javascript:;" class="text-white underline text-base hover:text-white/80 uppercase">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/3">
                        <div class="relative lg:px-2">
                            <img src="./img/home05.png" alt="" class="h-full w-full object-cover overflow-hidden rounded-lg"/>
                            <div class="absolute top-1/2 -translate-y-2/4 p-5  left-0 w-2/3">
                                <a href="javascript:;">
                                    <div class="text-white font-bold text-xl !leading-[140%]">
                                        Smart Watch
                                    </div>
                                </a>
                                <div class="pt-2">
                                    <a href="javascript:;" class="text-white underline text-base hover:text-white/80 uppercase">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default HeroBanner