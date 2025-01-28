import React from 'react'
import './navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4qpcsL9TfsJmrVWDsiqyIwdOM0tJnTiWtw&s" alt="" /><h5>Admin</h5>
        <img className='profile' src={assets.profile_image} alt="" />
      
    </div>
  )
}

export default Navbar
