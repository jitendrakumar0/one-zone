import React, { Fragment, useState } from 'react'
import { IoArrowUndo } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { SiWindows10 } from "react-icons/si";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { Disclosure, Listbox, Transition } from '@headlessui/react';
import { MdOutlineTranslate } from 'react-icons/md';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { FaGlobeAmericas } from 'react-icons/fa';
import { SlLocationPin } from "react-icons/sl";

const allBrands = [
    { name: 'Windows' },
    { name: 'Mac' },
    { name: 'Cromebook' },
    { name: 'Mobile' },
    { name: 'Tablets' },
    { name: 'Photocopy Machine' },
    { name: 'Servers' },
    // { name: 'BenQ' },
    // { name: 'Chuwi' },
    // { name: 'Compaq' },
    // { name: 'CyberPowerPC' },
    // { name: 'Dell' },
    // { name: 'Dynabook' },
    // { name: 'Fujitsu' },
    // { name: 'HCL' },
    // { name: 'IBM' },
];
const allcountries = [
    { name: 'Sub Category', sortName: 'IN' },
    { name: 'Window', sortName: 'AF' },
    // { name: 'Algeria', sortName: 'DZ' },
    // { name: 'Angola', sortName: 'AO' },
    // { name: 'Armenia', sortName: 'AM' },
    // { name: 'Azerbaijan', sortName: 'AZ' },
    // { name: 'Bahrain', sortName: 'BH' },
    // { name: 'Bangladesh', sortName: 'BD' },
    // { name: 'Burkina Faso', sortName: 'BF' },
    // { name: 'Burundi', sortName: 'BI' },
    // { name: 'Cameroon', sortName: 'CM' },
    // { name: 'Canada', sortName: 'CA' },
    // { name: 'Central African Republic', sortName: 'CF' },
    // { name: 'Chad', sortName: 'TD' },
    // { name: 'China', sortName: 'CN' },
    // { name: 'Colombia', sortName: 'CO' },
    // { name: 'Comoros', sortName: 'KM' },
    // { name: 'Congo (Congo-Brazzaville)', sortName: 'CG' },
    // { name: 'Democratic Republic of the Congo', sortName: 'CD' },
    // { name: 'Djibouti', sortName: 'DJ' },
    // { name: 'Egypt', sortName: 'EG' },
    // { name: 'Equatorial Guinea', sortName: 'GQ' },
    // { name: 'Eritrea', sortName: 'ER' },
    // { name: 'Ethiopia', sortName: 'ET' },
    // { name: 'Gabon', sortName: 'GA' },
    // { name: 'Gambia', sortName: 'GM' },
    // { name: 'Ghana', sortName: 'GH' },
    // { name: 'Guinea', sortName: 'GN' },
    // { name: 'Guinea-Bissau', sortName: 'GW' }
];
const used = [
    { id: 1, name: '0-6 Months'},
    { id: 2, name: '0-8 Months'},
    { id: 3, name: '0-10 Months' },
    { id: 4, name: '0-11 Months'},
    { id: 5, name: '0-1 Year'},
]

const SelectPackages = () => {

    const [brand, setbrand] = useState(allBrands[0])
    const [country, setCountry] = useState(allcountries[0])
    const [usedProduct, setUsedProduct] = useState(used[0])
    const [yesSelected, setYesSelected] = useState(false)
    const handleClick = () => {
        setYesSelected(!yesSelected);
    };

    return (
        <>
        <div className="header w-full h-10 md:h-20 bg-gray-200 flex items-center px-8">
                <Link to='/seller/select-category'>
                    <IoArrowUndo className='size-6'/>
                </Link>
            </div>
            <div className="max-w-screen-lg mx-auto my-5">
                <div className="header font-bold text-xl md:text-2xl text-center bg-black text-white rounded-lg py-2 md:py-4">
                    SELECT OPTIONS TO SHOW PACKAGES
                </div>
                <div className="border border-gray-400 p-4 rounded-lg mt-8">
                    <div className='py-2'>
                        <div className='text-md font-bold text-black mb-1'>Category</div>
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
                        <div className='text-md font-bold text-black mb-1'>Sub Category</div>
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
                        <div className='text-md font-bold text-black mb-1'>Location</div>
                        <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <SlLocationPin />
                                </div>
                                <input type="text" id="voice-search" className="w-full py-4 rounded-lg ps-10 shadow
                                bg-gray-50 border  border-gray-300 text-gray-900 text-sm block p-2.5 " placeholder="Enter Location" required />
                            </div>
                    </div>
                    <div className='py-2 mt-4'>
                        <Link to='' className='relative z-10 text-black w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase px-4 md:py-2 py-4 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Show Packages</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectPackages