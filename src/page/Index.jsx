import React, { useState } from 'react'
import Header from '../components/header/Header'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import SellingProducts from '../components/SellingProducts/SellingProducts'
import { ConnectionList } from '../components/ConnectionList/ConnectionList'
import OfferBanner from '../components/OfferBanner/OfferBanner'
import Blog from '../components/Blog/Blog'
import Cta from '../components/Cta/Cta'
import Footer from '../components/Footer/Footer'
import Clouds from '../components/clouds/Clouds'
import Featured from '../components/Featured/Featured'



const Index = () => {
    const [auth, setAuth] = useState(false);
    return (
        <>
        <Header auth={auth} setAuth={setAuth} />
            <HeroBanner/>
            <ConnectionList/>
            <Featured/>
            {/* <OfferBanner/> */}
            <Clouds/>
            {/* <Blog/> */}
            <SellingProducts/>
            {/* <OfferBanner/> */}
            {/* <Cta/> */}
            <Footer/>
        </>
    )
}

export default Index