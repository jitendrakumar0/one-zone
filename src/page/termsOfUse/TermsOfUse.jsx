import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'
import { Disclosure, Transition } from '@headlessui/react'

const TermsOfUse = () => {
    return (
        <>
            <Header />
            <div className="md:py-8 lg:py-10">
                <div className="max-w-screen-xl mx-auto p-4">
                    <div>
                        <section className="relative">
                            <div className="container relative">
                                <div className="md:flex justify-center">
                                    <div>
                                        <div className="p-6 bg-white shadow rounded-md">
                                            <h3 className="md:text-2xl text-xl font-bold pb-7">
                                                Terms of Use
                                            </h3>
                                            <h5 className="text-xl font-semibold mb-4">
                                                Introduction :
                                            </h5>
                                            <p className="text-slate-400">
                                                It seems that only fragments of the original text
                                                remain in the Lorem Ipsum texts used today. One may
                                                speculate that over the course of time certain letters
                                                were added or deleted at various positions within the
                                                text.
                                            </p>
                                            <h5 className="text-xl font-semibold mb-4 mt-8">
                                                User Agreements :
                                            </h5>
                                            <p className="text-slate-400">
                                                The most well-known dummy text is the 'Lorem Ipsum',
                                                which is said to have{" "}
                                                <b className="text-black">originated</b> in the 16th
                                                century. Lorem Ipsum is{" "}
                                                <b className="text-black">composed</b> in a
                                                pseudo-Latin language which more or less{" "}
                                                <b className="text-black">corresponds</b> to
                                                'proper' Latin. It contains a series of real Latin
                                                words. This ancient dummy text is also{" "}
                                                <b className="text-black">incomprehensible</b>, but
                                                it imitates the rhythm of most European languages in
                                                Latin script. The{" "}
                                                <b className="text-black">advantage</b> of its Latin
                                                origin and the relative{" "}
                                                <b className="text-black">meaninglessness</b> of
                                                Lorum Ipsum is that the text does not attract
                                                attention to itself or distract the viewer's{" "}
                                                <b className="text-black">attention</b> from the
                                                layout.
                                            </p>
                                            <p className="text-slate-400 mt-3">
                                                There is now an{" "}
                                                <b className="text-black">abundance</b> of readable
                                                dummy texts. These are usually used when a text is{" "}
                                                <b className="text-black">required purely</b> to
                                                fill a space. These alternatives to the classic Lorem
                                                Ipsum texts are often amusing and tell short, funny or{" "}
                                                <b className="text-black">nonsensical</b> stories.
                                            </p>
                                            <p className="text-slate-400 mt-3">
                                                It seems that only{" "}
                                                <b className="text-black">fragments</b> of the
                                                original text remain in the Lorem Ipsum texts used
                                                today. One may speculate that over the course of time
                                                certain letters were added or deleted at various
                                                positions within the text.
                                            </p>
                                            <h5 className="text-xl font-semibold mb-4 mt-8">
                                                Restrictions :
                                            </h5>
                                            <p className="text-slate-400">
                                                You are specifically restricted from all of the
                                                following :
                                            </p>
                                            <ul className="list-none text-slate-400 mt-3">
                                                <li className="flex mt-2">
                                                    <i className="mdi mdi-chevron-right text-black text-lg align-middle me-2" />
                                                    Digital Marketing Solutions for Tomorrow
                                                </li>
                                                <li className="flex mt-2">
                                                    <i className="mdi mdi-chevron-right text-black text-lg align-middle me-2" />
                                                    Our Talented &amp; Experienced Marketing Agency
                                                </li>
                                                <li className="flex mt-2">
                                                    <i className="mdi mdi-chevron-right text-black text-lg align-middle me-2" />
                                                    Create your own skin to match your brand
                                                </li>
                                                <li className="flex mt-2">
                                                    <i className="mdi mdi-chevron-right text-black text-lg align-middle me-2" />
                                                    Digital Marketing Solutions for Tomorrow
                                                </li>
                                                <li className="flex mt-2">
                                                    <i className="mdi mdi-chevron-right text-black text-lg align-middle me-2" />
                                                    Our Talented &amp; Experienced Marketing Agency
                                                </li>
                                                <li className="flex mt-2">
                                                    <i className="mdi mdi-chevron-right text-black text-lg align-middle me-2" />
                                                    Create your own skin to match your brand
                                                </li>
                                            </ul>
                                            <h5 className="text-xl font-semibold mt-8">
                                                Users Question &amp; Answer :
                                            </h5>
                                            <div
                                                className="mt-6"
                                            >
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    {({ open }) => (
                                                        <>
                                                    <Disclosure.Button
                                                        className="text-base font-semibold w-full"
                                                    >
                                                        <div
                                                            className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black"
                                                            data-accordion-target="#accordion-collapse-body-1"
                                                            aria-expanded="true"
                                                            aria-controls="accordion-collapse-body-1"
                                                        >
                                                            <span>How does it work ?</span>
                                                            <svg
                                                                data-accordion-icon
                                                                className={`size-4 duration-300 ${open ? '-rotate-180' : 'rotate-0'} shrink-0`}
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Transition
                                                        enter="transition duration-100 ease-out"
                                                        enterFrom="transform scale-95 opacity-0"
                                                        enterTo="transform scale-100 opacity-100"
                                                        leave="transition duration-75 ease-out"
                                                        leaveFrom="transform scale-100 opacity-100"
                                                        leaveTo="transform scale-95 opacity-0"
                                                    >
                                                    <Disclosure.Panel
                                                        id="accordion-collapse-body-1"
                                                        className
                                                        aria-labelledby="accordion-collapse-heading-1"
                                                    >
                                                        <div className="p-5">
                                                            <p className="text-slate-400">
                                                                There are many variations of passages of Lorem
                                                                Ipsum available, but the majority have
                                                                suffered alteration in some form.
                                                            </p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                    </Transition>
                                                        </>
                                                    )}
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    {({ open }) => (
                                                        <>
                                                    <Disclosure.Button
                                                        className="text-base font-semibold w-full"
                                                    >
                                                        <div
                                                            className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black"
                                                            data-accordion-target="#accordion-collapse-body-1"
                                                            aria-expanded="true"
                                                            aria-controls="accordion-collapse-body-1"
                                                        >
                                                            <span>Do I need a designer to use Cartzio ?</span>
                                                            <svg
                                                                data-accordion-icon
                                                                className={`size-4 duration-300 ${open ? '-rotate-180' : 'rotate-0'} shrink-0`}
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Transition
                                                        enter="transition duration-100 ease-out"
                                                        enterFrom="transform scale-95 opacity-0"
                                                        enterTo="transform scale-100 opacity-100"
                                                        leave="transition duration-75 ease-out"
                                                        leaveFrom="transform scale-100 opacity-100"
                                                        leaveTo="transform scale-95 opacity-0"
                                                    >
                                                    <Disclosure.Panel
                                                        id="accordion-collapse-body-1"
                                                        className
                                                        aria-labelledby="accordion-collapse-heading-1"
                                                    >
                                                        <div className="p-5">
                                                            <p className="text-slate-400">
                                                                There are many variations of passages of Lorem
                                                                Ipsum available, but the majority have
                                                                suffered alteration in some form.
                                                            </p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                    </Transition>
                                                        </>
                                                    )}
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    {({ open }) => (
                                                        <>
                                                    <Disclosure.Button
                                                        className="text-base font-semibold w-full"
                                                    >
                                                        <div
                                                            className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black"
                                                            data-accordion-target="#accordion-collapse-body-1"
                                                            aria-expanded="true"
                                                            aria-controls="accordion-collapse-body-1"
                                                        >
                                                            <span>What do I need to do to start selling ?</span>
                                                            <svg
                                                                data-accordion-icon
                                                                className={`size-4 duration-300 ${open ? '-rotate-180' : 'rotate-0'} shrink-0`}
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Transition
                                                        enter="transition duration-100 ease-out"
                                                        enterFrom="transform scale-95 opacity-0"
                                                        enterTo="transform scale-100 opacity-100"
                                                        leave="transition duration-75 ease-out"
                                                        leaveFrom="transform scale-100 opacity-100"
                                                        leaveTo="transform scale-95 opacity-0"
                                                    >
                                                    <Disclosure.Panel
                                                        id="accordion-collapse-body-1"
                                                        className
                                                        aria-labelledby="accordion-collapse-heading-1"
                                                    >
                                                        <div className="p-5">
                                                            <p className="text-slate-400">
                                                                There are many variations of passages of Lorem
                                                                Ipsum available, but the majority have
                                                                suffered alteration in some form.
                                                            </p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                    </Transition>
                                                        </>
                                                    )}
                                                </Disclosure>
                                                <Disclosure as="div" className="relative shadow rounded-md overflow-hidden mt-4">
                                                    {({ open }) => (
                                                        <>
                                                    <Disclosure.Button
                                                        className="text-base font-semibold w-full"
                                                    >
                                                        <div
                                                            className="flex justify-between items-center p-5 w-full font-medium text-start bg-gray-50 text-black"
                                                            data-accordion-target="#accordion-collapse-body-1"
                                                            aria-expanded="true"
                                                            aria-controls="accordion-collapse-body-1"
                                                        >
                                                            <span>What happens when I receive an order ?</span>
                                                            <svg
                                                                data-accordion-icon
                                                                className={`size-4 duration-300 ${open ? '-rotate-180' : 'rotate-0'} shrink-0`}
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Transition
                                                        enter="transition duration-100 ease-out"
                                                        enterFrom="transform scale-95 opacity-0"
                                                        enterTo="transform scale-100 opacity-100"
                                                        leave="transition duration-75 ease-out"
                                                        leaveFrom="transform scale-100 opacity-100"
                                                        leaveTo="transform scale-95 opacity-0"
                                                    >
                                                    <Disclosure.Panel
                                                        id="accordion-collapse-body-1"
                                                        className
                                                        aria-labelledby="accordion-collapse-heading-1"
                                                    >
                                                        <div className="p-5">
                                                            <p className="text-slate-400">
                                                                There are many variations of passages of Lorem
                                                                Ipsum available, but the majority have
                                                                suffered alteration in some form.
                                                            </p>
                                                        </div>
                                                    </Disclosure.Panel>
                                                    </Transition>
                                                        </>
                                                    )}
                                                </Disclosure>
                                                
                                            </div>
                                        </div>
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

export default TermsOfUse