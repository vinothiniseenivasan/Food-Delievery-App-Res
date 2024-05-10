import React, { useCallback, useContext, useState } from 'react'
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {

   const [menu,setMenu] = useState("home");

   const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>


      {/* app name */}
      <Link to="/"> <img className='navbar-logo-image' src={assets.foodapp_image} alt=''  /> </Link>
       
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
               <Link to='/cart'>   <img src={assets.basket_icon} alt="" /></Link>

               {/* if total amount > 0 means dot will display in cart */}
               {/* otherwise hide dot symbol */}
               <div className={getTotalCartAmount() === 0 ? "" : "dot"}>

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