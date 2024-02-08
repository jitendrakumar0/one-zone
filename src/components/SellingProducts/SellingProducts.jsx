import React from 'react';
import productImg from '../../asstes/img/product-1.png';
import banner from '../../asstes/img/banner.png'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SellingProducts = () => {
    return (
        <>
        <div class="px-5 md:px-10 py-10 bg-[#F5F5F7]">
            <div class="flex justify-between items-center w-full">
                <div class="md:text-black md:text-3xl font-bold text-2xl">Best
                    Selling Products</div>
                <div class="text-md text-nowrap text-[#09757A]">
                    View All
                    <span class="size-5 inline-block justify-center pt-1">
                        <svg stroke="white" fill="white"
                            stroke-width="0" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path
                                d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="flex items-stretch py-10 gap-5">
                <div class="md:grow w-full md:pr-3">
                    <div
                        class={`overflow-hidden h-full rounded-xl relative z-0 pb-24 *:relative *:z-10  p-4 before:absolute before:size-full before:inset-0 before:bg-black/20 before:z-10`}>
                        <img src={banner} className='object-cover object-center !absolute !inset-0 size-full !z-0' alt="kuch nahi" />
                        <div class=" relative px-3 z-50 pl-3">
                            <div class="text-2xl font-semibold text-white">Hot
                                Collection</div>
                            <div class=" text-white py-3">Lorem ipsum dolor, sit
                                amet consectetur adipisicing elit. Voluptatum,
                                provident?
                            </div>
                            <a href="#" class="text-white">Shop Now</a>
                        </div>
                    </div>
            
                </div>
                <div class="md:w-1/2 lg:w-2/3 w-full">
                    <div class="w-full">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper1"
                    >
                        <SwiperSlide>
                            <div
                                class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                <div class="relative overflow-hidden">
                                    <img src={productImg} alt/>
                                    <div
                                        class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                        <div>
                                            <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path></svg>
                                        </div>
                                        <div
                                            class="text-md px-3 text-white">Let's Chat</div>
                                    </div>
                                </div>
                                <div class="bg-white p-3">
                                    <div class="text-lg font-medium mb-2">Apple
                                        14 pro</div>
                                        <div className=''>
                                            <span className='bg-[#09757A] rounded text-white px-3 py-1 mr-2'>SSD:2GB</span>
                                            <span className='bg-[#09757A] rounded text-white px-3 py-1 mr-2'>SDT:2GB</span>
                                            <span className='bg-[#09757A] rounded text-white px-3 py-1'>Intel</span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                        </div>
                                </div>
                                <div
                                    class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                    10% off
                                </div>
                                <div
                                    class="absolute top-14 right-2 translate-x-28 group-hover:translate-x-0 duration-300">
                                    <div
                                        class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                        <svg stroke=" currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            class="size-6"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g id="Heart">
                                                <path
                                                    d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z">
                                                </path>
                                            </g>
                                        </svg>
                                    </div>
    
                                    <div
                                        class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                        <svg stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            class="size-6"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none"
                                                d="M0 0h24v24H0z"></path>
                                            <path
                                                d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z">
                                            </path>
                                        </svg>
                                    </div>
    
                                    <div
                                        class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                        <svg stroke="currentColor"
                                            fill="none" stroke-width="2"
                                            viewBox="0 0 24 24"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="size-6"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle cx="12" cy="12"
                                                r="3"></circle>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                <div class="relative overflow-hidden">
                                    <img src={productImg} alt/>
                                    <div
                                        class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                        <div>
                                            <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path></svg>
                                        </div>
                                        <div
                                            class="text-md px-3 text-white">Let's Chat</div>
                                    </div>
                                </div>
                               
                                <div class="bg-white p-3">
                                    <div class="text-lg font-medium mb-2">Apple
                                        14 pro</div>
                                        <div className=''>
                                            <span className='bg-[#09757A] rounded text-white px-3 py-1 mr-2'>SSD:2GB</span>
                                            <span className='bg-[#09757A] rounded text-white px-3 py-1 mr-2'>SDT:2GB</span>
                                            <span className='bg-[#09757A] rounded text-white px-3 py-1'>Intel</span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                        </div>
                                </div>
                                <div
                                    class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                    10% off
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                <div class="relative overflow-hidden">
                                    <img src={productImg} alt/>
                                    <div
                                        class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                        <div>
                                            <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path></svg>
                                        </div>
                                        <div
                                            class="text-md px-3 text-white">Let's Chat</div>
                                    </div>
                                </div>
                                
                                <div class="bg-white p-3">
                                    <div class="text-lg font-medium mb-2">Apple
                                        14 pro</div>
                                        <div className=''>
                                            <span className='bg-[#09757A] rounded text-white px-3 py-1 mr-2'>SSD:2GB</span>
                                            <span className='bg-[#09757A] rounded text-white px-3 py-1 mr-2'>SDT:2GB</span>
                                            <span className='bg-[#09757A] rounded text-white px-3 py-1'>Intel</span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                        </div>
                                </div>
                                <div
                                    class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                    10% off
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