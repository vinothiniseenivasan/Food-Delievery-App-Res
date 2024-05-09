import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
   
const LoginPopup = ({setShowLogin}) => {

    const [currState , setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
       <form  className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState} </h2>
            {/* its a cross icon in login page */}
            {/* when user click it it closed */}
            {/* so make it setShowLogin is false to disappear login page */}
            <img onClick={() => setShowLogin(false)}  src={assets.cross_icon} alt="" />
          </div>

          <div className="login-popup-inputs">
                {/* if the page is login these information doesnot necessarry */}
                {/* so we remove input field when login */}
                { currState === "Login" ?  <></> :  < input type='text' placeholder='Your Name'  required /> }
                <input type='email' placeholder='Your Email'  required/>
                <input type='password' placeholder='password'  required/>
          </div>
          <button>{  currState === "Sign Up" ? "Create Account" :  "Login"}</button>
          <div className="login-popup-condition">
              <input type="checkbox" required/>
              <p>By Continuing , i agree to the terms of use & privacy policy </p>
          </div>
         
        {currState === "Login" ? <p> Create a new Account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> 
                     : <p>Already have an acoount ? <span onClick={() => setCurrState("Login")}>Login Here</span></p>    }
          
         
       </form>
    </div>
  )
}

export default LoginPopup