import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/frontend_assets/assets'

export const Navbar = ({setShowLogin}) => {
    
const navigate = useNavigate()
    const [menu,setMenu] = useState("home")
    const  {getTotalCartAmount,token,setToken} =useContext(StoreContext)
    const logout = ()=>{
      localStorage.removeItem("token")
      setToken("")
      navigate("/")


    }


  return (
    <div className='navbar'>
      <Link to='/'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4qpcsL9TfsJmrVWDsiqyIwdOM0tJnTiWtw&s" alt=""  className='logo'/></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home </Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""} >Menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>

        </ul>
        <div className='navbar-right'>
        <i class="fa-solid fa-magnifying-glass fa-2xl"></i>

            <div className='navbar-search-icon'>
              <Link  to='/cart' ><i class="fa-solid fa-bag-shopping fa-2xl"></i></Link>
            <div className={getTotalCartAmount()===0?'':"dot"}></div>

            </div>
          
             {!token? <button onClick={()=>setShowLogin(true)}>Sign in</button>
             :<div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li onClick={()=>navigate('/myorders')} >  <img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr/>
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
              <div/>
              </div>}
                 </div>

            

        </div>


   

   
  )
}
