import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'

const ContactUs = () => {
    const navigate = useNavigate()
    const [userData,setUserData]=useState({name:"",email:"",phone:"",message:""})
const userContact=async()=>{
    try{
      const res=await fetch("/getUserData",{
        method:"GET",
        headers:{
          "Content-Type":"application/json"          
        }
      });
      const data =await res.json();
      console.log(data)
      setUserData({...userData, name:data.name,email:data.email,phone:data.phone})
      if(!res.status===200){
        const error=new Error(res.error)
        throw error
      }
    }catch(err){
      console.log(err)
    }
}
    useEffect(()=>{
        userContact()

    },[]);
    console.log(userData)
    
    const handleInput=(e)=>{
       const name=e.target.name;
    const value=e.target.value;
        setUserData({...userData, [name]:value})
    }
    
    const contactForm=async(e)=>{
            e.preventDefault();
            const {name,email,phone,message}=userData
            const res=await fetch("/contact",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                        name,email,phone,message
                })
            })
            const data=await res.json();

            if(!data){
                console.log("message not send")
            }else{
                window.alert("message sent")
                setUserData({...userData,message:""})
            }
    }

  return (
    <>
      <section>
          <div className="container my-5">
          <button type="button" className="btn btn-link" onClick={()=>navigate("/")}>Home</button>
          <h3 className="text-center mt-4 text-secondary " id="contact">Contact Us</h3>
          <div className="mb-3">
        </div>
        <form method='POST'>
  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <div className="col">
    <input type="text" className="form-control" placeholder="Your Name" name='name' onChange={handleInput} value={userData.name} aria-label="First name"/>
        <div className="mb-3">
        </div>
        <div className="mb-3">
    <label htmlFor="phone" className="form-label">Mobile No</label>
    <input type="phone" name='phone' onChange={handleInput} value={userData.phone} autoComplete='off' className="form-control" id="phone" required/>
    </div>
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name='email' onChange={handleInput} value={userData.email} placeholder="name@example.com"/>
</div>
<div className="mb-3 my-2">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Send message</label>
  <textarea className="form-control" name='message' onChange={handleInput} value={userData.message} placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="text-center my-1">
  <button type="button" onClick={contactForm} className="btn btn-primary">Submit</button>
  <div className=" text-center"> Or <br/> <span style={{color:'red'}} onClick={()=>navigate("/signup")}>Sign Up</span> </div>
</div>
</form>
</div>
        </section>
    </>
  )
}

export default ContactUs
