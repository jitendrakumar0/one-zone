import React, { Fragment, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";import { RiChat1Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";


    
    const sortOptions = [
        { name: 'Default', href: '#', current: true },
        { name: 'Newest to Oldest', href: '#', current: false },
        { name: 'Oldest to Newest', href: '#', current: false },
        { name: 'Price: Low to High', href: '#', current: false },
        { name: 'Price: High to Low', href: '#', current: false },
    ]
    const filters = [
        // {
        // id: 'category',
        // name: 'Category',
        // options: [
        //     { value: 'windows', label: 'Windows', checked: false },
        //     { value: 'mac', label: 'Mac', checked: false },
        //     { value: 'chromebook', label: 'Chromebook', checked: true },
        //     { value: 'mobile', label: 'Mobile', checked: false },
        //     { value: 'tablets', label: 'Tablets', checked: false },
        //     { value: 'photocopy-machine', label: 'Photocopy Machine', checked: false },
        //     { value: 'servers', label: 'Servers', checked: false },
        // ],
        // },
        // {
        // id: 'sub-category',
        // name: 'Sub Category',
        // options: [
        //     { value: 'Laptop', label: 'Laptop', checked: false },
        //     { value: 'PC', label: 'PC', checked: false },
        //     { value: 'Sper Parts', label: 'Sper Parts', checked: true },
        //     { value: 'MacBook', label: 'MacBook', checked: false },
        //     { value: 'IMac', label: 'IMac', checked: false },
        //     { value: 'Android', label: 'Android', checked: false },
        //     { value: 'iPhone', label: 'iPhone', checked: false },
        //     { value: 'Windows', label: 'Windows', checked: false },
        //     { value: 'iPad', label: 'iPad', checked: false },
        // ],
        // },
        {
        id: 'Brand',
        name: 'Brand',
        options: [
            { value: 'MSI', label: 'MSI', checked: false },
            { value: 'Apple', label: 'Apple', checked: false },
            { value: 'Microsoft', label: 'Microsoft', checked: true },
            { value: 'Samsung', label: 'Samsung', checked: false },
            { value: 'Razer', label: 'Razer', checked: false },
            { value: 'LG', label: 'LG', checked: false },
            { value: 'Fujitsu', label: 'Fujitsu', checked: false },
            { value: 'Xiaomi', label: 'Xiaomi', checked: false },
            { value: 'Huawei', label: 'Huawei', checked: false },
            { value: 'Toshiba', label: 'Toshiba', checked: false },
            { value: 'Inspiron', label: 'Inspiron', checked: false },
            { value: 'GIGABYTE', label: 'GIGABYTE', checked: false },
            { value: 'ASUS', label: 'ASUS', checked: false },
            { value: 'Chromebook', label: 'Chromebook', checked: false },
            { value: 'Sony', label: 'Sony', checked: false },
        ],
        },
        {
            id: 'sort',
            name: 'price',
            options: [
                { value: 'MSI', label: 'newest to oldest', checked: false },
            ],
            },
        {
        id: 'subBrand',
        name: 'Sub Brand',
        options: [
            { value: 'Razer', label: 'Razer', checked: false },
            { value: 'LG', label: 'LG', checked: false },
            { value: 'Fujitsu', label: 'Fujitsu', checked: false },
            { value: 'Xiaomi', label: 'Xiaomi', checked: false },
            { value: 'Huawei', label: 'Huawei', checked: false },
            { value: 'Toshiba', label: 'Toshiba', checked: false },
            { value: 'Inspiron', label: 'Inspiron', checked: false },
        ],
        },
        {
        id: 'Condition',
        name: 'Condition',
        options: [
            { value: 'New', label: 'New', checked: false },
            { value: 'Pre-owned', label: 'Pre-owned', checked: false },
            { value: 'Refurbished', label: 'Refurbished', checked: false },
        ],
        },
        {
        id: 'Warranty',
        name: 'Warranty',
        options: [
            { value: 'Yes', label: 'Yes', checked: false },
            { value: 'No', label: 'No', checked: false },
            { value: 'Does not apply', label: 'Does not apply', checked: false },
        ],
        },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

const WindowsProducts = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [priceRange, setPriceRange] = useState(1000);
    const [activeTab, setActiveTab] = useState('tab1');
    const handleTabClick = (tab) => {
    setActiveTab(tab);
    };
    return (
        <>
        <Header />

        <div className="bg-white">
                <div>
                    {/* Mobile filter dialog */}
                    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-[100] lg:hidden" onClose={setMobileFiltersOpen}>
                            <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 z-40 flex">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                        type="button"
                                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                        onClick={() => setMobileFiltersOpen(false)}
                                        >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>

                                        {filters.map((section) => (
                                        <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                            {({ open }) => (
                                            <>
                                                <h3 className="-mx-2 -my-3 flow-root">
                                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">{section.name}</span>
                                                    <span className="ml-6 flex items-center">
                                                    {open ? (
                                                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                    ) : (
                                                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                    )}
                                                    </span>
                                                </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                <div className="space-y-6">
                                                    {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex items-center">
                                                        <input
                                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                                        name={`${section.id}[]`}
                                                        defaultValue={option.value}
                                                        type="checkbox"
                                                        defaultChecked={option.checked}
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                                        >
                                                        {option.label}
                                                        </label>
                                                    </div>
                                                    ))}
                                                </div>
                                                </Disclosure.Panel>
                                            </>
                                            )}
                                        </Disclosure>
                                        ))}
                                    </form>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition.Root>

                    <main className="max-w-screen-xl justify-between mx-auto p-4">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Windows Products</h1>

                        <div>
                            <div className="flex items-center">
                                <button
                                    className={`w-24 text-center border rounded-lg text-white py-1 ${activeTab === 'tab1' ? 'bg-black text-white' : 'bg-[#9f9fa1]'}`}
                                    onClick={() => handleTabClick('tab1')}
                                >
                                Laptop
                                </button>
                                <button
                                    className={`w-24 text-center border mx-2 rounded-lg text-white py-1 ${activeTab === 'tab2' ? 'bg-black text-white' : 'bg-[#9f9fa1]'}`}
                                    onClick={() => handleTabClick('tab2')}
                                    >
                                    PC
                                </button>
                                <button
                                    className={`w-24 text-center border rounded-lg text-white py-1 ${activeTab === 'tab3' ? 'bg-black text-white' : 'bg-[#9f9fa1]'}`}
                                    onClick={() => handleTabClick('tab3')}
                                    >
                                    Sper Parts
                                </button>
                            </div>
                        </div> 
                        {/* <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <Menu.Item key={option.name}>
                                            {({ active }) =>
                                             (
                                                <Link
                                                className={classNames(
                                                    option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                    active ? 'bg-black text-theme1' : '',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                                >
                                                {option.name}
                                                </Link>
                                            )}
                                            </Menu.Item>
                                        ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div> */}
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                        Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            
                        {/* Filters */}
                        <form className="hidden lg:block">
                            <div className="w-full relative mb-4">
                                <label htmlFor="small-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price Range</label>
                                <input id="small-range" onChange={(e)=>{setPriceRange(e.target.value)}} type="range" value={priceRange} min="100" max="8000" className="w-full accent-black h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm" />
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-bold absolute start-0 -bottom-2">₹100</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-bold absolute end-0 -bottom-2">₹8000</span>
                            </div>

                            {filters.map((section) => (
                            <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                {({ open }) => (
                                <>
                                    <h3 className="-my-3 flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                        <span className="font-medium text-gray-900">{section.name}</span>
                                        <span className="ml-6 flex items-center">
                                        {open ? (
                                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                        ) : (
                                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                        )}
                                        </span>
                                    </Disclosure.Button>
                                    </h3>
                                    <Disclosure.Panel className="pt-6">
                                    <div className="space-y-4">
                                        {section.options.map((option, optionIdx) => (
                                        <div key={option.value} className="flex items-center">
                                            <input
                                            id={`filter-${section.id}-${optionIdx}`}
                                            name={`${section.id}[]`}
                                            defaultValue={option.value}
                                            type="checkbox"
                                            defaultChecked={option.checked}
                                            className="h-4 w-4 accent-[#FCEB19] rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                            htmlFor={`filter-${section.id}-${optionIdx}`}
                                            className="ml-3 text-sm text-gray-600"
                                            >
                                            {option.label}
                                            </label>
                                        </div>
                                        ))}
                                    </div>
                                    </Disclosure.Panel>
                                </>
                                )}
                            </Disclosure>
                            ))}

                            <div className="w-full flex items-center sticky bottom-0 gap-3 py-2 bg-white">
                                <button className="border-2 grow border-b-black  font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black text-black border-theme1 hover:border-b-theme1 shadow-md hover:text-theme1 shadow-black/40">Clear <MdClear className='size-5' /></button>
                                <button className="text-black bg-theme1 border-2 grow border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black hover:border-b-theme1 md:hover:bg-black hover:text-theme1 shadow-md shadow-black/40">Apply <FaRegCircleCheck className='size-5' /></button>
                            </div>
                        </form>

                        {/* Product grid */}
                        
                        
                                <div className="lg:col-span-3">
                                    <div className="flex flex-wrap lg:gap-y-8 lg:pl-4 lg:pt-4 -m-4">
                                        {activeTab === 'tab1' && 
                                            <>
                                                <div className="flex flex-wrap lg:w-full md:w-1/2 max-lg:p-4">
                                                    <div className="w-full flex max-lg:flex-wrap relative items-stretch gap-8 border-b border-gray-200 lg:pb-8 max-lg:p-5 max-lg:border max-lg:border-gray-200 max-lg:rounded-xl max-lg:shadow-lg max-lg:shadow-theme1/20">
                                                        <div className="lg:w-72 w-full lg:relative shrink-0 grid items-center justify-center">
                                                            <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                                <FaRegHeart className="size-full" />
                                                            </button>
                                                            <img className="w-full" src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70" alt="jk" />
                                                        </div>
                                                        <div className="lg:grow max-lg:w-full">
                                                            <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                                            <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                                <li>Intel Core i3 Processor (11th Gen)</li>
                                                                <li>8 GB DDR4 RAM</li>
                                                                <li>64 bit Windows 11 Operating System</li>
                                                                <li>512 GB SSD</li>
                                                                <li>39.62 cm (15.6 Inch) Display</li>
                                                                <li>1 Year Onsite Warranty</li>
                                                            </ul>
                                                        </div>
                                                        <div className="lg:w-40 w-full shrink-0 flex lg:flex-col">
                                                            <div className="w-full grow">
                                                                <div className="w-full lg:text-2xl md:text-lg font-bold text-black">₹31,990</div>
                                                                <div className="w-full text-gray-600 font-semibold lg:text-base md:text-sm text-xs">₹49,990 <span className="text-lime-600 lg:pl-3 pl-1">36% off</span></div>
                                                            </div>
                                                            <div className="w-full">
                                                                <Link className="text-black max-lg:w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap lg:w-full md:w-1/2 max-lg:p-4">
                                                    <div className="w-full flex max-lg:flex-wrap relative items-stretch gap-8 border-b border-gray-200 lg:pb-8 max-lg:p-5 max-lg:border max-lg:border-gray-200 max-lg:rounded-xl max-lg:shadow-lg max-lg:shadow-theme1/20">
                                                        <div className="lg:w-72 w-full lg:relative shrink-0 grid items-center justify-center">
                                                            <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                                <FaRegHeart className="size-full" />
                                                            </button>
                                                            <img className="w-full" src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/e/y/j/-original-imagwzwcxf5ffarf.jpeg?q=70" alt="jk" />
                                                        </div>
                                                        <div className="lg:grow max-lg:w-full">
                                                            <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">HP All-in-One 27 Core i3 (8 GB DDR4/512 GB SSD/Windows 11 Home/27 Inch Screen/All-in-One 27-CB1345IN) with MS Office  (Starry white)</Link>
                                                            <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                                <li>Windows 11 Home</li>
                                                                <li>Intel Core i3</li>
                                                                <li>RAM 8 GB DDR4</li>
                                                                <li>27 inch Display</li>
                                                                <li>39.62 cm (15.6 Inch) Display</li>
                                                                <li>1 Year Onsite Warranty</li>
                                                            </ul>
                                                        </div>
                                                        <div className="lg:w-40 w-full shrink-0 flex lg:flex-col">
                                                            <div className="w-full grow">
                                                                <div className="w-full lg:text-2xl md:text-lg font-bold text-black">₹54,490</div>
                                                                <div className="w-full text-gray-600 font-semibold lg:text-base md:text-sm text-xs">₹62,990 <span className="text-lime-600 lg:pl-3 pl-1">13% off</span></div>
                                                            </div>
                                                            <div className="w-full">
                                                                <Link className="text-black max-lg:w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap lg:w-full md:w-1/2 max-lg:p-4">
                                                    <div className="w-full flex max-lg:flex-wrap relative items-stretch gap-8 border-b border-gray-200 lg:pb-8 max-lg:p-5 max-lg:border max-lg:border-gray-200 max-lg:rounded-xl max-lg:shadow-lg max-lg:shadow-theme1/20">
                                                        <div className="lg:w-72 w-full lg:relative shrink-0 grid items-center justify-center">
                                                            <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                                <FaRegHeart className="size-full" />
                                                            </button>
                                                            <img className="w-full" src="https://rukminim2.flixcart.com/image/312/312/l48s9zk0/computer/6/z/k/hp-laptop-255-g8-notebook-notebook-hp-original-imagf6hthg9zbxug.jpeg?q=70" alt="jk" />
                                                        </div>
                                                        <div className="lg:grow max-lg:w-full">
                                                            <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">Loungefly Genuine Battery for HPi EliteBook Folio 9470M 9480M / BT04XL 4 Cell Laptop Battery</Link>
                                                            <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                                <li>Battery Type: Lithium-ion</li>
                                                                <li>Capacity: 4000 mAh</li>
                                                                <li>4 Cells</li>
                                                            </ul>
                                                        </div>
                                                        <div className="lg:w-40 w-full shrink-0 flex lg:flex-col">
                                                            <div className="w-full grow">
                                                                <div className="w-full lg:text-2xl md:text-lg font-bold text-black">₹2,349</div>
                                                                <div className="w-full text-gray-600 font-semibold lg:text-base md:text-sm text-xs">₹9,499 <span className="text-lime-600 lg:pl-3 pl-1">75% off</span></div>
                                                            </div>
                                                            <div className="w-full">
                                                                <Link className="text-black max-lg:w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        {activeTab === 'tab2' &&    
                                        <>
                                            <div className="flex flex-wrap lg:w-full md:w-1/2 max-lg:p-4">
                                                <div className="w-full flex max-lg:flex-wrap relative items-stretch gap-8 border-b border-gray-200 lg:pb-8 max-lg:p-5 max-lg:border max-lg:border-gray-200 max-lg:rounded-xl max-lg:shadow-lg max-lg:shadow-theme1/20">
                                                    <div className="lg:w-72 w-full lg:relative shrink-0 grid items-center justify-center">
                                                        <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                            <FaRegHeart className="size-full" />
                                                        </button>
                                                        <img className="w-full" src="https://rukminim2.flixcart.com/image/612/612/xif0q/allinone-desktop/6/c/z/gaming-pc-with-2-gb-graphics-nvidia-geforce-gt-630-graphics-card-original-imagw7yykauzf2uz.jpeg?q=70" alt="jk" />
                                                    </div>
                                                    <div className="lg:grow max-lg:w-full">
                                                        <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                                        <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                            <li>Intel Core i3 Processor (11th Gen)</li>
                                                            <li>8 GB DDR4 RAM</li>
                                                            <li>64 bit Windows 11 Operating System</li>
                                                            <li>512 GB SSD</li>
                                                            <li>39.62 cm (15.6 Inch) Display</li>
                                                            <li>1 Year Onsite Warranty</li>
                                                        </ul>
                                                    </div>
                                                    <div className="lg:w-40 w-full shrink-0 flex lg:flex-col">
                                                        <div className="w-full grow">
                                                            <div className="w-full lg:text-2xl md:text-lg font-bold text-black">₹31,990</div>
                                                            <div className="w-full text-gray-600 font-semibold lg:text-base md:text-sm text-xs">₹49,990 <span className="text-lime-600 lg:pl-3 pl-1">36% off</span></div>
                                                        </div>
                                                        <div className="w-full">
                                                            <Link className="text-black max-lg:w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap lg:w-full md:w-1/2 max-lg:p-4">
                                                <div className="w-full flex max-lg:flex-wrap relative items-stretch gap-8 border-b border-gray-200 lg:pb-8 max-lg:p-5 max-lg:border max-lg:border-gray-200 max-lg:rounded-xl max-lg:shadow-lg max-lg:shadow-theme1/20">
                                                    <div className="lg:w-72 w-full lg:relative shrink-0 grid items-center justify-center">
                                                        <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                            <FaRegHeart className="size-full" />
                                                        </button>
                                                        <img className="w-full" src="https://rukminim2.flixcart.com/image/612/612/l2qhjm80/allinone-desktop/i/j/f/enti5-650-8gb-1tb-120-22led-entwino-original-imageyjg2gezegph.jpeg?q=70" alt="jk" />
                                                    </div>
                                                    <div className="lg:grow max-lg:w-full">
                                                        <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                                        <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                            <li>Intel Core i3 Processor (11th Gen)</li>
                                                            <li>8 GB DDR4 RAM</li>
                                                            <li>64 bit Windows 11 Operating System</li>
                                                            <li>512 GB SSD</li>
                                                            <li>39.62 cm (15.6 Inch) Display</li>
                                                            <li>1 Year Onsite Warranty</li>
                                                        </ul>
                                                    </div>
                                                    <div className="lg:w-40 w-full shrink-0 flex lg:flex-col">
                                                        <div className="w-full grow">
                                                            <div className="w-full lg:text-2xl md:text-lg font-bold text-black">₹31,990</div>
                                                            <div className="w-full text-gray-600 font-semibold lg:text-base md:text-sm text-xs">₹49,990 <span className="text-lime-600 lg:pl-3 pl-1">36% off</span></div>
                                                        </div>
                                                        <div className="w-full">
                                                            <Link className="text-black max-lg:w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap lg:w-full md:w-1/2 max-lg:p-4">
                                                <div className="w-full flex max-lg:flex-wrap relative items-stretch gap-8 border-b border-gray-200 lg:pb-8 max-lg:p-5 max-lg:border max-lg:border-gray-200 max-lg:rounded-xl max-lg:shadow-lg max-lg:shadow-theme1/20">
                                                    <div className="lg:w-72 w-full lg:relative shrink-0 grid items-center justify-center">
                                                        <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                            <FaRegHeart className="size-full" />
                                                        </button>
                                                        <img className="w-full" src="https://rukminim2.flixcart.com/image/612/612/xif0q/allinone-desktop/g/b/2/i5-8-gb-ddr3-500-gb-120-gb-ssd-windows-10-home-512-mb-18-5-inch-original-imagtmerxbsja3c3.jpeg?q=70" alt="jk" />
                                                    </div>
                                                    <div className="lg:grow max-lg:w-full">
                                                        <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                                        <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                            <li>Intel Core i3 Processor (11th Gen)</li>
                                                            <li>8 GB DDR4 RAM</li>
                                                            <li>64 bit Windows 11 Operating System</li>
                                                            <li>512 GB SSD</li>
                                                            <li>39.62 cm (15.6 Inch) Display</li>
                                                            <li>1 Year Onsite Warranty</li>
                                                        </ul>
                                                    </div>
                                                    <div className="lg:w-40 w-full shrink-0 flex lg:flex-col">
                                                        <div className="w-full grow">
                                                            <div className="w-full lg:text-2xl md:text-lg font-bold text-black">₹31,990</div>
                                                            <div className="w-full text-gray-600 font-semibold lg:text-base md:text-sm text-xs">₹49,990 <span className="text-lime-600 lg:pl-3 pl-1">36% off</span></div>
                                                        </div>
                                                        <div className="w-full">
                                                            <Link className="text-black max-lg:w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                        }
                                        {activeTab === 'tab3' && 
                                            <>
                                                <div className="flex flex-wrap lg:w-full md:w-1/2 max-lg:p-4">
                                                    <div className="w-full flex max-lg:flex-wrap relative items-stretch gap-8 border-b border-gray-200 lg:pb-8 max-lg:p-5 max-lg:border max-lg:border-gray-200 max-lg:rounded-xl max-lg:shadow-lg max-lg:shadow-theme1/20">
                                                        <div className="lg:w-72 w-full lg:relative shrink-0 grid items-center justify-center">
                                                            <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                                <FaRegHeart className="size-full" />
                                                            </button>
                                                            <img className="w-full aspect-square" src="https://rukminim2.flixcart.com/image/612/612/xif0q/laptop-battery/laptop-battery/1/p/m/laptop-battery-compatible-for-bt04xl-bt04-battery-for-hp-original-imagzdpczw678kf6.jpeg?q=70" alt="jk" />
                                                        </div>
                                                        <div className="lg:grow max-lg:w-full">
                                                            <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                                            <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                                <li>Intel Core i3 Processor (11th Gen)</li>
                                                                <li>8 GB DDR4 RAM</li>
                                                                <li>64 bit Windows 11 Operating System</li>
                                                                <li>512 GB SSD</li>
                                                                <li>39.62 cm (15.6 Inch) Display</li>
                                                                <li>1 Year Onsite Warranty</li>
                                                            </ul>
                                                        </div>
                                                        <div className="lg:w-40 w-full shrink-0 flex lg:flex-col">
                                                            <div className="w-full grow">
                                                                <div className="w-full lg:text-2xl md:text-lg font-bold text-black">₹31,990</div>
                                                                <div className="w-full text-gray-600 font-semibold lg:text-base md:text-sm text-xs">₹49,990 <span className="text-lime-600 lg:pl-3 pl-1">36% off</span></div>
                                                            </div>
                                                            <div className="w-full">
                                                                <Link className="text-black max-lg:w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap lg:w-full md:w-1/2 max-lg:p-4">
                                                    <div className="w-full flex max-lg:flex-wrap relative items-stretch gap-8 border-b border-gray-200 lg:pb-8 max-lg:p-5 max-lg:border max-lg:border-gray-200 max-lg:rounded-xl max-lg:shadow-lg max-lg:shadow-theme1/20">
                                                        <div className="lg:w-72 w-full lg:relative shrink-0 grid items-center justify-center">
                                                            <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                                <FaRegHeart className="size-full" />
                                                            </button>
                                                            <img className="w-full aspect-square" src="https://rukminim2.flixcart.com/image/612/612/l2ghgnk0/worldwide-adaptor/c/7/f/smps-adapter-power-supply-for-ro8-rosmps-15-allprowater-tech-original-imagdsjvzczexyym.jpeg?q=70" alt="jk" />
                                                        </div>
                                                        <div className="lg:grow max-lg:w-full">
                                                            <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                                            <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                                <li>Intel Core i3 Processor (11th Gen)</li>
                                                                <li>8 GB DDR4 RAM</li>
                                                                <li>64 bit Windows 11 Operating System</li>
                                                                <li>512 GB SSD</li>
                                                                <li>39.62 cm (15.6 Inch) Display</li>
                                                                <li>1 Year Onsite Warranty</li>
                                                            </ul>
                                                        </div>
                                                        <div className="lg:w-40 w-full shrink-0 flex lg:flex-col">
                                                            <div className="w-full grow">
                                                                <div className="w-full lg:text-2xl md:text-lg font-bold text-black">₹31,990</div>
                                                                <div className="w-full text-gray-600 font-semibold lg:text-base md:text-sm text-xs">₹49,990 <span className="text-lime-600 lg:pl-3 pl-1">36% off</span></div>
                                                            </div>
                                                            <div className="w-full">
                                                                <Link className="text-black max-lg:w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap lg:w-full md:w-1/2 max-lg:p-4">
                                                    <div className="w-full flex max-lg:flex-wrap relative items-stretch gap-8 border-b border-gray-200 lg:pb-8 max-lg:p-5 max-lg:border max-lg:border-gray-200 max-lg:rounded-xl max-lg:shadow-lg max-lg:shadow-theme1/20">
                                                        <div className="lg:w-72 w-full lg:relative shrink-0 grid items-center justify-center">
                                                            <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                                <FaRegHeart className="size-full" />
                                                            </button>
                                                            <img className="w-full aspect-square" src="https://rukminim2.flixcart.com/image/612/612/xif0q/laptop-adapter/6/e/d/ro-power-adapter-24v-2-5a-universal-type-smps-power-supply-ro-original-imagxtkt7bkug6sq.jpeg?q=70" alt="jk" />
                                                        </div>
                                                        <div className="lg:grow max-lg:w-full">
                                                            <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                                            <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                                <li>Intel Core i3 Processor (11th Gen)</li>
                                                                <li>8 GB DDR4 RAM</li>
                                                                <li>64 bit Windows 11 Operating System</li>
                                                                <li>512 GB SSD</li>
                                                                <li>39.62 cm (15.6 Inch) Display</li>
                                                                <li>1 Year Onsite Warranty</li>
                                                            </ul>
                                                        </div>
                                                        <div className="lg:w-40 w-full shrink-0 flex lg:flex-col">
                                                            <div className="w-full grow">
                                                                <div className="w-full lg:text-2xl md:text-lg font-bold text-black">₹31,990</div>
                                                                <div className="w-full text-gray-600 font-semibold lg:text-base md:text-sm text-xs">₹49,990 <span className="text-lime-600 lg:pl-3 pl-1">36% off</span></div>
                                                            </div>
                                                            <div className="w-full">
                                                                <Link className="text-black max-lg:w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        
                                        }
                                    </div>
                                </div>
                        {/* <div className="lg:col-span-3">
                            <div className="flex flex-wrap lg:gap-y-8 lg:pl-4 lg:pt-4 -m-4">
                                <div className="flex flex-wrap lg:w-full md:w-1/2 max-lg:p-4">
                                    <div className="w-full flex max-lg:flex-wrap relative items-stretch gap-8 border-b border-gray-200 lg:pb-8 max-lg:p-5 max-lg:border max-lg:border-gray-200 max-lg:rounded-xl max-lg:shadow-lg max-lg:shadow-theme1/20">
                                        <div className="lg:w-72 w-full lg:relative shrink-0 grid items-center justify-center">
                                            <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full" src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className="lg:grow max-lg:w-full">
                                            <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</Link>
                                            <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                <li>Intel Core i3 Processor (11th Gen)</li>
                                                <li>8 GB DDR4 RAM</li>
                                                <li>64 bit Windows 11 Operating System</li>
                                                <li>512 GB SSD</li>
                                                <li>39.62 cm (15.6 Inch) Display</li>
                                                <li>1 Year Onsite Warranty</li>
                                            </ul>
                                        </div>
                                        <div className="lg:w-40 w-full shrink-0 flex lg:flex-col">
                                            <div className="w-full grow">
                                                <div className="w-full lg:text-2xl md:text-lg font-bold text-black">₹31,990</div>
                                                <div className="w-full text-gray-600 font-semibold lg:text-base md:text-sm text-xs">₹49,990 <span className="text-lime-600 lg:pl-3 pl-1">36% off</span></div>
                                            </div>
                                            <div className="w-full">
                                                <Link className="text-black max-lg:w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap lg:w-full md:w-1/2 max-lg:p-4">
                                    <div className="w-full flex max-lg:flex-wrap relative items-stretch gap-8 border-b border-gray-200 lg:pb-8 max-lg:p-5 max-lg:border max-lg:border-gray-200 max-lg:rounded-xl max-lg:shadow-lg max-lg:shadow-theme1/20">
                                        <div className="lg:w-72 w-full lg:relative shrink-0 grid items-center justify-center">
                                            <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full" src="https://rukminim2.flixcart.com/image/612/612/xif0q/allinone-desktop/z/o/z/all-in-one-27-cb1345in-hp-original-imagntpzpvkvktgg.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className="lg:grow max-lg:w-full">
                                            <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">HP All-in-One 27 Core i3 (8 GB DDR4/512 GB SSD/Windows 11 Home/27 Inch Screen/All-in-One 27-CB1345IN) with MS Office  (Starry white)</Link>
                                            <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                <li>Windows 11 Home</li>
                                                <li>Intel Core i3</li>
                                                <li>RAM 8 GB DDR4</li>
                                                <li>27 inch Display</li>
                                                <li>39.62 cm (15.6 Inch) Display</li>
                                                <li>1 Year Onsite Warranty</li>
                                            </ul>
                                        </div>
                                        <div className="lg:w-40 w-full shrink-0 flex lg:flex-col">
                                            <div className="w-full grow">
                                                <div className="w-full lg:text-2xl md:text-lg font-bold text-black">₹54,490</div>
                                                <div className="w-full text-gray-600 font-semibold lg:text-base md:text-sm text-xs">₹62,990 <span className="text-lime-600 lg:pl-3 pl-1">13% off</span></div>
                                            </div>
                                            <div className="w-full">
                                                <Link className="text-black max-lg:w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap lg:w-full md:w-1/2 max-lg:p-4">
                                    <div className="w-full flex max-lg:flex-wrap relative items-stretch gap-8 border-b border-gray-200 lg:pb-8 max-lg:p-5 max-lg:border max-lg:border-gray-200 max-lg:rounded-xl max-lg:shadow-lg max-lg:shadow-theme1/20">
                                        <div className="lg:w-72 w-full lg:relative shrink-0 grid items-center justify-center">
                                            <button className="size-8 rounded-full bg-white/20 shadow-md md:hover:bg-white duration-300 text-black backdrop-blur-2xl p-2 flex items-center justify-center absolute top-3 right-3">
                                                <FaRegHeart className="size-full" />
                                            </button>
                                            <img className="w-full" src="https://rukminim2.flixcart.com/image/612/612/kvzkosw0/laptop-battery/laptop-battery/d/i/m/genuine-battery-for-hpi-elitebook-folio-9470m-9480m-bt04xl-original-imag8rqz8mgzmsbd.jpeg?q=70" alt="jk" />
                                        </div>
                                        <div className="lg:grow max-lg:w-full">
                                            <Link to='/product-detail' className="w-full font-semibold md:text-base text-sm text-black overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]">Loungefly Genuine Battery for HPi EliteBook Folio 9470M 9480M / BT04XL 4 Cell Laptop Battery</Link>
                                            <ul className="w-full list-disc ml-5 pt-4 md:text-sm text-xs text-black/80">
                                                <li>Battery Type: Lithium-ion</li>
                                                <li>Capacity: 4000 mAh</li>
                                                <li>4 Cells</li>
                                            </ul>
                                        </div>
                                        <div className="lg:w-40 w-full shrink-0 flex lg:flex-col">
                                            <div className="w-full grow">
                                                <div className="w-full lg:text-2xl md:text-lg font-bold text-black">₹2,349</div>
                                                <div className="w-full text-gray-600 font-semibold lg:text-base md:text-sm text-xs">₹9,499 <span className="text-lime-600 lg:pl-3 pl-1">75% off</span></div>
                                            </div>
                                            <div className="w-full">
                                                <Link className="text-black max-lg:w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Let's Chat <RiChat1Line className='size-5' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        </div>
                    </section>
                    </main>
                </div>
            </div>
        <Footer />
        </>
    );
};

export default WindowsProducts;
