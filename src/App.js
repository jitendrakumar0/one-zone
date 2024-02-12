
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "./page/Index";
import Login from "./page/auth/login/Login";
import Signup from "./page/auth/signup/Signup";
import ForgotPassword from "./page/auth/forgotpassword/ForgotPassword";
import ProductList from "./page/productList/ProductList";
import ChangePassword from "./page/auth/changePassword/ChangePassword";
import ProductDetail from "./page/productDetail/ProductDetail";
import UserProfile from "./page/userProfile/UserProfile";
import { useEffect } from "react";

function App() {

  const location = useLocation();
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}, [location.pathname])

  return (
    <>
        <Routes>
          <Route path="/home" element={<Index/>}></Route>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
          <Route path="/change-password" element={<ChangePassword/>}></Route>
          <Route path="/windows-products" element={<ProductList/>}></Route>
          <Route path="/product-detail" element={<ProductDetail/>}></Route>
          <Route path="/profile" element={<UserProfile/>}></Route>
        </Routes>
    </>
  );
}

export default App;
