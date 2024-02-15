import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { FaLaptop, FaRegFlag } from 'react-icons/fa'
import { GiTakeMyMoney } from 'react-icons/gi'
import { MdWarning } from 'react-icons/md'
import { Link } from 'react-router-dom'

const SafetyModal = ({isOpenSaftey, setIsOpenSaftey}) => {
    return (
        <>
             {/* saftey modal */}
            <Transition appear show={isOpenSaftey} as={Fragment}>
            <Dialog as="div" className="relative z-[1000]" onClose={()=>setIsOpenSaftey(false)}>
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
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                    <Dialog.Panel className=" w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">  
                        <div class="relative p-4 w-full max-w-3xl max-h-full">
                            <div class="relative bg-white rounded-md max-w-3xl shadow dark:bg-gray-700">
                                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <MdWarning className='size-10 m-auto w-full text-red-500'/>
                                    {/* <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crypto-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button> */}
                                </div>
                                
                                <div class="p-4 md:p-5">
                                    <p class="text-md  font-bold text-black">Tips for a safe deal</p>
                                    <ul class="my-4 space-y-3">
                                        <li>
                                            <Link to="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">

                                                <FaRegFlag className='size-6'/>
                                                <span class="flex-1 ms-3 whitespace-nowrap">Be safe, take necessary precautions while meeting with buyers and sellers</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                <FaLaptop className='size-6'/>
                                                <span class="flex-1 ms-3 whitespace-nowrap">Do not enter UPI PIN while receiving money</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                <GiTakeMyMoney className='size-6' />
                                                <span class="flex-1 ms-3 whitespace-nowrap">Never give money or product in advance</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                                <FaRegFlag className='size-6'/>
                                                <span class="flex-1 ms-3 whitespace-nowrap">Report suspicious users to One Zone</span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div>
                                        <Link to="/chat" class="text-black w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">
                                            Continue to Chat</Link>
                                    </div>
                                </div>
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

export default SafetyModal