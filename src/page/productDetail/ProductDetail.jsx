import React, {useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { IoStar } from 'react-icons/io5'
import { CiCircleCheck } from 'react-icons/ci'
import { RiChat1Line } from 'react-icons/ri'
import { FaRegHeart } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SafetyModal from '../chat/Component/SafetyModal'
import banner1 from '../../asstes/img/addBanner.jpg'
import { HiLocationMarker } from 'react-icons/hi'


const ProductDetail = () => {
    const [detailTabs, setDetailTabs] = useState('description');
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isOpenSaftey, setIsOpenSaftey] = useState(false)
    const [isOpenLogin, setisOpenLogin] = useState(false)
    const [isOpenRegister, setIsOpenRegister] = useState(false)
  return (
    <>
    <Header isOpenLogin={isOpenLogin}  setisOpenLogin={setisOpenLogin} isOpenRegister={isOpenRegister} setIsOpenRegister={setIsOpenRegister}/>
    <div className="container relative max-w-screen-xl mx-auto px-4 py-5 sm:py-8 lg:py-10">
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
                                <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-black/10 hover:bg-theme1 text-black font-bold hover:text-black rtl:ml-1">S</Link>
                                <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-black/10 hover:bg-theme1 text-black font-bold hover:text-black">M</Link>
                                <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-black/10 hover:bg-theme1 text-black font-bold hover:text-black">L</Link>
                                <Link className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-black/10 hover:bg-theme1 text-black font-bold hover:text-black">XL</Link>
                            </div>
                        </div>

                        {/* <div className="flex items-center">
                            <h5 className="text-lg font-semibold me-2">Quantity:</h5>
                            <div className="qty-icons ms-3 space-x-0.5">
                                <button className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-sm text-center rounded-md bg-black/10 font-bold hover:bg-theme1 text-black hover:text-white minus">-</button>
                                <input min="0" name="quantity" value="0" type="number" className="h-9 inline-flex items-center justify-center tracking-wide align-middle text-sm text-center rounded-md bg-black/10 font-bold hover:bg-theme1 text-black hover:text-white pointer-events-none w-16 ps-4 quantity" />
                                <button className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-sm text-center rounded-md bg-black/10 font-bold hover:bg-theme1 text-black hover:text-white plus">+</button>
                            </div>
                        </div> */}

                        <div className="flex items-center">
                            <h5 className="text-lg font-semibold me-2">Colors:</h5>
                            <div className="space-x-2">
                                <Link className="size-6 rounded-full ring-2 ring-gray-200 bg-red-600 inline-flex align-middle rtl:ml-2" title="Red"></Link>
                                <Link className="size-6 rounded-full ring-2 ring-gray-200 bg-orange-600 inline-flex align-middle" title="Orange"></Link>
                                <Link className="size-6 rounded-full ring-2 ring-gray-200 bg-slate-900 inline-flex align-middle" title="Black"></Link>
                                <Link className="size-6 rounded-full ring-2 ring-gray-200 bg-gray-300 inline-flex align-middle" title="Gray"></Link>
                            </div>
                        </div>
                    </div>

                        
                    <div className="p-3 md:max-w-md bg-white rounded-lg mt-4 border">
                        <Link to='/seller-profile' className="flex items-center mb-4">
                            <div>
                                <img className="size-10 rounded-full" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Jese"/>
                            </div>
                            <div className="text-base ms-2 font-bold leading-none text-black">
                                <div>Rohit Sharma</div>
                                <div className='text-xs'>123 B New colony</div>
                            </div>
                        </Link>
                        <button onClick={()=>{setisOpenLogin(true)}} className="text-black w-full mb-2 bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>

                        <button className="text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Add to Wishlist <FaRegHeart className='size-5' /></button>
                    </div>

                    {/* <div className="mt-4 space-x-1">
                        <button className="text-black w-auto bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Chat with Seller <RiChat1Line className='size-5' /></button>
                        <button type='button' className="text-black w-auto bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40"
                        onClick={()=>{setWished(!wished)}}>Wishlist 
                        {
                            !wished ?
                            <FaRegHeart className='size-5' />
                            :
                            <FaHeart className='size-5' />
                        } </button>
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

                        <div className="p-6 rounded-md shadow mt-8">
                            <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                            <form className="mt-8">
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <div className="form-icon relative mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user w-4 h-4 absolute top-3 start-4"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                <input name="name" id="name" type="text" className="ps-11 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-100 focus:ring-0" placeholder="Name :" />
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <div className="form-icon relative mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail w-4 h-4 absolute top-3 start-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                <input name="email" id="email" type="email" className="ps-11 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-100 focus:ring-0" placeholder="Email :" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <div className="text-start">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <div className="form-icon relative mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle w-4 h-4 absolute top-3 start-4"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                                <textarea name="comments" id="comments" className="ps-11 w-full py-2 px-3 h-28 bg-transparent rounded outline-none border border-gray-100 focus:ring-0" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="text-black w-full bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Send Message</button>
                            </form>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
        <div className="w-full pt-8 pb-4">
            <div className='w-full'>
                <div className='w-full h-60 rounded-lg relative'>
                    <img className='size-full object-cover rounded-lg' src={banner1} alt="" />
                    <div className='absolute inset-0 m-auto flex justify-center items-center flex-col'>
                        <div className='text-xl md:text-3xl font-bold mb-0 md:mb-2 text-black'>Your Add Will Come Here</div>
                        <div className='text-md text-black'>Hurry up to reserve your post</div>
                    </div>
                </div>
            </div>
        </div>
</div>
    {/* <SafetyModal isOpenSaftey={isOpenSaftey} setIsOpenSaftey={setIsOpenSaftey}/> */}
    <Footer />
    </>
)
}

export default ProductDetail