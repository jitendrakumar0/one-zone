import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import Header from '../components/header/Header'
import Footer from '../../components/Footer/Footer'
import { MdOutlineDiscount } from 'react-icons/md'
import { RiAdvertisementLine } from 'react-icons/ri'
import { FaCircleCheck, FaRegCircleCheck } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const PackageDiscount = () => {
    return (
        <>
        <Header/>
            <div className="max-w-screen-sm mx-auto my-5 border rounded-lg p-4">
                <div>
                    <div className="bg-theme1 shadow-md shadow-black/20 w-full h-40 rounded-lg flex items-center justify-center flex-col">
                        <MdOutlineDiscount className='size-12 text-amber-800 mb-4' />
                        <div className='text-xl font-bold text-black'>Heavy discount on Packages</div>
                    </div>
                </div>
                <div className='py-6 border-b'>
                    <div className='text-base text-black font-bold'>FEATURE AD</div>
                    <div className='flex items-center text-md text-gray-600'><IoMdCheckmark className='size-4 me-2' />Get noticed with 'FEATURED' tag in a top position</div>
                    <div className='flex items-center text-md text-gray-600'><IoMdCheckmark className='size-4 me-2' />Package available for 30 days</div>
                </div>
                <div className="pt-6">
                    <div className='text-sm text-black font-bold'>Featured ads for 30 days</div>
                    <div className='flex items-center text-md text-gray-600'><IoMdCheckmark className='size-4 me-2' />Reach up to 10 times more buyers</div>

                    <div className="grid grid-cols-1 gap-5 py-5">
                        <label htmlFor='ad1' className="w-full p-4 flex justify-between items-center bg-white has-[:checked]:border-gray-800 border-2 border-gray-200 rounded-lg shadow sm:p-4 group/ads">
                            <ul className="space-y-5">
                                <li className="flex items-center">
                                    <FaRegCircleCheck className="flex-shrink-0 size-6 text-gray-400 group-has-[:checked]/ads:hidden" />
                                    <FaCircleCheck className="flex-shrink-0 size-6 text-gray-900 hidden group-has-[:checked]/ads:block" />
                                    <span className="text-lg font-bold leading-tight text-gray-500 ms-3">5 Ads</span>
                                    <input className='hidden' type="radio" id='ad1' name='ads' />
                                </li>
                            </ul>
                            <div className="flex items-end text-gray-900 flex-col">
                                <span className='flex items-baseline gap-1'>
                                    <span className="text-xl font-semibold">₹</span>
                                    <span className="text-2xl font-extrabold tracking-tight">7,080</span>
                                </span>
                                <span className='flex items-center'>
                                    <del className="ms-2 text-base font-bold text-gray-500">₹ 9,434</del>
                                    <span className="ms-2 text-base font-bold text-lime-700">-25% off</span>
                                </span>
                            </div>
                        </label>
                        <label htmlFor='ad2' className="w-full p-4 flex justify-between items-center bg-white has-[:checked]:border-gray-800 border-2 border-gray-200 rounded-lg shadow sm:p-4 group/ads">
                            <ul className="space-y-5">
                                <li className="flex items-center">
                                    <FaRegCircleCheck className="flex-shrink-0 size-6 text-gray-400 group-has-[:checked]/ads:hidden" />
                                    <FaCircleCheck className="flex-shrink-0 size-6 text-gray-900 hidden group-has-[:checked]/ads:block" />
                                    <span className="text-lg font-bold leading-tight text-gray-500 ms-3">3 Ads</span>
                                    <input className='hidden' type="radio" id='ad2' name='ads' />
                                </li>
                            </ul>
                            <div className="flex items-end text-gray-900 flex-col">
                                <span className='flex items-baseline gap-1'>
                                    <span className="text-xl font-semibold">₹</span>
                                    <span className="text-2xl font-extrabold tracking-tight">4,720</span>
                                </span>
                                <span className='flex items-center'>
                                    <del className="ms-2 text-base font-bold text-gray-500">₹ 5,660</del>
                                    <span className="ms-2 text-base font-bold text-lime-700">-17% off</span>
                                </span>
                            </div>
                        </label>
                        <label htmlFor='ad3' className="w-full p-4 flex justify-between items-center bg-white has-[:checked]:border-gray-800 border-2 border-gray-200 rounded-lg shadow sm:p-4 group/ads">
                            <ul className="space-y-5">
                                <li className="flex items-center">
                                    <FaRegCircleCheck className="flex-shrink-0 size-6 text-gray-400 group-has-[:checked]/ads:hidden" />
                                    <FaCircleCheck className="flex-shrink-0 size-6 text-gray-900 hidden group-has-[:checked]/ads:block" />
                                    <span className="text-lg font-bold leading-tight text-gray-500 ms-3">1 Ad</span>
                                    <input className='hidden' type="radio" id='ad3' name='ads' />
                                </li>
                            </ul>
                            <div className="flex items-end text-gray-900 flex-col">
                                <span className='flex items-baseline gap-1'>
                                    <span className="text-xl font-semibold">₹</span>
                                    <span className="text-2xl font-extrabold tracking-tight">2,360</span>
                                </span>
                            </div>
                        </label>
                    </div>


                </div>
                <div className="w-full text-center bg-gray-100 sticky bottom-0 py-4">
                    <Link to='/select-category' className='relative z-10 text-black px-4 text-nowrap bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-base uppercase md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Pay ₹ 7,080</Link>
                </div>
                
            </div>
        <Footer/>
        </>
    )
}
