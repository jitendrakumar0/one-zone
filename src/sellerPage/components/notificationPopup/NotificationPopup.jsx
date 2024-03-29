import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { LuBellDot } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const NotificationPopup = () => {
    return (
        <>
            <Link to="/notification" className="bg-theme1 inline-flex items-center justify-center md:size-9 size-7 rounded-full text-black md:hover:bg-black md:hover:text-theme1 duration-300 border-2 border-b-black md:hidden">
                <LuBellDot className="size-4" />
            </Link>
            <Menu as="div" className="relative inline-block text-left z-40 max-md:hidden">
                <Menu.Button className="bg-theme1 inline-flex items-center justify-center md:size-9 size-7 rounded-full text-black md:hover:bg-black md:hover:text-theme1 duration-300 border-2 border-b-black">
                    <LuBellDot className="size-4" />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none font-semibold">
                        <div
                            id="dropdownNotification"
                            className="z-20 w-full max-w-md bg-white divide-y divide-gray-100 rounded-lg shadow"
                            aria-labelledby="dropdownNotificationButton"
                        >
                            <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50">
                                Notifications
                            </div>
                            <div className="divide-y divide-gray-100">
                                <Link
                                    className="flex px-4 py-3 hover:bg-gray-100"
                                >
                                    <div className="flex-shrink-0">
                                        <img
                                            className="rounded-full w-11 h-11"
                                            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                                            alt="Jese imag"
                                        />
                                        <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-black border border-white rounded-full">
                                            <svg
                                                className="w-2 h-2 text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 18 18"
                                            >
                                                <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                                                <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="w-full ps-3">
                                        <div className="text-gray-500 text-sm mb-1.5">
                                            New message from{" "}
                                            <span className="font-semibold text-gray-900">
                                                Jese Leos
                                            </span>
                                            : "Hey, what's up? All set for the presentation?"
                                        </div>
                                        <div className="text-xs text-black">
                                            a few moments ago
                                        </div>
                                    </div>
                                </Link>
                                <Link
                                    className="flex px-4 py-3 hover:bg-gray-100"
                                >
                                    <div className="flex-shrink-0">
                                        <img
                                            className="rounded-full w-11 h-11"
                                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                            alt="Joseph imag"
                                        />
                                        <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-gray-900 border border-white rounded-full">
                                            <svg
                                                className="w-2 h-2 text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 18"
                                            >
                                                <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="w-full ps-3">
                                        <div className="text-gray-500 text-sm mb-1.5">
                                            <span className="font-semibold text-gray-900">
                                                Joseph Mcfall
                                            </span>{" "}
                                            and{" "}
                                            <span className="font-medium text-gray-900">
                                                5 others
                                            </span>{" "}
                                            started following you.
                                        </div>
                                        <div className="text-xs text-black">
                                            10 minutes ago
                                        </div>
                                    </div>
                                </Link>
                                <Link
                                    className="flex px-4 py-3 hover:bg-gray-100"
                                >
                                    <div className="flex-shrink-0">
                                        <img
                                            className="rounded-full w-11 h-11"
                                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                            alt="Bonnie imag"
                                        />
                                        <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-red-600 border border-white rounded-full">
                                            <svg
                                                className="w-2 h-2 text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 18"
                                            >
                                                <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="w-full ps-3">
                                        <div className="text-gray-500 text-sm mb-1.5">
                                            <span className="font-semibold text-gray-900">
                                                Bonnie Green
                                            </span>{" "}
                                            and{" "}
                                            <span className="font-medium text-gray-900">
                                                141 others
                                            </span>{" "}
                                            love your story. See it and view more stories.
                                        </div>
                                        <div className="text-xs text-black">
                                            44 minutes ago
                                        </div>
                                    </div>
                                </Link>
                                <Link
                                    className="flex px-4 py-3 hover:bg-gray-100"
                                >
                                    <div className="flex-shrink-0">
                                        <img
                                            className="rounded-full w-11 h-11"
                                            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                            alt="Leslie imag"
                                        />
                                        <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-green-400 border border-white rounded-full">
                                            <svg
                                                className="w-2 h-2 text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 18"
                                            >
                                                <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="w-full ps-3">
                                        <div className="text-gray-500 text-sm mb-1.5">
                                            <span className="font-semibold text-gray-900">
                                                Leslie Livingston
                                            </span>{" "}
                                            mentioned you in a comment:{" "}
                                            <span className="font-medium text-black" href="#">
                                                @bonnie.green
                                            </span>{" "}
                                            what do you say?
                                        </div>
                                        <div className="text-xs text-black">
                                            1 hour ago
                                        </div>
                                    </div>
                                </Link>
                                <Link
                                    className="flex px-4 py-3 hover:bg-gray-100"
                                >
                                    <div className="flex-shrink-0">
                                        <img
                                            className="rounded-full w-11 h-11"
                                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                            alt="Robert imag"
                                        />
                                        <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-purple-500 border border-white rounded-full">
                                            <svg
                                                className="w-2 h-2 text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 14"
                                            >
                                                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="w-full ps-3">
                                        <div className="text-gray-500 text-sm mb-1.5">
                                            <span className="font-semibold text-gray-900">
                                                Robert Brown
                                            </span>{" "}
                                            posted a new video: Glassmorphism - learn how to implement
                                            the new design trend.
                                        </div>
                                        <div className="text-xs text-black">
                                            3 hours ago
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <Menu.Item>
                                <Link to="/seller-notification"
                                    className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100"
                                >
                                    <div className="inline-flex items-center ">
                                        <svg
                                            className="w-4 h-4 me-2 text-gray-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 14"
                                        >
                                            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                        </svg>
                                        View all
                                    </div>
                                </Link>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
}

export default NotificationPopup