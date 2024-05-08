import React, { useContext } from 'react'
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';


const FoodDisplay = ({category}) => {

  const {food_list}  = useContext(StoreContext);


    // in storecontext.jsx we ve storecontextProvider with value context value
    // here  context value =  {
    //     _id: "1",
    //     name: "Greek salad",
    //     image: food_1,
    //     price: 12,
    //     description: "Food provides essential nutrients for overall health and well-being",
    //     category: "Salad"
    // }
  console.log("food_list" , food_list)
   
  return (
   <div className='food-display' id='food-display'>
        <h2>Top dishes near  you</h2>
          <div className="food-display-list">
                  {
                    food_list.map(
                     (item , index)=>
                   {
                     return <FoodItem  key = {index}
                                       id = {item._id}
                                       name = {item.name}
                                       description = {item.description}
                                       price = {item.price}
                                       image = {item.image} /> 
       
                    })
                  } 
           
        </div>
   </div>
  )
}

export default FoodDisplay