import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import Profileimg from '../../asstes/img/edit-profileimg.jpg'
import { LuBellDot } from 'react-icons/lu';

const UserProfile = () => {
    return (
        <>
        <Header />
            <div className="py-5 sm:py-8 lg:py-10">
                <div className="max-w-screen-xl mx-auto p-4">
                    <div className="w-full bg-white rounded-xl shadow-xl px-10 py-9">
                        <div className="title-area w-full flex justify-between items-center border-b border-gray-200">
                            <h1 className="md:text-2xl text-xl text-black font-bold text-center pb-5">
                            Edit Profile
                            </h1>
                        </div>
                        <div className="profile-wrapper w-full mt-8 flex space-x-10">
                            <div className="w-[236px] min-h-[600px] border-r border-[rgba(0, 0, 0, 0.1)]">
                                <div className="flex flex-col space-y-10">
                                    <div className="item group">
                                        <Link to="/profile">
                                            <div className="flex space-x-3 items-center text-gray-600 hover:text-qblack">
                                                <span>
                                                    <svg
                                                        width={14}
                                                        height={19}
                                                        viewBox="0 0 14 19"
                                                        fill="none"
                                                        className="fill-current"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M9.96898 10.7061H3.78814C1.6967 10.7061 0.00346265 12.4028 0 14.4942V18.3481H13.7606V14.4942C13.7571 12.4028 12.0604 10.7061 9.96898 10.7061Z" />
                                                        <path d="M6.88098 9.17603C9.41488 9.17603 11.469 7.12191 11.469 4.58802C11.469 2.05412 9.41488 0 6.88098 0C4.34709 0 2.29297 2.05412 2.29297 4.58802C2.29297 7.12191 4.34709 9.17603 6.88098 9.17603Z" />
                                                    </svg>
                                                </span>
                                                <span className=" font-normal text-base">
                                                    Parsonal Info
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="item group">
                                        <Link to="/wishlist">
                                            <div className="flex space-x-3 items-center text-gray-600 hover:text-qblack">
                                                <span>
                                                    <svg
                                                        width={16}
                                                        height={14}
                                                        viewBox="0 0 16 14"
                                                        fill="none"
                                                        className="fill-current"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M8.00893 1.94301C8.25673 1.6737 8.45526 1.43535 8.67664 1.22148C10.387 -0.426805 13.0628 -0.402322 14.7246 1.27189C16.3985 2.95834 16.4356 5.68748 14.7674 7.3977C12.6907 9.52701 10.5848 11.6268 8.48882 13.7374C8.13819 14.0902 7.85825 14.0881 7.50619 13.7331C5.4188 11.6311 3.32426 9.53637 1.25187 7.42002C-0.424185 5.70837 -0.410617 2.98786 1.25258 1.29349C2.92721 -0.413123 5.62304 -0.434006 7.35265 1.24885C7.56475 1.45479 7.76042 1.67874 8.00893 1.94301Z" />
                                                    </svg>
                                                </span>
                                                <span className=" font-normal text-base">Wishlist</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="item group">
                                        <Link to="/notifications">
                                            <div className="flex space-x-3 items-center text-gray-600 hover:text-qblack">
                                                <span>
                                                    <LuBellDot className='fill-current' />
                                                </span>
                                                <span className=" font-normal text-base">Notification</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="item group">
                                        <Link to="/reset-password">
                                            <div className="flex space-x-3 items-center text-gray-600 hover:text-qblack">
                                                <span>
                                                    <svg
                                                        width={16}
                                                        height={19}
                                                        viewBox="0 0 16 19"
                                                        fill="none"
                                                        className="fill-current"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M12.9919 6.43707V5.3498C12.9919 2.39616 10.5957 0 7.64208 0C4.68844 0 2.29227 2.39616 2.29227 5.3498V6.43707C0.900288 7.04304 0 8.41771 0 9.93435V14.5224C0.00346265 16.6311 1.71054 18.3417 3.82276 18.3451H11.4683C13.5771 18.3417 15.2876 16.6346 15.2911 14.5224V9.93781C15.2807 8.41771 14.3804 7.0465 12.9919 6.43707ZM8.40386 12.9953C8.40386 13.4178 8.06106 13.7606 7.63861 13.7606C7.21617 13.7606 6.87337 13.4178 6.87337 12.9953V11.4648C6.87337 11.0424 7.21617 10.6996 7.63861 10.6996C8.06106 10.6996 8.40386 11.0424 8.40386 11.4648V12.9953ZM11.4614 6.11505H3.81584V5.3498C3.81584 3.23758 5.52639 1.52703 7.63861 1.52703C9.75083 1.52703 11.4614 3.23758 11.4614 5.3498V6.11505Z" />
                                                    </svg>
                                                </span>
                                                <span className=" font-normal text-base">
                                                    Change Password
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="item group">
                                        <Link>
                                            <div className="flex space-x-3 items-center text-gray-600 hover:text-qblack">
                                                <span>
                                                    <svg
                                                        width={18}
                                                        height={18}
                                                        viewBox="0 0 18 18"
                                                        fill="none"
                                                        className="fill-current"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7.50224 15.7537C7.50224 16.0247 7.50895 16.2465 7.5 16.4683C7.4597 17.5682 6.52164 18.2515 5.4806 17.9155C4.00075 17.4383 2.52761 16.9387 1.05448 16.4392C0.380597 16.2107 0 15.6641 0 14.9405C0 10.4892 0 6.03569 0.00223881 1.58218C0.00223881 0.627852 0.629104 0.00955666 1.59403 0.00731646C4.28731 0.00283606 6.98284 -0.00164434 9.67612 0.000595862C11.0104 0.00283606 11.9798 0.961641 12 2.29904C12.0112 2.99126 12.0067 3.68124 12 4.37347C11.9955 4.90439 11.6933 5.25162 11.2478 5.25162C10.8022 5.25386 10.4955 4.90663 10.491 4.37571C10.4843 3.69693 10.4933 3.0159 10.4888 2.33712C10.4843 1.79276 10.209 1.50153 9.67388 1.49705C8.72463 1.48585 7.77761 1.49481 6.82836 1.49481C6.72313 1.49481 6.61791 1.49481 6.46791 1.49481C6.51492 1.55081 6.53284 1.59114 6.56418 1.60682C7.24254 1.91597 7.51119 2.46481 7.51119 3.1884C7.50672 6.72791 7.50895 10.2674 7.50895 13.8069C7.50895 13.9436 7.50895 14.0802 7.50895 14.2415C8.32164 14.2415 9.09179 14.2662 9.8597 14.2303C10.2649 14.2124 10.4888 13.8898 10.491 13.4396C10.4978 12.5031 10.4955 11.5645 10.4933 10.6259C10.4933 10.2854 10.594 10.0008 10.9119 9.83507C11.3888 9.58865 11.9754 9.89332 11.9888 10.4511C12.0179 11.5511 12.0493 12.6577 11.9664 13.7532C11.8746 14.9494 10.9052 15.7447 9.69403 15.7514C8.97537 15.7559 8.26343 15.7537 7.50224 15.7537Z" />
                                                        <path d="M13.4942 6.75005C13.4942 6.02423 13.5009 5.33425 13.492 4.64651C13.4875 4.27463 13.5927 3.96997 13.9532 3.81539C14.3136 3.66082 14.6046 3.79523 14.8688 4.06181C15.8002 5.0027 16.7405 5.93462 17.674 6.87326C18.1061 7.30786 18.1129 7.69094 17.6897 8.11882C16.7494 9.06642 15.8024 10.0073 14.8599 10.9549C14.6091 11.2058 14.327 11.3402 13.9755 11.1946C13.6129 11.0445 13.492 10.7533 13.4964 10.3769C13.5032 9.68695 13.4987 8.99473 13.4987 8.24875C13.3576 8.24875 13.2345 8.24875 13.1114 8.24875C12.2808 8.24875 11.4479 8.25099 10.6173 8.24651C10.0711 8.24427 9.75315 7.962 9.75987 7.4938C9.76435 7.03456 10.0912 6.75453 10.6352 6.75229C11.5666 6.75005 12.5024 6.75005 13.4942 6.75005Z" />
                                                    </svg>
                                                </span>
                                                <span className=" font-normal text-base">Logoout</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="item-body dashboard-wrapper w-full">
                                    <div className="flex space-x-8">
                                        <div className="w-[570px] ">
                                            
                                            <div class="grid md:gap-6">
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
                                        <div className="flex-1">
                                            <div className="update-logo w-full mb-9">
                                                <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
                                                    Update Profile
                                                    <span className="ml-1">
                                                        <svg
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M10 0C4.47457 0 0 4.47791 0 10C0 15.5221 4.47791 20 10 20C15.5221 20 20 15.5221 20 10C19.9967 4.48126 15.5221 0.00669344 10 0ZM10 16.67C9.53815 16.67 9.16667 16.2985 9.16667 15.8367C9.16667 15.3748 9.53815 15.0033 10 15.0033C10.4618 15.0033 10.8333 15.3748 10.8333 15.8367C10.8333 16.2952 10.4618 16.67 10 16.67ZM11.6098 10.425C11.1078 10.7396 10.8132 11.2952 10.8333 11.8842V12.5033C10.8333 12.9652 10.4618 13.3367 10 13.3367C9.53815 13.3367 9.16667 12.9652 9.16667 12.5033V11.8842C9.14324 10.6861 9.76907 9.56827 10.8032 8.96586C11.4357 8.61781 11.7704 7.90161 11.6366 7.19545C11.5027 6.52276 10.9772 5.99732 10.3046 5.8668C9.40094 5.69946 8.5308 6.29853 8.36346 7.20214C8.34673 7.30254 8.33668 7.40295 8.33668 7.50335C8.33668 7.96519 7.9652 8.33668 7.50335 8.33668C7.0415 8.33668 6.67002 7.96519 6.67002 7.50335C6.67002 5.66265 8.16265 4.17001 10.0067 4.17001C11.8474 4.17001 13.34 5.66265 13.34 7.50669C13.3333 8.71821 12.674 9.83601 11.6098 10.425Z"
                                                                fill="#374557"
                                                                fillOpacity="0.6"
                                                            />
                                                        </svg>
                                                    </span>
                                                </h1>
                                                <p className="text-sm text-gray-600two mb-5 ">
                                                    Profile of at least Size
                                                    <span className="ml-1 text-qblack">300x300</span>.
                                                    Gifs work too.
                                                    <span className="ml-1 text-qblack">Max 5mb</span>.
                                                </p>
                                                <div className="flex xl:justify-center justify-start">
                                                    <div className="relative">
                                                        <div className="sm:w-[198px] sm:h-[198px] w-[199px] h-[199px] rounded-full overflow-hidden relative">
                                                            <img
                                                                src={Profileimg}
                                                                alt=""
                                                                className="object-cover w-full h-full"
                                                            />
                                                        </div>
                                                        <input type="file" className="hidden" />
                                                        <div className="size-8 absolute bottom-7 sm:right-0 right-[105px]  bg-black rounded-full cursor-pointer">
                                                            <svg
                                                                width={32}
                                                                height={32}
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
                                        </div>
                                    </div>
                                    <div className="action-area flex space-x-4 items-center">
                                        <button
                                            type="button"
                                            className="text-sm text-qred font-semibold"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="w-[164px] h-[50px] bg-black text-white text-sm"
                                        >
                                            Update Profile
                                        </button>
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

export default UserProfile