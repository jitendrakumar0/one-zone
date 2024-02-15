import React, { Fragment, useEffect, useState } from 'react'
import Header from '../../components/header/Header';
import { IoCheckmarkDone } from "react-icons/io5";
import { Transition } from '@headlessui/react';
import ChatPopup from '../../components/ChatPopUp/ChatPopup';
import { FaRegFlag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react'
import { IoMdArrowBack } from "react-icons/io";
import SafetyModal from './Component/SafetyModal';


const deleteChatoption =[
    {id:1, name: 'Delete Chat'},
    // {id:1, name: 'Delete Multiple Chat'},
]

const Chatoption =[
    // {id:1, name: 'Reply'},
    // {id:1, name: 'Forward'},
    {id:1, name: 'Copy'},
    // {id:1, name: 'Report'},
    {id:1, name: 'Delete'},
]

const Chat = () => {
    
    const [click, setClick] = useState(false);
        useEffect(() => {
        if (click) {
        document.body.classList.add('active-class');
        } else {
        document.body.classList.remove('active-class');
        }
        return () => {
        document.body.classList.remove('active-class');
        };
    }, [click]);

    const [activeTab, setActiveTab] = useState('tab1');
    const handleTabClick = (tab) => {
    setActiveTab(tab);
    };
        const allChat = [
        { name: 'Delete Chat' },
        { name: 'Delete Multiple Chats' },
        ];
        
    const [deleteChat, setdeleteChat] = useState(allChat[0])
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenFlag, setIsOpenFlag] = useState(false)
    const [isOpenSaftey, setIsOpenSaftey] = useState(false)

    const openSafteyModal = ()=>{
        setIsOpenSaftey(true)
    }

    const dropDownOptions = [
        {id:1, name: 'Saftey Tips', fun:openSafteyModal},
        // {id:1, name: 'Delete Chat'},
        // {id:1, name: 'Block User'},
    ]
    
        const handleClick = () => {
        setClick(!click);
    };

    function closeFlagModal() {
        setIsOpenFlag(false)
    }

    function openFlagModal() {
        setIsOpenFlag(true)
    }

    function closeModal() {
    setIsOpen(false)
    }

    return (
        <>
            <Header/>
            <div className= 'chatParent  max-w-screen-xl flex justify-between mx-auto p-4 pt-4 h-[calc(100vh-70px)] md:h-[calc(100vh-174px)] overflow-hidden '>
                <div className='col-auto relative w-full md:w-[50%] lg:w-2/5'>
                    <div className='w-full h-full border border-slate-400 md:rounded-tl-md'>
                        <div className='w-full flex flex-col h-full overflow-hidden'>
                            <div className='header'>
                                <div className='w-full flex items-center justify-between bg-gray-200 h-16 p-0 md:rounded-tl-md px-5 border border-b-slate-400'>
                                    <form className="w-full mx-auto">
                                        <div className="flex">
                                            {/* <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                                            <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                    </svg></button> */}
                                            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                                <li>
                                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                                                </li>
                                                <li>
                                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                                                </li>
                                                <li>
                                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                                                </li>
                                                <li>
                                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                                                </li>
                                                </ul>
                                            </div>
                                            <div className="relative w-full">
                                                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-50  border border-gray-300" placeholder="Search" required />
                                                <button type="submit" className="absolute top-0 end-0 p-2.5 bg-transparent text-sm font-medium h-full text-black rounded-e-md  ">
                                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                    </svg>
                                                    <span className="sr-only">Search</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    {/* <div className='text-black text-xl font-bold w-full'>INBOX</div> */}
                                    <div className='font-bold flex gap-4'>
                                        {/* <FaSearch /> */}
                                        {/* <HiDotsVertical /> */}
                                    </div>
                                    <div></div>
                                </div>
                                {/* <div className='text-xs text-black mb-2 px-5 pt-2'>Quick Filters</div>
                                <div className="flex items-center px-5 pb-4">
                                    <button
                                        className={`w-24 text-center border  shadow-lg text-white py-1 ${activeTab === 'tab1' ? 'bg-black text-white border-0 border-b-2 border-theme1' : 'bg-[#9f9fa1]'}`}
                                        onClick={() => handleTabClick('tab1')}
                                    >
                                    All
                                    </button>
                                    <button
                                        className={`w-24 text-center border mx-2  shadow-lg text-white py-1 ${activeTab === 'tab2' ? 'bg-black text-white border-0 border-b-2 border-theme1' : 'bg-[#9f9fa1]'}`}
                                        onClick={() => handleTabClick('tab2')}
                                        >
                                        Meeting
                                    </button>
                                    <button
                                        className={`w-24 text-center border  shadow-lg text-white mx-2 py-1 ${activeTab === 'tab3' ? 'bg-black text-white border-0 border-b-2 border-theme1' : 'bg-[#9f9fa1]'}`}
                                        onClick={() => handleTabClick('tab3')}
                                        >
                                        Unread
                                    </button>
                                    <button
                                        className={`w-24 text-center border  shadow-lg text-white py-1 ${activeTab === 'tab4' ? 'bg-black text-white border-0 border-b-2 border-theme1' : 'bg-[#9f9fa1]'}`}
                                        onClick={() => handleTabClick('tab4')}
                                        >
                                        Important
                                    </button>
                                </div> */}
                            </div>
                            <div className="bodyyy overflow-y-auto flex-grow h-full">
                                <div className="tab-content">
                                    {activeTab === 'tab1' && 
                                        <>
                                            <div onClick={handleClick} className='flex bg-gray-200 px-5 py-6 border border-b-slate-400'>
                                                <div className='col-auto'>
                                                    <div className="user  rounded-md relative cursor-pointer">
                                                        <img className='w-14 h-14 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FBe113B4a9BYPo2IMGrtgym2plpPyfOfiA&usqp=CAU" alt="" />
                                                        <img className='absolute size-8 rounded-full top-8 -right-4 border border-white' src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="" />
                                                    </div>
                                                </div>
                                                <div className='flex-grow '>
                                                    <div className='flex items-center justify-between mx-6'>
                                                        <div className='text-black text-md font-bold'>OLX India</div>
                                                        <div className='text-sm text-gray-600'>YESTERDAY</div>
                                                    </div>
                                                    <div className="flex justify-between items-center ms-6 me-0">
                                                        <div className='text-sm text-black'>iPhone 13 128  GB</div>
                                                        <div>
                                                        {/* <HiDotsVertical /> */}
                                                            <ChatPopup dropDownOptions={deleteChatoption}/>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center text-sm text-gray-500 mt-2 mx-6'><IoCheckmarkDone />Are you there ?</div>
                                                </div>
                                            </div>
                                            
                                            <div onClick={handleClick} className='flex bg-gray-200 px-5 py-6 border border-b-slate-400'>
                                                <div className='col-auto'>
                                                    <div className="user  rounded-md relative cursor-pointer">
                                                        <img className='w-14 h-14 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FBe113B4a9BYPo2IMGrtgym2plpPyfOfiA&usqp=CAU" alt="" />
                                                        <img className='absolute size-8 rounded-full top-8 -right-4 border border-white' src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="" />
                                                    </div>
                                                </div>
                                                <div className='flex-grow '>
                                                    <div className='flex items-center justify-between mx-6'>
                                                        <div className='text-black text-md font-bold'>OLX India</div>
                                                        <div className='text-sm text-gray-600'>YESTERDAY</div>
                                                    </div>
                                                    <div className="flex justify-between items-center ms-6 me-0">
                                                        <div className='text-sm text-black'>iPhone 13 128  GB</div>
                                                        <div>
                                                        {/* <HiDotsVertical /> */}
                                                            <ChatPopup dropDownOptions={deleteChatoption}/>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center text-sm text-gray-500 mt-2 mx-6'><IoCheckmarkDone />Are you there ?</div>
                                                </div>
                                            </div>

                                            <div onClick={handleClick}className='flex bg-gray-200 px-5 py-6 border border-b-slate-400'>
                                                <div className='col-auto'>
                                                    <div className="user  rounded-md relative cursor-pointer">
                                                        <img className='w-14 h-14 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FBe113B4a9BYPo2IMGrtgym2plpPyfOfiA&usqp=CAU" alt="" />
                                                        <img className='absolute size-8 rounded-full top-8 -right-4 border border-white' src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="" />
                                                    </div>
                                                </div>
                                                <div className='flex-grow '>
                                                    <div className='flex items-center justify-between mx-6'>
                                                        <div className='text-black text-md font-bold'>OLX India</div>
                                                        <div className='text-sm text-gray-600'>YESTERDAY</div>
                                                    </div>
                                                    <div className="flex justify-between items-center ms-6 me-0">
                                                        <div className='text-sm text-black'>iPhone 13 128  GB</div>
                                                        <div>
                                                        {/* <HiDotsVertical /> */}
                                                            <ChatPopup dropDownOptions={deleteChatoption}/>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center text-sm text-gray-500 mt-2 mx-6'><IoCheckmarkDone />Are you there ?</div>
                                                </div>
                                            </div>

                                            <div onClick={handleClick} className='flex bg-gray-200 px-5 py-6 border border-b-slate-400'>
                                                <div className='col-auto'>
                                                    <div className="user  rounded-md relative cursor-pointer">
                                                        <img className='w-14 h-14 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FBe113B4a9BYPo2IMGrtgym2plpPyfOfiA&usqp=CAU" alt="" />
                                                        <img className='absolute size-8 rounded-full top-8 -right-4 border border-white' src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="" />
                                                    </div>
                                                </div>
                                                <div className='flex-grow '>
                                                    <div className='flex items-center justify-between mx-6'>
                                                        <div className='text-black text-md font-bold'>OLX India</div>
                                                        <div className='text-sm text-gray-600'>YESTERDAY</div>
                                                    </div>
                                                    <div className="flex justify-between items-center ms-6 me-0">
                                                        <div className='text-sm text-black'>iPhone 13 128  GB</div>
                                                        <div>
                                                        {/* <HiDotsVertical /> */}
                                                            <ChatPopup dropDownOptions={deleteChatoption}/>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center text-sm text-gray-500 mt-2 mx-6'><IoCheckmarkDone />Are you there ?</div>
                                                </div>
                                            </div>

                                            <div onClick={handleClick} className='flex bg-gray-200 px-5 py-6 border border-b-slate-400'>
                                                <div className='col-auto'>
                                                    <div className="user  rounded-md relative cursor-pointer">
                                                        <img className='w-14 h-14 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FBe113B4a9BYPo2IMGrtgym2plpPyfOfiA&usqp=CAU" alt="" />
                                                        <img className='absolute size-8 rounded-full top-8 -right-4 border border-white' src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="" />
                                                    </div>
                                                </div>
                                                <div className='flex-grow '>
                                                    <div className='flex items-center justify-between mx-6'>
                                                        <div className='text-black text-md font-bold'>OLX India</div>
                                                        <div className='text-sm text-gray-600'>YESTERDAY</div>
                                                    </div>
                                                    <div className="flex justify-between items-center ms-6 me-0">
                                                        <div className='text-sm text-black'>iPhone 13 128  GB</div>
                                                        <div>
                                                        {/* <HiDotsVertical /> */}
                                                            <ChatPopup dropDownOptions={deleteChatoption}/>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center text-sm text-gray-500 mt-2 mx-6'><IoCheckmarkDone />Are you there ?</div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                    {activeTab === 'tab2' && <p>Content for Tab 2 goes here.</p>}
                                    {activeTab === 'tab3' && <p>Content for Tab 3 goes here.</p>}
                                    {activeTab === 'tab4' && <p>Content for Tab 4 goes here.</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-grow md:block hidden rightPart'>
                    <div className='w-full flex flex-col h-full border border-slate-400 border-l-0 md:rounded-tr-md overflow-hidden'>
                        <div className='header'>
                            <Link to='/user-detail' className='w-full flex items-center justify-between bg-gray-200 h-16 p-0 md:rounded-tr-md px-2 md:px-5 border border-b-slate-400'>
                                <div className='col-auto flex items-center'>
                                <IoMdArrowBack onClick={()=>setClick(false)} className='me-2 size-6 md:hidden block'/>
                                    <div className="user  rounded-md relative cursor-pointer">
                                        <img className='w-10 h-10 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FBe113B4a9BYPo2IMGrtgym2plpPyfOfiA&usqp=CAU" alt="" />
                                        <img className='absolute size-6 rounded-full top-5 -right-2 border border-white' src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="" />
                                    </div>
                                </div>
                                <div className='flex-grow'>
                                    <div className='flex items-center justify-between ms-5 mr-1'>
                                        <div className='text-black text-md font-bold'>OLX India</div>
                                        <div className='flex gap-4 items-center'>
                                            <FaRegFlag onClick={openFlagModal}/>
                                            {/* <TbPhoneCall onClick={openModal} /> */}
                                            <ChatPopup dropDownOptions={dropDownOptions}/>
                                            {/* <IoClose onClick={()=>setClick(false)} className='md:hidden block size-6'/> */}
                                            {/* <HiDotsVertical /> */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/product-detail' className='w-full flex gap-6 px-5 py-2 bg-white'>
                                <div className='text-sm tex-black'>Lenovo 18 128</div>
                                <div className='text-sm font-bold tex-black'>₹120000</div>
                            </Link>
                        </div>
                        <div className='bodyy h-full flex-grow overflow-y-auto flex flex-col-reverse'>
                            <div className='w-full bg-gray-200 py-5   '>
                                <div className='text-center text-gray-600 font-medium text-sm uppercase mt-2'>Yesterday</div>
                                {/* text chat */}
                                <div className="flex items-start gap-2.5 mx-5 mt-5 group/bubble [&.sent]:[direction:rtl]">
                                    <img className="w-8 h-8 rounded-full group-[.sent]/bubble:[direction:ltr]" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Jese"/>
                                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 group-[.sent]/bubble:[direction:ltr] p-4 border-gray-200 bg-gray-100 group-[.sent]/bubble:rounded-s-xl group-[.sent]/bubble:rounded-tr-none rounded-e-xl  group-[.sent]/bubble:rounded-ss-xl rounded-es-xl">
                                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                            <span className="text-sm font-semibold text-gray-900">Bonnie Green</span>
                                            <span className="text-sm font-normal text-gray-500">11:46</span>
                                        </div>
                                        <p className="text-sm font-normal py-2.5 text-gray-900">That's awesome. I think our users will really appreciate the improvements.</p>
                                        <span className="text-sm font-normal text-gray-500">Not Delivered</span>
                                    </div>
                                    <div className='inline-flex self-center items-center group-[.sent]/bubble:[direction:ltr]'>
                                        <ChatPopup dropDownOptions={Chatoption}/>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-2.5 mx-5 mt-5 group/bubble sent [&.sent]:[direction:rtl]">
                                    <img className="w-8 h-8 rounded-full group-[.sent]/bubble:[direction:ltr]" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Jese"/>
                                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 group-[.sent]/bubble:[direction:ltr] p-4 border-gray-200 bg-gray-100 group-[.sent]/bubble:rounded-s-xl group-[.sent]/bubble:rounded-tr-none rounded-e-xl  group-[.sent]/bubble:rounded-ss-xl rounded-es-xl">
                                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                            <span className="text-sm font-semibold text-gray-900">Bonnie Green</span>
                                            <span className="text-sm font-normal text-gray-500">11:46</span>
                                        </div>
                                        <p className="text-sm font-normal py-2.5 text-gray-900">That's awesome. I think our users will really appreciate the improvements.</p>
                                        <span className="text-sm font-normal text-gray-500">Pending</span>
                                    </div>
                                    <div className='inline-flex self-center items-center group-[.sent]/bubble:[direction:ltr]'>
                                        <ChatPopup dropDownOptions={Chatoption}/>
                                    </div>
                                </div>
                                {/* text chat */}
                                
                                {/* image chat */}
                                <div className="flex items-start gap-2.5 mx-5 mt-5  group/bubble  [&.sent]:[direction:rtl]">
                                <img className="w-8 h-8 rounded-full group-[.sent]/bubble:[direction:ltr]" src="https://t4.ftcdn.net/jpg/01/87/61/61/360_F_187616108_v8oMYk5q7rKJXtZOfWOLoz51HcVu0JZl.jpg" alt="Bonnie Green"/>
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 group-[.sent]/bubble:[direction:ltr] p-4 border-gray-200 bg-gray-100 group-[.sent]/bubble:rounded-s-xl group-[.sent]/bubble:rounded-tr-none rounded-e-xl  group-[.sent]/bubble:rounded-ss-xl rounded-es-xl">
                                        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                                        </div>
                                        <p className="text-sm font-normal text-gray-900 dark:text-white">This is the new office </p>
                                        <div className="group relative my-2.5">
                                            <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                                <button data-tooltip-target="download" className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                                                    <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
                                                    </svg>
                                                </button>
                                                <div id="download" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                                    Download image
                                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                                </div>
                                            </div>
                                            <img src="https://t4.ftcdn.net/jpg/01/87/61/61/360_F_187616108_v8oMYk5q7rKJXtZOfWOLoz51HcVu0JZl.jpg" className="rounded-lg" />
                                        </div>
                                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                                    </div>
                                </div>
                                <div className='inline-flex self-center items-center  group-[.sent]/bubble:[direction:ltr]'>
                                    <ChatPopup dropDownOptions={Chatoption}/>
                                </div>
                                </div>
                                    
                                <div className="flex items-start gap-2.5 mx-5 mt-5  group/bubble sent [&.sent]:[direction:rtl]">
                                <img className="w-8 h-8 rounded-full group-[.sent]/bubble:[direction:ltr]" src="https://t4.ftcdn.net/jpg/01/87/61/61/360_F_187616108_v8oMYk5q7rKJXtZOfWOLoz51HcVu0JZl.jpg" alt="Bonnie Green"/>
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 group-[.sent]/bubble:[direction:ltr] p-4 border-gray-200 bg-gray-100 group-[.sent]/bubble:rounded-s-xl group-[.sent]/bubble:rounded-tr-none rounded-e-xl  group-[.sent]/bubble:rounded-ss-xl rounded-es-xl">
                                        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                                        </div>
                                        <p className="text-sm font-normal text-gray-900 dark:text-white">This is the new office </p>
                                        <div className="group relative my-2.5">
                                            <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                                <button data-tooltip-target="download" className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                                                    <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
                                                    </svg>
                                                </button>
                                                <div id="download" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                                    Download image
                                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                                </div>
                                            </div>
                                            <img src="https://t4.ftcdn.net/jpg/01/87/61/61/360_F_187616108_v8oMYk5q7rKJXtZOfWOLoz51HcVu0JZl.jpg" className="rounded-lg" />
                                        </div>
                                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                                    </div>
                                </div>
                                <div className='inline-flex self-center items-center  group-[.sent]/bubble:[direction:ltr]'>
                                    <ChatPopup dropDownOptions={Chatoption}/>
                                </div>
                                </div>
                                {/* image chat */}
                                
                                
                                 {/*file chat  */}
                                <div className="flex items-start gap-2.5 mx-5 mt-5 group/bubble  [&.sent]:[direction:rtl]">
                                <img className="w-8 h-8 rounded-full group-[.sent]/bubble:[direction:ltr]" src="https://t4.ftcdn.net/jpg/01/87/61/61/360_F_187616108_v8oMYk5q7rKJXtZOfWOLoz51HcVu0JZl.jpg" alt="Jese"/>
                                <div className="flex flex-col gap-1 group-[.sent]/bubble:[direction:ltr]">
                                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                        <span className="text-sm font-semibold text-gray-900">Bonnie Green</span>
                                        <span className="text-sm font-normal text-gray-500">11:46</span>
                                    </div>
                                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 group-[.sent]/bubble:[direction:ltr] p-4 border-gray-200 bg-gray-100 group-[.sent]/bubble:rounded-s-xl group-[.sent]/bubble:rounded-tr-none rounded-e-xl  group-[.sent]/bubble:rounded-ss-xl rounded-es-xl">
                                        <div className="flex items-start bg-gray-50 rounded-xl p-2">
                                            <div className="me-2">
                                            <span className="flex items-center gap-2 text-sm font-medium text-gray-900 pb-2">
                                                <svg fill="none" aria-hidden="true" className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 21">
                                                    <g clipPath="url(#clip0_3173_1381)">
                                                        <path fill="#E2E5E7" d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z"/>
                                                        <path fill="#B0B7BD" d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z"/>
                                                        <path fill="#CAD1D8" d="M18.774 9.25l-3.75-3.75h3.75v3.75z"/>
                                                        <path fill="#F15642" d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z"/>
                                                        <path fill="#fff" d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z"/>
                                                        <path fill="#CAD1D8" d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_3173_1381">
                                                        <path fill="#fff" d="M0 0h20v20H0z" transform="translate(0 .5)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                Flowbite Terms & Conditions
                                            </span>
                                            <span className="flex text-xs font-normal text-gray-500 gap-2">
                                                12 Pages 
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                                    <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                                                </svg>
                                                18 MB 
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                                    <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                                                </svg>
                                                PDF
                                            </span>
                                            </div>
                                            <div className="inline-flex self-center items-center">
                                            <button className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50" type="button">
                                                <svg className="w-4 h-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                                                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                                                </svg>
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm font-normal text-gray-500">Delivered</span>
                                </div>
                                <div className='inline-flex self-center items-center'>
                                    <ChatPopup dropDownOptions={Chatoption}/>
                                </div>
                                </div>

                                <div className="flex items-start gap-2.5 mx-5 mt-5 group/bubble sent [&.sent]:[direction:rtl]">
                                <img className="w-8 h-8 rounded-full group-[.sent]/bubble:[direction:ltr]" src="https://t4.ftcdn.net/jpg/01/87/61/61/360_F_187616108_v8oMYk5q7rKJXtZOfWOLoz51HcVu0JZl.jpg" alt="Jese"/>
                                <div className="flex flex-col gap-1 group-[.sent]/bubble:[direction:ltr]">
                                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                        <span className="text-sm font-semibold text-gray-900">Bonnie Green</span>
                                        <span className="text-sm font-normal text-gray-500">11:46</span>
                                    </div>
                                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 group-[.sent]/bubble:[direction:ltr] p-4 border-gray-200 bg-gray-100 group-[.sent]/bubble:rounded-s-xl group-[.sent]/bubble:rounded-tr-none rounded-e-xl  group-[.sent]/bubble:rounded-ss-xl rounded-es-xl">
                                        <div className="flex items-start bg-gray-50 rounded-xl p-2">
                                            <div className="me-2">
                                            <span className="flex items-center gap-2 text-sm font-medium text-gray-900 pb-2">
                                                <svg fill="none" aria-hidden="true" className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 21">
                                                    <g clipPath="url(#clip0_3173_1381)">
                                                        <path fill="#E2E5E7" d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z"/>
                                                        <path fill="#B0B7BD" d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z"/>
                                                        <path fill="#CAD1D8" d="M18.774 9.25l-3.75-3.75h3.75v3.75z"/>
                                                        <path fill="#F15642" d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z"/>
                                                        <path fill="#fff" d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z"/>
                                                        <path fill="#CAD1D8" d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_3173_1381">
                                                        <path fill="#fff" d="M0 0h20v20H0z" transform="translate(0 .5)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                Flowbite Terms & Conditions
                                            </span>
                                            <span className="flex text-xs font-normal text-gray-500 gap-2">
                                                12 Pages 
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                                    <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                                                </svg>
                                                18 MB 
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                                    <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                                                </svg>
                                                PDF
                                            </span>
                                            </div>
                                            <div className="inline-flex self-center items-center">
                                            <button className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50" type="button">
                                                <svg className="w-4 h-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                                                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                                                </svg>
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm font-normal text-gray-500">Delivered</span>
                                </div>
                                <div className='inline-flex self-center items-center'>
                                    <ChatPopup dropDownOptions={Chatoption}/>
                                </div>
                                </div>
                                {/*file chat  */}
                            </div>
                        </div>
                        <div className='footer'>
                            <div className="border-t-2 border-gray-200 px-4 py-4 mb-2 sm:mb-0 bg-white">
                                <div className="relative flex">
                                    <span className="absolute inset-y-0 flex items-center">
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="h-6 w-6 text-gray-600"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                            />
                                        </svg>
                                        </button>
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Write your message!"
                                        className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                                    />
                                    <div className="absolute right-0 items-center inset-y-0 sm:flex">
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center rounded-lg  px-[0.75rem] md:px-4 py-3 transition duration-500 ease-in-out text-theme1 bg-black hover:bg-black/80 focus:outline-none"
                                        >
                                            <span className="font-bold md:block hidden">Send</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-6 w-6 ml-2 transform rotate-90"
                                            >
                                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>








        {/* <div>
            <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
                <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
                    <div className="relative flex items-center gap-x-4">
                        <div className="relative">
                            <span className="absolute text-green-500 -right-1 -bottom-1">
                                <svg width={20} height={20}>
                                    <circle cx={8} cy={8} r={8} fill="currentColor" />
                                </svg>
                            </span>
                            <img
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                                alt=""
                                className="size-7 sm:size-12 rounded-full"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <div className="text-xl mt-1 flex items-center">
                                <span className="text-gray-700 mr-3 font-semibold">Anderson Vanhron</span>
                            </div>
                            <span className="text-base text-gray-600">Junior Developer</span>
                        </div>
                    </div>
                    <div className="relative flex items-center gap-x-4">
                        <div className="relative">
                            <img
                                src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70"
                                alt=""
                                className="size-7 sm:size-12 rounded-lg object-contain bg-black"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <div className="text-xl mt-1 flex items-center max-w-72">
                                <span className="text-gray-700 text-balance ml-3 font-semibold w-full md:text-base text-sm overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [display:-webkit-box]">ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5 ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="messages"
                    className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                >
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 md:text-base text-sm max-w-xs mx-2 order-2 items-start">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                        Can be verified on any platform using docker
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                                alt="My profile"
                                className="md:size-8 size-6 rounded-full order-1"
                            />
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 md:text-base text-sm max-w-xs mx-2 order-1 items-end">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black/90 text-theme1">
                                        Your error message says permission denied, npm global
                                        installs must be given root privileges.
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                                alt="My profile"
                                className="md:size-8 size-6 rounded-full order-2"
                            />
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 md:text-base text-sm max-w-xs mx-2 order-2 items-start">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                        Command was run with root privileges. I'm sure about that.
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                        I've update the description so it's more obviously now
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                        FYI https://askubuntu.com/a/700266/510172
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                        Check the line above (it ends with a # so, I'm running it as
                                        root )<pre># npm install -g @vue/devtools</pre>
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                                alt="My profile"
                                className="md:size-8 size-6 rounded-full order-1"
                            />
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 md:text-base text-sm max-w-xs mx-2 order-1 items-end">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black/90 text-theme1">
                                        Any updates on this issue? I'm getting the same error when
                                        trying to install devtools. Thanks
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                                alt="My profile"
                                className="md:size-8 size-6 rounded-full order-2"
                            />
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 md:text-base text-sm max-w-xs mx-2 order-2 items-start">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                        Thanks for your message David. I thought I'm alone with this
                                        issue. Please, ? the issue to support it :)
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                                alt="My profile"
                                className="md:size-8 size-6 rounded-full order-1"
                            />
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 md:text-base text-sm max-w-xs mx-2 order-1 items-end">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-black/90 text-theme1">
                                        Are you using sudo?
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black/90 text-theme1">
                                        Run this command sudo chown -R `whoami` /Users/{"{"}
                                        {"{"}your_user_profile{"}"}
                                        {"}"}/.npm-global/ then install the package globally without
                                        using sudo
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                                alt="My profile"
                                className="md:size-8 size-6 rounded-full order-2"
                            />
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 md:text-base text-sm max-w-xs mx-2 order-2 items-start">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                        It seems like you are from Mac OS world. There is no /Users/
                                        folder on linux ?
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                        I have no issue with any other packages installed with root
                                        permission globally.
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                                alt="My profile"
                                className="md:size-8 size-6 rounded-full order-1"
                            />
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 md:text-base text-sm max-w-xs mx-2 order-1 items-end">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-black/90 text-theme1">
                                        yes, I have a mac. I never had issues with root permission
                                        as well, but this helped me to solve the problem
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                                alt="My profile"
                                className="md:size-8 size-6 rounded-full order-2"
                            />
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 md:text-base text-sm max-w-xs mx-2 order-2 items-start">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                        I get the same error on Arch Linux (also with sudo)
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                        I also have this issue, Here is what I was doing until now:
                                        #1076
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                        even i am facing
                                    </span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                                alt="My profile"
                                className="md:size-8 size-6 rounded-full order-1"
                            />
                        </div>
                    </div>
                </div>
                <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                    <div className="relative flex">
                        <span className="absolute inset-y-0 flex items-center">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-gray-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                    />
                                </svg>
                            </button>
                        </span>
                        <input
                            type="text"
                            placeholder="Write your message!"
                            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                        />
                        <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-gray-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-gray-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-gray-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-theme1 bg-black hover:bg-black/80 focus:outline-none"
                            >
                                <span className="font-bold">Send</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-6 w-6 ml-2 transform rotate-90"
                                >
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        {/* flag modal */}
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div className="relative bg-white rounded-md shadow ">
                        <div className="flex items-start justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">
                                REQUEST NUMBER
                                
                            <div className='text-sm text-gray-600 mt-4'>We will contact you on the number provided here and address you by the name shared in the form. Please share your name and phone number.</div>
                            </h3>
                            <button onClick={closeModal} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Full Name*</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required/>
                                </div>
                                <div className='flex gap-4'>
                                <div className='col-auto'>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Country*</label>
                                    <input type="number" name="number" id="password" placeholder="+ 91" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" readOnly required/>
                                </div>
                                <div className="grow">
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Mobile Number*</label>
                                    <input type="number" name="number" id="password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                                </div>
                                </div>
                                {/* <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required/>
                                        </div>
                                        <label for="remember" className="ms-2 text-sm font-medium text-gray-900">Remember me</label>
                                    </div>
                                    <Link to="#" className="text-sm text-blue-700 hover:underline">Lost Password?</Link>
                                </div> */}
                                <button type="submit" className="text-black w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Next</button>
                                {/* <div className="text-sm font-medium text-gray-500">
                                    Not registered? <a href="#" className="text-blue-700 hover:underline">Create account</a>
                                </div> */}
                            </form>
                        </div>
                    </div>

                    {/* <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                        Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                        </p>
                    </div>

                    <div className="mt-4">
                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                        >
                        Got it, thanks!
                        </button>
                    </div> */}
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>

        {/* call modal */}
        <Transition appear show={isOpenFlag} as={Fragment}>
        <Dialog as="div" className="relative z-[1000]" onClose={closeFlagModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">  
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">
                                User Report
                            </h3>
                            <button onClick={closeFlagModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <ul className="text-sm font-medium text-gray-900 bg-white  w-full">
                                <li className="w-full border-gray-200 rounded-t-lg">
                                    <div className="flex items-center ps-3">
                                        <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-black accent-black bg-gray-100 border-gray-300 "/>
                                        <label for="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Spam </label>
                                    </div>
                                </li>
                                <li className="w-full border-gray-200 rounded-t-lg">
                                    <div className="flex items-center ps-3">
                                        <input id="list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-black accent-black bg-gray-100 border-gray-300 "/>
                                        <label for="list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Fraud</label>
                                    </div>
                                </li>
                                <li className="w-full border-gray-200 rounded-t-lg">
                                    <div className="flex items-center ps-3">
                                        <input id="list-radio-military" type="radio" value="" name="list-radio" className="w-4 h-4 text-black accent-black bg-gray-100 border-gray-300 "/>
                                        <label for="list-radio-military" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Inappropriate profile picture</label>
                                    </div>
                                </li>
                                <li className="w-full  border-gray-200 rounded-t-lg">
                                    <div className="flex items-center ps-3">
                                        <input id="list-radio-passport" type="radio" value="" name="list-radio" className="w-4 h-4 text-black accent-black bg-gray-100 border-gray-300 "/>
                                        <label for="list-radio-passport" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">This user is threatening me</label>
                                    </div>
                                </li>
                                <li className="w-full  border-gray-200 rounded-t-lg">
                                    <div className="flex items-center ps-3">
                                        <input id="list-radio-passport" type="radio" value="" name="list-radio" className="w-4 h-4 text-black accent-black bg-gray-100 border-gray-300 "/>
                                        <label for="list-radio-passport" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">This user is insulting me</label>
                                    </div>
                                </li>
                                <li className="w-full  border-gray-200 rounded-t-lg">
                                    <div className="flex items-center ps-3">
                                        <input id="list-radio-passport" type="radio" value="" name="list-radio" className="w-4 h-4 text-black accent-black bg-gray-100 border-gray-300 "/>
                                        <label for="list-radio-passport" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Other</label>
                                    </div>
                                </li>
                                <li>
                                <div className="pt-2">
                                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Login -> Enter user/Social -> Consents screen"></textarea>
                                </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                            <button data-modal-hide="default-modal" type="button" className="text-black w-full bg-theme1 border-2 border-theme1 border-b-black font-bold text-xs uppercase md:px-6 px-4 md:py-2 py-1 text-center inline-flex items-center justify-center gap-2 duration-300 md:hover:bg-black md:hover:text-theme1 md:hover:border-theme1 shadow-md shadow-black/40">Send Complaint</button>
                        </div>
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>

        <SafetyModal isOpenSaftey={isOpenSaftey} setIsOpenSaftey={setIsOpenSaftey}/>
        </>
    );
}


export default Chat