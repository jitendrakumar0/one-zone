
import { Route, Routes, useLocation } from "react-router-dom";
import Index from "./page/Index";
import Login from "./page/auth/login/Login";
import Signup from "./page/auth/signup/Signup";
import ForgotPassword from "./page/auth/forgotpassword/ForgotPassword";
import ProductList from "./page/productList/ProductList";
import ChangePassword from "./page/auth/changePassword/ChangePassword";
import ProductDetail from "./page/productDetail/ProductDetail";
import UserProfile from "./page/userProfile/UserProfile";
import { useEffect, useState } from "react";
import Wishlist from "./page/wishlist/Wishlist";
import WindowsProducts from "./page/windowsProducts/WindowsProducts";
import Notification from "./page/notification/Notification";
import ResetPassword from "./page/resetPassword/ResetPassword";
import DeleteAccount from "./page/deleteAccount/DeleteAccount";
import Chat from "./page/chat/Chat";
import SellerLogin from "./page/auth/sellerLogin/SellerLogin";
import SellerSignup from "./page/auth/sellerSignup/SellerSignup";
import EmailConfirmation from "./page/auth/emailConfirmation/EmailConfirmation";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";
import TermsOfUse from "./page/termsOfUse/TermsOfUse";
import PrivacyPolicy from "./page/privacyPolicy/PrivacyPolicy";
import Faq from "./page/faq/Faq";
import UserDetail from "./page/UserDetail/UserDetail";
import SelectCategory from "./page/SelectCategory/SelectCategory";
import SelectedCategory from "./page/SelectedCategory/SelectedCategory";
import Home from "./sellerPage/home/Home";
import SellerProductDetail from "./sellerPage/SellerProductDetail/SellerProductDetail";
import EditProductDetail from "./sellerPage/EditProductDetail/EditProductDetail";
import SellerWindowProduct from "./sellerPage/SellerWindowProduct/SellerWindowProduct";
import SelectPackages from "./sellerPage/SelectPackages/SelectPackages";
import { PackageDiscount } from "./sellerPage/PackageDiscount/PackageDiscount";
import SellerUserProfile from "./sellerPage/sellerUserProfile/SellerUserProfile";
import SellerNotification from "./sellerPage/sellerNotification/SellerNotification";
import SellerResetPassword from "./sellerPage/sellerResetPassword/SellerResetPassword";
import SellerDeleteAccount from "./sellerPage/sellerDeleteAccount/SellerDeleteAccount";
import SellerChat from "./sellerPage/sellerChat/SellerChat";
import Loader from "./sellerPage/components/Loader/Loader";
import FeaturedPost from "./sellerPage/FeaturedPost/FeaturedPost";
import Congratulation from "./sellerPage/CongratulationScreen/Congratulation";

function App() {

  const location = useLocation();
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}, [location.pathname])
  const [isLoader, setIsLoader] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(() => {
      setIsLoader(false)
    }, 3000);
    return ()=> clearTimeout(timer)
  },[])

  return (
    <>
    { isLoader && <Loader/>}
        
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
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
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/terms-of-use" element={<TermsOfUse/>}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
          <Route path="/faq" element={<Faq/>}></Route>
          <Route path="/chat" element={<Chat/>}></Route>
          <Route path="/seller-profile" element={<UserDetail/>}></Route>


          
          <Route path="/seller-userprofile" element={<SellerUserProfile/>}></Route>
          <Route path="/seller-featuredPost" element={<FeaturedPost/>}></Route>
          <Route path="/seller-notification" element={<SellerNotification/>}></Route>
          <Route path="/seller-reset-password" element={<SellerResetPassword/>}></Route>
          <Route path="/seller-delete-account" element={<SellerDeleteAccount/>}></Route>
          <Route path="/seller-chat" element={<SellerChat/>}></Route>
          <Route path="/select-category" element={<SelectCategory/>}></Route>
          <Route path="/selected-category" element={<SelectedCategory/>}></Route>
          <Route path="/seller-productdetail" element={<SellerProductDetail/>}></Route>
          <Route path="/edit-productdetail" element={<EditProductDetail/>}></Route>
          <Route path="/seller-windowProductDetail" element={<SellerWindowProduct/>}></Route>
          <Route path="/select-packages" element={<SelectPackages/>}></Route>
          <Route path="/package-discount" element={<PackageDiscount/>}></Route>
          <Route path="/congratulation" element={<Congratulation/>}></Route>
          <Route path="/seller" element={<Home/>}>
            {/* <Route path="/select-category" element={<SelectCategory/>}></Route>
            <Route path="/selected-category" element={<SelectedCategory/>}></Route> */}
          </Route>
        </Routes>
    </>
  );
}

export default App;
