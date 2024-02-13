import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';



const HeroBanner = () => {
    return (
        <>
        {/* <div className='herosection lg:h-[550px] md:h-[430px] h-[400px] relative'>
            <div className='relative h-full md:py-20 py-2 '>
                <div className="flex rounded-3xl overflow-hidden items-center  flex-col justify-center bg-[url(../../src/assets/img/banner.jpg')] bg-no-repeat bg-center h-full w-full">
                        <div className='absolute inset-0 lg:h-[550px] md:h-[430px] h-[400px]  overflow-hidden'>
                            <img src={bannerHero} alt="banner"  className="w-full h-full object-cover"/>
                        </div>
                        <div className='text-white md:text-3xl sm:text-2xl text-xl md:w-4/6 pb-4 mx-auto capitalize font-semibold relative z-20 text-center sm:px-5 px-4'>We Offer Used Computers For Sale And Their Complementary Parts </div>
                       
                        <div className='max-w-3xl w-full flex justify-center'>
                            <div className="relative mt-4 rounded-md shadow-0 w-full bg-transparent z-20">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center sm:pl-5 pl-3 bg-transparent">
                                <span className="text-black sm:text-sm rounded-full bg-transparent">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className='sm:size-7 size-5' xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path></svg>
                                </span>
                                </div>
                                <input type="text" name="price" id="price" className="block bg-white w-full rounded-full  sm:h-14 h-10 border-0 py-1.5 sm:pl-14 pl-10 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-1 focus:ring-inset focus:ring-theme1 sm:text-base sm:placeholder:text-base placeholder:text-sm sm:leading-6" placeholder="Search Tablet, Laptop & Desktop"/>
                                <div className="absolute inset-y-0 sm:right-2 right-1 flex items-center rounded-full bg-transparent my">
                                    <span>
                                        <Link to="/windows-products" className='border-0 rounded-full bg-theme1 px-4 sm:py-3 py-1 text-white text-xs font-bold uppercase'>Search</Link>
                                    </span>
                                </div>
                            </div>
                        </div>

                </div>
                <div className='bg-gradient-to-tr from-sky-900 via-blue-800 to-teal-800 mix-blend-multiply size-full absolute inset-0'></div>
            </div>
        </div> */}
        
      <div className="bg-white">
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-1 relative">
                  {/* <div className="item">
                    <Link className="w-full bg-white border border-gray-100 flex justify-center items-center before:absolute before:inset-0 before:z-10 before:bg-gradient-to-tr before:from-yellow-600 before:via-amber-500 before:to-yellow-900 before:mix-blend-hue">
                      <img className='w-full h-auto' src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2146%2FGadget-banners.png&w=1920&q=75" alt="logo"/>
                    </Link>
                  </div> */}
              <Swiper 
                  navigation={{
                  prevEl: '.prev',
                  nextEl: '.next',
                }}  
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]} 
                className="mySwiper w-full">
                <SwiperSlide className='w-full'>
                  <div className="item w-full">
                    <Link className="w-full bg-white border border-gray-100 flex justify-center items-center before:absolute before:inset-0 before:z-10 before:bg-gradient-to-tr before:from-yellow-600 before:via-amber-500 before:to-yellow-900 before:mix-blend-hue">
                    <img className='w-full h-auto object-cover  md:hidden' src='https://rukminim2.flixcart.com/fk-p-flap/480/210/image/b8b6182613d198e4.jpeg?q=20' alt="" />
                      <img className='w-full hidden md:block' src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2146%2FGadget-banners.png&w=1920&q=75" alt="logo"/>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <Link className="w-full bg-white border border-gray-100 flex justify-center items-center before:absolute before:inset-0 before:z-10 before:bg-gradient-to-tr before:from-yellow-600 before:via-amber-500 before:to-yellow-900 before:mix-blend-hue">
                    <img className='w-full h-auto object-cover  md:hidden' src='https://rukminim2.flixcart.com/fk-p-flap/480/210/image/b8b6182613d198e4.jpeg?q=20' alt="" />
                      <img className='w-full hidden md:block' src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2146%2FGadget-banners.png&w=1920&q=75" alt="logo"/>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <Link className="w-full bg-white border border-gray-100 flex justify-center items-center before:absolute before:inset-0 before:z-10 before:bg-gradient-to-tr before:from-yellow-600 before:via-amber-500 before:to-yellow-900 before:mix-blend-hue">
                    <img className='w-full h-auto object-cover  md:hidden' src='https://rukminim2.flixcart.com/fk-p-flap/480/210/image/b8b6182613d198e4.jpeg?q=20' alt="" />
                      <img className='w-full hidden md:block' src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2146%2FGadget-banners.png&w=1920&q=75" alt="logo"/>
                    </Link>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="prev border md:flex hidden items-center justify-center rounded-lg hover:bg-black hover:text-white w-9 h-9 absolute top-[50%] -translate-y-1/2 z-10 left-[20px] border-black">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
              </div>
              <div className="next border md:flex hidden items-center justify-center rounded-lg hover:bg-black hover:text-white w-9 h-9 absolute top-[50%] -translate-y-1/2 z-10 end-[20px] border-black">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
              </div>
          </div>
        </div>
      </div>

        </>
    )
}

export default HeroBanner