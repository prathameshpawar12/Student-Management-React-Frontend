import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    



<nav id='nv' className=" navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>Home</Link>
    <h3 className='text-center  justify-content-center mt-1 text-white' >Student Details Of A.B.C Collage</h3>
    <form className="d-flex">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
          <Link className="btn btn-outline-success  text-white" to={"/add-student"}>Add New Student</Link>

        </li>
     </ul>
    </form>
  </div>
</nav> 
   

  )
}

export default Navbar
       