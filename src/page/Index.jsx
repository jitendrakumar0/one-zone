import React, { useState } from 'react'
import Header from '../components/header/Header'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import SellingProducts from '../components/SellingProducts/SellingProducts'
import { ConnectionList } from '../components/ConnectionList/ConnectionList'
import Footer from '../components/Footer/Footer'
import Clouds from '../components/clouds/Clouds'
import Featured from '../components/Featured/Featured'
import SafetyModal from './chat/Component/SafetyModal'



const Index = () => {
    const [auth, setAuth] = useState(false);
    const [isOpenSaftey, setIsOpenSaftey] = useState(false)
    return (
        <>
        <Header auth={auth} setAuth={setAuth} />
        
            <HeroBanner/>
            <ConnectionList/>
            <Featured setIsOpenSaftey={setIsOpenSaftey} />
            {/* <OfferBanner/> */}
            <Clouds/>
            {/* <Blog/> */}
            <SellingProducts setIsOpenSaftey={setIsOpenSaftey}/>
            {/* <OfferBanner/> */}
            {/* <Cta/> */}
            <Footer/>
            <SafetyModal isOpenSaftey={isOpenSaftey} setIsOpenSaftey={setIsOpenSaftey}/>
        </>
    )
}

export default Index