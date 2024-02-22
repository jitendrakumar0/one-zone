import React from 'react'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Congratulation = () => {
    return (
        <>
            <div className='w-full h-dvh bg-gradient-to-r from-green-500 flex items-center justify-center to-emerald-500'>
                <div className='flex flex-col gap-2 lg:gap-4 mx-5 items-center justify-center text-center rounded-lg h-auto py-8 px-8 bg-white/10 w-[500px] m-auto border'>
                    <FaRegCircleCheck className='size-10 text-white' />
                    <div className='text-white text-xl lg:text-3xl font-bold'>CONGRATULATIONS!</div>
                    <div className='text-white text-lg lg:text-xl font-semibold'>Your ad will be featured shortly</div>
                    <div className='text-white text-base lg:text-lg'><span className='font-extrabold'>Package : Featured Ad for 30 Days</span> was used successfully to featured the Ad</div>
                </div>
                <Link to='/seller-featuredPost' className='text-black fixed bottom-[20px] w-auto mb-2 bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Feature List</Link>
            </div>
        </>
    )
}

export default Congratulation