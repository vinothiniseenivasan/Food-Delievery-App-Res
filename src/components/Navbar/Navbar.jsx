import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = ({setShowLogin}) => {

   const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>


      {/* app name */}
       <img src={assets.foodapp_image} alt='' style={{ height: '44px', width: '233px', objectFit: 'cover'  }} /> 
       {/* <img src={assets.logo} alt="" />  */}

      {/* home , menu */}
      <ul className='navbar-menu'>
            <Link to='/'  onClick={() => setMenu("home")} className={  menu === "home" ? "active" : "" }>  
                Home
            </Link>
            <a  href='#explore-menu' onClick={() => setMenu("menu")} className={  menu === "menu" ? "active" : "" }>  
                 Menu
             </a>
            <a href='#app-download' onClick={() => setMenu("mobile-app")} className={  menu === "mobile-app" ? "active" : "" }>   
                Mobile-App
            </a>
            <a href='#footer'  onClick={() => setMenu("contact-us")} className={  menu === "contact-us" ? "active" : "" }>
               Contact Us
            </a>

      </ul>

      {/* search , sign in icon */}
      <div className="navbar-right">
           <img src={assets.search_icon} alt="" />
           {/* its a cart in navbar */}
            <div className="navbar-search_icon">
                <img src={assets.basket_icon} alt="" />
                 <div className="dot">

                   </div>
    
            </div>
            <button onClick={() => setShowLogin(true)}>
              sign in
            </button>
     </div>
    </div>
  )
}

export default Navbar