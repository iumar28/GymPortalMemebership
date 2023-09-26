import './App.css';
import Login from './components/Login';
import SingnUp from './components/SingnUp';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import CreateProfile from './components/CreateProfile';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import ContactUs from './components/ContactUs';
import Logout from './components/Logout';
import PaymentCart from './components/PaymentCart';
import SubscriptionForm from './components/SubscriptionForm'
import Success from './components/Success';
import Cancel from './components/Cancel';
// import { createContext } from 'react';




function App() {
  // const UserContext=createContext()
  
  return (
    <>
    {/* <UserContext.Provider> */}
    <Router>
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SingnUp/>}/>
        <Route path="/" element={<Navbar/>}/> 
        <Route path="/editProfile" element={<CreateProfile/>}/> 
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Contact" element={<ContactUs/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/paymentCart" element={<PaymentCart/>}/>
        <Route path="/Logout" element={<Logout/>}/>
        <Route path="/create-subscription" element={<SubscriptionForm/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/cancel" element={<Cancel/>}/>
      </Routes>
    </div>
    
    </Router>
    {/* </UserContext.Provider> */}
    </>
  );
}

export default App;
