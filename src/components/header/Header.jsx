import { Fragment, useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import { BiSupport } from "react-icons/bi";
import { Listbox, Transition, Menu } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaGlobeAmericas } from "react-icons/fa";
import { LiaSignInAltSolid } from "react-icons/lia";
import { LuBellDot, LuUnlock } from "react-icons/lu";
import { MdOutlineTranslate } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { FiEdit2, FiHeart } from "react-icons/fi";
import { IoChatboxOutline, IoCloseCircleOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import Logo from '../../asstes/img/logo.svg'

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
const allLanguages = [
  { name: 'English' },
  { name: 'Arabic' },
];



const Header = ({auth, setAuth}) => {
  
  const [country, setCountry] = useState(allcountries[0])
  const [language, setlanguage] = useState(allLanguages[0])

  return (
    <>
      <div className="bg-gray-200 w-full start-0 border-b border-gray-200 relative z-[1000] max-md:hidden">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-0">
          <div className="w-1/3 items-center justify-between hidden md:flex md:order-1" id="navbar-sticky">
            <ul className="flex flex-col py-4 md:p-0">
              <li>
                <Link className="py-2 text-gray-700 rounded inline-flex items-center gap-1 md:hover:text-theme1 duration-300"><BiSupport className="size-4" /> support@onezone.com</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/3 flex md:order-2 space-x-3 md:space-x-0 justify-end">
            <Listbox value={country} onChange={setCountry}>
              <div className="relative mt-1">
                <Listbox.Button className="relative inline-flex items-center gap-1 w-full cursor-default py-2 pl-3 pr-7 text-left sm:text-sm font-semibold">
                  <span><FaGlobeAmericas className='size-4 text-theme1' /></span>
                  <span className="block truncate">{country.sortName}</span>
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
                  <Listbox.Options className="absolute mt-1 max-h-60 w-auto right-0 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm">
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
            <Listbox value={language} onChange={setlanguage}>
              <div className="relative mt-1">
                <Listbox.Button className="relative inline-flex items-center gap-1 w-full cursor-default py-2 pl-3 pr-5 text-left sm:text-sm font-semibold">
                  <span><MdOutlineTranslate className='size-4 text-theme1' /></span>
                  <span className="block truncate">{language.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
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
                  <Listbox.Options className="absolute mt-1 max-h-60 w-auto right-0 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm">
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
          <div className="w-1/3 items-center justify-center hidden md:flex md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 font-medium">
              <li>
                <div className="block py-2 px-3 text-gray-600 rounded md:hover:tracking-widest duration-300">Welcome to Onezone</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="bg-white sticky w-full z-[100] top-0 start-0 border-b border-gray-200 shadow-lg">
        <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
          <Link to='/' className="flex items-center space-x-3">
            <img src={Logo} className="md:h-12 h-8" alt="Flowbite Logo" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 items-center gap-4">
            <Link className='bg-theme1/10 inline-flex items-center justify-center md:size-9 size-7 rounded-md text-theme1 md:hover:bg-theme1 md:hover:text-white duration-300'><LuBellDot className='size-4' /></Link>
            {
              !auth ? 
              <Link to="/signup" className="text-white bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-transparent md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Sign Up <LiaSignInAltSolid className='size-5' /></Link>
            :
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex items-center gap-1 relative pr-5">
                  <img className='bg-theme1/10 inline-flex items-center justify-center md:size-9 size-7 rounded-full border-2 border-theme1/40 text-theme1' src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="profile" />
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <ChevronDownIcon
                        className="h-5 w-5 text-gray-600"
                        aria-hidden="true"
                      />
                    </span>
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
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none font-semibold">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-theme1 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <FiEdit2
                                className="mr-3 ml-1 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <FiEdit2
                                className="mr-3 ml-1 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Edit Profile
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-theme1 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <LuUnlock
                                className="mr-3 ml-1 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <LuUnlock
                                className="mr-3 ml-1 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Change Password
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-theme1 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <FiHeart
                                className="mr-3 ml-1 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <FiHeart
                                className="mr-3 ml-1 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            My Favorite
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-theme1 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <IoChatboxOutline
                                className="mr-3 ml-1 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <IoChatboxOutline
                                className="mr-3 ml-1 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Chat History
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-theme1 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <IoCloseCircleOutline
                                className="mr-3 ml-1 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <IoCloseCircleOutline
                                className="mr-3 ml-1 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Delete Account
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? 'bg-red-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            onClick={()=>{setAuth(false)}}
                          >
                            {active ? (
                              <AiOutlineLogout
                                className="mr-3 ml-1 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <AiOutlineLogout
                                className="mr-3 ml-1 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Log out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            }
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
              <CgMenuRight className='size-6' />
            </button>
            
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white text-sm">
              <li>
                <NavLink to="/" className="block py-2 px-3 text-white bg-theme1 rounded md:bg-transparent md:text-theme1 md:p-0">Home</NavLink>
              </li>
              <li>
                <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-theme1 md:p-0">About Us</Link>
              </li>
              <li>
                <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-theme1 md:p-0">All Categories</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header



