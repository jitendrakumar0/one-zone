import React from 'react'
import bannerHero from '../../asstes/img/herob.png'



const HeroBanner = () => {
    return (
        <>
        <div className='herosection lg:h-[450px] md:h-[430px] h-[400px] lg:pt-10 pt-8 relative '>
            <div className='relative mx-auto max-w-7xl px-6 lg:px-8 z-[1] h-full md:py-20 py-2 '>
             <div className="flex rounded-3xl overflow-hidden items-center  flex-col justify-center bg-[url(../../src/assets/img/banner.jpg')] bg-no-repeat bg-center h-full w-full">
                    <div className='absolute inset-0 lg:h-[450px] md:h-[430px] h-[400px] rounded-3xl overflow-hidden'>
                        <img src={bannerHero} alt="banner"  className="w-full h-full object-cover"/>
                    </div>
                    <div className='text-white md:text-5xl sm:text-4xl text-3xl font-semibold relative z-20 text-center'>Watch Wearable Device</div>
                    <div className='text-white/90 text-base text-white relative z-20 mt-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elitmet, consectetur adipisicing elit . <br className='md:block hidden' /> Ratione impedit repellendus illo, dolorum corrupti autem!</div>
                    <div className='mt-10'>
                        <div class="relative mt-2 rounded-md shadow-0 md:w-[500px] w-full bg-transparent ">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center sm:pl-5 pl-3 bg-transparent">
                            <span class="text-white sm:text-sm rounded-full bg-transparent">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className='size-7' xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path></svg>
                            </span>
                            </div>
                            <input type="text" name="price" id="price" class="block w-full rounded-full bg-transparent sm:h-14 h-10 border-0 py-1.5 sm:pl-14 pl-10 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-1 focus:ring-inset focus:ring-[#FFED00] sm:text-base sm:placeholder:text-base placeholder:text-sm sm:leading-6" placeholder="0.00"/>
                            <div class="absolute inset-y-0 sm:right-2 right-1 flex items-center rounded-full bg-transparent my">
                                <span>
                                    <button className='border-0 rounded-full bg-[#FFED00] px-4 sm:py-2 py-1 text-black text-base font-semibold'>Search</button>
                                </span>
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