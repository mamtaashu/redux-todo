import React from 'react'
import  { Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import all from './all.css'
export default function Navbar() {
    const login =useSelector((state=>state.user))
    console.log(login)
  return (
    <div className='navbar'>
       {
        login.email ? 
         <Link to="/todo" >Todo</Link> : null
       }
      <Link className='sign' to="/sign"   >SignUp</Link>
      <Link className='sign' to="/login"   >LogIn</Link>
      
    </div>
  )
}
