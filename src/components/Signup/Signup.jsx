import React from 'react'
import frame from '../../asstes/img/Frame.png'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
    <div className="max-w-5xl px-5 lg:px-10 flex items-center h-screen flex-wrap mx-auto py-5">
        <div className="flex flex-wrap items-center justify-center">
            <div id="profile" className="order-2 lg:order-1 w-full h-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none rounded-tl-none lg:rounded-tl-lg rounded-tr-none lg:rounded-tr-lg shadow-2xl bg-white opacity-75">
                <div className="p-4 md:p-10">
                    <div className="text-2xl font-bold text-center pb-4">Sign Up</div>
                    <form>
                        <div className="flex flex-wrap items-center gap-y-3">
                            <div className="w-full sm:w-1/2">
                                <div className="px-2">
                                    <label htmlFor="name" className="text-base font-medium inline-block mb-2 text-black">First Name</label>
                                    <input type="text" id="name" className="py-4 ps-4  w-full h-12 text-black rounded border focus:ring-0 focus:border" placeholder="Your First Name" name="name"/>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="px-2">
                                    <label htmlFor="name" className="text-base font-medium inline-block mb-2 text-black">Last Name</label>
                                    <input type="text" id="name" className="py-4 ps-4  w-full h-12 text-black rounded border focus:ring-0 focus:border" placeholder="Your Last Name" name="name"/>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="px-2">
                                    <label htmlFor="email" className="text-base font-medium inline-block mb-2 text-black">Email</label>
                                    <input type="email" id="name" className="py-4 ps-4  w-full h-12 text-black rounded border focus:ring-0 focus:border" placeholder="Email" name="name"/>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="px-2">
                                    <label htmlFor="tel" className="text-base font-medium inline-block mb-2 text-black">Phone Number</label>
                                    <input type="tel" id="name" className="py-4 ps-4  w-full h-12 text-black rounded border focus:ring-0 focus:border" placeholder="Contact Number" name="name"/>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="px-2">
                                    <label htmlFor="password" className="text-base font-medium inline-block mb-2 text-black">password</label>
                                    <input type="password" id="name" className="py-4 ps-4  w-full h-12 text-black rounded border focus:ring-0 focus:border" placeholder="Password" name="name"/>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="px-2">
                                    <label htmlFor="password" className="text-base font-medium inline-block mb-2 text-black">Confirm Password</label>
                                    <input type="password" id="name" className="py-4 ps-4  w-full h-12 text-black rounded border focus:ring-0 focus:border" placeholder="Address" name="name"/>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2">
                                <div className="flex items-center h-5">
                                <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                                </div>
                                <label for="terms" className="ms-2 text-sm font-medium text-gray-900">Accept <Link className="text-blue-600 hover:underline">Terms & Conditions</Link></label>
                            </div>
                        </div>
                    </form>
                    <div className="pt-5 px-2 flex items-center justify-between flex-wrap">
                        <div className="">
                            <button className="px-5 py-1.5 text-lg rounded text-white bg-black hover:bg-black/70">Register</button>
                        </div>
                        <Link>
                            <div className="text-base font-semibold text-black hover:text-black/70 underline">
                                Already Have a Account
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-2/5 h-full order-1 lg:order-2">
                <div className="aspect-[3/1.5] lg:aspect-[4/5.2]">
                    <img src={frame} className="rounded-lg rounded-bl-none lg:rounded-bl-lg rounded-br-none lg:rounded-br-lg shadow-2xl w-full h-full object-cover " alt=""/>
                </div>
            </div>
        </div>
	</div>
    </div>
  )
}

export default Signup