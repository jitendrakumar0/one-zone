import React, {useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { IoStar } from 'react-icons/io5'
import { CiCircleCheck } from 'react-icons/ci'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SafetyModal from '../../page/chat/Component/SafetyModal'
import DeleteDialogue from '../../components/DeleteDialogue/DeleteDialogue'
import { AiTwotoneDelete } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'
import { FaCrown } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'

const SellerProductDetail = () => {
    const [detailTabs, setDetailTabs] = useState('description');
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isOpenSaftey, setIsOpenSaftey] = useState(false)
    const [DeleteAccount, setDeleteAccount] = useState(false)
    return (
        <>
            <Header />
            <div className="container relative max-w-screen-xl mx-auto p-4 py-5 sm:py-8 lg:py-10">
                <div className="flex max-lg:flex-col max-lg:gap-5">
                    <div className="md:max-w-md w-full overflow-hidden shrink-0">
                        <div className="w-full">
                            <div className="flex w-full flex-col">
                                    <Swiper
                                        spaceBetween={10}
                                        // thumbs={{ swiper: thumbsSwiper }}
                                        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper2 w-full"
                                        >
                                        <SwiperSlide>
                                        <img src="https://p2-ofp.static.pub/fes/cms/2022/09/26/i6zlcap44kafmcywlh54d9rd1wieh1215035.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <img src="https://p4-ofp.static.pub/fes/cms/2022/09/26/aqsawpz6yp1f6t3mmqnhgm09f38p12753707.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <img src="https://p4-ofp.static.pub/fes/cms/2022/09/26/py9fh3uad4dulrce7n9gv2cjirqey5247426.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <img src="https://p2-ofp.static.pub/fes/cms/2022/09/26/jm5etkyp9go9ze43g1a2l3xy4qwmyn450032.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <img src="https://p2-ofp.static.pub/fes/cms/2022/09/26/6vqcmbpcfs5fddq9vxtf7mlo3064tj549746.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <img src="https://p2-ofp.static.pub/fes/cms/2022/09/26/ukkpvjzdiiwwj0l4p0zs6s3938sxsm336408.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <img src="https://p1-ofp.static.pub/fes/cms/2022/09/26/kcylxfkz0zeigek6ravcjns4a5cqg3409627.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <img src="https://p3-ofp.static.pub/fes/cms/2022/09/26/hif2cnxhohr2dh3dwgg1trg70pip4y581012.png" alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        spaceBetween={8}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper relative w-full"
                                        navigation={{
                                        prevEl: '.prevBtn',
                                        nextEl: '.nextBtn',
                                        }}
                                    >
                                        
                                        <SwiperSlide className='p-1 swiperSlider'>
                                        <img className='border object-contain size-full' alt='' src="https://p2-ofp.static.pub/fes/cms/2022/09/26/i6zlcap44kafmcywlh54d9rd1wieh1215035.png" />
                                        </SwiperSlide>
                                        <SwiperSlide className='p-1 swiperSlider'>
                                        <img className='border object-contain size-full' alt='' src="https://p4-ofp.static.pub/fes/cms/2022/09/26/aqsawpz6yp1f6t3mmqnhgm09f38p12753707.png" />
                                        </SwiperSlide>
                                        <SwiperSlide className='p-1 swiperSlider'>
                                        <img className='border object-contain size-full' alt='' src="https://p4-ofp.static.pub/fes/cms/2022/09/26/py9fh3uad4dulrce7n9gv2cjirqey5247426.png" />
                                        </SwiperSlide>
                                        <SwiperSlide className='p-1 swiperSlider'>
                                        <img className='border object-contain size-full' alt='' src="https://p2-ofp.static.pub/fes/cms/2022/09/26/jm5etkyp9go9ze43g1a2l3xy4qwmyn450032.png" />
                                        </SwiperSlide>
                                        <SwiperSlide className='p-1 swiperSlider'>
                                        <img className='border object-contain size-full' alt='' src="https://p2-ofp.static.pub/fes/cms/2022/09/26/6vqcmbpcfs5fddq9vxtf7mlo3064tj549746.png" />
                                        </SwiperSlide>
                                        <SwiperSlide className='p-1 swiperSlider'>
                                        <img className='border object-contain size-full' alt='' src="https://p2-ofp.static.pub/fes/cms/2022/09/26/ukkpvjzdiiwwj0l4p0zs6s3938sxsm336408.png" />
                                        </SwiperSlide>
                                        <SwiperSlide className='p-1 swiperSlider'>
                                        <img className='border object-contain size-full' alt='' src="https://p1-ofp.static.pub/fes/cms/2022/09/26/kcylxfkz0zeigek6ravcjns4a5cqg3409627.png" />
                                        </SwiperSlide>
                                        <SwiperSlide className='p-1 swiperSlider'>
                                        <img className='border object-contain size-full' alt='' src="https://p3-ofp.static.pub/fes/cms/2022/09/26/hif2cnxhohr2dh3dwgg1trg70pip4y581012.png" />
                                        </SwiperSlide>
                                        
                                    {/* <div className="prevBtn border md:flex hidden flex items-center justify-center rounded-lg hover:bg-black hover:text-white w-9 h-9 absolute -top-[10px]  z-10 left-[1%] border-black">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
                                    </div>
                                    <div className="nextBtn border md:flex hidden flex items-center justify-center rounded-lg hover:bg-black hover:text-white w-9 h-9 absolute -top-[10px] right-[1%] z-10 end-[20px] border-black">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                    </div> */}
                                    </Swiper>
                                    
                            </div>
                        </div>
                    </div>

                    <div className="grow">
                        <div className="lg:ms-6 sticky top-24">
                            <h5 className="md:text-2xl sm:text-xl text-lg font-semibold">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X515EA-EJ328WS | X1500EA-EJ3379WS Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg, With MS Office)</h5>
                            <div className="flex py-3">
                                <span className='text-theme1 bg-black rounded-md shadow-md px-3 py-1 font-bold inline-block'>6 Months Used</span>
                            </div>
                            <div className="mt-2 flex flex-col">
                                <span className="text-black font-bold me-1 md:text-2xl text-xl">₹31,990 <del className="text-red-600 font-semibold md:text-lg text-base">₹49,990</del> <span className='text-lime-700 md:text-lg text-base'>36% off</span></span>

                                <ul className="list-none inline-flex items-center text-black mt-2">
                                    <li className="inline"><IoStar className='size-5' /></li>
                                    <li className="inline"><IoStar className='size-5' /></li>
                                    <li className="inline"><IoStar className='size-5' /></li>
                                    <li className="inline"><IoStar className='size-5' /></li>
                                    <li className="inline"><IoStar className='size-5' /></li>
                                    <li className="inline text-black/80 ml-2 rtl:mr-2 font-semibold">4.8 (45)</li>
                                </ul>
                            </div>

                            <div className="mt-4">
                                {/* <h5 className="text-lg font-semibold">Overview :</h5>
                                <p className="text-slate-400 mt-2">The outstanding Asus VivoBook 15 laptop, created to simplify your workday and improve performance, offers fantastic efficiency and stunning aesthetics. This laptop handles all of your multitasking requirements and gives you dynamic performance thanks to the Intel Core processor. Additionally, the dual-storage ASUS VivoBook 15 offers you the benefits of incredibly fast data speed and ample storage capacity. Moreover, its svelte and exquisite form makes you the centre of attention everywhere you go when donning it with you.</p> */}
                            
                                <ul className="list-none text-black mt-4">
                                    <li className="mb-1 flex items-center"><CiCircleCheck className='size-5 mr-2 text-lime-700 rtl:ml-2' /> Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1 flex items-center"><CiCircleCheck className='size-5 mr-2 text-lime-700 rtl:ml-2' /> Our Talented &amp; Experienced Marketing Agency</li>
                                    <li className="mb-1 flex items-center"><CiCircleCheck className='size-5 mr-2 text-lime-700 rtl:ml-2' /> Create your own skin to match your brand</li>
                                </ul>
                            </div>
                            <div className="flex py-3 font-semibold text-black md:text-base text-sm">1 Year Onsite Warranty</div>
                            <div className="flex items-center py-2 font-semibold text-black md:text-base text-sm"><HiLocationMarker className='size-6 me-2' />21B New Delhi </div>
                            <div className="grid lg:grid-cols-1 grid-cols-1 gap-6 mt-4">
                                <div className="flex items-center">
                                    <h5 className="text-lg font-semibold me-2">Size:</h5>
                                    <div className="space-x-1">
                                        <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center border-r last:border-r-0 text-black font-bold">S</Link>
                                        <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center border-r last:border-r-0 text-black font-bold">M</Link>
                                        <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center border-r last:border-r-0 text-black font-bold">L</Link>
                                        <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center border-r last:border-r-0 text-black font-bold">XL</Link>
                                    </div>
                                </div>

                                {/* <div className="flex items-center">
                                    <h5 className="text-lg font-semibold me-2">Quantity:</h5>
                                    <div className="qty-icons ms-3 text-base font-bold">
                                        15
                                    </div>
                                </div> */}

                                <div className="flex items-center">
                                    <h5 className="text-lg font-semibold me-2">Colors:</h5>
                                    <div className="space-x-2">
                                        <Link className="size-6 ring-2 ring-gray-200 bg-red-600 inline-flex align-middle rtl:ml-2" title="Red"></Link>
                                        <Link className="size-6 ring-2 ring-gray-200 bg-orange-600 inline-flex align-middle" title="Orange"></Link>
                                        <Link className="size-6 ring-2 ring-gray-200 bg-slate-900 inline-flex align-middle" title="Black"></Link>
                                        <Link className="size-6 ring-2 ring-gray-200 bg-gray-300 inline-flex align-middle" title="Gray"></Link>
                                    </div>
                                </div>
                            </div>

                                {/* <div className='mt-5 sticky bottom-0'>
                                    <button onClick={()=>setDeleteAccount(true)} className='text-white bg-red-500 border-2 border-red-500 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-500 shadow-md shadow-black/40'><AiTwotoneDelete className='size-5' /> Delete</button>
                                    <Link to='/edit-productdetail' className='ms-5 relative z-10 text-black bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase  md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 md:px-8 px-4  duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'><FiEdit2 className='size-5' /> Edit</Link>
                                </div> */}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <div className="lg:col-span-3 md:col-span-12">
                        <div className="sticky top-20">
                            <ul className="flex-col p-6 bg-white shadow rounded-md gap-4 flex" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                <li role="presentation">
                                    <button className={`w-full py-2 text-center border shadow-lg ${detailTabs === 'description' ? ' text-white bg-black border-b-2 border-b-theme1':'text-white bg-gray-500'}`} onClick={()=>{setDetailTabs('description')}} >Description</button>
                                </li>
                                <li role="presentation">
                                    <button className={`w-full py-2 text-center border shadow-lg  ${detailTabs === 'additional' ? ' text-white bg-black border-b-2 border-b-theme1':'text-white bg-gray-500'}`} onClick={()=>{setDetailTabs('additional')}}>Specifications</button>
                                </li>
                                <li role="presentation">
                                    <button className={`w-full py-2 text-center border shadow-lg ${detailTabs === 'review' ? ' text-white bg-black border-b-2 border-b-theme1':'text-white bg-gray-500'}`} onClick={()=>{setDetailTabs('review')}}>Review</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-9 md:col-span-12">
                        <div id="myTabContent" className="p-6 bg-white shadow rounded-md">
                            {
                                detailTabs === 'description' ? 
                            <div id="description" role="tabpanel" aria-labelledby="profile-tab">
                                <p className="text-slate-600">The outstanding Asus VivoBook 15 laptop, created to simplify your workday and improve performance, offers fantastic efficiency and stunning aesthetics. This laptop handles all of your multitasking requirements and gives you dynamic performance thanks to the Intel Core processor. Additionally, the dual-storage ASUS VivoBook 15 offers you the benefits of incredibly fast data speed and ample storage capacity. Moreover, its svelte and exquisite form makes you the centre of attention everywhere you go when donning it with you.</p>
                            </div>
                            : detailTabs === 'additional' ?

                            <div id="addinfo" role="tabpanel" aria-labelledby="addinfo-tab">
                                <table className="w-full text-start">
                                    <tbody>
                                        <tr className="bg-white">
                                            <td className="font-semibold py-4">Sales Package</td>
                                            <td className="text-slate-600 py-4">Laptop, Battery, Adapter, Cables and User Manuals</td>
                                        </tr>

                                        <tr className="bg-white border-t border-gray-100">
                                            <td className="font-semibold py-4">Model Number</td>
                                            <td className="text-slate-600 py-4">X515EA-EJ322WS | X515EA-EJ328WS | X1500EA-EJ3379WS</td>
                                        </tr>

                                        <tr className="bg-white border-t border-gray-100">
                                            <td className="font-semibold py-4">Part Number</td>
                                            <td className="text-slate-600 py-4">90NB0TY2-M00JK0 | 90NB0TY2-M047X0 | 90NB0TY6-M03EL0</td>
                                        </tr>

                                        <tr className="bg-white border-t border-gray-100">
                                            <td className="font-semibold py-4">Model Name</td>
                                            <td className="text-slate-600 py-4">X515EA-EJ322WS | X515EA-EJ328WS | X1500EA-EJ3379WS</td>
                                        </tr>

                                        <tr className="bg-white border-t border-gray-100">
                                            <td className="font-semibold py-4">Series</td>
                                            <td className="text-slate-600 py-4">Vivobook 15</td>
                                        </tr>

                                        <tr className="bg-white border-t border-gray-100">
                                            <td className="font-semibold py-4">Color</td>
                                            <td className="text-slate-600 py-4">Transparent Silver</td>
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

                                        {/* <Link className="text-black bg-gray-300 text-sm px-4 py-2 font-bold rounded-lg hover:text-theme1 hover:bg-black duration-500 ms-5"><i className="mdi mdi-reply"></i> Reply</Link> */}
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-md shadow mt-6">
                                        <ul className="list-none inline-block text-theme1">
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline text-slate-600 font-semibold">5.0</li>
                                        </ul>

                                        <p className="text-slate-600 italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
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

                                        {/* <Link className="text-black bg-gray-300 text-sm px-4 py-2 font-bold rounded-lg hover:text-theme1 hover:bg-black duration-500 ms-5"><i className="mdi mdi-reply"></i> Reply</Link> */}
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-md shadow mt-6">
                                        <ul className="list-none inline-block text-theme1">
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline text-slate-600 font-semibold">5.0</li>
                                        </ul>

                                        <p className="text-slate-600 italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
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

                                        {/* <Link className="text-black bg-gray-300 text-sm px-4 py-2 font-bold rounded-lg hover:text-theme1 hover:bg-black duration-500 ms-5"><i className="mdi mdi-reply"></i> Reply</Link> */}
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-md shadow mt-6">
                                        <ul className="list-none inline-block text-theme1">
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline text-slate-600 font-semibold">5.0</li>
                                        </ul>

                                        <p className="text-slate-600 italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
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

                                        {/* <Link className="text-black bg-gray-300 text-sm px-4 py-2 font-bold rounded-lg hover:text-theme1 hover:bg-black duration-500 ms-5"><i className="mdi mdi-reply"></i> Reply</Link> */}
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-md shadow mt-6">
                                        <ul className="list-none inline-block text-theme1">
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline text-slate-600 font-semibold">5.0</li>
                                        </ul>

                                        <p className="text-slate-600 italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <SafetyModal isOpenSaftey={isOpenSaftey} setIsOpenSaftey={setIsOpenSaftey}/>
            <DeleteDialogue name={'product'} DeleteAccount={DeleteAccount} setDeleteAccount={setDeleteAccount}/>
            <div className='mt-5 sticky bottom-0 flex md:w-auto w-full justify-center items-center z-40'>
                <div className='bg-white shadow p-6 rounded-t-3xl max-md:w-full max-md:flex'>
                <Link to='/select-packages' className='grow text-black animatepulse me-4 bg-[#EFC469] border-2 border-[#cea44a] border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 py-2 text-center inline-flex items-center justify-center gap-2 duration-300  shadow-md shadow-black/40'><FaCrown className='size-5' /> Sell Faster Now</Link>
                <button onClick={()=>setDeleteAccount(true)} className='shrink text-white bg-red-500 border-2 border-red-500 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase text-center md:px-4 p-2 inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-white md:hover:border-red-500 shadow-md shadow-black/40'><AiTwotoneDelete className='size-5' /> <span className="max-md:hidden">Delete</span></button>
                <Link to='/edit-productdetail' className='shrink ms-4 relative z-10 text-black bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase text-center md:px-4 p-2 inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'><FiEdit2 className='size-5' /> <span className="max-md:hidden">Edit</span></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SellerProductDetail