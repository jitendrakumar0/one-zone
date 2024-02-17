import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <Header />
            <div className="md:py-8 lg:py-10">
                <div className="max-w-screen-xl mx-auto p-4">
                    <div>
                        <div className="w-full bg-gray-100">
                            <div className="mx-auto flex w-full max-w-7xl flex-col px-5 md:flex-row xl:px-8 2xl:px-14 gap-x-5">
                                <div className="order-2 w-full shrink-0 rounded-lg bg-white p-5 md:order-1 md:w-72 lg:w-96">
                                    <div className="mb-8 flex w-full items-center justify-center overflow-hidden">
                                        <img
                                            alt="Contact"
                                            loading="lazy"
                                            width={299}
                                            height={232}
                                            decoding="async"
                                            data-nimg={1}
                                            className="h-auto w-full"
                                            src="https://pickbazar-react-rest.vercel.app/_next/static/media/contact-illustration.2f6adc05.svg"
                                            style={{ color: "transparent" }}
                                        />
                                    </div>
                                    <div className="mb-8 flex flex-col">
                                        <span className="mb-3 font-semibold text-heading">
                                            Address
                                        </span>
                                        <span className="text-sm text-body">
                                            <Link
                                                target="_blank"
                                                title="NY State Thruway, New York, USA"
                                            >
                                                NY State Thruway, New York, USA
                                            </Link>
                                        </span>
                                    </div>
                                    <div className="mb-8 flex flex-col">
                                        <span className="mb-3 font-semibold text-heading">
                                            Phone
                                        </span>
                                        <span className="text-sm text-body">+129290122122</span>
                                    </div>
                                    <div className="mb-8 flex flex-col">
                                        <span className="mb-3 font-semibold text-heading">
                                            Email Address
                                        </span>
                                        <span className="text-sm text-body">demo@demo.com</span>
                                    </div>
                                    <div className="mb-8 flex flex-col">
                                        <span className="mb-4 font-semibold text-heading">
                                            Follow Us
                                        </span>
                                        <div className="flex items-center justify-start gap-3">
                                            <Link
                                                className="text-muted transition-colors duration-300 focus:outline-none ltr:mr-8 ltr:last:mr-0 rtl:ml-8 rtl:last:ml-0 hover:undefined"
                                                target="_blank"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 12 12"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        data-name="_ionicons_svg_logo-facebook (6)"
                                                        d="M11.338 0H.662A.663.663 0 000 .663v10.674a.663.663 0 00.662.662H6V7.25H4.566V5.5H6V4.206a2.28 2.28 0 012.459-2.394c.662 0 1.375.05 1.541.072V3.5H8.9c-.753 0-.9.356-.9.881V5.5h1.794L9.56 7.25H8V12h3.338a.663.663 0 00.662-.663V.662A.663.663 0 0011.338 0z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </Link>
                                            <Link
                                                className="text-muted transition-colors duration-300 focus:outline-none ltr:mr-8 ltr:last:mr-0 rtl:ml-8 rtl:last:ml-0 hover:undefined"
                                                target="_blank"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 14.747 12"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        data-name="_ionicons_svg_logo-twitter (5)"
                                                        d="M14.747 1.422a6.117 6.117 0 01-1.737.478A3.036 3.036 0 0014.341.225a6.012 6.012 0 01-1.922.734 3.025 3.025 0 00-5.234 2.069 2.962 2.962 0 00.078.691A8.574 8.574 0 011.026.553a3.032 3.032 0 00.941 4.044 2.955 2.955 0 01-1.375-.378v.037A3.028 3.028 0 003.02 7.225a3.046 3.046 0 01-.8.106 2.854 2.854 0 01-.569-.056 3.03 3.03 0 002.828 2.1 6.066 6.066 0 01-3.759 1.3 6.135 6.135 0 01-.722-.044A8.457 8.457 0 004.631 12a8.557 8.557 0 008.616-8.619c0-.131 0-.262-.009-.391a6.159 6.159 0 001.509-1.568z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </Link>
                                            <Link
                                                className="text-muted transition-colors duration-300 focus:outline-none ltr:mr-8 ltr:last:mr-0 rtl:ml-8 rtl:last:ml-0 hover:undefined"
                                                target="_blank"
                                            >
                                                <svg
                                                    data-name="Group 96"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 12 12"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        data-name="Path 1"
                                                        d="M8.5 1A2.507 2.507 0 0111 3.5v5A2.507 2.507 0 018.5 11h-5A2.507 2.507 0 011 8.5v-5A2.507 2.507 0 013.5 1h5m0-1h-5A3.51 3.51 0 000 3.5v5A3.51 3.51 0 003.5 12h5A3.51 3.51 0 0012 8.5v-5A3.51 3.51 0 008.5 0z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        data-name="Path 2"
                                                        d="M9.25 3.5a.75.75 0 11.75-.75.748.748 0 01-.75.75zM6 4a2 2 0 11-2 2 2 2 0 012-2m0-1a3 3 0 103 3 3 3 0 00-3-3z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 mb-8 w-full rounded-lg bg-white p-5 md:order-2 md:mb-0 md:p-8 ltr:md:ml-7 rtl:md:mr-7 ltr:lg:ml-9 rtl:lg:mr-9">
                                    <h1 className="mb-7 font-body text-xl font-bold text-heading md:text-2xl">
                                        How can we improve your experience?
                                    </h1>
                                    <form>
                                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    className="flex w-full appearance-none items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 border border-border-base rounded focus:border-accent h-12"
                                                    autoComplete="off"
                                                    autoCorrect="off"
                                                    autoCapitalize="off"
                                                    spellCheck="false"
                                                    aria-invalid="false"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    className="flex w-full appearance-none items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 border border-border-base rounded focus:border-accent h-12"
                                                    autoComplete="off"
                                                    autoCorrect="off"
                                                    autoCapitalize="off"
                                                    spellCheck="false"
                                                    aria-invalid="false"
                                                />
                                            </div>
                                        </div>
                                        <div className="my-6">
                                            <label
                                                htmlFor="subject"
                                                className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                                            >
                                                Subject
                                            </label>
                                            <input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                className="flex w-full appearance-none items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 border border-border-base rounded focus:border-accent h-12"
                                                autoComplete="off"
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                spellCheck="false"
                                                aria-invalid="false"
                                            />
                                        </div>
                                        <div className="my-6">
                                            <label
                                                htmlFor="description"
                                                className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                                            >
                                                Description
                                            </label>
                                            <textarea
                                                id="description"
                                                name="description"
                                                className="flex w-full appearance-none items-center rounded px-4 py-3 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 border border-border-base focus:border-accent"
                                                autoComplete="off"
                                                autoCorrect="off"
                                                autoCapitalize="off"
                                                spellCheck="false"
                                                rows={4}
                                            />
                                        </div>
                                        <button
                                            className="text-black w-auto bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40"
                                        >
                                            Submit
                                        </button>
                                    </form>
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

export default Contact