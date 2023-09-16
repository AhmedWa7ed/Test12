import React from 'react'
import { Link } from 'react-router-dom'

export default function Navv() {
  return <>
<div className='navbar-light bg-dark'>
<div className='container'>
  
<nav className="navbar navbar-expand-lg  ">
<div>
<h2 className="navbar-brand fw-bold text-white" href="#">START FRAMEWORK</h2>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
</div>
  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav me-start ">

      <li className="nav-item">
        <Link className="nav-link text-white fw-bold" to="Ahmed">Ahmed</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white fw-bold" to="Memo">portfolio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white fw-bold" to="Omer">Contact</Link>
      </li>

 
    </ul>

  </div>
</nav>
</div>
</div>
  
  </>
}
