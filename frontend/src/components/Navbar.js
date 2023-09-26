import React from 'react'
import Contentp from './Contentp'
import Footer from './Footer'
import { useNavigate,NavLink } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
    <section className="navbar-primary bg-primary header my-2">
       <div className="container">
          <div className="row">
           <div className="col-sm-12"> 
            <nav className="navbar navbar-expand-lg ">
              <a className="navbar-brand text-white" id='gymno' href="#gymno"> <b>Gymno</b></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
 
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                    <a className="nav-link " href="#Facility"><b>Facility</b><span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#gymPlans"><b>Plans</b><span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item dropdown">
                  <a className="nav-link" href="#aboutGymno"><b>About</b><span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#BMI"><b>BMI Calculator</b><span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#trainers"><b>Our Trainers</b><span className="sr-only"></span></a>
                  </li>              
                  <li className="nav-item">
                    <NavLink className="nav-link " to="/contact"><b>Contact</b><span className="sr-only"></span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to="/profile"><b>profile</b><span className="sr-only"></span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to="/Logout"><b>Logout</b><span className="sr-only"></span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to="/Login"><b>Login</b><span className="sr-only"></span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to="/signup"><b>Register</b><span className="sr-only"></span></NavLink>
                  </li>
                </ul>
                 
              </div>
             </nav>
            </div>
           
          </div>
        </div>
    </section> 
    <div className="container">
    <React.Fragment>
       <Contentp />
       <Footer/>
    </React.Fragment>
    </div>
    </>
  )
}
