import React from 'react'

import Logo from '../../asstes/img/logo.svg'
import language from '../../asstes/img/india.svg'
import Windows from '../../asstes/img/windows.svg'
import apple from '../../asstes/img/apple.svg'
import Chromebook from '../../asstes/img/Chromebook.svg'
import mobile from '../../asstes/img/mobile&tablet.svg'
import printer from '../../asstes/img/printer.svg'
import Server from '../../asstes/img/Server.svg'
import { Listbox, Menu, Popover, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'



import notification from '../../asstes/img/notification.svg'
// import Menu from '../../asstes/img/Menu.svg'

import { Link } from 'react-router-dom';
import user from '../../asstes/img/User.svg'
import style from './style.scss'
const people = [
  { id: 1, name: 'In', img: language },
  { id: 2, name: 'hhh', img: language },
  { id: 3, name: 'In', img: language },
  { id: 4, name: 'In', img: language },
  { id: 5, name: 'In', img: language },
  { id: 6, name: 'In', img: language },
]
const languageArr = [
  { id: 1, name: 'Hindi' },
  { id: 2, name: 'English' },
  { id: 3, name: 'French' },
]
const Header = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [selectedLanguage, setSelectedLanguage] = useState(languageArr[0])
  return (
    <div className='z-50 sticky top-0'>
      <div className="realtive bg-[#F5F5F7] py-2 border-b z-20 sticky top0">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 z-[1]">
              <div className="lg:flex items-center lg:justify-between justify-center">
                  <div className="sm:flex items-center max-lg:justify-center gap-4">
                      <div>
                          <Link  className="max-sm:justify-center flex items-center text-black sm:text-base text-sm group duration-300 hover:text-[#09757A]">
                              <span className="text-black/90 sm:size-5 size-4 me-2 duration-300 group-hover:text-[#09757A]">
                                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"></path></svg>
                              </span>
                              +01 23456789 
                          </Link>
                      </div>
                      <div>
                          <Link  className="max-sm:justify-center flex items-center text-black sm:text-base text-sm group duration-300 hover:text-[#09757A]">
                              <span className="text-black/90 sm:size-5 size-4 me-2 duration-300 group-hover:text-[#09757A]">

                                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path><path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path></svg>
                              </span>
                              onezone@domain.com
                          </Link>
                      </div>
                  </div>
                  <div>
                      <div className="text-black sm:text-base text-sm lg:-ms-32 flex items-center max-lg:justify-center">Welcome to our store</div>
                  </div>
                  <div className="flex items-center max-lg:justify-center">
                      <div className="relative z-40 flex flex-col">
                          <div className="flex items-center text-black sm:text-base text-sm">
                              <div className="sm:size-5 size-4 me-2 flex items-center">
                                <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                                  <Listbox.Button className='flex items-center'>
                                    <img src={selectedPerson.img} alt="india" className="w-4 h-4 mr-1 rounded-full object-cover"/>
                                    {selectedPerson.name}
                                  </Listbox.Button>
                                    <Listbox.Options className='absolute top-8'>
                                      {people.map((item) => (
                                        <Listbox.Option
                                          key={item.id}
                                          value={item}
                                          disabled={item.unavailable}
                                          className= 'flex items-center cursor-pointer'
                                        >
                                          <img src={item?.img} alt="india" className="w-4 h-4 mr-1 rounded-full object-cover"/>
                                          {item.name}
                                        </Listbox.Option>
                                      ))}
                                    </Listbox.Options>
                                  </Listbox>
                              </div>
                              {/* IN */}
                          </div>
                          <div className="w-fullshadow-md z-[100] bg-white shadow p-2 shadow-black absolute top-8 w-full peer-checked/mm:block hidden">
                              <ul className="flex flex-col gap-1">
                                  <li>
                                      <Link  className="flex items-center text-black text-sm duration-300 hover:text-[#09757A]">
                                          <span className="size-4 me-2 flex items-center">
                                              <img src={language} alt="india" className="size-full rounded-full object-cover"/>
                                          </span>
                                          US
                                      </Link>
                                  </li>
                                  <li>
                                      <Link  className="flex items-center text-black text-sm duration-300 hover:text-[#09757A]">
                                          <span className="size-4 me-2 flex items-center">
                                              <img src={language} alt="india" className="size-full rounded-full object-cover"/>
                                          </span>
                                          UK
                                      </Link>
                                  </li>
                                  <li>
                                      <Link  className="flex items-center text-black text-sm duration-300 hover:text-[#09757A]">
                                          <span className="size-4 me-2 flex items-center">
                                              <img src={language} alt="india" className="size-full rounded-full object-cover"/>
                                          </span>
                                          AR
                                      </Link>
                                  </li>
                                  <li>
                                      <Link  className="flex items-center text-black text-sm duration-300 hover:text-[#09757A]">
                                          <span className="size-4 me-2 flex items-center">
                                              <img src={language} alt="india" className="size-full rounded-full object-cover"/>
                                          </span>
                                          IN
                                      </Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>


      <div className="realtive bg-white py-3 duration-300 transition-all z-10 sticky top-0">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 z-[1]">
              <div className="flex items-center justify-between">
                  <div>
                      <div className="logo h-12  flex">
                          <Link >
                              <img src={Logo} alt="logo" className="size-full"/>
                          </Link>
                      </div>
                      {/* <div className="flex lg:hidden">
                          <label for="sideToggle" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                          </label>
                        </div> */}
                  </div>
                  <div>
                      <ul className="lg:flex hidden items-center justify-center *:text-black *text-sm *:font-normal gap-8">
                          <li>
                              <Link to="/windows-products">
                                  Windows
                              </Link>
                          </li>
                          <li>
                              <Link>
                                  Mac
                              </Link>
                          </li>
                          <li>
                              <Link>
                                  Chromebook
                              </Link>
                          </li>
                          <li>
                              <Link>
                                  Mobile
                              </Link>
                          </li>
                          <li>
                              <Link>
                                  Tablets
                              </Link>
                          </li>
                          <li>
                              <Link>
                                  Photocopy Machine
                              </Link>
                          </li>
                          <li>
                              <Link>
                                  Servers
                              </Link>
                          </li>
                      </ul>
                      <div className="logo md:h-12 h-10 lg:hidden flex md:ms-28 sm:ms-24 ms-16">
                          <Link >
                              <img src={Logo} alt="logo" className="size-full"/>
                          </Link>
                      </div>
                  </div>
                  <div>
                      <ul className="flex items-center justify-center gap-8 ">
                          <li className="md:flex ">
                              <Link  className="text-black size-5 flex items-center relative">
                                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-full" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                                  <span className="absolute -top-2 -right-2 bg-[#FFED00] text-black text-[10px] rounded-full size-4 flex items-center justify-center">0</span>
                              </Link>
                          </li>
                          <li className="md:flex ">
                          <Popover className="relative">
                              <Popover.Button>
                                <div className="text-black size-5 flex items-center relative">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="size-full" xmlns="http://www.w3.org/2000/svg"><path d="M255.9 456c31.1 0 48.1-22 48.1-53h-96.3c0 31 17 53 48.2 53zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.4-11-24.7-24.4-24.6-13.4-.2-24.4 11.2-24.4 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.3 0 25.7-18.8 15.8-31.8z"></path></svg>
                                    <span className="absolute -top-2 -right-2 bg-[#FFED00] text-black text-[10px] rounded-full size-4 flex items-center justify-center">0</span>
                                </div>
                              </Popover.Button>

                              <Popover.Panel className="absolute z-10">
                                <div className="grid grid-cols-2">
                                  <a href="/analytics">Analytics</a>
                                  <a href="/engagement">Engagement</a>
                                  <a href="/security">Security</a>
                                  <a href="/integrations">Integrations</a>
                                </div>

                                <img src="/solutions.jpg" alt="" />
                              </Popover.Panel>
                            </Popover>
                          </li>
                          <li className="md:flex ">
                            <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
                                  <Listbox.Button className='flex items-center'>
                                    {/* <img src={selectedPerson.img} alt="india" className="w-4 h-4 mr-1 rounded-full object-cover"/> */}
                                    <div  className="text-black size-5 flex items-center">
                                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M2.04932 13.0001H7.52725C7.70624 16.2689 8.7574 19.3054 10.452 21.881C5.98761 21.1872 2.5001 17.5403 2.04932 13.0001ZM2.04932 11.0001C2.5001 6.4598 5.98761 2.81288 10.452 2.11914C8.7574 4.69468 7.70624 7.73123 7.52725 11.0001H2.04932ZM21.9506 11.0001H16.4726C16.2936 7.73123 15.2425 4.69468 13.5479 2.11914C18.0123 2.81288 21.4998 6.4598 21.9506 11.0001ZM21.9506 13.0001C21.4998 17.5403 18.0123 21.1872 13.5479 21.881C15.2425 19.3054 16.2936 16.2689 16.4726 13.0001H21.9506ZM9.53068 13.0001H14.4692C14.2976 15.7829 13.4146 18.3733 11.9999 20.5916C10.5852 18.3733 9.70229 15.7829 9.53068 13.0001ZM9.53068 11.0001C9.70229 8.21722 10.5852 5.62684 11.9999 3.40853C13.4146 5.62684 14.2976 8.21722 14.4692 11.0001H9.53068Z"></path></svg>
                                      </div>
                                    {/* {selectedPerson.name} */}
                                  </Listbox.Button>
                                    <Listbox.Options className='absolute top-12'>
                                      {languageArr.map((item) => (
                                        <Listbox.Option
                                          key={item.id}
                                          value={item}
                                          disabled={item.unavailable}
                                          className= 'flex items-center cursor-pointer'
                                        >
                                          {/* <img src={item?.img} alt="india" className="w-4 h-4 mr-1 rounded-full object-cover"/> */}
                                          {item.name}
                                        </Listbox.Option>
                                      ))}
                                    </Listbox.Options>
                                  </Listbox>
                              
                          </li>
                          
                          <li className="md:flex">
                              <div className="text-black size-5 flex items-center">
                                <Menu as="div" className="relative inline-block text-left">
                                  <div className='grid'>
                                    <Menu.Button className="">
                                      <span className="sm:size-5 size-4 me-2 flex items-center">
                                        <img src={user} alt="india" className="size-full"/>
                                      </span>
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
                                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                      <div className="px-1 py-1 ">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button
                                              className={`${
                                                active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                              {active ? (
                                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className='mr-3 h-5 w-5 text-violet-100' xmlns="http://www.w3.org/2000/svg"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                              ) : (
                                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className='mr-3 h-5 w-5 text-violet-500' xmlns="http://www.w3.org/2000/svg"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                              )}
                                              Edit Profile
                                            </button>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button
                                              className={`${
                                                active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                              {active ? (
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className='mr-3 h-5 w-5 text-violet-100' xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 208v-95a80 80 0 0 0-160 0v95"></path><rect width="320" height="272" x="96" y="208" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></rect></svg>
                                              ) : (
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className='mr-3 h-5 w-5 text-violet-500' xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 208v-95a80 80 0 0 0-160 0v95"></path><rect width="320" height="272" x="96" y="208" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></rect></svg>
                                              )}
                                              Change Password
                                            </button>
                                          )}
                                        </Menu.Item>
                                      </div>
                                      <div className="px-1 py-1">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button
                                              className={`${
                                                active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                              {active ? (
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className='mr-3 h-5 w-5 text-violet-100' xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                              ) : (
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className='mr-3 h-5 w-5 text-violet-500' xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                              )}
                                              My Favorite
                                            </button>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button
                                              className={`${
                                                active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                              {active ? (
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className='mr-3 h-5 w-5 text-violet-100' xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg>
                                              ) : (
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className='mr-3 h-5 w-5 text-violet-500' xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></svg>
                                              )}
                                              Chat History
                                            </button>
                                          )}
                                        </Menu.Item>
                                      </div>
                                      <div className="px-1 py-1">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button
                                              className={`${
                                                active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                              {active ? (
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className='mr-3 h-5 w-5 text-violet-100' xmlns="http://www.w3.org/2000/svg"><path d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM12.707 12l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.647c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.647-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z"></path></svg>
                                              ) : (
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className='mr-3 h-5 w-5 text-violet-500' xmlns="http://www.w3.org/2000/svg"><path d="M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM12.707 12l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.647c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.647-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z"></path></svg>
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
                                                active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                              {active ? (
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className='mr-3 h-5 w-5 text-violet-100' xmlns="http://www.w3.org/2000/svg"><path d="M192 277.4h189.7l-43.6 44.7L368 352l96-96-96-96-31 29.9 44.7 44.7H192v42.8z"></path><path d="M255.7 421.3c-44.1 0-85.5-17.2-116.7-48.4-31.2-31.2-48.3-72.7-48.3-116.9 0-44.1 17.2-85.7 48.3-116.9 31.2-31.2 72.6-48.4 116.7-48.4 44 0 85.3 17.1 116.5 48.2l30.3-30.3c-8.5-8.4-17.8-16.2-27.7-23.2C339.7 61 298.6 48 255.7 48 141.2 48 48 141.3 48 256s93.2 208 207.7 208c42.9 0 84-13 119-37.5 10-7 19.2-14.7 27.7-23.2l-30.2-30.2c-31.1 31.1-72.5 48.2-116.5 48.2zM448.004 256.847l-.849-.848.849-.849.848.849z"></path></svg>
                                              ) : (
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className='mr-3 h-5 w-5 text-violet-500' xmlns="http://www.w3.org/2000/svg"><path d="M192 277.4h189.7l-43.6 44.7L368 352l96-96-96-96-31 29.9 44.7 44.7H192v42.8z"></path><path d="M255.7 421.3c-44.1 0-85.5-17.2-116.7-48.4-31.2-31.2-48.3-72.7-48.3-116.9 0-44.1 17.2-85.7 48.3-116.9 31.2-31.2 72.6-48.4 116.7-48.4 44 0 85.3 17.1 116.5 48.2l30.3-30.3c-8.5-8.4-17.8-16.2-27.7-23.2C339.7 61 298.6 48 255.7 48 141.2 48 48 141.3 48 256s93.2 208 207.7 208c42.9 0 84-13 119-37.5 10-7 19.2-14.7 27.7-23.2l-30.2-30.2c-31.1 31.1-72.5 48.2-116.5 48.2zM448.004 256.847l-.849-.848.849-.849.848.849z"></path></svg>
                                              )}
                                              Log out
                                            </button>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    </Menu.Items>
                                  </Transition>
                                </Menu>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>



      <div className="fixed flex flex-col h-screen inset-y-0 right-0 z-[1011] w-full overflow-y-auto bg-[#F5F5F7] select-none text-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black/10 peer-checked/sideToggle:translate-x-0 peer-checked/sideToggle:opacity-100 translate-x-full opacity-0 duration-300">
        <div className="flex items-center justify-between">
          <div className="h-10 flex">
              <Link href="/" className="-ml-1.5 flex items-center">
                  <img src={Logo} alt="logo" className="size-full"/>
              </Link>

          </div>
          <label for="sideToggle" type="button" className="-m-2.5 rounded-md p-2.5 text-black">
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>
        <div className="mt-6 flow-root flex-fill overflow-auto -mr-4 pr-4">
          <div className="-my-6 divide-y divide-black">
            <div className="space-y-2 py-6">
              <div className="flex flex-col gap-5 items-center">
                  <div className="flex flex-col w-full gap-y-5">
                    <div className="relative flex flex-col gap-y-3">
                      <input className="peer/mm hidden" type="checkbox" name="mmMenu" id="mmCompany"/>
                      <label for="mmCompany" className="flex items-center gap-x-[2px] text-sm font-bold text-black">
                        Shop
                        <svg className="h-5 w-5 ml-auto flex-none text-black/90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                      </label>
                      <div className="w-full peer-checked/mm:block hidden">
                        <div className="grid grid-cols-1 flex-wrap w-full gap-4">
                          <div className="w-full text-xs xl:text-sm">
                            <div className="flex items-center gap-x-3 py-2 relative">
                              <div className="flex h-4 w-4 flex-none">
                                <svg className="h-3 w-3 opacity-90" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 9v4"></path><path d="M12 16v.01"></path></svg>
                              </div>
                              <div className="flex-auto">
                                <Link href="/about-us.php" className="block font-semibold">
                                  Laptop
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="flex items-center gap-x-3 py-2 relative">
                              <div className="flex h-4 w-4 flex-none">
                                <svg className="h-3 w-3 opacity-90" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"></path><path d="M12 15l1.57-3.43L17 10l-3.43-1.57L12 5l-1.57 3.43L7 10l3.43 1.57z"></path></svg>
                              </div>
                              <div className="flex-auto">
                                <Link href="/testimonials.php" className="block font-semibold">
                                Mobile
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="flex items-center gap-x-3 py-2 relative">
                              <div className="flex h-4 w-4 flex-none">
                                <svg className="h-3 w-3 opacity-90" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg>
                              </div>
                              <div className="flex-auto">
                                <Link href="https://www.flickr.com/photos/imgglobalinfotech" className="block font-semibold">
                                  Desktop
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="flex items-center gap-x-3 py-2 relative">
                              <div className="flex h-4 w-4 flex-none">
                                <svg className="h-3 w-3 opacity-90" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 12H9C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"></path></svg>
                              </div>
                              <div className="flex-auto">
                                <Link href="/career.php" className="block font-semibold">
                                Mobile
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="flex items-center gap-x-3 py-2 relative">
                              <div className="flex h-4 w-4 flex-none">
                                <svg className="h-3 w-3 opacity-90" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                              </div>
                              <div className="flex-auto">
                                <Link href="/casestudy.php" className="block font-semibold">
                                  Hp Printer
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="flex items-center gap-x-3 py-2 relative">
                              <div className="flex h-4 w-4 flex-none">
                                <svg className="h-3 w-3 opacity-90" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z"></path></svg>
                              </div>
                              <div className="flex-auto">
                                <Link  className="block font-semibold">
                                  Mobile
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                            <div className="flex items-center gap-x-3 py-2 relative">
                              <div className="flex h-4 w-4 flex-none">
                                <svg className="h-3 w-3 opacity-90" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M15 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"></path><path d="M12 9l0 3"></path></svg>
                              </div>
                              <div className="flex-auto">
                                <Link href="/sitemap.html" className="block font-semibold">
                                Mobile
                                  <span className="absolute inset-0 z-[1]"></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              
                    <Link  className="text-sm font-bold text-black">Product</Link>
                    <Link  className="text-sm font-bold text-black">Sale</Link>
                    <Link  className="text-sm font-bold text-black">Portfolio</Link>
                    <Link  className="text-sm font-bold text-black">LookBook</Link>
                    <Link  className="text-sm font-bold text-black">Blog</Link>

                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Header





function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}