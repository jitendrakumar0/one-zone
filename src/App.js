
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
import Wishlist from "./page/wishlist/Wishlist";
import WindowsProducts from "./page/windowsProducts/WindowsProducts";
import Notification from "./page/notification/Notification";
import ResetPassword from "./page/resetPassword/ResetPassword";
import DeleteAccount from "./page/deleteAccount/DeleteAccount";
import Chat from "./page/chat/Chat";
import SellerLogin from "./page/auth/sellerLogin/SellerLogin";
import SellerSignup from "./page/auth/sellerSignup/SellerSignup";
import EmailConfirmation from "./page/auth/emailConfirmation/EmailConfirmation";

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
          <Route path="/seller-login" element={<SellerLogin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/seller-signup" element={<SellerSignup/>}></Route>
          <Route path="/verify-account" element={<EmailConfirmation/>}></Route>
          <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
          <Route path="/change-password" element={<ChangePassword/>}></Route>
          <Route path="/windows-products" element={<ProductList/>}></Route>
          <Route path="/windowsProducts" element={<WindowsProducts/>}></Route>
          <Route path="/product-detail" element={<ProductDetail/>}></Route>
          <Route path="/profile" element={<UserProfile/>}></Route>
          <Route path="/wishlist" element={<Wishlist/>}></Route>
          <Route path="/notification" element={<Notification/>}></Route>
          <Route path="/reset-password" element={<ResetPassword/>}></Route>
          <Route path="/delete-account" element={<DeleteAccount/>}></Route>
          <Route path="/chat" element={<Chat/>}></Route>
        </Routes>
    </>
  );
}

export default App;
