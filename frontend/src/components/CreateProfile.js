import React from 'react'
import { useNavigate } from "react-router-dom";
export default function CreateProfile() {
    const navigate = useNavigate();
  return (
    <>
    <div className="text-bg-secondary my-3 py-3">
    <div className='container col-5'>
    <button type="button" className="btn btn-link" onClick={()=>navigate("/")}>Home</button>
        <h1 className='text-center my-3'>Profile edit</h1>
      <form className="row g-3 needs-validation" noValidate>
  <div className="col-mb-8">
    <label htmlFor="validationCustom01" className="form-label">username</label>
    <input type="text" className="form-control" id="validationCustom01" defaultValue="" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="mb-8">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">put valid mail id.</div>
  </div>
  <div className="mb-8">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword4"/>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom03" className="form-label">Height(m)</label>
    <input type="number" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom03" className="form-label">Weight(kg)</label>
    <input type="number" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom03" className="form-label">BMI</label>
    <input type="number" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom04" className="form-label">Batch</label>
    <select className="form-select" id="validationCustom04" required>
      <option defaultValue="">Choose...</option>
      <option>Morning</option>
      <option>Evenning</option>
    </select>
    <div className="invalid-feedback">
      Please select a available batch.
    </div>
  </div>
    <div className="col-md-5">
    <label htmlFor="validationCustom06" className="form-label">Mobile</label>
    <input type="text" className="form-control" id="validationCustom06" required/>
    <div className="invalid-feedback">
      Please provide a valid number.
    </div>
    </div>
    <div className="col-md-7">
    <label htmlFor="validationCustom02" className="form-label">Your goal in one sentence</label>
    <input type="text" className="form-control" id="validationCustom02" defaultValue="" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
    <div className="column">
    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked/>
  <label className="form-check-label" htmlFor="exampleRadios1">
    as a Trainer
  </label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="form-check-label" htmlFor="exampleRadios2">
    as a Member
  </label>
</div>
</div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck" required/>
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="text-center">
    <button className="btn btn-primary" onClick={()=>navigate("/profile")} type="submit">Submit form</button>   
  </div>
</form>
    </div>
    </div>

    </>
  )
}
