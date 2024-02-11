import React from 'react'
import frame from '../../asstes/img/Frame.png'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div>
        <div className="max-w-5xl px-5 lg:px-10 flex items-center h-screen flex-wrap mx-auto py-5">
            <div className="flex flex-wrap items-center justify-center">
                <div id="profile" className="order-2 lg:order-1 w-full h-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none rounded-tl-none lg:rounded-tl-lg rounded-tr-none lg:rounded-tr-lg shadow-2xl bg-white opacity-75">
                    <div className="p-4 md:p-12">
                        <div className="text-2xl font-bold text-center ">Welcome Back !</div>
                        <div className="text-base font-semibold text-center pb-5">Sign in to continue to lorem.com</div>
                        <form>
                            <div className="flex flex-wrap items-center gap-y-3">
                                <div className="w-full">
                                    <div className="px-2">
                                        <label htmlFor="name" className="text-base font-medium inline-block mb-2 text-black">First Name</label>
                                        <input type="text" id="name" className="py-4 ps-4  w-full h-12 text-black rounded border focus:ring-0 focus:border dark:bg-default-50" placeholder="Your First Name" name="name"/>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="px-2">
                                        <label htmlFor="name" className="text-base font-medium inline-block mb-2 text-black">Password</label>
                                        <input type="password" id="name" autoComplete="current-password" className="py-4 ps-4  w-full h-12 text-black rounded border focus:ring-0 focus:border dark:bg-default-50" placeholder="Password" name="name"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="pt-5 px-2 flex items-center justify-between flex-wrap">
                            <div className="">
                                <button className="px-5 py-1.5 text-lg rounded text-white bg-black hover:bg-black/70">Register</button>
                            </div>
                            <Link>
                                <div className="text-base font-semibold text-black hover:text-black/70 underline">
                                    Forget Password
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/5 h-full order-1 lg:order-2">
                    <div className="aspect-[3/1.5] lg:aspect-[4/5]">
                        <img src={frame} className="rounded-lg rounded-bl-none lg:rounded-bl-lg rounded-br-none lg:rounded-br-lg shadow-2xl w-full h-full object-cover " alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin