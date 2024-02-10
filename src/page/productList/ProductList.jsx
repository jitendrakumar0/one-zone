import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import productImg from "../../asstes/img/product-1.png";
import banner from "../../asstes/img/banner.png";
import laptop1 from "../../asstes/img/laptop1.jpeg";
import laptop2 from "../../asstes/img/laptop2.jpeg";
import laptop3 from "../../asstes/img/laptop4.svg";
import pc1 from "../../asstes/img/pc1.svg";
import pc2 from "../../asstes/img/pc2.svg";
import pc3 from "../../asstes/img/pc3.svg";
import s1 from "../../asstes/img/s1.svg";
import s2 from "../../asstes/img/s2.svg";
import s3 from "../../asstes/img/s3.svg";
import { Disclosure, Listbox, Tab } from "@headlessui/react";
import { ChevronRightIcon } from '@heroicons/react/20/solid';


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
    }

    const sortArr = [
    { id: 1, name: "Low to High" },
    { id: 2, name: "High to Low" },
    ];

    const ProductList = () => {
    const [selectedSort, setSelectedSort] = useState(sortArr[0]);
    const [activeTab, setActiveTab] = useState('tab1');
    const [filterOpen, setFilterOpen] = useState(false)

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const handleSidebar = ()=> {
        if(document.body.classList.contains('filterBarOpen')) {
            document.body.classList.remove('filterBarOpen')
            setFilterOpen(false)
        }else {
            document.body.classList.add('filterBarOpen')
            setFilterOpen(true)
        }
    }
    return (
        <>
        <Header />

        <div className="flex">
            <div className=" w-[300px] lg:w-1/4 bg-white py-5 md:py-10 px-5 absolute lg:static h-screen z-50 -translate-x-full lg:-translate-x-0 sideBar transition">
            <div className="md:px-6 flex flex-col gap-2 sticky top-[155px] h-full">
                <div className="flex items-center gap-x-4 mb-2">
                    <div className="filterIcon size-10 flex items-center justify-center p-2.5 bg-yellow-100 rounded-full">
                        <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-full w-full"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                        </svg>
                    </div>
                    <div className="text-xl font-semibold">Filter</div>
                </div>
                <div className="overflow-y-auto h-full">
                    <div className>
                    <Disclosure>
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of an icon. */
                        <>
                            <Disclosure.Button className="py-2 mb-2 flex justify-between items-center w-full bg-[#F5F5F7] px-4 rounded-lg">
                            <div className="heading text-lg font-semibold">Brand</div>
                            <ChevronRightIcon className={open ? 'rotate-90 transform w-6 h-6' : 'w-6 h-6'} />
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-gray-500">
                            <div className="checckBox flex flex-col px-5 pb-4">
                                <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="accent-[#374151]"
                                    name="examplecheckboxs"
                                    id="brand01"
                                />
                                <label
                                    htmlFor="brand01"
                                    className="font-semibold text-base cursor-pointer"
                                >
                                    Acer
                                </label>
                                </div>
                                <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="accent-[#374151]"
                                    name="examplecheckboxs"
                                    id="brand02"
                                />
                                <label
                                    htmlFor="brand02"
                                    className="font-semibold text-base cursor-pointer"
                                >
                                    Advent
                                </label>
                                </div>
                                <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="accent-[#374151]"
                                    name="examplecheckboxs"
                                    id="brand03"
                                />
                                <label
                                    htmlFor="brand03"
                                    className="font-semibold text-base cursor-pointer"
                                >
                                    Aftershock
                                </label>
                                </div>
                                <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="accent-[#374151]"
                                    name="examplecheckboxs"
                                    id="brand04"
                                />
                                <label
                                    htmlFor="brand04"
                                    className="font-semibold text-base cursor-pointer"
                                >
                                    Asus
                                </label>
                                </div>
                                <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="accent-[#374151]"
                                    name="examplecheckboxs"
                                    id="brand05"
                                />
                                <label
                                    htmlFor="brand05"
                                    className="font-semibold text-base cursor-pointer"
                                >
                                    Arous
                                </label>
                                </div>
                                <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="accent-[#374151]"
                                    name="examplecheckboxs"
                                    id="brand06"
                                />
                                <label
                                    htmlFor="brand06"
                                    className="font-semibold text-base cursor-pointer"
                                >
                                    HCL
                                </label>
                                </div>
                                <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="accent-[#374151]"
                                    name="examplecheckboxs"
                                    id="brand07"
                                />
                                <label
                                    htmlFor="brand07"
                                    className="font-semibold text-base cursor-pointer"
                                >
                                    LG
                                </label>
                                </div>
                                <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="accent-[#374151]"
                                    name="examplecheckboxs"
                                    id="brand07"
                                />
                                <label
                                    htmlFor="brand07"
                                    className="font-semibold text-base cursor-pointer"
                                >
                                    Lenovo
                                </label>
                                </div>
                                <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="accent-[#374151]"
                                    name="examplecheckboxs"
                                    id="brand08"
                                />
                                <label
                                    htmlFor="brand08"
                                    className="font-semibold text-base cursor-pointer"
                                >
                                    Iball
                                </label>
                                </div>
                                <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="accent-[#374151]"
                                    name="examplecheckboxs"
                                    id="brand09"
                                />
                                <label
                                    htmlFor="brand09"
                                    className="font-semibold text-base cursor-pointer"
                                >
                                    Panasonic
                                </label>
                                </div>
                                <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="accent-[#374151]"
                                    name="examplecheckboxs"
                                    id="brand010"
                                />
                                <label
                                    htmlFor="brand010"
                                    className="font-semibold text-base cursor-pointer"
                                >
                                    Sony
                                </label>
                                </div>
                                <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="accent-[#374151]"
                                    name="examplecheckboxs"
                                    id="brand011"
                                />
                                <label
                                    htmlFor="brand011"
                                    className="font-semibold text-base cursor-pointer"
                                >
                                    Toshiba
                                </label>
                                </div>
                            </div>
                            </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                    </div>
                    <div className="">
                    <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="py-2 mb-2 flex justify-between items-center w-full bg-[#F5F5F7] px-4 rounded-lg">
                        <div className="heading text-lg font-semibold">Price</div>
                        <ChevronRightIcon className={open ? 'rotate-90 transform w-6 h-6' : 'w-6 h-6'} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                        <div className="checckBox  flex flex-col px-5 pb-4">
                            <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="accent-[#374151]"
                                name="examplecheckboxs"
                                id="brand11"
                            />
                            <label
                                htmlFor="brand11"
                                className="font-semibold text-base cursor-pointer"
                            >
                                100-500
                            </label>
                            </div>
                            <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="accent-[#374151]"
                                name="examplecheckboxs"
                                id="brand22"
                            />
                            <label
                                htmlFor="brand22"
                                className="font-semibold text-base cursor-pointer"
                            >
                                500-1000
                            </label>
                            </div>
                            <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="accent-[#374151]"
                                name="examplecheckboxs"
                                id="brand33"
                            />
                            <label
                                htmlFor="brand33"
                                className="font-semibold text-base cursor-pointer"
                            >
                                1000-1500
                            </label>
                            </div>
                            <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="accent-[#374151]"
                                name="examplecheckboxs"
                                id="brand44"
                            />
                            <label
                                htmlFor="brand44"
                                className="font-semibold text-base cursor-pointer"
                            >
                                15000-2000
                            </label>
                            </div>
                            <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="accent-[#374151]"
                                name="examplecheckboxs"
                                id="brand55"
                            />
                            <label
                                htmlFor="brand55"
                                className="font-semibold text-base cursor-pointer"
                            >
                                4000-5000
                            </label>
                            </div>
                        </div>
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                    </div>
                </div>
            </div>
            </div>
            <div className="w-full z-80 lg:w-4/5 py-5 md:py-10 overflow-y-auto text-center">
                <div className="list-none inline-flex gap-4 rounded-full bg-white p-3">
                    <button className={`w-24 h-10 lg:w-40 lg:h-12 lg:px-8 lg:py-3  rounded-full text-center font-semibold  ${activeTab === 'tab1' ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-500'}`}
                        onClick={() => handleTabClick('tab1')}>
                        Laptop
                    </button>
                    <button className={`w-24 h-10 lg:w-40 lg:h-12 lg:px-8 lg:py-3 rounded-full text-center font-semibold  ${activeTab === 'tab2' ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-500'}`}
                        onClick={() => handleTabClick('tab2')}>
                        PC
                    </button>
                    <button className={`w-24 h-10 lg:w-40 lg:h-12 lg:px-8 lg:py-3  rounded-full text-center font-semibold  ${activeTab === 'tab3' ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-500'}`}
                        onClick={() => handleTabClick('tab3')}>
                        Sper Parts
                    </button>
                </div>
                <div className="tab-content">
                    {activeTab === 'tab1' &&
                        <>
                            <div className="px-5">
                                <div className="flex items-center justify-between sm:px-5">
                                <div className="text-base sm:text-lg font-semibold">
                                    Product List{" "}
                                    <span className="number text-black/50 font-bold">(56)</span>
                                </div>
                                <div className>
                                    <div className="flex items-center gap-2 sm:gap-4">
                                        <button onClick={handleSidebar} className="h-4 w-4"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full" xmlns="http://www.w3.org/2000/svg"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></button>
                                    <div className="text-sm sm:text-base">Sort by :</div>
                                    <div className="flex items-center max-lg:justify-center border-2 px-2 sm:px-3 py-1 rounded-sm">
                                        <div className="relative flex flex-col">
                                        <Listbox value={selectedSort} onChange={setSelectedSort}>
                                            <Listbox.Button className="flex items-center">
                                            {/* <img src={selectedPerson.img} alt="india" className="w-5 h-5 mr-3 rounded-full object-cover"/> */}
                                            <div className="flex items-center gap-1 text-black sm:text-base text-sm ">
                                                {/* Low to High
                                                <span className="size-4 me-2 flex items-center text-black/70">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                                </svg>
                                                </span> */}
                                            </div>
                                            {selectedSort.name}
                                            </Listbox.Button>
                                            <Listbox.Options className="absolute top-9 -right-3 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-1 z-30">
                                            {sortArr.map((item) => (
                                                <Listbox.Option
                                                key={item.id}
                                                value={item}
                                                disabled={item.unavailable}
                                                className="flex items-center cursor-pointer text-black md:text-base text-sm duration-300 md:hover:bg-gray-200 p-2 rounded-md"
                                                >
                                                {/* <img src={item?.img} alt="india" className="w-5 h-5 mr-3 rounded-full object-cover"/> */}
                                                {item.name}
                                                {/* {item.img} */}
                                                </Listbox.Option>
                                            ))}
                                            </Listbox.Options>
                                        </Listbox>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="flex flex-wrap sm:hidden gap-y-2 items-center justify-between sm:px-5 pt-5">
                                <div className>
                                    <div className="flex items-center gap-2 sm:gap-4">
                                    <div className="text-sm sm:text-base">Filter :</div>
                                    <div className="flex items-center max-lg:justify-center border-2 px-2 sm:px-3 py-1 rounded-sm">
                                        <div className="relative flex flex-col">
                                        <input
                                            className="peer/mm hidden"
                                            type="checkbox"
                                            name=""
                                            id="filter"
                                        />
                                        <label
                                            htmlFor="filter"
                                            className="flex items-center gap-1 text-black sm:text-base text-sm"
                                        >
                                            Low to High
                                            <span className="size-4 me-2 flex items-center text-black/70">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                                </svg>
                                            </span>
                                        </label>
                                        <div className="w-fullshadow-md bg-white shadow p-2 shadow-black absolute z-20 top-8 w-full peer-checked/mm:block hidden">
                                            <ul className="flex flex-col gap-1">
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className>
                                    <div className="flex items-center gap-2 sm:gap-4">
                                    <div className="text-sm sm:text-base">Price :</div>
                                    <div className="flex items-center max-lg:justify-center border-2 px-2 sm:px-3 py-1 rounded-sm">
                                        <div className="relative flex flex-col">
                                        <input
                                            className="peer/mm hidden"
                                            type="checkbox"
                                            name=""
                                            id="priceRange"
                                        />
                                        <label
                                            htmlFor="priceRange"
                                            className="flex items-center gap-1 text-black sm:text-base text-sm"
                                        >
                                            Low to High
                                            <span className="size-4 me-2 flex items-center text-black/70">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                            </svg>
                                            </span>
                                        </label>
                                        <div className="w-fullshadow-md bg-white shadow p-2 shadow-black absolute z-20 top-8 w-full peer-checked/mm:block hidden">
                                            <ul className="flex flex-col gap-1">
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div className="pt-5 flex flex-wrap items-center gap-y-5">
                                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                        <div class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                        <div class="relative overflow-hidden">
                                        <div className="m-auto aspect-[1/1] p-3 lg:p-5">
                                            <img className="w-full h-full m-auto object-contain" src={laptop1} alt />
                                        </div>
                                            <div class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                            <div>
                                                <svg
                                                stroke="white"
                                                fill="white"
                                                stroke-width="0"
                                                viewBox="0 0 576 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path>
                                                </svg>
                                            </div>
                                            <div class="text-md px-3 text-white">Let's Chat</div>
                                            </div>
                                        </div>
                                        <div class="bg-white p-3 flex justify-start flex-col items-start">
                                            <div class="text-lg font-medium mb-2 text-start">Newest Flagship HP 14 HD Thin & Light Laptop Computer PC- 14" Micro-Edge  Display 10th</div>
                                            <div className="">
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                SSD:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                ROM:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1">
                                                Intel
                                            </span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                            </div>
                                        </div>
                                        <div class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                            10% off
                                        </div>
                                        <div class="absolute top-14 right-2 translate-x-28 group-hover:translate-x-0 duration-300">
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke=" currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Heart">
                                                <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                                                </g>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                        <div class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                        <div class="relative overflow-hidden">
                                        <div className="m-auto aspect-[1/1] p-3 lg:p-5">
                                            <img className="w-full h-full m-auto object-contain" src={laptop2} alt />
                                        </div>
                                            <div class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                            <div>
                                                <svg
                                                stroke="white"
                                                fill="white"
                                                stroke-width="0"
                                                viewBox="0 0 576 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path>
                                                </svg>
                                            </div>
                                            <div class="text-md px-3 text-white">Let's Chat</div>
                                            </div>
                                        </div>
                                        <div class="bg-white p-3 flex justify-start flex-col items-start">
                                            <div class="text-lg font-medium mb-2 text-start">Newest Flagship HP 14 HD Thin & Light Laptop Computer PC- 14" Micro-Edge  Display 10th</div>
                                            <div className="">
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                SSD:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                ROM:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1">
                                                Intel
                                            </span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                            </div>
                                        </div>
                                        <div class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                            10% off
                                        </div>
                                        <div class="absolute top-14 right-2 translate-x-28 group-hover:translate-x-0 duration-300">
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke=" currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Heart">
                                                <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                                                </g>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                        <div class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                        <div class="relative overflow-hidden">
                                        <div className="m-auto aspect-[1/1] p-3 lg:p-5">
                                            <img className="w-full h-full m-auto object-contain" src={laptop3} alt />
                                        </div>
                                            <div class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                            <div>
                                                <svg
                                                stroke="white"
                                                fill="white"
                                                stroke-width="0"
                                                viewBox="0 0 576 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path>
                                                </svg>
                                            </div>
                                            <div class="text-md px-3 text-white">Let's Chat</div>
                                            </div>
                                        </div>
                                        <div class="bg-white p-3 flex justify-start flex-col items-start">
                                            <div class="text-lg font-medium mb-2 text-start">Newest Flagship HP 14 HD Thin & Light Laptop Computer PC- 14" Micro-Edge  Display 10th</div>
                                            <div className="">
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                SSD:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                ROM:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1">
                                                Intel
                                            </span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                            </div>
                                        </div>
                                        <div class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                            10% off
                                        </div>
                                        <div class="absolute top-14 right-2 translate-x-28 group-hover:translate-x-0 duration-300">
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke=" currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Heart">
                                                <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                                                </g>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                        <div class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                        <div class="relative overflow-hidden">
                                        <div className="m-auto aspect-[1/1] p-3 lg:p-5">
                                            <img className="w-full h-full m-auto object-contain" src={laptop3} alt />
                                        </div>
                                            <div class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                            <div>
                                                <svg
                                                stroke="white"
                                                fill="white"
                                                stroke-width="0"
                                                viewBox="0 0 576 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path>
                                                </svg>
                                            </div>
                                            <div class="text-md px-3 text-white">Let's Chat</div>
                                            </div>
                                        </div>
                                        <div class="bg-white p-3 flex justify-start flex-col items-start">
                                            <div class="text-lg font-medium mb-2 text-start">Newest Flagship HP 14 HD Thin & Light Laptop Computer PC- 14" Micro-Edge  Display 10th</div>
                                            <div className="">
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                SSD:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                ROM:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1">
                                                Intel
                                            </span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                            </div>
                                        </div>
                                        <div class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                            10% off
                                        </div>
                                        <div class="absolute top-14 right-2 translate-x-28 group-hover:translate-x-0 duration-300">
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke=" currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Heart">
                                                <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                                                </g>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                        <div class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                        <div class="relative overflow-hidden">
                                        <div className="m-auto aspect-[1/1] p-3 lg:p-5">
                                            <img className="w-full h-full m-auto object-contain" src={laptop3} alt />
                                        </div>
                                            <div class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                            <div>
                                                <svg
                                                stroke="white"
                                                fill="white"
                                                stroke-width="0"
                                                viewBox="0 0 576 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path>
                                                </svg>
                                            </div>
                                            <div class="text-md px-3 text-white">Let's Chat</div>
                                            </div>
                                        </div>
                                        <div class="bg-white p-3 flex justify-start flex-col items-start">
                                            <div class="text-lg font-medium mb-2 text-start">Newest Flagship HP 14 HD Thin & Light Laptop Computer PC- 14" Micro-Edge  Display 10th</div>
                                            <div className="">
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                SSD:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                ROM:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1">
                                                Intel
                                            </span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                            </div>
                                        </div>
                                        <div class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                            10% off
                                        </div>
                                        <div class="absolute top-14 right-2 translate-x-28 group-hover:translate-x-0 duration-300">
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke=" currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Heart">
                                                <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                                                </g>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                        <div class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                        <div class="relative overflow-hidden">
                                        <div className="m-auto aspect-[1/1] p-3 lg:p-5">
                                            <img className="w-full h-full m-auto object-contain" src={laptop3} alt />
                                        </div>
                                            <div class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                            <div>
                                                <svg
                                                stroke="white"
                                                fill="white"
                                                stroke-width="0"
                                                viewBox="0 0 576 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path>
                                                </svg>
                                            </div>
                                            <div class="text-md px-3 text-white">Let's Chat</div>
                                            </div>
                                        </div>
                                        <div class="bg-white p-3 flex justify-start flex-col items-start">
                                            <div class="text-lg font-medium mb-2 text-start">Newest Flagship HP 14 HD Thin & Light Laptop Computer PC- 14" Micro-Edge  Display 10th</div>
                                            <div className="">
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                SSD:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                ROM:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1">
                                                Intel
                                            </span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                            </div>
                                        </div>
                                        <div class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                            10% off
                                        </div>
                                        <div class="absolute top-14 right-2 translate-x-28 group-hover:translate-x-0 duration-300">
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke=" currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Heart">
                                                <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                                                </g>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    {activeTab === 'tab2' && 
                        <>
                            <div className="px-5">
                                <div className="flex items-center justify-between sm:px-5">
                                <div className="text-base sm:text-lg font-semibold">
                                    Product List{" "}
                                    <span className="number text-black/50 font-bold">(56)</span>
                                </div>
                                <div className>
                                    <div className="flex items-center gap-2 sm:gap-4">
                                    <div className="text-sm sm:text-base">Sort by :</div>
                                    <div className="flex items-center max-lg:justify-center border-2 px-2 sm:px-3 py-1 rounded-sm">
                                        <div className="relative flex flex-col">
                                        <Listbox value={selectedSort} onChange={setSelectedSort}>
                                            <Listbox.Button className="flex items-center">
                                            {/* <img src={selectedPerson.img} alt="india" className="w-5 h-5 mr-3 rounded-full object-cover"/> */}
                                            <div className="flex items-center gap-1 text-black sm:text-base text-sm ">
                                                {/* Low to High
                                                <span className="size-4 me-2 flex items-center text-black/70">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                                </svg>
                                                </span> */}
                                            </div>
                                            {selectedSort.name}
                                            </Listbox.Button>
                                            <Listbox.Options className="absolute top-9 -right-3 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-1 z-30">
                                            {sortArr.map((item) => (
                                                <Listbox.Option
                                                key={item.id}
                                                value={item}
                                                disabled={item.unavailable}
                                                className="flex items-center cursor-pointer text-black md:text-base text-sm duration-300 md:hover:bg-gray-200 p-2 rounded-md"
                                                >
                                                {/* <img src={item?.img} alt="india" className="w-5 h-5 mr-3 rounded-full object-cover"/> */}
                                                {item.name}
                                                {/* {item.img} */}
                                                </Listbox.Option>
                                            ))}
                                            </Listbox.Options>
                                        </Listbox>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="flex flex-wrap sm:hidden gap-y-2 items-center justify-between sm:px-5 pt-5">
                                <div className>
                                    <div className="flex items-center gap-2 sm:gap-4">
                                    <div className="text-sm sm:text-base">Filter :</div>
                                    <div className="flex items-center max-lg:justify-center border-2 px-2 sm:px-3 py-1 rounded-sm">
                                        <div className="relative flex flex-col">
                                        <input
                                            className="peer/mm hidden"
                                            type="checkbox"
                                            name=""
                                            id="filter"
                                        />
                                        <label
                                            htmlFor="filter"
                                            className="flex items-center gap-1 text-black sm:text-base text-sm"
                                        >
                                            Low to High
                                            <span className="size-4 me-2 flex items-center text-black/70">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                                </svg>
                                            </span>
                                        </label>
                                        <div className="w-fullshadow-md bg-white shadow p-2 shadow-black absolute z-20 top-8 w-full peer-checked/mm:block hidden">
                                            <ul className="flex flex-col gap-1">
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className>
                                    <div className="flex items-center gap-2 sm:gap-4">
                                    <div className="text-sm sm:text-base">Price :</div>
                                    <div className="flex items-center max-lg:justify-center border-2 px-2 sm:px-3 py-1 rounded-sm">
                                        <div className="relative flex flex-col">
                                        <input
                                            className="peer/mm hidden"
                                            type="checkbox"
                                            name=""
                                            id="priceRange"
                                        />
                                        <label
                                            htmlFor="priceRange"
                                            className="flex items-center gap-1 text-black sm:text-base text-sm"
                                        >
                                            Low to High
                                            <span className="size-4 me-2 flex items-center text-black/70">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                            </svg>
                                            </span>
                                        </label>
                                        <div className="w-fullshadow-md bg-white shadow p-2 shadow-black absolute z-20 top-8 w-full peer-checked/mm:block hidden">
                                            <ul className="flex flex-col gap-1">
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div className="pt-5 flex flex-wrap items-center gap-y-5">
                                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                        <div class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                        <div class="relative overflow-hidden">
                                        <div className="m-auto aspect-[1/1] p-3 lg:p-5">
                                            <img className="w-full h-full m-auto object-contain" src={pc1} alt />
                                        </div>
                                            <div class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                            <div>
                                                <svg
                                                stroke="white"
                                                fill="white"
                                                stroke-width="0"
                                                viewBox="0 0 576 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path>
                                                </svg>
                                            </div>
                                            <div class="text-md px-3 text-white">Let's Chat</div>
                                            </div>
                                        </div>
                                        <div class="bg-white p-3 flex justify-start flex-col items-start">
                                            <div class="text-lg font-medium mb-2 text-start">Newest Flagship HP 14 HD Thin & Light Laptop Computer PC- 14" Micro-Edge  Display 10th</div>
                                            <div className="">
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                SSD:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                ROM:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1">
                                                Intel
                                            </span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                            </div>
                                        </div>
                                        <div class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                            10% off
                                        </div>
                                        <div class="absolute top-14 right-2 translate-x-28 group-hover:translate-x-0 duration-300">
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke=" currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Heart">
                                                <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                                                </g>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                        <div class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                        <div class="relative overflow-hidden">
                                        <div className="m-auto aspect-[1/1] p-3 lg:p-5">
                                            <img className="w-full h-full m-auto object-contain" src={pc2} alt />
                                        </div>
                                            <div class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                            <div>
                                                <svg
                                                stroke="white"
                                                fill="white"
                                                stroke-width="0"
                                                viewBox="0 0 576 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path>
                                                </svg>
                                            </div>
                                            <div class="text-md px-3 text-white">Let's Chat</div>
                                            </div>
                                        </div>
                                        <div class="bg-white p-3 flex justify-start flex-col items-start">
                                            <div class="text-lg font-medium mb-2 text-start">Newest Flagship HP 14 HD Thin & Light Laptop Computer PC- 14" Micro-Edge  Display 10th</div>
                                            <div className="">
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                SSD:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                ROM:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1">
                                                Intel
                                            </span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                            </div>
                                        </div>
                                        <div class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                            10% off
                                        </div>
                                        <div class="absolute top-14 right-2 translate-x-28 group-hover:translate-x-0 duration-300">
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke=" currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Heart">
                                                <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                                                </g>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                        <div class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                        <div class="relative overflow-hidden">
                                        <div className="m-auto aspect-[1/1] p-3 lg:p-5">
                                            <img className="w-full h-full m-auto object-contain" src={pc3} alt />
                                        </div>
                                            <div class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                            <div>
                                                <svg
                                                stroke="white"
                                                fill="white"
                                                stroke-width="0"
                                                viewBox="0 0 576 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path>
                                                </svg>
                                            </div>
                                            <div class="text-md px-3 text-white">Let's Chat</div>
                                            </div>
                                        </div>
                                        <div class="bg-white p-3 flex justify-start flex-col items-start">
                                            <div class="text-lg font-medium mb-2 text-start">Newest Flagship HP 14 HD Thin & Light Laptop Computer PC- 14" Micro-Edge  Display 10th</div>
                                            <div className="">
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                SSD:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                ROM:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1">
                                                Intel
                                            </span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                            </div>
                                        </div>
                                        <div class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                            10% off
                                        </div>
                                        <div class="absolute top-14 right-2 translate-x-28 group-hover:translate-x-0 duration-300">
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke=" currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Heart">
                                                <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                                                </g>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    {activeTab === 'tab3' && 
                        <>
                            <div className="px-5">
                                <div className="flex items-center justify-between sm:px-5">
                                <div className="text-base sm:text-lg font-semibold">
                                    Product List{" "}
                                    <span className="number text-black/50 font-bold">(56)</span>
                                </div>
                                <div className>
                                    <div className="flex items-center gap-2 sm:gap-4">
                                    <div className="text-sm sm:text-base">Sort by :</div>
                                    <div className="flex items-center max-lg:justify-center border-2 px-2 sm:px-3 py-1 rounded-sm">
                                        <div className="relative flex flex-col">
                                        <Listbox value={selectedSort} onChange={setSelectedSort}>
                                            <Listbox.Button className="flex items-center">
                                            {/* <img src={selectedPerson.img} alt="india" className="w-5 h-5 mr-3 rounded-full object-cover"/> */}
                                            <div className="flex items-center gap-1 text-black sm:text-base text-sm ">
                                                {/* Low to High
                                                <span className="size-4 me-2 flex items-center text-black/70">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                                </svg>
                                                </span> */}
                                            </div>
                                            {selectedSort.name}
                                            </Listbox.Button>
                                            <Listbox.Options className="absolute top-9 -right-3 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none p-1 z-30">
                                            {sortArr.map((item) => (
                                                <Listbox.Option
                                                key={item.id}
                                                value={item}
                                                disabled={item.unavailable}
                                                className="flex items-center cursor-pointer text-black md:text-base text-sm duration-300 md:hover:bg-gray-200 p-2 rounded-md"
                                                >
                                                {/* <img src={item?.img} alt="india" className="w-5 h-5 mr-3 rounded-full object-cover"/> */}
                                                {item.name}
                                                {/* {item.img} */}
                                                </Listbox.Option>
                                            ))}
                                            </Listbox.Options>
                                        </Listbox>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="flex flex-wrap sm:hidden gap-y-2 items-center justify-between sm:px-5 pt-5">
                                <div className>
                                    <div className="flex items-center gap-2 sm:gap-4">
                                    <div className="text-sm sm:text-base">Filter :</div>
                                    <div className="flex items-center max-lg:justify-center border-2 px-2 sm:px-3 py-1 rounded-sm">
                                        <div className="relative flex flex-col">
                                        <input
                                            className="peer/mm hidden"
                                            type="checkbox"
                                            name=""
                                            id="filter"
                                        />
                                        <label
                                            htmlFor="filter"
                                            className="flex items-center gap-1 text-black sm:text-base text-sm"
                                        >
                                            Low to High
                                            <span className="size-4 me-2 flex items-center text-black/70">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                                </svg>
                                            </span>
                                        </label>
                                        <div className="w-fullshadow-md bg-white shadow p-2 shadow-black absolute z-20 top-8 w-full peer-checked/mm:block hidden">
                                            <ul className="flex flex-col gap-1">
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className>
                                    <div className="flex items-center gap-2 sm:gap-4">
                                    <div className="text-sm sm:text-base">Price :</div>
                                    <div className="flex items-center max-lg:justify-center border-2 px-2 sm:px-3 py-1 rounded-sm">
                                        <div className="relative flex flex-col">
                                        <input
                                            className="peer/mm hidden"
                                            type="checkbox"
                                            name=""
                                            id="priceRange"
                                        />
                                        <label
                                            htmlFor="priceRange"
                                            className="flex items-center gap-1 text-black sm:text-base text-sm"
                                        >
                                            Low to High
                                            <span className="size-4 me-2 flex items-center text-black/70">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 512 512"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                            </svg>
                                            </span>
                                        </label>
                                        <div className="w-fullshadow-md bg-white shadow p-2 shadow-black absolute z-20 top-8 w-full peer-checked/mm:block hidden">
                                            <ul className="flex flex-col gap-1">
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                href="javascript:;"
                                                className="flex items-center text-black text-sm duration-300 hover:text-yellow-400"
                                                >
                                                High to Low
                                                </a>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div className="pt-5 flex flex-wrap items-center gap-y-5">
                                    
                                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                        <div class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                        <div class="relative overflow-hidden">
                                        <div className="m-auto aspect-[1/1] p-3 lg:p-5">
                                            <img className="w-full h-full m-auto object-contain" src={s1} alt />
                                        </div>
                                            <div class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                            <div>
                                                <svg
                                                stroke="white"
                                                fill="white"
                                                stroke-width="0"
                                                viewBox="0 0 576 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path>
                                                </svg>
                                            </div>
                                            <div class="text-md px-3 text-white">Let's Chat</div>
                                            </div>
                                        </div>
                                        <div class="bg-white p-3 flex justify-start flex-col items-start">
                                            <div class="text-lg font-medium mb-2 text-start">Newest Flagship HP 14 HD Thin & Light Laptop Computer PC- 14" Micro-Edge  Display 10th</div>
                                            <div className="">
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                SSD:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                ROM:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1">
                                                Intel
                                            </span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                            </div>
                                        </div>
                                        <div class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                            10% off
                                        </div>
                                        <div class="absolute top-14 right-2 translate-x-28 group-hover:translate-x-0 duration-300">
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke=" currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Heart">
                                                <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                                                </g>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                        <div class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                        <div class="relative overflow-hidden">
                                        <div className="m-auto aspect-[1/1] p-3 lg:p-5">
                                            <img className="w-full h-full m-auto object-contain" src={s2} alt />
                                        </div>
                                            <div class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                            <div>
                                                <svg
                                                stroke="white"
                                                fill="white"
                                                stroke-width="0"
                                                viewBox="0 0 576 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path>
                                                </svg>
                                            </div>
                                            <div class="text-md px-3 text-white">Let's Chat</div>
                                            </div>
                                        </div>
                                        <div class="bg-white p-3 flex justify-start flex-col items-start">
                                            <div class="text-lg font-medium mb-2 text-start">Newest Flagship HP 14 HD Thin & Light Laptop Computer PC- 14" Micro-Edge  Display 10th</div>
                                            <div className="">
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                SSD:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                ROM:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1">
                                                Intel
                                            </span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                            </div>
                                        </div>
                                        <div class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                            10% off
                                        </div>
                                        <div class="absolute top-14 right-2 translate-x-28 group-hover:translate-x-0 duration-300">
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke=" currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Heart">
                                                <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                                                </g>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                                        <div class="group relative rounded-xl bg-white overflow-hidden cursor-pointer">
                                        <div class="relative overflow-hidden">
                                        <div className="m-auto aspect-[1/1] p-3 lg:p-5">
                                            <img className="w-full h-full m-auto object-contain" src={s3} alt />
                                        </div>
                                            <div class="flex justify-center items-center absolute py-3 bg-[#09757A] bottom-0 w-full translate-y-48 duration-300 hover:bg-black group-hover:translate-y-0">
                                            <div>
                                                <svg
                                                stroke="white"
                                                fill="white"
                                                stroke-width="0"
                                                viewBox="0 0 576 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z"></path>
                                                </svg>
                                            </div>
                                            <div class="text-md px-3 text-white">Let's Chat</div>
                                            </div>
                                        </div>
                                        <div class="bg-white p-3 flex justify-start flex-col items-start">
                                            <div class="text-lg font-medium mb-2 text-start">Newest Flagship HP 14 HD Thin & Light Laptop Computer PC- 14" Micro-Edge  Display 10th</div>
                                            <div className="">
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                SSD:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1 mr-2">
                                                ROM:2GB
                                            </span>
                                            <span className="bg-[#09757A] rounded text-white text-xs font-bold px-3 py-1">
                                                Intel
                                            </span>
                                            {/* <span className='bg-[#09757A] rounded-tl-lg rounded-br-lg text-white px-3 py-1'>Intel</span> */}
                                            </div>
                                        </div>
                                        <div class="size-max px-2 py-1 bg-[#09757A] text-white absolute inset-2 text-sm rounded-none rounded-br-xl rounded-tl-xl">
                                            10% off
                                        </div>
                                        <div class="absolute top-14 right-2 translate-x-28 group-hover:translate-x-0 duration-300">
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke=" currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="Heart">
                                                <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                                                </g>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path>
                                            </svg>
                                            </div>
                                            <div class="size-10 rounded-md hover:bg-black hover:text-white my-2 duration-300 flex justify-center items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="size-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
        {
            filterOpen && 
            <div onClick={handleSidebar} className='h-full w-full bg-black bg-opacity-20 fixed top-0 left-0 '></div>
        }
            
        <Footer />
        </>
    );
};

export default ProductList;
