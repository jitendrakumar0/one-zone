import React from 'react'
import frame from '../../asstes/img/Frame.png'

const Signup = () => {
  return (
    <div>

<div class="max-w-5xl px-5 lg:px-10 flex items-center h-screen flex-wrap mx-auto py-5">
        <div class="flex flex-wrap items-center justify-center">
            <div id="profile" class="order-2 lg:order-1 w-full h-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none rounded-tl-none lg:rounded-tl-lg rounded-tr-none lg:rounded-tr-lg shadow-2xl bg-white opacity-75">
                <div class="p-4 md:p-10">
                    <div class="text-2xl font-bold text-center pb-4">Sign Up</div>
                    <form>
                        <div class="flex flex-wrap items-center gap-y-3">
                            <div class="w-full sm:w-1/2">
                                <div class="px-2">
                                    <label for="name" class="text-base font-medium inline-block mb-2 text-black">First Name</label>
                                    <input type="text" id="name" class="py-4 ps-4  w-full h-12 text-black rounded border focus:ring-0 focus:border dark:bg-default-50" placeholder="Your First Name" name="name"/>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2">
                                <div class="px-2">
                                    <label for="name" class="text-base font-medium inline-block mb-2 text-black">Last Name</label>
                                    <input type="text" id="name" class="py-4 ps-4  w-full h-12 text-black rounded border focus:ring-0 focus:border dark:bg-default-50" placeholder="Your Last Name" name="name"/>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2">
                                <div class="px-2">
                                    <label for="email" class="text-base font-medium inline-block mb-2 text-black">Email</label>
                                    <input type="email" id="name" class="py-4 ps-4  w-full h-12 text-black rounded border focus:ring-0 focus:border dark:bg-default-50" placeholder="Email" name="name"/>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2">
                                <div class="px-2">
                                    <label for="tel" class="text-base font-medium inline-block mb-2 text-black">Phone Number</label>
                                    <input type="tel" id="name" class="py-4 ps-4  w-full h-12 text-black rounded border focus:ring-0 focus:border dark:bg-default-50" placeholder="Contact Number" name="name"/>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2">
                                <div class="px-2">
                                    <label for="password" class="text-base font-medium inline-block mb-2 text-black">password</label>
                                    <input type="password" id="name" class="py-4 ps-4  w-full h-12 text-black rounded border focus:ring-0 focus:border dark:bg-default-50" placeholder="Password" name="name"/>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2">
                                <div class="px-2">
                                    <label for="password" class="text-base font-medium inline-block mb-2 text-black">Confirm Password</label>
                                    <input type="password" id="name" class="py-4 ps-4  w-full h-12 text-black rounded border focus:ring-0 focus:border dark:bg-default-50" placeholder="Address" name="name"/>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="pt-5 px-2 flex items-center justify-between flex-wrap">
                        <div class="">
                            <button class="px-5 py-1.5 text-lg rounded text-white bg-black hover:bg-black/70">Register</button>
                        </div>
                        <a href="javascript:;">
                            <div class="text-base font-semibold text-black hover:text-black/70 underline">
                                Already Have a Account
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-2/5 h-full order-1 lg:order-2">
                <div class="aspect-[3/1.5] lg:aspect-[4/5.2]">
                    <img src={frame} class="rounded-lg rounded-bl-none lg:rounded-bl-lg rounded-br-none lg:rounded-br-lg shadow-2xl w-full h-full object-cover "/>
                </div>
            </div>
        </div>
	</div>
    </div>
  )
}

export default Signup