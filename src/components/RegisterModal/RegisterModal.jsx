import React, { useState, Fragment } from 'react'
import { Dialog , Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { MdOutlineMailOutline } from 'react-icons/md'
import { IoLockClosedOutline } from 'react-icons/io5'
import { LiaSignInAltSolid } from 'react-icons/lia'
import frame from '../../asstes/img/Frame.png'
import { FaRegUserCircle } from 'react-icons/fa'

const RegisterModal = ({isOpenRegister, setIsOpenRegister,setisOpenLogin}) => {
    function closeModal() {
        setIsOpenRegister(false)
    }
    
    return (
        <>
        <Transition appear show={isOpenRegister} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full mx-5 max-w-xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    <div className="w-full overflow-hidden relative *:relative *:z-10 py-5 text-white">
                        <img src={frame} className="size-full object-cover object-center !absolute !z-0 inset-x-0 top-0" alt=""/>
                        <div className="text-2xl font-bold text-center pb-2">Register as Buyer</div>
                    </div>
                    <div id="profile" className="w-full bg-white">
                        <div className="p-4 md:p-10">
                            <form>
                                <div className="flex flex-wrap items-center gap-y-3">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2 rtl:right-0"><FaRegUserCircle className='size-5' />Full name</label>
                                    </div>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2 rtl:right-0"><MdOutlineMailOutline className='size-5' /> Email address</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2 rtl:right-0"><IoLockClosedOutline className='size-5' /> Password</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="password" name="floating_password2" id="floating_password2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_password2" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2 rtl:right-0"><IoLockClosedOutline className='size-5' /> Confirm Password</label>
                                </div>
                                <div className="flex items-start mb-5">
                                    <div className="flex items-center h-5">
                                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                                    </div>
                                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">Accept <Link className="text-blue-600 hover:underline">Terms & Conditions</Link></label>
                                </div>
                                <div className="pt-5 flex items-center justify-between flex-wrap max-md:flex-col max-md:gap-4 max-md:items-start">
                                    <div className="">
                                        
                                        <Link to="/verify-account" className="text-black bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-sm uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Register <LiaSignInAltSolid className='size-5' /></Link>
                                    </div>
                                    <div onClick={()=>{setisOpenLogin(true)
                                            setIsOpenRegister(false)
                                    }}>
                                        <div className="text-base font-semibold text-black hover:text-black/70">
                                            Already have an account? <span className='font-bold'> Login</span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
        </>
    )
}

export default RegisterModal