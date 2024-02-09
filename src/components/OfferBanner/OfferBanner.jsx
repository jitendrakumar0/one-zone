import React from 'react'
import speaker from '../../asstes/img/speaker.png'
import tab from '../../asstes/img/tab02.png'

const OfferBanner = () => {
    return (
        <>
            <div class="px-5 md:px-10 py-10 flex flex-wrap items-center gap-y-4">
        <div class="w-full md:w-1/2">
            <div class="mainCard cursor-pointer h-full group relative px-3">
                <div class="aspect-[2/1] relative h-full after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black/30 after:rounded-lg">
                    <img src={speaker} alt="" class="h-full w-full object-cover overflow-hidden rounded-lg"/>
                    <div class="absolute top-1/2 -translate-y-1/2 p-8 left-0 z-10">
                        <a href="javascript:;">
                            <div class="text-white/80 font-semibold text-xl !leading-[150%]">
                                UP TO 75% OFF!
                            </div>
                            <div class="text-white font-semibold text-xl sm:text-2xl lg:text-3xl !leading-[120%] py-2">
                                Unbeatable Discounts
                            </div>
                        </a>
                        <div class="pt-1 sm:pt-2">
                            <a href="javascript:;" class="text-lg font-semibold text-white group-hover:text-yellow-400">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2">
            <div class="mainCard cursor-pointer h-full group relative px-3">
                <div class="aspect-[2/1] relative h-full after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black/30 after:rounded-lg">
                    <img src={tab} alt="" class="h-full w-full object-cover overflow-hidden rounded-lg"/>
                    <div class="absolute top-1/2 -translate-y-1/2 p-8 left-0 z-10">
                        <a href="javascript:;">
                            <div class="text-white/80 font-semibold text-xl !leading-[150%]">
                                UP TO 75% OFF!
                            </div>
                            <div class="text-white font-semibold text-xl sm:text-2xl lg:text-3xl !leading-[120%] py-2">
                                Unbeatable Discounts
                            </div>
                        </a>
                        <div class="pt-1 sm:pt-2">
                            <a href="javascript:;" class="text-lg font-semibold text-white group-hover:text-yellow-400">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default OfferBanner