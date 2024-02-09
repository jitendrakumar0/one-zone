import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./page/Index";
import Login from "./page/auth/login/Login";
import Signup from "./page/auth/signup/Signup";
import ForgotPassword from "./page/auth/forgotpassword/ForgotPassword";
import ProductList from "./page/productList/ProductList";

function App() {
  return (
    <>
      <BrowserRouter 
      //  basename={'/onezone'}
      >
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
          <Route path="/windows-products" element={<ProductList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
