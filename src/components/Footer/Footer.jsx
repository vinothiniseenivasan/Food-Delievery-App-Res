import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer' >
         <div className="footer-content">
              <div className="footer-content-left">
                  <img src={assets.foodapp_image} alt='' style={{ height: '44px', width: '233px', objectFit: 'cover'  }} /> 
                  <p>
                  Explore a world of flavors at your fingertips. From savory classics to exotic delights, we've got something for every craving. Discover new favorites and indulge in culinary bliss with every bite. Download our app today and embark on a delicious journey!Stay connected with us for the latest updates, special offers, and mouth-watering deals.
                  </p>
                  <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                  </div>

              </div>
              <div className="footer-content-right">
                      <h2>COMPANY</h2>
                      <ul>
                         <li>Home</li>
                         <li>About</li>
                         <li>Delivery</li>
                         <li>Privacy Policy</li>
                      </ul>
              </div>

              <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <li>+91-9884321467</li>
                    <li>contact@quicfood.com</li>

              </div>
         </div>

         <hr />
         <p className="footer-copyright">
           CopyRight 2024 ©  QuickFood.com - All rights reserved.
         </p>
    </div>
  )
}

export default Footer