import React from 'react'
import speaker from '../../asstes/img/speaker.png'
import tab from '../../asstes/img/tab02.png'
import { Link } from 'react-router-dom'

const OfferBanner = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto p-4 py-5 sm:py-8 lg:py-10 flex flex-wrap items-center gap-y-4">
                <div className="w-full md:w-1/2 overflow-hidden">
                    <div className="mainCard cursor-pointer h-full group relative md:pe-3 pe-0">
                        <div className="aspect-[2/1] relative h-full after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black/30 after:rounded-lg overflow-hidden rounded-lg">
                            <img src={speaker} alt="speaker" className="h-full w-full object-cover overflow-hidden rounded-lg duration-200 md:group-hover:scale-105 md:group-hover:rounded-lg"/>
                            <div className="absolute top-1/2 -translate-y-1/2 p-8 left-0 z-10">
                                <Link>
                                    <div className="text-white/80 font-semibold text-xl !leading-[150%]">
                                        UP TO 75% OFF!
                                    </div>
                                    <div className="text-white font-semibold text-xl sm:text-2xl lg:text-3xl !leading-[120%] py-2">
                                        Amazon Echo Dot 3rd Gen Smart speaker
                                    </div>
                                </Link>
                                <div className="pt-1 sm:pt-2">
                                    <Link className="sm:text-lg text-base font-semibold text-white duration-300 md:group-hover:text-yellow-400">
                                        Chat with Seller
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden">
                    <div className="mainCard cursor-pointer h-full group relative md:ps-3 ps-0">
                        <div className="aspect-[2/1] relative h-full after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black/30 after:rounded-lg overflow-hidden rounded-lg">
                            <img src={tab} alt="" className="h-full w-full object-cover overflow-hidden rounded-lg duration-200 md:group-hover:scale-105 md:group-hover:rounded-lg"/>
                            <div className="absolute top-1/2 -translate-y-1/2 p-8 left-0 z-10">
                                <Link>
                                    <div className="text-white/80 font-semibold text-xl !leading-[150%]">
                                        UP TO 50% OFF!
                                    </div>
                                    <div className="text-white font-semibold text-xl sm:text-2xl lg:text-3xl !leading-[120%] py-2">
                                        Acer Aspire 5 Gaming Laptop Intel Core i5 13th Gen
                                    </div>
                                </Link>
                                <div className="pt-1 sm:pt-2">
                                    <Link className="sm:text-lg text-base font-semibold text-white duration-300 md:group-hover:text-yellow-400">
                                        Chat with Seller
                                    </Link>
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