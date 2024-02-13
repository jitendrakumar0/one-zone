import React, { useState } from 'react'
import frame from '../../../asstes/img/Frame.png'
import Header from '../../../components/header/Header'
import Footer from '../../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { LiaSignInAltSolid } from 'react-icons/lia'
import { IoLockClosedOutline } from 'react-icons/io5'

const EmailConfirmation = () => {
    const [auth, setAuth] = useState(false);
  return (
    <>
    <Header auth={auth} setAuth={setAuth} />
    <div className='w-full flex justify-center'>
        <div className="max-w-2xl w-full px-5 lg:px-10 flex items-center min-h-[calc(100dvh-130px)] flex-wrap mx-auto py-5">
            <div className="flex flex-col w-full flex-wrap items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full overflow-hidden relative *:relative *:z-10 p-5 text-white">
                    <img src={frame} className="size-full object-cover object-center !absolute !z-0 inset-x-0 top-0" alt=""/>
                    <div className="text-2xl font-bold text-center pb-2">Check your email!</div>
                    <div className="text-base font-semibold text-center text-balance">Please enter the 4 digit verification code that was sent to your email. The code is valid for 30 minutes.</div>
                </div>
                <div id="profile" className="w-full bg-white opacity-75">
                    <div className="p-4 md:p-10">
                        <form>
                            <div className="flex flex-wrap items-center gap-y-3"> 
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="tel" name="floating_verify_code" id="floating_verify_code" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_verify_code" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 inline-flex items-center gap-2"> Verification Code</label>
                                </div>
                            </div>
                            <div className="pt-5 flex items-center justify-between flex-wrap">
                                <div className="">
                                    
                                    <Link to="/home" className="text-black bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Verify Code </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default EmailConfirmation