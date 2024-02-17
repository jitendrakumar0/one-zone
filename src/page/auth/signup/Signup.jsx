import React from 'react'
import frame from '../../../asstes/img/Frame.png'
import Footer from '../../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { MdOutlineMailOutline } from 'react-icons/md'
import { IoLockClosedOutline } from 'react-icons/io5'
import { LiaSignInAltSolid } from 'react-icons/lia'
import { FaRegUserCircle } from 'react-icons/fa'
import Header2 from '../../../components/Header2/Header2'


const Signup = () => {
  return (
    <>
    <Header2/>
    {/* <Header auth={auth} setAuth={setAuth} /> */}
    <div className='w-full flex justify-center'>
        <div className="max-w-2xl w-full px-5 lg:px-10 flex items-center min-h-[calc(100dvh-130px)] flex-wrap mx-auto py-5">
            <div className="flex flex-col w-full flex-wrap items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex flex-col w-full flex-wrap *:w-full">
                    {/* <Tab.Group>
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
                            <Tab.Panel> */}
                                <div className="w-full overflow-hidden relative *:relative *:z-10 py-5 text-white">
                                    <img src={frame} className="size-full object-cover object-center !absolute !z-0 inset-x-0 top-0" alt=""/>
                                    <div className="text-2xl font-bold text-center pb-2">Register as Buyer</div>
                                </div>
                                <div id="profile" className="w-full bg-white opacity-75">
                                    <div className="p-4 md:p-10">
                                        <form>
                                            <div className="flex flex-wrap items-center gap-y-3">
                                                <div className="relative z-0 w-full mb-5 group">
                                                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><FaRegUserCircle className='size-5' />Full name</label>
                                                </div>
                                            </div>
                                            <div className="relative z-0 w-full mb-5 group">
                                                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><MdOutlineMailOutline className='size-5' /> Email address</label>
                                            </div>
                                            <div className="relative z-0 w-full mb-5 group">
                                                <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><IoLockClosedOutline className='size-5' /> Password</label>
                                            </div>
                                            <div className="relative z-0 w-full mb-5 group">
                                                <input type="password" name="floating_password2" id="floating_password2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label htmlFor="floating_password2" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><IoLockClosedOutline className='size-5' /> Confirm Password</label>
                                            </div>
                                            <div className="flex items-start mb-5">
                                                <div className="flex items-center h-5">
                                                <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                                                </div>
                                                <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">Accept <Link className="text-blue-600 hover:underline">Terms & Conditions</Link></label>
                                            </div>
                                            <div className="pt-5 flex items-center justify-between flex-wrap">
                                                <div className="">
                                                    
                                                    <Link to="/verify-account" className="text-black bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Register <LiaSignInAltSolid className='size-5' /></Link>
                                                </div>
                                                <Link to="/">
                                                    <div className="text-base font-semibold text-black hover:text-black/70">
                                                        Already have an account? <span className='font-bold'> Login</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                        
                            {/* </Tab.Panel>
                            <Tab.Panel>
                                <div className="w-full overflow-hidden relative *:relative *:z-10 py-5 text-white">
                                    <img src={frame} className="size-full object-cover object-center !absolute !z-0 inset-x-0 top-0" alt=""/>
                                    <div className="text-2xl font-bold text-center pb-2">Register as Seller</div>
                                </div>
                                <div id="profile" className="w-full bg-white opacity-75">
                                    <div className="p-4 md:p-10">
                                        <form>
                                            <div className="flex flex-wrap items-center gap-y-3">
                                                <div className="relative z-0 w-full mb-5 group">
                                                    <input type="text" name="floating_shop_name" id="floating_shop_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label htmlFor="floating_shop_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><CiShop className='size-5' />Shop name</label>
                                                </div>
                                                <div className="relative z-0 w-full mb-5 group">
                                                    <input type="text" name="floating_seller_name" id="floating_seller_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label htmlFor="floating_seller_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><FaRegUserCircle className='size-5' />Seller name</label>
                                                </div>
                                                <div className="relative z-0 w-full mb-5 group">
                                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><MdOutlineMailOutline className='size-5' /> Email address</label>
                                                </div>
                                                <div className="relative z-0 w-full mb-5 group">
                                                    <input type="phone" name="floating_phone_number" id="floating_phone_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label htmlFor="floating_phone_number" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><IoCallOutline className='size-5' /> Phone Number (optional)</label>
                                                </div>
                                                <div className="relative z-0 sm:w-1/2 w-full mb-5 group sm:pr-5">
                                                    <input type="text" name="floating_shop_number" id="floating_shop_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label htmlFor="floating_shop_number" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><CiShoppingTag className='size-5' /> Shop Number (optional)</label>
                                                </div>
                                                <div className="relative z-0 sm:w-1/2 w-full mb-5 group">
                                                    <input type="text" name="floating_location" id="floating_location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label htmlFor="floating_location" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><IoLocationOutline className='size-5' /> Location (optional)</label>
                                                </div>
                                                <div className="relative z-0 sm:w-1/2 w-full mb-5 group sm:pr-5">
                                                    <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><IoLockClosedOutline className='size-5' /> Password</label>
                                                </div>
                                                <div className="relative z-0 sm:w-1/2 w-full mb-5 group">
                                                    <input type="password" name="floating_password2" id="floating_password2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label htmlFor="floating_password2" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><IoLockClosedOutline className='size-5' /> Confirm Password</label>
                                                </div>
                                                <div className="flex items-start mb-5">
                                                    <div className="flex items-center h-5">
                                                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                                                    </div>
                                                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">Accept <Link className="text-blue-600 hover:underline">Terms & Conditions</Link></label>
                                                </div>
                                                <div className="pt-5 flex items-center w-full justify-between flex-wrap">
                                                    <div className="">
                                                        
                                                        <Link to="/home" className="text-black bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Register <LiaSignInAltSolid className='size-5' /></Link>
                                                    </div>
                                                    <Link to="/">
                                                        <div className="text-base font-semibold text-black hover:text-black/70">
                                                            Already have an account? <span className='font-bold'> Login</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group> */}
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Signup