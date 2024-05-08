import React, { useContext, useState } from 'react'
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id , name ,description , price ,  image}) =>
 {
  //  this is create for every item seperately
  // we dont want that its too much memory wastage
  // so we are create these state in StoreContext.jsx
  //  and drilling to its child

  //  const [itemCount , setItemCount] = useState(0);
   const {cartItems , addToCart ,removeFromCart} = useContext(StoreContext);


  return (
    <div className='food-item'>

        {/* image */}
        <div className="food-item-image-container">
            <img  className='food-item-image' src={image} alt="" />
            {/* when user click first time on + icon its increment count  */}

            {
            (!cartItems[id]) ?  <img src={assets.add_icon_white}  onClick={() => addToCart(id)}   alt=''    className='add'/> 
                             :       <div className='food-item-counter'>
                                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                                        <p>{cartItems[id]}</p>
                                        <img onClick={() => addToCart(id) }  src={assets.add_icon_green} alt=""/>

                                    </div>

            }
        </div>


         {/* food info */}
         <div className="food-item-info">
                   <div className="food-item-name-rating">
                            <p>{name}</p>
                            <img src={assets.rating_starts} alt="" />
                   </div>
                   <p className="food-item-desc">
                       {description}
                   </p>
                   <p className='food-item-price'>
                          ${price}
                   </p> 
         </div> 


    </div>
  )
}

export default FoodItem