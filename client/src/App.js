import NavBar from "./components/NavBar";
import TextInput from "./components/TextInput";
import EmailForgotPassword from "./pages/EmailForgotPassword";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (

    <div>
      <NavBar/>
      {/* <Router>
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/login/forgotpassword" element={<EmailForgotPassword/>}/>
        </Routes>
      </Router> */}

      
      
    {/* <SignUp/>
    <EmailForgotPassword/>
    <ResetPassword/> */}
    </div>

  );
}

export default App;
