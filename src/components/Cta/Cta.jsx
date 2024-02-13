import React from 'react'
import { Link } from 'react-router-dom';
import AppScreen from '../../asstes/img/app-screen.png'
import AppleStore from '../../asstes/img/apple-store.png'
import PlayStore from '../../asstes/img/play-store.png'
import CampaignCoverCountdown from '../../asstes/img/campaign-cover-countdown.jpg'

const Cta = () => {
    return (
      <section className="py-5 sm:py-8 lg:py-10 max-w-screen-xl mx-auto p-4">
            <div className="container-x mx-auto h-full">
                <div className="lg:flex xl:space-x-[30px] lg:space-x-5 items-center h-full">
                    <div
                        data-aos="fade-right"
                        className="campaign-countdown lg:w-1/2 h-full w-full mb-5 lg:mb-0 aos-init aos-animate"
                        style={{
                            background:
                                `url(${CampaignCoverCountdown}) 0% 0% / cover no-repeat`,
                        }}
                    >
                        <Link>
                            <div className="w-full xl:p-12 p-5">
                                <div className="countdown-wrapper w-full flex lg:justify-between justify-evenly mb-10">
                                    <div className="countdown-item">
                                        <div className="countdown-number sm:size-24 size-12 rounded-full bg-white flex justify-center items-center">
                                            <span className="font-700 sm:text-3xl text-sm text-red-500">
                                                0
                                            </span>
                                        </div>
                                        <p className="sm:text-lg text-xs font-500 text-center font-semibold leading-8">
                                            Days
                                        </p>
                                    </div>
                                    <div className="countdown-item">
                                        <div className="countdown-number sm:size-24 size-12 rounded-full bg-white flex justify-center items-center">
                                            <span className="font-700 sm:text-3xl text-sm text-blue-500">
                                                0
                                            </span>
                                        </div>
                                        <p className="sm:text-lg text-xs font-500 text-center font-semibold leading-8">
                                            Hours
                                        </p>
                                    </div>
                                    <div className="countdown-item">
                                        <div className="countdown-number sm:size-24 size-12 rounded-full bg-white flex justify-center items-center">
                                            <span className="font-700 sm:text-3xl text-sm text-green-500">
                                                0
                                            </span>
                                        </div>
                                        <p className="sm:text-lg text-xs font-500 text-center font-semibold leading-8">
                                            Minutes
                                        </p>
                                    </div>
                                    <div className="countdown-item">
                                        <div className="countdown-number sm:size-24 size-12 rounded-full bg-white flex justify-center items-center">
                                            <span className="font-700 sm:text-3xl text-sm text-purple-500">
                                                0
                                            </span>
                                        </div>
                                        <p className="sm:text-lg text-xs font-500 text-center font-semibold leading-8">
                                            Seconds
                                        </p>
                                    </div>
                                </div>
                                <div className="countdown-title mb-4">
                                    <h1 className="text-4xl text-black font-bold font-600">
                                        WOO! Flash Sale
                                    </h1>
                                </div>
                                <div className="inline-flex space-x-2 items-center border-b border-qyellow">
                                    <span className="text-sm font-600 tracking-wide leading-7">
                                        View More
                                    </span>
                                    <span>
                                        <svg
                                            width={7}
                                            height={11}
                                            viewBox="0 0 7 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                x="2.08984"
                                                y="0.636719"
                                                width="6.94219"
                                                height="1.54271"
                                                transform="rotate(45 2.08984 0.636719)"
                                                fill="#1D1D1D"
                                            />
                                            <rect
                                                x={7}
                                                y="5.54492"
                                                width="6.94219"
                                                height="1.54271"
                                                transform="rotate(135 7 5.54492)"
                                                fill="#1D1D1D"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div
                        data-aos="fade-left"
                        className="download-app flex-1 lg:h-full h-[430px] xl:p-12 p-5 aos-init aos-animate"
                        style={{
                            background:
                                'url("https://shopo.quomodothemes.website/assets/images/download-app-cover.png") 0% 0% / cover no-repeat',
                        }}
                    >
                        <div className="flex flex-col h-full justify-between">
                            <div className="get-app">
                                <p className="text-sm font-600 text-black mb-3">
                                    MOBILE APP VERSION
                                </p>
                                <h1 className="text-3xl font-600 text-black leading-10 mb-8">
                                    Get Our
                                    <span className="text-qred border-b-2 border-qred mx-2">
                                        Mobile App
                                    </span>
                                    <br /> It’s Make easy for you life !
                                </h1>
                                <div className="flex space-x-5 items-center">
                                    <div>
                                        <Link>
                                            <img
                                                width={170}
                                                height={69}
                                                src={PlayStore}
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link>
                                            <img
                                                width={170}
                                                height={69}
                                                src={AppleStore}
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="app-screen">
                                <img src={AppScreen} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
}

export default Cta