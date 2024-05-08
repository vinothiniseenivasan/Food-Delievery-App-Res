import React from 'react'
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
// here props => category and setCategory from home.jsx
const ExploreMenu = ({category ,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>  Explore Our Menu</h1>
        <p className='explore-menu-test'>
        Explore a delectable array of dishes carefully crafted to tantalize your taste buds and satisfy your cravings, ranging from hearty classics to innovative culinary creations, ensuring an unforgettable dining experience with every bite.
        </p>
        <div className='explore-menu-list'>

            {/* in assets we have array of objects */}
                  {/* export const menu_list = [
                   {
                       menu_name: "Salad",
                       menu_image: menu_1
                   }]*/} 

              {   menu_list.map((item , index)=>
                       {
                          return(
                            // prev => prev === item.menu_name ? "All" : item.menu_name)
                            <div   onClick={ ()=> setCategory(  prev => prev === item.menu_name ? "All" : item.menu_name  )   }  
                             key={index} 
                             className='explore-menu-list-item' 
                            >
                                   
                                 <img  className={category === item.menu_name ? "active" : ""} src = {item.menu_image}    alt=""   />
                                 <p > {item.menu_name}</p>
    
                            </div>
                          )
                           
                       })
              }

        </div>

        <hr />


    </div>
  )
}

export default ExploreMenu