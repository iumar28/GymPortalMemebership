import React,{useEffect,useState} from 'react'
import {useNavigate,NavLink} from "react-router-dom"


export default function Profile() {
    const navigate=useNavigate()
    const [userData,setUserData]=useState({})
const callProfilePage=async()=>{
    try{
      const res=await fetch("/profile",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"          
        },
        credentials:"include"
      });
      const data =await res.json();
      console.log(data)
      setUserData(data)
      if(!res.status===200){
        const error=new Error(res.error)
        throw error
      }
    }catch(err){
      console.log(err)
      navigate("/login")
    }
}
    useEffect(()=>{
      callProfilePage()

    },[]);
  
  return (
    <> 
    <section>
    <div className="container my-2">
    <img src="Images/black-bg.jpg" height={300} className="d-block w-100" alt="..."/>
    <div className='text-center my-5'>
        <div className="card-img-overlay my-5">
    <img src="Images/profile.jpg" width={270} className="rounded-circle z-depth-1 img-fluid"/>
    <h2 className='text-white'>{userData.name}</h2>
    </div>
    </div>
    </div>
    </section>
    <section> 
      <form method="GET">
    <div className='container my-5 py-5'>        
    {/* <div className='container my-5 py-5'>         */}
        <div className="text-center my-0">
        <h2>Profile</h2>
        </div>
        <div className='container col-5'>
        <div className="card">
  <div className="card-header">
    <ul className="nav nav-pills card-header-pills">
      <li className="nav-item">
        <a className="nav-link active" onClick={()=>navigate("/")}>Home</a>
      </li>
      <li className="nav-item">
      </li>
    </ul>
  </div>
  <div className="card-body">
    <p><strong>username: {userData.name}</strong></p>
    <p><strong>email: {userData.email}</strong></p>
    <p><strong>phone no: {userData.phone}</strong></p>
    <p><strong>weight:{userData.weight}</strong></p>
    <p><strong>height:{userData.height}</strong></p>
    <p><strong>batch:</strong></p>
    <p><strong>package:</strong></p>
    <p><strong>BMI:{userData.BMi}</strong></p>
    <p><strong>Goal: {userData.goal}</strong></p>
  </div>
  <div className="container text-center ">
  <NavLink className="nav-link " to="/Logout"><b>Logout</b></NavLink>
  </div>
</div>
        </div>
        </div>
        {/* </div> */}
        </form>
    </section>
    </>
  )
}
