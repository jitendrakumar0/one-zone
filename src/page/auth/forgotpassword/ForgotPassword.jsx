import React from 'react'
import frame from '../../../asstes/img/Frame.png'
import Footer from '../../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { MdOutlineMailOutline } from 'react-icons/md'
import { LiaSignInAltSolid } from 'react-icons/lia'
import Header2 from '../../../components/Header2/Header2'

const ForgotPassword = () => {
  return (
    <>
    <Header2/>
    <div className='w-full flex justify-center'>
        <div className="max-w-2xl w-full px-5 lg:px-10 flex items-center min-h-[calc(100dvh-130px)] flex-wrap mx-auto py-5">
            <div className="flex flex-col w-full flex-wrap items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full overflow-hidden relative *:relative *:z-10 py-5 text-white">
                    <img src={frame} className="size-full object-cover object-center !absolute !z-0 inset-x-0 top-0" alt=""/>
                    <div className="text-2xl font-bold text-center pb-2">Forgot Password!</div>
                    <div className="text-base font-semibold text-center">fill your registered email id for get reset password link on your email.</div>
                </div>
                <div id="profile" className="w-full bg-white opacity-75">
                    <div className="p-4 md:p-10">
                        <form>
                            <div className="flex flex-wrap items-center gap-y-3"> 
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"><MdOutlineMailOutline className='size-5' /> Email address</label>
                                </div>
                            </div>
                        </form>
                        <div className="pt-5 flex items-center justify-between flex-wrap">
                            <div className="">
                                
                                <Link to="/change-password" className="text-black bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Reset Password <LiaSignInAltSolid className='size-5' /></Link>
                            </div>
                            <Link to="/">
                                <div className="text-base font-semibold text-black hover:text-black/70">
                                    Remember Password? <span className='font-bold'>Login</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default ForgotPassword