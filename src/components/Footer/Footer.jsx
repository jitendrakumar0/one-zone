import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid"
import { Fragment, useState } from "react"
import { FaFacebook, FaInstagram, FaSnapchat, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { Link } from "react-router-dom"

const allLanguages = [
  { name: 'English' },
  { name: 'Arabic' },
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

const Footer = () => {
    const [language, setlanguage] = useState(allLanguages[0])
    const [country, setCountry] = useState(allcountries[0])
  return (
    <>
        <div className="bg-gray-200 md:py-10 py-6">
            <div className="flex max-md:flex-wrap text-black md:py-8 gap-y-10 max-w-screen-xl justify-between mx-auto p-4 max-md:text-center">
                <div className="lg:w-1/3 md:w-1/2 w-full md:pr-8 lg:shrink-0 flex flex-col gap-7">
                    <div className="flex flex-col gap-3">
                        <div className="font-bold md:text-sm text-xs uppercase">Onezone</div>
                        <div className="w-full md:text-base text-sm text-gray-600 text-balance">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</div>
                    </div>
                </div>
                <div className="lg:grow md:w-1/2 w-full lg:shrink flex flex-col gap-7">
                    <div className="flex flex-col gap-3">
                        <div className="font-bold md:text-sm text-xs uppercase">Company</div>
                        <Link className="w-full md:text-base text-sm font-semibold text-gray-600 md:hover:text-black">About Us</Link>
                        <Link className="w-full md:text-base text-sm font-semibold text-gray-600 md:hover:text-black">Terms of Use</Link>
                        <Link className="w-full md:text-base text-sm font-semibold text-gray-600 md:hover:text-black">Privacy Policy</Link>
                    </div>
                </div>
                <div className="lg:grow md:w-1/2 w-full lg:shrink flex flex-col gap-7">
                    <div className="flex flex-col gap-3">
                        <div className="font-bold md:text-sm text-xs uppercase">Support</div>
                        <Link className="w-full md:text-base text-sm font-semibold text-gray-600 md:hover:text-black">Contact Us</Link>
                        <Link className="w-full md:text-base text-sm font-semibold text-gray-600 md:hover:text-black">FAQ</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="font-bold md:text-sm text-xs uppercase">Languages</div>
                        <Listbox value={language} onChange={setlanguage}>
                        <div className="relative mt-1">
                            <Listbox.Button className="w-full md:text-left max-md:justify-center md:text-base flex items-center text-sm font-semibold text-gray-600 md:hover:text-black">
                            <span className="block truncate">{language.name}</span>
                            <span> <ChevronDownIcon className="size-5" /></span>
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
                            <Listbox.Options className="absolute mt-1 max-h-60 w-auto right-0 bottom-0 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm">
                                {allLanguages.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-cyan-100 text-cyan-900' : 'text-gray-900'
                                    }`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                    <>
                                        <span
                                        className={`block truncate ${
                                            selected ? 'font-medium' : 'font-normal'
                                        }`}
                                        >
                                        {person.name}
                                        </span>
                                        {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-theme1">
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
                </div>
                <div className="lg:grow md:w-1/2 w-full lg:shrink flex flex-col gap-7">
                    <div className="flex flex-col gap-3">
                        <div className="font-bold md:text-sm text-xs uppercase">Countries</div>
                        <Listbox value={country} onChange={setCountry}>
                        <div className="relative mt-1">
                            <Listbox.Button className="w-full md:text-left max-md:justify-center md:text-base flex items-center text-sm font-semibold text-gray-600 md:hover:text-black">
                            <span className="block truncate">{country.name}</span>
                            <span> <ChevronDownIcon className="size-5" /></span>
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
                            <Listbox.Options className="absolute mt-1 max-h-60 w-auto right-0 bottom-0 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm">
                                {allcountries.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-cyan-100 text-cyan-900' : 'text-gray-900'
                                    }`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                    <>
                                        <span
                                        className={`block truncate ${
                                            selected ? 'font-medium' : 'font-normal'
                                        }`}
                                        >
                                        <span className='font-semibold text-xs text-theme1 bg-theme1/10 rounded-sm inline-flex items-center justify-center size-6 mr-2'>{person.sortName}</span>
                                        {person.name}
                                        </span>
                                        {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-theme1">
                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
                    <div className="flex flex-col gap-3">
                        <div className="font-bold md:text-sm text-xs uppercase">Social Links</div>
                        <div className="w-full">
                            <div className="inline-grid grid-cols-3 mt-4 sm:mt-0 gap-3 max-md:justify-center">
                                <Link className="text-theme1 duration-300 md:hover:text-white md:hover:bg-theme1 bg-theme1/20 p-2 rounded-xl">
                                    <FaFacebook className="size-4" />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link className="text-theme1 duration-300 md:hover:text-white md:hover:bg-theme1 bg-theme1/20 p-2 rounded-xl">
                                    <FaInstagram className="size-4" />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                                <Link className="text-theme1 duration-300 md:hover:text-white md:hover:bg-theme1 bg-theme1/20 p-2 rounded-xl">
                                    <FaYoutube className="size-4" />
                                    <span className="sr-only">Youtube</span>
                                </Link>
                                <Link className="text-theme1 duration-300 md:hover:text-white md:hover:bg-theme1 bg-theme1/20 p-2 rounded-xl">
                                    <FaXTwitter className="size-4" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link className="text-theme1 duration-300 md:hover:text-white md:hover:bg-theme1 bg-theme1/20 p-2 rounded-xl">
                                    <IoLogoTiktok className="size-4" />
                                    <span className="sr-only">TikTok</span>
                                </Link>
                                <Link className="text-theme1 duration-300 md:hover:text-white md:hover:bg-theme1 bg-theme1/20 p-2 rounded-xl">
                                    <FaSnapchat className="size-4" />
                                    <span className="sr-only">Snapchat</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer