import React, { useState } from 'react'
import frame from '../../../asstes/img/Frame.png'
import Header from '../../../components/header/Header'
import Footer from '../../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { LiaSignInAltSolid } from 'react-icons/lia'
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { Tab } from '@headlessui/react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
  
const Login = () => {
    const [auth, setAuth] = useState(false);
  return (
    <>
    <Header auth={auth} setAuth={setAuth} />
    <div className='w-full flex justify-center'>
        <div className="max-w-2xl w-full px-5 lg:px-10 flex items-center min-h-[calc(100dvh-130px)] flex-wrap mx-auto py-5">
            <div className="flex flex-col rounded-2xl overflow-hidden shadow-2xl items-center justify-center w-full">
                <div className="flex flex-col w-full flex-wrap *:w-full">
                    <Tab.Group>
                        <Tab.List className="flex w-full mb-1">
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                    'w-full py-2.5 md:text-lg text-base font-semibold uppercase leading-5',
                                    'ring-white/60 ring-offset-2 ring-offset-blue-400',
                                    selected
                                        ? 'bg-black text-white shadow'
                                        : 'bg-black/60 text-white hover:text-white'
                                    )
                                }>Buyer</Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                    'w-full py-2.5 md:text-lg text-base font-semibold uppercase leading-5 border-l border-white/20',
                                    'ring-white/60 ring-offset-2 ring-offset-blue-400',
                                    selected
                                        ? 'bg-black text-white shadow'
                                        : 'bg-black/60 text-white hover:text-white'
                                    )
                                }>Seller</Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                    <div className="w-full overflow-hidden relative *:relative *:z-10 py-5 text-white">
                                        <img src={frame} className="size-full object-cover object-center !absolute !z-0 inset-x-0 top-0" alt=""/>
                                        <div className="text-2xl font-bold text-center pb-2">Welcome Back !</div>
                                        <div className="text-base font-semibold text-center">Sign in as buyer to continue to Onezone</div>
                                    </div>
                                    <div id="profile" className="w-full bg-white opacity-75">
                                        <div className="p-4 md:p-10">
                                            <form>
                                                <div className="flex flex-wrap items-center gap-y-3">
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><MdOutlineMailOutline className='size-5' /> Email address</label>
                                                    </div>
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><IoLockClosedOutline className='size-5' /> Password</label>
                                                        <Link to="/forgot-password" className="text-sm font-semibold text-black hover:text-black/70 pt-2 block">
                                                            Forgot Password?
                                                        </Link>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="pt-5 flex items-center justify-between flex-wrap">
                                                <div className="">
                                                    
                                                    <Link to="/home" className="text-black bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-transparent md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Login <LiaSignInAltSolid className='size-5' /></Link>
                                                </div>
                                                <Link to="/signup">
                                                    <div className="text-base font-semibold text-black hover:text-black/70">
                                                        Don't have any account? <span className='font-bold'>Register</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                    <div className="w-full overflow-hidden relative *:relative *:z-10 py-5 text-white">
                                        <img src={frame} className="size-full object-cover object-center !absolute !z-0 inset-x-0 top-0" alt=""/>
                                        <div className="text-2xl font-bold text-center pb-2">Welcome Back !</div>
                                        <div className="text-base font-semibold text-center">Sign in as seller to continue to Onezone</div>
                                    </div>
                                    <div id="profile" className="w-full bg-white opacity-75">
                                        <div className="p-4 md:p-10">
                                            <form>
                                                <div className="flex flex-wrap items-center gap-y-3">
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><MdOutlineMailOutline className='size-5' /> Email address</label>
                                                    </div>
                                                    <div className="relative z-0 w-full mb-5 group">
                                                        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><IoLockClosedOutline className='size-5' /> Password</label>
                                                        <Link to="/forgot-password" className="text-sm font-semibold text-black hover:text-black/70 pt-2 block">
                                                            Forgot Password?
                                                        </Link>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="pt-5 flex items-center justify-between flex-wrap">
                                                <div className="">
                                                    
                                                    <Link to="/home" className="text-black bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-transparent md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Login <LiaSignInAltSolid className='size-5' /></Link>
                                                </div>
                                                <Link to="/signup">
                                                    <div className="text-base font-semibold text-black hover:text-black/70">
                                                        Don't have any account? <span className='font-bold'>Register</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login