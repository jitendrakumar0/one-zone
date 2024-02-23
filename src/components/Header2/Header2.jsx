import { Fragment, useState } from 'react'
import { Link } from "react-router-dom"
import { BiSupport } from "react-icons/bi";
import { Dialog, Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaGlobeAmericas } from "react-icons/fa";
import { LiaSignInAltSolid } from "react-icons/lia";
import { MdOutlineTranslate } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import Logo from '../../asstes/img/logo.png'
import LogoMobile from '../../asstes/img/logoMobile.png'
import { HeaderMenu } from '../header/Header';
import { IoClose } from 'react-icons/io5';

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



const Header2 = () => {
  
  const [country, setCountry] = useState(allcountries[0])
  const [language, setlanguage] = useState(allLanguages[0])
  let [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  return (
    <>
      <div className="bg-black w-full start-0 border-b border-gray-200 relative z-[1000] max-md:hidden">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-0">
          <div
            className="w-1/3 items-center justify-between hidden md:flex md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col py-4 md:p-0">
              <li>
                <Link className="py-2 md:hover:text-white/70 rounded inline-flex items-center gap-1 text-theme1 duration-300">
                  <BiSupport className="size-4" /> support@onezone.pro
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/3 flex md:order-2 space-x-3 md:space-x-0 justify-end">
            <Listbox value={country} onChange={setCountry}>
              <div className="relative mt-1">
                <Listbox.Button className="relative inline-flex items-center text-white/70 gap-1 w-full cursor-default py-2 pl-3 pr-7 text-left sm:text-sm font-semibold">
                  <span>
                    <FaGlobeAmericas className="size-4 text-theme1" />
                  </span>
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
                          `relative cursor-default select-none py-2 group pl-10 pr-4 ${
                            active
                              ? "bg-black text-theme1 hover:text-theme1 cursor-pointer"
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
                              <span className="font-semibold text-xs text-black group-hover:text-black bg-black/10 group-hover:bg-theme1 rounded-sm inline-flex items-center justify-center size-6 mr-2">
                                {person.sortName}
                              </span>
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
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
            <Listbox value={language} onChange={setlanguage}>
              <div className="relative mt-1">
                <Listbox.Button className="relative inline-flex items-center text-white/70 gap-1 w-full cursor-default py-2 pl-3 pr-5 text-left sm:text-sm font-semibold">
                  <span>
                    <MdOutlineTranslate className="size-4 text-theme1" />
                  </span>
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
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-theme1">
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
          <div
            className="w-1/3 items-center justify-center hidden md:flex md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 font-medium">
              <li>
                <div className="block py-2 px-3 text-theme1 rounded md:hover:tracking-widest duration-300">
                  Welcome to Onezone
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="bg-white sticky w-full z-[100] top-0 start-0 border-b border-gray-200 shadow-lg">
        <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={Logo} className="lg:block hidden md:h-12 h-8" alt="Flowbite Logo" />
            <img src={LogoMobile} className="block lg:hidden md:h-12 h-8" alt="Flowbite Logo" />
          </Link>
          <div className="flex md:order-2  md:space-x-0 items-center md:gap-3 gap-1">
            {/* <Link className="bg-theme1 inline-flex items-center justify-center md:size-9 size-7 rounded-full text-black md:hover:bg-black md:hover:text-theme1 duration-300 border-2 border-b-black">
              <LuBellDot className="size-4" />
            </Link> */}
            {/* {!auth ? ( */}
              <Link
                to="/"
                className="text-black bg-theme1 border-2 border-theme1 border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40"
              >
                Login <LiaSignInAltSolid className="size-5" />
              </Link>
              <Link
                to="/seller-signup"
                className="text-black max-md:hidden bg-theme1 border-2 border-theme1 md:h-[40px] h-[32px] border-b-black md:hover:border-b-black !rounded-full font-bold text-xs uppercase px-4 md:py-2 py-2 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40"
              >
                Become A Seller
                {/* <LiaSignInAltSolid className="size-5" /> */}
              </Link>
              
            {/* ) : ( */}
              {/* <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex items-center gap-1 relative pr-5">
                  <img
                    className="bg-theme1/10 inline-flex items-center justify-center md:size-9 size-7 rounded-full border-2 border-theme1/40 text-theme1"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    alt="profile"
                  />
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
                              active ? "bg-theme1 text-white" : "text-gray-900"
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
                              active ? "bg-theme1 text-white" : "text-gray-900"
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
                              active ? "bg-theme1 text-white" : "text-gray-900"
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
                              active ? "bg-theme1 text-white" : "text-gray-900"
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
                              active ? "bg-theme1 text-white" : "text-gray-900"
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
                              active ? "bg-red-500 text-white" : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            onClick={() => {
                              setAuth(false);
                            }}
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
              </Menu> */}
            {/* )} */}
            <button
              onClick={() => setSidebarIsOpen(true)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <CgMenuRight className="size-6" />
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:grow md:px-8 md:order-1"
            id="navbar-sticky"
          >
            {/* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white text-sm">
              <li>
                <NavLink to="/home" className="block py-2 px-3 text-black bg-theme1 rounded md:bg-transparent md:text-theme1 md:p-0">Home</NavLink>
              </li>
              <li>
                <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-theme1 md:p-0">About Us</Link>
              </li>
              <li>
                <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-theme1 md:p-0">All Categories</Link>
              </li>
            </ul> */}
            <div className="relative z-30 flex flex-col justify-center w-full shrink-0">
              <div className="flex flex-col w-full mx-auto">
                <form
                  className="relative flex w-full rounded-md"
                  noValidate
                  role="search"
                >
                  {/* <label
                    htmlFor="top-bar-search"
                    className="flex flex-1 items-center py-0.5"
                  >
                    <input
                      id="top-bar-search"
                      className="text-heading outline-none w-full h-[52px] pl-5 md:pl-6 pr-14 md:pr-16 bg-brand-light text-brand-dark text-sm lg:text-15px rounded-md transition-all duration-200 focus:border-brand focus:ring-0 placeholder:text-brand-dark/50 border border-border-base"
                      placeholder="What are you looking..."
                      aria-label="top-bar-search"
                      autoComplete="off"
                      name="search"
                    />
                  </label> */}
                  {/* <span className="absolute top-0 flex items-center justify-center h-full w-14 md:w-16 right-0 shrink-0 focus:outline-none">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      className="w-5 h-5 text-brand-dark text-opacity-40"
                    >
                      <path
                        d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span> */}
                </form>
                <div className="flex w-full justify-center">
                  <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white text-sm">
                    <HeaderMenu/>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Dialog className="fixed inset-0 z-[1000] bg-black/10 backdrop-blur-sm md:!hidden" open={sidebarIsOpen} onClose={() => setSidebarIsOpen(false)}>
          <Dialog.Panel className="absolute inset-y-0 right-0 w-full ml-20 max-w-80 bg-white h-full flex flex-col overflow-hidden">
              <Dialog.Title className="py-3 px-6 md:text-xl text-lg font-bold border-b border-gray-200 bg-black text-theme1 flex items-center justify-between">
                  <div className="grow">
                      <img src={LogoMobile} className="md:h-12 h-8" alt="Flowbite Logo" />
                  </div>
                  <button onClick={() => setSidebarIsOpen(false)}><IoClose className='size-6' /></button>
              </Dialog.Title>
              <div className="flex p-5 flex-col overflow-y-auto">
                  <HeaderMenu/>
                  {/* <AllSideMenu /> */}
              </div>
          </Dialog.Panel>
      </Dialog>


      <div className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow">
                  <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-4 md:p-5 text-center">
                      <svg className="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                      </svg>
                      <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete this product?</h3>
                      <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                          Yes, I'm sure
                      </button>
                      <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No, cancel</button>
                  </div>
              </div>
          </div>
      </div>

    </>
  );
}

export default Header2



