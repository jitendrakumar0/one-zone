import React from 'react'
import Header from '../components/header/Header'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import SellingProducts from '../components/SellingProducts/SellingProducts'
import { ConnectionList } from '../components/ConnectionList/ConnectionList'
import OfferBanner from '../components/OfferBanner/OfferBanner'
import Blog from '../components/Blog/Blog'
import Cta from '../components/Cta/Cta'
import Footer from '../components/Footer/Footer'


const Index = () => {
    return (
        <>
            <Header/>
            <HeroBanner/>
            <ConnectionList/>
            <OfferBanner/>
            <Blog/>
            <SellingProducts/>
            <Cta/>
            <Footer/>
        </>
    )
}

export default Index