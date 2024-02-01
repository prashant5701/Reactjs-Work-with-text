import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return ( 

    <nav  className="navbar navbar-expand-lg " style={{backgroundColor:"grey",padding:"10px",marginBottom:"2px"}} >
      <div style={{backgroundColor:"grey"}} className="container-fluid" >
        <Link className="navbar-brand" to="/">WorkWithText</Link>
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/about">About</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        </div>
      </div>
    </nav>
  )
} 
