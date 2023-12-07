import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import EmailForgotPassword from "./pages/EmailForgotPassword";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <div>
      {/* <NavBar /> */}

      <Routes>
        {/* <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/forgotpassword" element={<EmailForgotPassword />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
