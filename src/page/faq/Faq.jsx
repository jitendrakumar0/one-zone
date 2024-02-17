import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'

const Faq = () => {
    return (
        <>
            <Header />
            <div className="md:py-8 lg:py-10">
                <div className="max-w-screen-xl mx-auto p-4">
                    <div>
                        <section className="relative md:py-24 py-16">
                            <div className="container relative">
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <div>
                                            <h5 className="text-2xl font-semibold">Buying Product</h5>
                                            <div className="mt-6">
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>How does it work ?</span>
                                                            <svg data-accordion-icon className="size-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>Do I need a designer to use Cartzio ?</span>
                                                            <svg data-accordion-icon className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>What do I need to do to start selling ?</span>
                                                            <svg data-accordion-icon className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>What happens when I receive an order ?</span>
                                                            <svg data-accordion-icon className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <h5 className="text-2xl font-semibold">General Questions</h5>
                                            <div id="accordion-collapsetwo" data-accordion="collapse" className="mt-6">
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>How does it work ?</span>
                                                            <svg data-accordion-icon className="size-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>Do I need a designer to use Cartzio ?</span>
                                                            <svg data-accordion-icon className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>What do I need to do to start selling ?</span>
                                                            <svg data-accordion-icon className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>What happens when I receive an order ?</span>
                                                            <svg data-accordion-icon className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                            </div>
                                        </div>
                                        <div id="payment" className="mt-8">
                                            <h5 className="text-2xl font-semibold">Payments Questions</h5>
                                            <div id="accordion-collapsethree" data-accordion="collapse" className="mt-6">
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>How does it work ?</span>
                                                            <svg data-accordion-icon className="size-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>Do I need a designer to use Cartzio ?</span>
                                                            <svg data-accordion-icon className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>What do I need to do to start selling ?</span>
                                                            <svg data-accordion-icon className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>What happens when I receive an order ?</span>
                                                            <svg data-accordion-icon className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                            </div>
                                        </div>
                                        <div id="support" className="mt-8">
                                            <h5 className="text-2xl font-semibold">Support Questions</h5>
                                            <div id="accordion-collapsefour" data-accordion="collapse" className="mt-6">
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>How does it work ?</span>
                                                            <svg data-accordion-icon className="size-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>Do I need a designer to use Cartzio ?</span>
                                                            <svg data-accordion-icon className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>What do I need to do to start selling ?</span>
                                                            <svg data-accordion-icon className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    <Disclosure.Button className="text-base font-semibold w-full">
                                                        <div className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black">
                                                            <span>What happens when I receive an order ?</span>
                                                            <svg data-accordion-icon className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel>
                                                        <div className="p-5">
                                                            <p className="text-slate-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                </Disclosure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container relative md:mt-24 mt-16">
                                <div className="grid grid-cols-1 text-center">
                                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Have Question ? Get in touch!</h3>
                                    <p className="text-slate-400 max-w-xl mx-auto">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
                                    <div className="mt-6">
                                        <Link to="/contact" className="text-black w-auto bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone size-4 me-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg> Contact us</Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Faq