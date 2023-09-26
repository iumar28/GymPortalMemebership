import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const loginUser=async(event)=>{
        event.preventDefault();
        const res=await fetch('/login',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email,
            password
          })
        })

        const data=res.json()
        if(res.status === 400 || !data){
          window.alert("INVALID Credentials")
        }else{
          window.alert("Login successful")
          navigate("/")
        }
        
    }

  return (
    <>
    
    <div className="text-bg-secondary my-2 py-4">
    <div className='container  my-5 py-5'>     
    <div className='container my-3 py-3'>   
    <div className="container col-5">  
    <button type="button" className="btn btn-link" onClick={()=>navigate("/")}>Home</button>
        <h1 className='text-center'>Login</h1>
      <form method='POST'>
  <div className="mb-8">
    <label htmlFor="email" className="form-label" >Email address</label>
    <input type="email" name='email' value={email} onChange={(event)=>setEmail(event.target.value)} className="form-control" id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" name='password' value={password} onChange={(event)=>setPassword(event.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>  */}
  <div className=" text-center">
  <button type="submit" onClick={loginUser} className="btn btn-primary">Submit</button>
  </div>
  <div className=" text-center"> Or <br/> <span style={{color:'red'}} onClick={()=>navigate("/signup")}>Sign Up</span> </div>
</form>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
