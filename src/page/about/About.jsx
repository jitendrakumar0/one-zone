import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom'

const About = () => {
    
    const [isOpenLogin, setisOpenLogin] = useState(false)
    const [isOpenRegister, setIsOpenRegister] = useState(false)
    return (
        <>
            <Header isOpenLogin={isOpenLogin}  setisOpenLogin={setisOpenLogin} isOpenRegister={isOpenRegister} setIsOpenRegister={setIsOpenRegister} />
            <div className="md:py-8 lg:py-10">
                <div className="max-w-screen-xl mx-auto p-4">
                    <section className="relative md:py-24 py-16">
                        <div>
                            <div className="container relative">
                                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                                    <div className="lg:col-span-5 md:col-span-6">
                                        <img src="https://shreethemes.in/cartzio/layouts/assets/images/ab1.jpg" className="rounded-t-full shadow-md" alt="" />
                                    </div>
                                    <div className="lg:col-span-7 md:col-span-6">
                                        <div className="lg:ms-8">
                                            <h6 className="text-black font-semibold uppercase text-lg">Our Shop</h6>
                                            <h5 className="font-semibold text-3xl leading-normal my-4">Focusing on Quality <br /> Material, Good Design</h5>
                                            <p className="text-slate-400 max-w-xl">Donec non interdum nisl. Sed ut est ac lacus sodales convallis. Nam non velit justo. Mauris vel ultrices tortor. Proin bibendum magna porttitor porttitor suscipit. Praesent sit amet consequat eros. Quisque ullamcorper ornare vulputate. Nam sodales sem id diam sollicitudin, id lobortis tellus tincidunt.</p>
                                            <div className="flex items-center mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone w-6 h-6 me-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                                <div>
                                                    <h5 className="title font-bold mb-0">Phone</h5>
                                                    <Link className="tracking-wide text-black">+152 534-468-854</Link>
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin w-6 h-6 me-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} /></svg>
                                                <div>
                                                    <h5 className="title font-bold mb-0">Location</h5>
                                                    <Link data-type="iframe" className="tracking-wide text-center text-black lightbox">View on Google map</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container relative md:mt-24 mt-16">
                                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                                    <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
                                        <img src="https://shreethemes.in/cartzio/layouts/assets/images/ab2.jpg" className="rounded-b-full shadow-md" alt="" />
                                    </div>
                                    <div className="lg:col-span-7 md:col-span-6 md:order-1 order-2">
                                        <h6 className="text-black font-semibold uppercase text-lg">Founder</h6>
                                        <h5 className="font-semibold text-3xl leading-normal my-4">Maria J. Rose</h5>
                                        <p className="text-slate-400 max-w-xl">Donec non interdum nisl. Sed ut est ac lacus sodales convallis. Nam non velit justo. Mauris vel ultrices tortor. Proin bibendum magna porttitor porttitor suscipit. Praesent sit amet consequat eros. Quisque ullamcorper ornare vulputate. Nam sodales sem id diam sollicitudin, id lobortis tellus tincidunt.</p>
                                        <ul className="list-none mt-6 space-x-2">
                                            <li className="inline"><Link target="_blank" className="inline-flex hover:text-black"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-dribbble size-5 align-middle" title="dribbble"><circle cx={12} cy={12} r={10} /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></svg></Link></li>
                                            <li className="inline"><Link target="_blank" className="inline-flex hover:text-black"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin size-5 align-middle" title="Linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></Link></li>
                                            <li className="inline"><Link target="_blank" className="inline-flex hover:text-black"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook size-5 align-middle" title="facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></Link></li>
                                            <li className="inline"><Link target="_blank" className="inline-flex hover:text-black"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram size-5 align-middle" title="instagram"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></Link></li>
                                            <li className="inline"><Link target="_blank" className="inline-flex hover:text-black"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter size-5 align-middle" title="twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="container relative md:mt-24 mt-16">
                                <div className="grid grid-cols-1 justify-center text-center mb-4">
                                    <h6 className="text-black font-semibold uppercase text-lg">Our Promise</h6>
                                    <h5 className="font-semibold text-3xl leading-normal my-4">We Designed and <br /> Developed Products</h5>
                                </div>
                                <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                                    <div className="p-6 shadow hover:shadow-md duration-500 rounded-md bg-white">
                                        <i className="mdi mdi-truck-check-outline text-4xl text-black" />
                                        <div className="content mt-6">
                                            <Link className="title h5 text-xl font-medium hover:text-black">Free Shipping</Link>
                                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                            <div className="mt-4">
                                                <Link className="text-black">Read More <i className="mdi mdi-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 shadow hover:shadow-md duration-500 rounded-md bg-white">
                                        <i className="mdi mdi-account-wrench-outline text-4xl text-black" />
                                        <div className="content mt-6">
                                            <Link className="title h5 text-xl font-medium hover:text-black">24/7 Support</Link>
                                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                            <div className="mt-4">
                                                <Link className="text-black">Read More <i className="mdi mdi-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 shadow hover:shadow-md duration-500 rounded-md bg-white">
                                        <i className="mdi mdi-cash-multiple text-4xl text-black" />
                                        <div className="content mt-6">
                                            <Link className="title h5 text-xl font-medium hover:text-black">Payment Process</Link>
                                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                            <div className="mt-4">
                                                <Link className="text-black">Read More <i className="mdi mdi-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container relative md:mt-24 mt-16">
                                <div className="grid grid-cols-1 justify-center text-center mb-4">
                                    <h6 className="text-black font-semibold uppercase text-lg">Our Minds</h6>
                                    <h5 className="font-semibold text-3xl leading-normal my-4">Meet Our Team Members</h5>
                                </div>
                                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                                    <div className="lg:col-span-3 md:col-span-6">
                                        <div className="group text-center">
                                            <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                                <img src="https://shreethemes.in/cartzio/layouts/assets/images/client/04.jpg" alt="" />
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                                                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-black text-white"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></Link></li>
                                                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-black text-white"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram h-4 w-4"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></Link></li>
                                                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-black text-white"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></Link></li>
                                                </ul>
                                            </div>
                                            <div className="content mt-3">
                                                <Link className="text-lg font-semibold hover:text-black duration-500">Jack John</Link>
                                                <p className="text-slate-400">Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-3 md:col-span-6">
                                        <div className="group text-center">
                                            <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                                <img src="https://shreethemes.in/cartzio/layouts/assets/images/client/16.jpg" alt="" />
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                                                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-black text-white"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></Link></li>
                                                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-black text-white"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram h-4 w-4"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></Link></li>
                                                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-black text-white"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></Link></li>
                                                </ul>
                                            </div>
                                            <div className="content mt-3">
                                                <Link className="text-lg font-semibold hover:text-black duration-500">Krista John</Link>
                                                <p className="text-slate-400">Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-3 md:col-span-6">
                                        <div className="group text-center">
                                            <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                                <img src="https://shreethemes.in/cartzio/layouts/assets/images/client/06.jpg" alt="" />
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                                                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-black text-white"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></Link></li>
                                                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-black text-white"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram h-4 w-4"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></Link></li>
                                                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-black text-white"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></Link></li>
                                                </ul>
                                            </div>
                                            <div className="content mt-3">
                                                <Link className="text-lg font-semibold hover:text-black duration-500">Roger Jackson</Link>
                                                <p className="text-slate-400">Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-3 md:col-span-6">
                                        <div className="group text-center">
                                            <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                                <img src="https://shreethemes.in/cartzio/layouts/assets/images/client/07.jpg" alt="" />
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                                                <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-black text-white"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></Link></li>
                                                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-black text-white"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram h-4 w-4"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></Link></li>
                                                    <li className="inline"><Link className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-black text-white"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></Link></li>
                                                </ul>
                                            </div>
                                            <div className="content mt-3">
                                                <Link className="text-lg font-semibold hover:text-black duration-500">Johnny English</Link>
                                                <p className="text-slate-400">Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About