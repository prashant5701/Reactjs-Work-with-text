import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TextUtils</Link>
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/about">About</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        </div>
      </div>
    </nav>
  )
} 
