import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import { AllSideMenu } from '../userProfile/UserProfile';
import { TiDeleteOutline } from 'react-icons/ti';

const DeleteAccount = () => {
    return (
        <>
            <Header />
            <div className="md:py-8 lg:py-10">
                <div className="max-w-screen-xl mx-auto p-4">
                    <div className="w-full bg-white rounded-xl shadow-xl md:px-10 md:py-6 p-5">
                        <div className="title-area w-full flex justify-between items-center border-b border-gray-200">
                            <h1 className="md:text-2xl sm:text-xl text-lg text-black font-bold text-center pb-5">
                            Delete Account
                            </h1>
                        </div>
                        <div className="profile-wrapper w-full md:mt-8 mt-0 flex md:space-x-10">
                            <div className="w-[236px] min-h-[600px] border-r border-[rgba(0, 0, 0, 0.1)] max-md:hidden">
                                <AllSideMenu />
                            </div>
                            <div className="flex-1">
                                <div className="item-body dashboard-wrapper w-full flex flex-col">
                                    
                                    <div class="justify-center items-center w-full flex">
                                        <div class="relative p-4 w-full max-w-md max-h-full">
                                            <div class="relative bg-white rounded-lg shadow">
                                                <div class="p-4 md:p-5 text-center">
                                                    <TiDeleteOutline className='mx-auto mb-4 text-gray-400 w-12 h-12' />
                                                    <h3 class="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete this product?</h3>
                                                    <div className="action-area flex space-x-4 items-center pb-4 justify-center">
                                                        <div class="inline-flex gap-4">
                                                            <Link to="/signup" className="text-white bg-red-600 border-2 grow border-red-600 border-b-red-800 font-bold text-sm md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 hover:border-b-red-900 md:hover:bg-red-800 shadow-md shadow-red-800/40">Yes, I'm sure</Link>
                                                            <button className="border-2 grow border-b-black font-bold text-sm md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black text-black border-black hover:border-b-black shadow-md hover:text-theme1 shadow-black/40">No, cancel</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}


export default DeleteAccount

