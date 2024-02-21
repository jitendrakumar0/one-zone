import React, { useState } from 'react'
import Header from '../components/header/Header'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import SellingProducts from '../components/SellingProducts/SellingProducts'
import { ConnectionList } from '../components/ConnectionList/ConnectionList'
import Footer from '../components/Footer/Footer'
import Clouds from '../components/clouds/Clouds'
import Featured from '../components/Featured/Featured'
import SafetyModal from './chat/Component/SafetyModal'
import AddBanner from '../components/AddBanner/AddBanner'
import LogInModal from '../components/LogInModal/LogInModal'



const Index = () => {
    const [auth, setAuth] = useState(false);
    const [isOpenSaftey, setIsOpenSaftey] = useState(false)
    const [isOpenLogin, setisOpenLogin] = useState(false)
    const [isOpenRegister, setIsOpenRegister] = useState(false)
    return (
        <>
        <Header auth={auth} setAuth={setAuth} isOpenLogin={isOpenLogin}  setisOpenLogin={setisOpenLogin} isOpenRegister={isOpenRegister} setIsOpenRegister={setIsOpenRegister}/>
            <HeroBanner/>
            <ConnectionList/>
            <Featured setIsOpenSaftey={setisOpenLogin} />
            {/* <OfferBanner/> */}
            <AddBanner/>
            <Clouds/>
            {/* <Blog/> */}
            <SellingProducts setIsOpenSaftey={setisOpenLogin}/>
            {/* <OfferBanner/> */}
            {/* <Cta/> */}
            <Footer/>
            <SafetyModal isOpenSaftey={isOpenSaftey} setIsOpenSaftey={setIsOpenSaftey}/>
        </>
    )
}

export default Index