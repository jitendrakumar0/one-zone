import React from 'react'
import { CiDiscount1 } from 'react-icons/ci'
import { IoMdCheckmark } from 'react-icons/io'
import { SlLocationPin } from 'react-icons/sl'
import { Link } from 'react-router-dom'

export const PackageDiscount = () => {
    return (
        <>
            <div className="header w-full h-10 md:h-20 bg-gray-200 flex items-center px-8">
                <Link className='font-bold text-xl text-black' to='/'>
                ONE ZONE
                    {/* <IoArrowUndo className='size-6'/> */}
                </Link>
            </div>
            <div className="max-w-screen-sm mx-auto my-5 border rounded-lg p-4">
                <div>
                    <div className="bg-amber-100 w-full h-40 rounded-lg flex items-center justify-center flex-col">
                        <CiDiscount1 className='size-8 text-amber-800 mb-4' />
                        <div className='text-xl font-bold text-black'>Heavy discount on Packages</div>
                    </div>
                </div>
                <div className='py-4 border-b'>
                    <div className='text-base text-black font-bold'>POST MORE ADS AND AUTO BOOST</div>
                    <div className='flex items-center text-md text-gray-600'><IoMdCheckmark className='size-4 me-2' />Post more ads and ads get boosted to the top every few days</div>
                    <div className='flex items-center text-md text-gray-600'><IoMdCheckmark className='size-4 me-2' />Package available for 30 days</div>
                </div>
                <div className='py-4 border-b'>
                    <div className='text-sm text-black font-bold'>Post Ads & Auto boost every 7 days</div>
                    <div className='flex items-center text-md text-gray-600'><IoMdCheckmark className='size-4 me-2' />Reach upto 4 times more buyers</div>
                    
                    <ul class="grid grid-cols gap-4 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                            <div class="flex items-center ps-3 ">
                                <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-gray-600 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                <label for="vue-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">50 Ads</label>
                                {/* <div className=' top-0 left-0 bg-red-100 text-sm w-full h-10'>7,000</div> */}
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                            <div class="flex items-center ps-3">
                                <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-gray-600 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                <label for="vue-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">50 Ads</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                            <div class="flex items-center ps-3">
                                <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-gray-600 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                                <label for="vue-checkbox-list" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">50 Ads</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
