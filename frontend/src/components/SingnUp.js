import {React,useState} from 'react'
import { useNavigate } from "react-router-dom";
export default function SingnUp() {
    const navigate = useNavigate();
    const [user,setUser]=useState({
      name:"",email:"",password:"",cpassword:"",phone:"",goal:"",weight:"",height:"",BMi:""
    })
    let name , value;
    const handleInputs=(event)=>{
      console.log(event)
      name=event.target.name;
      value=event.target.value;

      setUser({...user,[name]:value});
    }
    console.log(user)
    const postData= async(event)=>{
      event.preventDefault();
      const {name,email,password,cpassword,phone,goal,weight,height,BMi} = user;

      const res=await fetch("/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,password,cpassword,phone,goal,weight,height,BMi
        })
      });
        const data =await res.json();
        if(data.status === 422 || !data){
          window.alert("INvalid Registration")
          console.log("INvalid Registration")
        }else{
          window.alert("Registration successfull")
          console.log("Registration successfull")
          navigate('/login');
        }

    }
  return (
    <>
    <div className="text-bg-secondary my-2 py-2">
    <div className='container  my-4 py-0'>     
    <div className='container my-3 py-3'>  
    <div className='container col-5'>
    <button type="button" className="btn btn-link" onClick={()=>navigate("/")}>Home</button>
        <h1 className='text-center my-3'>Register</h1>
      <form method='POST' className="row g-3 needs-validation" noValidate>
  <div className="mb-8 ">
    <label htmlFor="name" className="form-label">Full name</label>
    <input type="text" name='name' value={user.name} onChange={handleInputs} autoComplete='off' className="form-control" id="name"  required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" name='email' value={user.email} onChange={handleInputs} className="form-control" id="email" autoComplete='off' aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" name='password' value={user.password} onChange={handleInputs} autoComplete='off' className="form-control" id="password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">confirm Password</label>
    <input type="password" name='cpassword' value={user.cpassword} onChange={handleInputs} autoComplete='off' className="form-control" id="cpassword"/>
  </div>
  <div className="col-md-5">
    <label htmlFor="phone" className="form-label">Mobile No</label>
    <input type="phone" name='phone' value={user.phone} onChange={handleInputs} autoComplete='off' className="form-control" id="phone" required/>
    </div>
  <div className="col-md-7">
    <label htmlFor="goal" className="form-label">Goal in one sentence</label>
    <input type="text" name='goal' value={user.goal} onChange={handleInputs} autoComplete='off' className="form-control" id="goal" required/>
    </div>
  <div className="col-md-4">
    <label htmlFor="weight" className="form-label">weight in kg</label>
    <input type="text" name='weight' value={user.weight} onChange={handleInputs} autoComplete='off' className="form-control" id="weight" required/>
    </div>
  <div className="col-md-4">
    <label htmlFor="height" className="form-label">height in cm</label>
    <input type="text" name='height' value={user.height} onChange={handleInputs} autoComplete='off' className="form-control" id="height" required/>
    </div>
  <div className="col-md-4">
    <label htmlFor="BMi" className="form-label">BMi</label>
    <input type="text" name='BMi' value={user.BMi} onChange={handleInputs} autoComplete='off' className="form-control" id="BMi" required/>
    </div>
  <div className="text-center">
    <button className="btn btn-primary" type="submit" onClick={postData} >Submit form</button>
   
  </div>
</form>
<div className="container text-center">
or<br /><span style={{color:'red'}} onClick={()=>navigate("/Login")}>Login</span>
</div>
    </div>
    </div>
    </div>
    </div>

    </>
  )
}
