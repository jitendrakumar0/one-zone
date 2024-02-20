import React from 'react'
import banner1 from '../../asstes/img/addBanner.jpg'
import banner2 from '../../asstes/img/addBanner1.jpg'
import banner3 from '../../asstes/img/addLaptop.svg'
import banner4 from '../../asstes/img/laptopban.svg'
import { Link } from 'react-router-dom'

const AddBanner = () => {
    return (
        <>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className='flex flex-col lg:flex-row items-center py-4 md:py-8 lg:py-10 bg-gray-100 h-full'>
                    <div className='w-full lg:w-auto grow mb-5 lg:mb-0'>
                        <div className='w-full h-60 rounded-lg relative border bg-gradient-to-l from-neutral-300 '>
                            <img className='size-full z-50 object-cover rounded-lg' src={banner2} alt="" />
                            <div className='absolute top-1/2 -translate-y-2/4 left-[30px] '>
                                <div className='text-lg lg:text-2xl xl:text-3xl font-bold text-black'>Wide Range Of Laptops</div>
                                <div className='text-md text-gray-900'>Hurry up and book your laptop</div>
                                <Link to='/windowsProducts' className='mt-4 relative z-10 text-black w-auto bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Explore</Link>
                            </div>
                            <div className='absolute sm:block hidden right-[40px] top-0'>
                                <img className='w-35 h-60 object-contain' src={banner4} alt="" />
                            </div>
                            {/* <div className='absolute top-0 left-0 size-full bg-black/20'></div> */}
                        </div>
                    </div>
                    <div className='w-full col-auto lg:w-80 ms-0 lg:ms-8'>
                        <div className='w-full h-60 rounded-lg relative'>
                            <img className='size-full object-cover rounded-lg' src={banner1} alt="" />
                            <div className='absolute inset-0 m-auto flex justify-center items-center flex-col'>
                                <div className='text-xl font-bold text-black'>Your Add Will Come Here</div>
                                <div className='text-md text-black'>Hurry up to reserve your post</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBanner