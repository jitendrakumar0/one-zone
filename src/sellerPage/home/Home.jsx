import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header';
import Footer from '../../components/Footer/Footer';
import Clouds from '../components/clouds/Clouds';
import { ConnectionList } from '../components/ConnectionList/ConnectionList';
import Featured from '../components/Featured/Featured';
import AllProducts from '../components/allProducts/AllProducts';

const Home = () => {
    const [auth, setAuth] = useState(false);
  return (
    <>
    <Header auth={auth} setAuth={setAuth} />
    
        {/* <HeroBanner/> */}
        <ConnectionList/>
        <AllProducts/>
        <Featured/>
        {/* <Clouds/> */}
        {/* <SellingProducts/> */}
        <Footer/>
    </>
  )
}

export default Home