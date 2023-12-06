import NavBar from "./components/NavBar";
import TextInput from "./components/TextInput";
import AboutUs from "./pages/AboutUs";
import EmailForgotPassword from "./pages/EmailForgotPassword";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <NavBar /> */}

      <Routes>
        {/* <Route path="/" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/login/forgotpassword" element={<EmailForgotPassword/>}/> */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
