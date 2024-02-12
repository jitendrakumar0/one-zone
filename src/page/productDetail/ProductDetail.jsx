import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { IoStar } from 'react-icons/io5'
import { CiCircleCheck } from 'react-icons/ci'
import { RiChat1Line } from 'react-icons/ri'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const ProductDetail = () => {
    const [wished, setWished] = useState(false);
    const [detailTabs, setDetailTabs] = useState('description');
  return (
    <>
    <Header />
    <div className="container relative max-w-screen-xl mx-auto p-4 py-5 sm:py-8 lg:py-10">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="lg:col-span-5">
                <div className="grid md:grid-cols-12 gap-3">
                    <div className="md:col-span-12">
                        <Link className="lightbox duration-500 group-hover:scale-105 tobii-zoom w-full" title="">
                            <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70&crop=false" className="shadow w-full" alt="Mens Brown Jecket" />
                            {/* <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div> */}
                        </Link>
                    </div>
                    <div className="md:col-span-6">
                        <Link className="lightbox duration-500 group-hover:scale-105 tobii-zoom w-full" title="">
                            <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/i/x/o/-original-imagdx9qedcveu2m.jpeg?q=70&crop=false" className="shadow w-full" alt="Mens Brown Jecket" />
                            {/* <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div> */}
                        </Link>
                    </div>
                    <div className="md:col-span-6">
                        <Link className="lightbox duration-500 group-hover:scale-105 tobii-zoom w-full" title="">
                            <img src="https://rukminim2.flixcart.com/image/416/416/l2m78280/computer/d/p/e/-original-imagdx9rywnvynyd.jpeg?q=70&crop=false" className="shadow w-full" alt="Mens Brown Jecket" />
                            {/* <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div> */}
                        </Link>
                    </div>
                    <div className="md:col-span-12">
                        <Link className="lightbox duration-500 group-hover:scale-105 tobii-zoom w-full" title="">
                            <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/h/v/o/-original-imagdx9qzpmh4hvf.jpeg?q=70&crop=false" className="shadow w-full" alt="Mens Brown Jecket" />
                            {/* <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div> */}
                        </Link>
                    </div>
                    <div className="md:col-span-12">
                        <Link className="lightbox duration-500 group-hover:scale-105 tobii-zoom w-full" title="">
                            <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/r/e/a/-original-imagdx9qenr28djr.jpeg?q=70&crop=false" className="shadow w-full" alt="Mens Brown Jecket" />
                            {/* <div className="tobii-zoom__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 16v5h-5"></path><path d="M8 21H3v-5"></path><path d="M16 3h5v5"></path><path d="M3 8V3h5"></path></svg></div> */}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-7">
                <div className="lg:ms-6 sticky top-24">
                    <h5 className="text-2xl font-semibold">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X515EA-EJ328WS | X1500EA-EJ3379WS Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg, With MS Office)</h5>
                    <div className="flex py-3">
                        <span className='text-theme1 bg-theme1/20 rounded-md shadow-md px-3 py-1 font-bold inline-block'>6 Months Used</span>
                    </div>
                    <div className="mt-2 flex flex-col">
                        <span className="text-black font-bold me-1 md:text-2xl text-xl">₹31,990 <del className="text-red-600 font-semibold md:text-lg text-base">₹49,990</del> <span className='text-lime-700 md:text-lg text-base'>36% off</span></span>

                        <ul className="list-none inline-flex items-center text-theme1 mt-2">
                            <li className="inline"><IoStar className='size-5' /></li>
                            <li className="inline"><IoStar className='size-5' /></li>
                            <li className="inline"><IoStar className='size-5' /></li>
                            <li className="inline"><IoStar className='size-5' /></li>
                            <li className="inline"><IoStar className='size-5' /></li>
                            <li className="inline text-black/80 ml-2 font-semibold">4.8 (45)</li>
                        </ul>
                    </div>

                    <div className="mt-4">
                        {/* <h5 className="text-lg font-semibold">Overview :</h5>
                        <p className="text-slate-400 mt-2">The outstanding Asus VivoBook 15 laptop, created to simplify your workday and improve performance, offers fantastic efficiency and stunning aesthetics. This laptop handles all of your multitasking requirements and gives you dynamic performance thanks to the Intel Core processor. Additionally, the dual-storage ASUS VivoBook 15 offers you the benefits of incredibly fast data speed and ample storage capacity. Moreover, its svelte and exquisite form makes you the centre of attention everywhere you go when donning it with you.</p> */}
                    
                        <ul className="list-none text-black mt-4">
                            <li className="mb-1 flex items-center"><CiCircleCheck className='size-5 mr-2 text-lime-700' /> Digital Marketing Solutions for Tomorrow</li>
                            <li className="mb-1 flex items-center"><CiCircleCheck className='size-5 mr-2 text-lime-700' /> Our Talented &amp; Experienced Marketing Agency</li>
                            <li className="mb-1 flex items-center"><CiCircleCheck className='size-5 mr-2 text-lime-700' /> Create your own skin to match your brand</li>
                        </ul>
                    </div>
                    <div className="flex py-3 font-semibold text-black md:text-base text-sm">1 Year Onsite Warranty</div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-4">
                        <div className="flex items-center">
                            <h5 className="text-lg font-semibold me-2">Size:</h5>
                            <div className="space-x-1">
                                <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-theme1/5 hover:bg-theme1 text-theme1 hover:text-white">S</Link>
                                <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-theme1/5 hover:bg-theme1 text-theme1 hover:text-white">M</Link>
                                <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-theme1/5 hover:bg-theme1 text-theme1 hover:text-white">L</Link>
                                <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-theme1/5 hover:bg-theme1 text-theme1 hover:text-white">XL</Link>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <h5 className="text-lg font-semibold me-2">Quantity:</h5>
                            <div className="qty-icons ms-3 space-x-0.5">
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-theme1/5 hover:bg-theme1 text-theme1 hover:text-white minus">-</button>
                                <input min="0" name="quantity" value="0" type="number" className="h-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-theme1/5 hover:bg-theme1 text-theme1 hover:text-white pointer-events-none w-16 ps-4 quantity" />
                                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-theme1/5 hover:bg-theme1 text-theme1 hover:text-white plus">+</button>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <h5 className="text-lg font-semibold me-2">Colors:</h5>
                            <div className="space-x-2">
                                <Link className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle" title="Red"></Link>
                                <Link className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-orange-600 inline-flex align-middle" title="Orange"></Link>
                                <Link className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-slate-900 inline-flex align-middle" title="Black"></Link>
                                <Link className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-gray-300 inline-flex align-middle" title="Gray"></Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 space-x-1">
                        <button className="text-black bg-theme1 border-2 grow border-theme1 font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:border-black md:hover:bg-black md:hover:text-white shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></button>
                        <button type='button' className="border-2 grow font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 text-theme1 border-theme1 shadow-md shadow-black/40 md:hover:bg-theme1 md:hover:text-white"
                        onClick={()=>{setWished(!wished)}}>Wishlist 
                        {
                            !wished ?
                            <FaRegHeart className='size-5' />
                            :
                            <FaHeart className='size-5' />
                        } </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
            <div className="lg:col-span-3 md:col-span-5">
                <div className="sticky top-20">
                    <ul className="flex-col p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md gap-4 flex" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li role="presentation">
                            <button className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full duration-500 ${detailTabs === 'description' ? ' text-white bg-theme1':' hover:text-theme1 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800'}`} onClick={()=>{setDetailTabs('description')}} >Description</button>
                        </li>
                        <li role="presentation">
                            <button className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full duration-500 ${detailTabs === 'additional' ? ' text-white bg-theme1':' hover:text-theme1 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800'}`} onClick={()=>{setDetailTabs('additional')}}>Specifications</button>
                        </li>
                        <li role="presentation">
                            <button className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full duration-500 ${detailTabs === 'review' ? ' text-white bg-theme1':' hover:text-theme1 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800'}`} onClick={()=>{setDetailTabs('review')}}>Review</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="lg:col-span-9 md:col-span-7">
                <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                    {
                        detailTabs === 'description' ? 
                    <div id="description" role="tabpanel" aria-labelledby="profile-tab">
                        <p className="text-slate-400">The outstanding Asus VivoBook 15 laptop, created to simplify your workday and improve performance, offers fantastic efficiency and stunning aesthetics. This laptop handles all of your multitasking requirements and gives you dynamic performance thanks to the Intel Core processor. Additionally, the dual-storage ASUS VivoBook 15 offers you the benefits of incredibly fast data speed and ample storage capacity. Moreover, its svelte and exquisite form makes you the centre of attention everywhere you go when donning it with you.</p>
                    </div>
                    : detailTabs === 'additional' ?

                    <div id="addinfo" role="tabpanel" aria-labelledby="addinfo-tab">
                        <table className="w-full text-start">
                            <tbody>
                                <tr className="bg-white dark:bg-slate-900">
                                    <td className="font-semibold py-4">Sales Package</td>
                                    <td className="text-slate-400 py-4">Laptop, Battery, Adapter, Cables and User Manuals</td>
                                </tr>

                                <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                                    <td className="font-semibold py-4">Model Number</td>
                                    <td className="text-slate-400 py-4">X515EA-EJ322WS | X515EA-EJ328WS | X1500EA-EJ3379WS</td>
                                </tr>

                                <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                                    <td className="font-semibold py-4">Part Number</td>
                                    <td className="text-slate-400 py-4">90NB0TY2-M00JK0 | 90NB0TY2-M047X0 | 90NB0TY6-M03EL0</td>
                                </tr>

                                <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                                    <td className="font-semibold py-4">Model Name</td>
                                    <td className="text-slate-400 py-4">X515EA-EJ322WS | X515EA-EJ328WS | X1500EA-EJ3379WS</td>
                                </tr>

                                <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                                    <td className="font-semibold py-4">Series</td>
                                    <td className="text-slate-400 py-4">Vivobook 15</td>
                                </tr>

                                <tr className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-700">
                                    <td className="font-semibold py-4">Color</td>
                                    <td className="text-slate-400 py-4">Transparent Silver</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    :

                    <div id="review" role="tabpanel" aria-labelledby="review-tab">
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src="https://shreethemes.in/cartzio/layouts/assets/images/client/01.jpg" className="h-11 w-11 rounded-full shadow" alt="" />

                                    <div className="ms-3 flex-1">
                                        <Link className="text-lg font-semibold hover:text-theme1 duration-500">Calvin Carlo</Link>
                                        <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                    </div>
                                </div>

                                <Link className="text-slate-400 hover:text-theme1 duration-500 ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                <ul className="list-none inline-block text-theme1">
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline text-slate-400 font-semibold">5.0</li>
                                </ul>

                                <p className="text-slate-400 italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src="https://shreethemes.in/cartzio/layouts/assets/images/client/02.jpg" className="h-11 w-11 rounded-full shadow" alt="" />

                                    <div className="ms-3 flex-1">
                                        <Link className="text-lg font-semibold hover:text-theme1 duration-500">Calvin Carlo</Link>
                                        <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                    </div>
                                </div>

                                <Link className="text-slate-400 hover:text-theme1 duration-500 ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                <ul className="list-none inline-block text-theme1">
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline text-slate-400 font-semibold">5.0</li>
                                </ul>

                                <p className="text-slate-400 italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src="https://shreethemes.in/cartzio/layouts/assets/images/client/03.jpg" className="h-11 w-11 rounded-full shadow" alt="" />

                                    <div className="ms-3 flex-1">
                                        <Link className="text-lg font-semibold hover:text-theme1 duration-500">Calvin Carlo</Link>
                                        <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                    </div>
                                </div>

                                <Link className="text-slate-400 hover:text-theme1 duration-500 ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                <ul className="list-none inline-block text-theme1">
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline text-slate-400 font-semibold">5.0</li>
                                </ul>

                                <p className="text-slate-400 italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src="https://shreethemes.in/cartzio/layouts/assets/images/client/04.jpg" className="h-11 w-11 rounded-full shadow" alt="" />

                                    <div className="ms-3 flex-1">
                                        <Link className="text-lg font-semibold hover:text-theme1 duration-500">Calvin Carlo</Link>
                                        <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                    </div>
                                </div>

                                <Link className="text-slate-400 hover:text-theme1 duration-500 ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                <ul className="list-none inline-block text-theme1">
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                    <li className="inline text-slate-400 font-semibold">5.0</li>
                                </ul>

                                <p className="text-slate-400 italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                            </div>
                        </div>

                        <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                            <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                            <form className="mt-8">
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label for="name" className="font-semibold">Your Name:</label>
                                            <div className="form-icon relative mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user w-4 h-4 absolute top-3 start-4"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                <input name="name" id="name" type="text" className="ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Name :" />
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label for="email" className="font-semibold">Your Email:</label>
                                            <div className="form-icon relative mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail w-4 h-4 absolute top-3 start-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                <input name="email" id="email" type="email" className="ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Email :" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <div className="text-start">
                                            <label for="comments" className="font-semibold">Your Comment:</label>
                                            <div className="form-icon relative mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle w-4 h-4 absolute top-3 start-4"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                                <textarea name="comments" id="comments" className="ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-theme1 text-white rounded-md w-full">Send Message</button>
                            </form>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default ProductDetail