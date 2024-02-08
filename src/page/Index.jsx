import React from 'react'
import Header from '../components/header/Header'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import Footer from '../components/Footer/Footer'
import Signup from '../components/Signup/Signup'
import Signin from '../components/Signin/Signin'



const Index = () => {
    return (
        <>
            <Header/>
            <HeroBanner/>
            <Footer/>
           <Signup/>
           <Signin/>
        </>
    )
}

export default Index