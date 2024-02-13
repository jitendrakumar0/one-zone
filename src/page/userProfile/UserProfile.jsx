import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/header/Header';
import Profileimg from '../../asstes/img/edit-profileimg.jpg'
import { LuBellDot, LuUnlock } from 'react-icons/lu';
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { IoChatboxOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { AiOutlineLogout } from 'react-icons/ai';
import LogoutDialogue from '../../components/LogoutDialogue/LogoutDialogue';

const UserProfile = () => {
    return (
        <>
            <Header />
            <div className="md:py-8 lg:py-10">
                <div className="max-w-screen-xl mx-auto p-4">
                    <div className="w-full bg-white rounded-xl shadow-xl md:px-10 md:py-6 p-5">
                        <div className="title-area w-full flex justify-between items-center border-b border-gray-200">
                            <h1 className="md:text-2xl sm:text-xl text-lg text-black font-bold text-center pb-5">
                                Update Profile
                            </h1>
                        </div>
                        <div className="profile-wrapper w-full md:mt-8 mt-0 flex md:space-x-10">
                            <div className="w-[236px] min-h-[600px] border-r border-[rgba(0, 0, 0, 0.1)] max-md:hidden">
                                <AllSideMenu />
                            </div>
                            <div className="flex-1">
                                <div className="item-body dashboard-wrapper w-full">
                                    <div className="flex flex-col space-x-8">
                                        <div className="w-full">

                                            <div className="w-full flex max-md:flex-col md:gap-10 gap-5 items-center relative">
                                                <div className="update-logo w-auto ">
                                                    <div className="flex justify-center">
                                                        <div className="relative">
                                                            <div className="lg:size-32 size-20 rounded-full overflow-hidden relative">
                                                                <img
                                                                    src={Profileimg}
                                                                    alt=""
                                                                    className="object-cover w-full h-full"
                                                                />
                                                            </div>
                                                            <input type="file" className="hidden" />
                                                            <div className="size-8 absolute bottom-0 right-0 md:-translate-x-1 translate-x-1 md:-translate-y-1 translate-y-1 bg-black rounded-full cursor-pointer border-2 border-white">
                                                                <svg
                                                                    className='size-full'
                                                                    viewBox="0 0 32 32"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M16.5147 11.5C17.7284 12.7137 18.9234 13.9087 20.1296 15.115C19.9798 15.2611 19.8187 15.4109 19.6651 15.5683C17.4699 17.7635 15.271 19.9587 13.0758 22.1539C12.9334 22.2962 12.7948 22.4386 12.6524 22.5735C12.6187 22.6034 12.5663 22.6296 12.5213 22.6296C11.3788 22.6334 10.2362 22.6297 9.09365 22.6334C9.01498 22.6334 9 22.6034 9 22.536C9 21.4009 9 20.2621 9.00375 19.1271C9.00375 19.0746 9.02997 19.0109 9.06368 18.9772C10.4123 17.6249 11.7609 16.2763 13.1095 14.9277C14.2295 13.8076 15.3459 12.6913 16.466 11.5712C16.4884 11.5487 16.4997 11.5187 16.5147 11.5Z"
                                                                        fill="white"
                                                                    />
                                                                    <path
                                                                        d="M20.9499 14.2904C19.7436 13.0842 18.5449 11.8854 17.3499 10.6904C17.5634 10.4694 17.7844 10.2446 18.0054 10.0199C18.2639 9.76139 18.5261 9.50291 18.7884 9.24443C19.118 8.91852 19.5713 8.91852 19.8972 9.24443C20.7251 10.0611 21.5492 10.8815 22.3771 11.6981C22.6993 12.0165 22.7105 12.4698 22.3996 12.792C21.9238 13.2865 21.4443 13.7772 20.9686 14.2717C20.9648 14.2792 20.9536 14.2867 20.9499 14.2904Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grow">
                                                    {/* <img className='rounded-lg shadow-lg aspect-[10/2] object-cover' src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTY2MTgxMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="" /> */}
                                                    {/* <div className="size-8 relative top-0 left-0 right-auto -translate-x-3 translate-y-3 bg-black rounded-full cursor-pointer border-2 border-white">
                                                        <svg
                                                            className='size-full'
                                                            viewBox="0 0 32 32"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M16.5147 11.5C17.7284 12.7137 18.9234 13.9087 20.1296 15.115C19.9798 15.2611 19.8187 15.4109 19.6651 15.5683C17.4699 17.7635 15.271 19.9587 13.0758 22.1539C12.9334 22.2962 12.7948 22.4386 12.6524 22.5735C12.6187 22.6034 12.5663 22.6296 12.5213 22.6296C11.3788 22.6334 10.2362 22.6297 9.09365 22.6334C9.01498 22.6334 9 22.6034 9 22.536C9 21.4009 9 20.2621 9.00375 19.1271C9.00375 19.0746 9.02997 19.0109 9.06368 18.9772C10.4123 17.6249 11.7609 16.2763 13.1095 14.9277C14.2295 13.8076 15.3459 12.6913 16.466 11.5712C16.4884 11.5487 16.4997 11.5187 16.5147 11.5Z"
                                                                fill="white"
                                                            />
                                                            <path
                                                                d="M20.9499 14.2904C19.7436 13.0842 18.5449 11.8854 17.3499 10.6904C17.5634 10.4694 17.7844 10.2446 18.0054 10.0199C18.2639 9.76139 18.5261 9.50291 18.7884 9.24443C19.118 8.91852 19.5713 8.91852 19.8972 9.24443C20.7251 10.0611 21.5492 10.8815 22.3771 11.6981C22.6993 12.0165 22.7105 12.4698 22.3996 12.792C21.9238 13.2865 21.4443 13.7772 20.9686 14.2717C20.9648 14.2792 20.9536 14.2867 20.9499 14.2904Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                    </div> */}
                                                </div>
                                            </div>

                                            <div class="grid lg:grid-cols-2 md:gap-6 pt-10">
                                                <div class="relative z-0 w-full mb-5 group">
                                                    <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                                                </div>
                                                <div class="relative z-0 w-full mb-5 group">
                                                    <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address*</label>
                                                </div>
                                                <div class="relative z-0 w-full mb-5 group">
                                                    <input type="tel" name="floating_tel" id="floating_tel" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label for="floating_tel" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number*</label>
                                                </div>
                                                <div class="relative z-0 w-full mb-5 group">
                                                    <input type="text" name="floating_location" id="floating_location" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                    <label for="floating_location" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location*</label>
                                                </div>
                                                <div class="relative z-0 w-full mb-5 group">
                                                    <textarea name="floating_location" id="floating_location" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required ></textarea>
                                                    <label for="floating_location" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description*</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="action-area flex space-x-4 items-center md:pt-8 pt-5">
                                        <div class="inline-flex gap-4 max-md:ml-auto">
                                            <button className="border-2 grow border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black text-black border-theme1 hover:border-b-theme1 shadow-md hover:text-theme1 shadow-black/40">Cancel <MdClear className='size-5' /></button>
                                            <button className="text-black bg-theme1 border-2 grow border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 hover:border-b-theme1 md:hover:bg-black hover:text-theme1 shadow-md shadow-black/40">Save Changes <FaRegCircleCheck className='size-5' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {/* <Transition appear show={logout} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={()=>{setLogout(false)}}>
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
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        
                        <div class="relative bg-white rounded-lg shadow">
                            <button type="button" onClick={()=>{setLogout(false)}} class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="p-4 md:p-5 text-center">
                                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                <h3 class="mb-5 text-lg font-normal text-gray-500">Are you sure you want to logout?</h3>
                                <Link to="/" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                    Yes, logout
                                </Link>
                                <button onClick={()=>{setLogout(false)}} type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No, cancel</button>
                            </div>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition> */}
        </>
    );
}


export default UserProfile



export const AllSideMenu = () => {
    
    const [logout, setLogout] = useState(false)
    return (
        <>
        <div className="flex flex-col pr-3 md:gap-y-3">
            <div className="item group">
                <NavLink className="group/link" to="/profile">
                    <div className="flex md:space-x-3 items-center py-3 md:bg-gray-100 md:px-3 px-5 border-b border-gray-100 group-[.active]/link:rounded-lg md:rounded-lg md:text-gray-600 text-gray-700 hover:text-black group-[.active]/link:bg-black group-[.active]/link:text-theme1">
                        <span className='max-md:hidden *:size-5'>
                            <FaRegUserCircle />
                        </span>
                        <span className="font-semibold text-base">
                            Edit Profile
                        </span>
                    </div>
                </NavLink>
            </div>
            <div className="item group">
                <NavLink className="group/link" to="/wishlist">
                    <div className="flex md:space-x-3 items-center py-3 md:bg-gray-100 md:px-3 px-5 border-b border-gray-100 group-[.active]/link:rounded-lg md:rounded-lg md:text-gray-600 text-gray-700 hover:text-black group-[.active]/link:bg-black group-[.active]/link:text-theme1">
                        <span className='max-md:hidden *:size-5'>
                            <FiHeart/>
                        </span>
                        <span className="font-semibold text-base">My Favorite</span>
                    </div>
                </NavLink>
            </div>
            <div className="item group">
                <NavLink className="group/link" to="/chat-history">
                    <div className="flex md:space-x-3 items-center py-3 md:bg-gray-100 md:px-3 px-5 border-b border-gray-100 group-[.active]/link:rounded-lg md:rounded-lg md:text-gray-600 text-gray-700 hover:text-black group-[.active]/link:bg-black group-[.active]/link:text-theme1">
                        <span className='max-md:hidden *:size-5'>
                            <IoChatboxOutline/>
                        </span>
                        <span className="font-semibold text-base">Chat History</span>
                    </div>
                </NavLink>
            </div>
            <div className="item group">
                <NavLink className="group/link" to="/notification">
                    <div className="flex md:space-x-3 items-center py-3 md:bg-gray-100 md:px-3 px-5 border-b border-gray-100 group-[.active]/link:rounded-lg md:rounded-lg md:text-gray-600 text-gray-700 hover:text-black group-[.active]/link:bg-black group-[.active]/link:text-theme1">
                        <span className='max-md:hidden *:size-5'>
                            <LuBellDot />
                        </span>
                        <span className="font-semibold text-base">Notification</span>
                    </div>
                </NavLink>
            </div>
            <div className="item group">
                <NavLink className="group/link" to="/reset-password">
                    <div className="flex md:space-x-3 items-center py-3 md:bg-gray-100 md:px-3 px-5 border-b border-gray-100 group-[.active]/link:rounded-lg md:rounded-lg md:text-gray-600 text-gray-700 hover:text-black group-[.active]/link:bg-black group-[.active]/link:text-theme1">
                        <span className='max-md:hidden *:size-5'>
                            <LuUnlock/>
                        </span>
                        <span className="font-semibold text-base">
                            Change Password
                        </span>
                    </div>
                </NavLink>
            </div>
            <div className="item group">
                <NavLink className="group/link" to="/delete-account">
                    <div className="flex md:space-x-3 items-center py-3 md:bg-gray-100 md:px-3 px-5 border-b border-gray-100 group-[.active]/link:rounded-lg md:rounded-lg md:text-gray-600 text-gray-700 hover:text-black group-[.active]/link:bg-black group-[.active]/link:text-theme1">
                        <span className='max-md:hidden *:size-5'>
                            <IoCloseCircleOutline />
                        </span>
                        <span className="font-semibold text-base">Delete Account</span>
                    </div>
                </NavLink>
            </div>
            <div className="item group">
                <div className="group/link" onClick={()=>setLogout(true)}>
                    <div className="flex md:space-x-3 items-center py-3 md:bg-red-600 md:px-3 px-5 group-[.active]/link:rounded-lg md:rounded-lg md:hover:bg-red-400 md:!text-white text-gray-700 hover:text-black group-[.active]/link:bg-black group-[.active]/link:text-theme1">
                        <span className='max-md:hidden *:size-5'>
                            <AiOutlineLogout/>
                        </span>
                        <span className="font-semibold text-base">Logout</span>
                        
                    </div>
                </div>
            </div>
        </div>
        
        <LogoutDialogue logout={logout} setLogout={setLogout}/>
        </>
    )
}