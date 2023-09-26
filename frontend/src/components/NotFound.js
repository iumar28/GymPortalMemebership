import React from 'react'
import { NavLink } from 'react-router-dom'


const NotFound = () => {
  return (
    <>
      <div style={{ display:'flex', flexDirection:"column" ,justifyContent:"center", alignItems:"center", marginTop:"100px" }} className="notfound">
        <div className="getfound">
            <div className="notfound-404">
                <h1 style={{ fontSize: 250 , color:'#FF2E2E'}}>404</h1>
            </div>
        </div>
        <h2>we are sorry, page not found!</h2>
        <p>the page you looking for might have been removed
            had its name changed or its temporarily unavailable.
        </p>
        <button style={{ borderRadius:"140px" ,backgroundColor:'#00A3A3'}}><NavLink style={{ textDecoration: 'none' }} to="/">back to homepage</NavLink> </button>
      </div>
    </>
  )
}

export default NotFound
