import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import Header from '../../sellerPage/components/header/Header';
import Footer from '../../components/Footer/Footer';

const allBrands = [
    { name: 'Acer' },
    { name: 'Advent' },
    { name: 'AfterSHOCK' },
    { name: 'Alienware' },
    { name: 'Asus' },
    { name: 'Aorus' },
    { name: 'Avita' },
    { name: 'BenQ' },
    { name: 'Chuwi' },
    { name: 'Compaq' },
    { name: 'CyberPowerPC' },
    { name: 'Dell' },
    { name: 'Dynabook' },
    { name: 'Fujitsu' },
    { name: 'HCL' },
    { name: 'IBM' },
];
const allcountries = [
    { name: 'India', sortName: 'IN' },
    { name: 'Afghanistan', sortName: 'AF' },
    { name: 'Algeria', sortName: 'DZ' },
    { name: 'Angola', sortName: 'AO' },
    { name: 'Armenia', sortName: 'AM' },
    { name: 'Azerbaijan', sortName: 'AZ' },
    { name: 'Bahrain', sortName: 'BH' },
    { name: 'Bangladesh', sortName: 'BD' },
    { name: 'Burkina Faso', sortName: 'BF' },
    { name: 'Burundi', sortName: 'BI' },
    { name: 'Cameroon', sortName: 'CM' },
    { name: 'Canada', sortName: 'CA' },
    { name: 'Central African Republic', sortName: 'CF' },
    { name: 'Chad', sortName: 'TD' },
    { name: 'China', sortName: 'CN' },
    { name: 'Colombia', sortName: 'CO' },
    { name: 'Comoros', sortName: 'KM' },
    { name: 'Congo (Congo-Brazzaville)', sortName: 'CG' },
    { name: 'Democratic Republic of the Congo', sortName: 'CD' },
    { name: 'Djibouti', sortName: 'DJ' },
    { name: 'Egypt', sortName: 'EG' },
    { name: 'Equatorial Guinea', sortName: 'GQ' },
    { name: 'Eritrea', sortName: 'ER' },
    { name: 'Ethiopia', sortName: 'ET' },
    { name: 'Gabon', sortName: 'GA' },
    { name: 'Gambia', sortName: 'GM' },
    { name: 'Ghana', sortName: 'GH' },
    { name: 'Guinea', sortName: 'GN' },
    { name: 'Guinea-Bissau', sortName: 'GW' }
];
const used = [
    { id: 1, name: '0-6 Months'},
    { id: 2, name: '0-8 Months'},
    { id: 3, name: '0-10 Months' },
    { id: 4, name: '0-11 Months'},
    { id: 5, name: '0-1 Year'},
]
const SelectedCategory = () => {
const [brand, setbrand] = useState(allBrands[0])
const [country, setCountry] = useState(allcountries[0])
const [usedProduct, setUsedProduct] = useState(used[0])
const [yesSelected, setYesSelected] = useState(false)
const handleClick = () => {
    setYesSelected(!yesSelected);
};
    return (
        <>
        <Header/>
            <div className="max-w-screen-lg mx-auto my-5">
                <div className="header font-bold text-xl md:text-2xl text-center bg-black text-white rounded-lg py-2 md:py-4">
                    Add Your Product
                </div>
                <div className="border border-gray-400 p-4 rounded-lg mt-8">
                    <div className='text-lg font-semibold  rounded-lg py-2'>SELECTED CATEGORY</div>
                    <div>
                        <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                            <Link className="inline-flex items-center text-sm font-medium text-gray-700">
                                Window
                            </Link>
                            </li>
                            <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <Link className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 ">Laptop</Link>
                            </div>
                            </li>
                            <li>
                                <Link to="/select-category" className='text-white ms-5 w-auto bg-black border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Edit</Link>
                            </li>
                        </ol>
                        </nav>
                    </div>
                    <div className='text-lg font-semibold  rounded-lg py-2 mt-5'>INCLUDE SOME DETAILS</div>
                    <div className='py-2 overflow-hidden'>
                        <div className='text-md font-bold text-black mb-1'>Product Image</div>
                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div> 
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div> 
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div> 
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div> 
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div> 
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span></p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div> 
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span></p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div> 
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div> 
                        </div>
                    </div>
                    <div className='py-2'>
                        <div className='text-md font-bold text-black mb-1'>Product Name*</div>
                        <input className='w-full py-4 rounded-lg ps-10 shadow' type="text" />
                    </div>
                    <div className='py-2'>
                        <div className='text-md font-bold text-black mb-1'>Price</div>
                        <input className='w-full py-4 rounded-lg ps-10 shadow' type="text" />
                    </div>
                    <div className='py-2'>
                        <div className='text-md font-bold text-black mb-1'>$USD Price</div>
                        <input className='w-full py-4 rounded-lg ps-10 shadow' type="text" />
                    </div>
                    <div className='py-2'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <div className='text-md font-bold text-black mb-1'>Year*</div>
                                <input className='w-full py-4 rounded-lg ps-10 shadow' type="text" />
                            </div>
                            <div>
                                <div className='text-md font-bold text-black mb-1'>Warranty Period*</div>
                                <input className='w-full py-4 rounded-lg ps-10 shadow' type="text" />
                            </div>
                        </div>
                    </div>
                    <div className='py-2'>
                        <div className='text-md font-bold text-black mb-1'>Used Product</div>
                        <div className= {`grid grid-cols-2 yesCheckbox gap-4 ${yesSelected ? 'active' : ''}`}>
                                <div className= 'flex items-center ps-4 border border-gray-200 rounded has-[:checked]:bg-gray-200 has-[:checked]:border-gray-600 '>
                                    <input onClick={handleClick} id="wes-checkbox-1" type="radio" value="" name="dfer" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded accent-gray-600"/>
                                    <label htmlFor="wes-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900">Yes</label>
                                </div>
                                <div className="flex items-center ps-4 border border-gray-200 rounded has-[:checked]:bg-gray-200 has-[:checked]:border-gray-600">
                                    <input id="wes-checkbox-2" type="radio" value="" name="dfer" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded accent-gray-600"/>
                                    <label htmlFor="wes-checkbox-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900">No</label>
                                </div>
                                <div className='usedperiodBox hidden'>
                                    <Listbox value={usedProduct} onChange={setUsedProduct}>
                                        <div className="relative mt-1">
                                            <Listbox.Button className="relative inline-flex items-center text-white/70 gap-1 w-full cursor-default px-4 text-left sm:text-sm font-semibold rounded-lg bg-white py-5 shadow border-b-2 border-black">
                                            <span className="block truncate text-black">{usedProduct.name}</span>
                                            <span className="pointer-events-none absolute inset-y-0 right-[10px] flex items-center">
                                                <ChevronDownIcon
                                                className="h-5 w-5 text-gray-600"
                                                aria-hidden="true"
                                                />
                                            </span>
                                            </Listbox.Button>
                                            <Transition
                                            as={Fragment}
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                            >
                                            <Listbox.Options className="absolute z-50 mt-1 max-h-52 w-full right-0 left-0 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm">
                                                {used.map((person, personIdx) => (
                                                <Listbox.Option
                                                    key={personIdx}
                                                    className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                        active
                                                        ? "bg-black text-theme1 cursor-pointer"
                                                        : "text-gray-900"
                                                    }`
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected }) => (
                                                    <>
                                                        <span
                                                        className={`block truncate ${
                                                            selected ? "font-medium" : "font-normal"
                                                        }`}
                                                        >
                                                        {person.name}
                                                        </span>
                                                        {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                                            <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                            />
                                                        </span>
                                                        ) : null}
                                                    </>
                                                    )}
                                                </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </Listbox>
                                </div>
                            {/* <div>
                                <div className='text-md font-bold text-black mb-1'>Used Product</div>
                                <Listbox value={usedProduct} onChange={setUsedProduct}>
                                    <div className="relative mt-1">
                                        <Listbox.Button className="relative inline-flex items-center text-white/70 gap-1 w-full cursor-default px-4 text-left sm:text-sm font-semibold rounded-lg bg-white py-4 shadow border-b-2 border-black">
                                        <span className="block truncate text-black">{used.name}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-[10px] flex items-center">
                                            <ChevronDownIcon
                                            className="h-5 w-5 text-gray-600"
                                            aria-hidden="true"
                                            />
                                        </span>
                                        </Listbox.Button>
                                        <Transition
                                        as={Fragment}
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                        >
                                        <Listbox.Options className="absolute z-50 mt-1 max-h-52 w-full right-0 left-0 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm">
                                            {used.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                    active
                                                    ? "bg-black text-theme1 cursor-pointer"
                                                    : "text-gray-900"
                                                }`
                                                }
                                                value={person}
                                            >
                                                {({ selected }) => (
                                                <>
                                                    <span
                                                    className={`block truncate ${
                                                        selected ? "font-medium" : "font-normal"
                                                    }`}
                                                    >
                                                    {person.name}
                                                    </span>
                                                    {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                                        <CheckIcon
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                        />
                                                    </span>
                                                    ) : null}
                                                </>
                                                )}
                                            </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                        </Transition>
                                    </div>
                                </Listbox>
                            </div> */}
                        </div>
                    </div>
                    <div className='py-2'>
                        <div className='text-md font-bold text-black mb-1'>Country</div>
                        <Listbox value={country} onChange={setCountry}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative inline-flex items-center text-white/70 gap-1 w-full cursor-default px-4 text-left sm:text-sm font-semibold rounded-lg bg-white py-4 shadow border-b-2 border-black">
                                {/* <span>
                                    <FaGlobeAmericas className="size-4 text-theme1" />
                                </span> */}
                                <span className="block truncate text-black">{country.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronDownIcon
                                    className="h-5 w-5 text-gray-600"
                                    aria-hidden="true"
                                    />
                                </span>
                                </Listbox.Button>
                                <Transition
                                as={Fragment}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                                >
                                <Listbox.Options className="absolute z-50 mt-1 max-h-52 w-full right-0 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm">
                                    {allcountries.map((person, personIdx) => (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                        `relative cursor-default select-none py-2 group pl-10 pr-4 ${
                                            active
                                            ? "bg-black text-theme1 hover:text-theme1 cursor-pointer group/drop"
                                            : "text-gray-900"
                                        }`
                                        }
                                        value={person}
                                    >
                                        {({ selected }) => (
                                        <>
                                            <span
                                            className={`block truncate ${
                                                selected ? "font-medium  " : "font-normal"
                                            }`}
                                            >
                                            <span className="font-semibold text-xs text-black group-hover:text-black group-[]/drop:bg-theme1 bg-black/10 group-hover:bg-theme1 rounded-sm inline-flex items-center justify-center size-6 mr-2">
                                                {person.sortName}
                                            </span>
                                            {person.name}
                                            </span>
                                            {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                                <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                                />
                                            </span>
                                            ) : null}
                                        </>
                                        )}
                                    </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                    <div className='py-2'>
                        <div className='text-md font-bold text-black mb-1'>Category*</div>
                        <Listbox value={brand} onChange={setbrand}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative inline-flex items-center text-white/70 gap-1 w-full cursor-default px-4 text-left sm:text-sm font-semibold rounded-lg bg-white py-4 shadow border-b-2 border-black">
                            {/* <span>
                                <MdOutlineTranslate className="size-4 text-theme1" />
                            </span> */}
                            <span className="block truncate text-black">{brand.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-[10px] flex items-center">
                                <ChevronDownIcon
                                className="h-5 w-5 text-gray-600"
                                aria-hidden="true"
                                />
                            </span>
                            </Listbox.Button>
                            <Transition
                            as={Fragment}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                            >
                            <Listbox.Options className="absolute z-50 mt-1 max-h-52 w-full right-0 left-0 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm">
                                {allBrands.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active
                                        ? "bg-black text-theme1 cursor-pointer"
                                        : "text-gray-900"
                                    }`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                    <>
                                        <span
                                        className={`block truncate ${
                                            selected ? "font-medium" : "font-normal"
                                        }`}
                                        >
                                        {person.name}
                                        </span>
                                        {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                            <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                            />
                                        </span>
                                        ) : null}
                                    </>
                                    )}
                                </Listbox.Option>
                                ))}
                            </Listbox.Options>
                            </Transition>
                        </div>
                        </Listbox>
                    </div>
                    <div className='py-2'>
                        <div className='text-md font-bold text-black mb-1'>Location</div>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Write your Location..."></textarea>
                    </div>
                    <div className='py-2'>
                        <div className='text-md font-bold text-black mb-1'>Condition Of The Product</div>
                        <div className='grid sm:grid-cols-3 gap-4'>
                            <div className="flex items-center ps-4 border border-gray-200 rounded  has-[:checked]:bg-gray-200 has-[:checked]:border-gray-600">
                                <input id="bordered-checkbox-1" type="radio" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded accent-gray-600"/>
                                <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 ">Pre</label>
                            </div>
                            <div className="flex items-center ps-4 border border-gray-200 rounded  has-[:checked]:bg-gray-200 has-[:checked]:border-gray-600">
                                <input id="bordered-checkbox-2" type="radio" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded accent-gray-600"/>
                                <label htmlFor="bordered-checkbox-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 ">Pre Owned</label>
                            </div>
                            <div className="flex items-center ps-4 border border-gray-200 rounded  has-[:checked]:bg-gray-200 has-[:checked]:border-gray-600">
                                <input id="bordered-checkbox-3" type="radio" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded accent-gray-600"/>
                                <label htmlFor="bordered-checkbox-3" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 ">Refurbished</label>
                            </div>
                        </div>
                    </div>
                    <div className='py-2'>
                        <div className='text-md font-bold text-black mb-1'>Specification</div>
                        <div className='grid sm:grid-cols-3 gap-4'>
                            <div className=" inline-block w-full text-sm text-gray-500  bg-white border border-gray-200 rounded-lg shadow-sm">
                                <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
                                    <h3 className="font-semibold text-gray-900 ">Modal Type</h3>
                                </div>
                                <div className="px-3 py-2">
                                    <input className='w-full py-4 rounded-lg ps-10 shadow' type="text" />
                                </div>
                                <div data-popper-arrow></div>
                            </div>
                            
                            <div className=" inline-block w-full text-sm text-gray-500  bg-white border border-gray-200 rounded-lg shadow-sm ">
                                <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg ">
                                    <h3 className="font-semibold text-gray-900">Modal Number</h3>
                                </div>
                                <div className="px-3 py-2">
                                    <input className='w-full py-4 rounded-lg ps-10 shadow' type="text" />
                                </div>
                                <div data-popper-arrow></div>
                            </div>
                            
                            <div className=" inline-block w-full text-sm text-gray-500  bg-white border border-gray-200 rounded-lg shadow-sm ">
                                <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
                                    <h3 className="font-semibold text-gray-900 ">Modal Year</h3>
                                </div>
                                <div className="px-3 py-2">
                                    <input className='w-full py-4 rounded-lg ps-10 shadow' type="text" />
                                </div>
                                <div data-popper-arrow></div>
                            </div>
                        </div>
                    </div>
                    <div className='py-2'>
                        <div className='text-md font-bold text-black mb-1'>Seller Location</div>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Write your Location..."></textarea>
                    </div>
                    <div className='py-2'>
                    <div className='text-md font-bold text-black mb-1'>Discription</div>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder=""></textarea>
                    </div>
                </div>
                <div className="w-full text-center pt-5">
                    <Link className="relative z-10 text-black bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40" to="/seller"> Post Now</Link>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default SelectedCategory