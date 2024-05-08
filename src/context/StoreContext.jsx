import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { useSearchParams } from "react-router-dom";


export const StoreContext = createContext(null);

const storeContextProvider = (props) =>{

    const [cartItems , setCartItems] = useState({});


    // AddtoCart
    const addToCart = (itemsInCart) => {
        // user create first time in cart
        if(!cartItems[itemsInCart])
            {
                setCartItems((prev) => ({...prev ,[itemsInCart]:1}) )
            }
            // already in cart
            else{
                setCartItems((prev) => ({...prev ,[itemsInCart]:prev[itemsInCart] + 1}) ) 
            }


    }


    const removeFromCart = (itemsInCart) => {
        
                setCartItems((prev)  => ({...prev , [itemsInCart] : prev[itemsInCart] - 1}));
            
                  }


    useEffect(() =>{
       console.log(cartItems)    
    },[cartItems])

    const contextValue = {
            food_list , cartItems , setCartItems , addToCart , removeFromCart
         }

    return( <StoreContext.Provider value={contextValue}  >
          {props.children}
          </StoreContext.Provider>)
}
export default storeContextProvider;

