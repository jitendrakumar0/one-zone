// import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Listbox, Transition } from '@headlessui/react';
// import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { SlLocationPin } from "react-icons/sl";
import Header from '../components/header/Header';
import Footer from '../../components/Footer/Footer';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

// const allBrands = [
//     { name: 'Windows' },
//     { name: 'Mac' },
//     { name: 'Cromebook' },
//     { name: 'Mobile' },
//     { name: 'Tablets' },
//     { name: 'Photocopy Machine' },
//     { name: 'Servers' },
// ];
// const allcountries = [
//     { name: 'Sub Category', sortName: 'IN' },
//     { name: 'Window', sortName: 'AF' },
// ];

const SelectPackages = () => {

    // const [brand, setbrand] = useState(allBrands[0])
    // const [country, setCountry] = useState(allcountries[0])

    return (
        <>
        <Header/>
            <div className="max-w-screen-md mx-auto my-5">
                <div className="header font-bold text-xl md:text-2xl text-center bg-black text-white rounded-lg py-2 md:py-4">
                    Select Your Location
                </div>
                <div className="border border-gray-400 p-4 rounded-lg mt-8">
                    {/* <div className='py-2'>
                        <div className='text-md font-bold text-black mb-1'>Category</div>
                        <Listbox value={brand} onChange={setbrand}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative inline-flex items-center text-white/70 gap-1 w-full cursor-default px-4 text-left sm:text-sm font-semibold rounded-lg bg-white py-4 shadow border-b-2 border-black">
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
                    </div> */}
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
                    <div className='py-2 mt-4 text-center'>
                        <Link to='/package-discount' className='relative z-10 text-black bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-4 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40'>Next <MdOutlineKeyboardArrowRight className="size-5" /></Link>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default SelectPackages