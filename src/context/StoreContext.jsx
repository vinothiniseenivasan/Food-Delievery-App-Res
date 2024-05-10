import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { useSearchParams } from "react-router-dom";
import { ssrImportMetaKey } from "vite/runtime";


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


     const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
            {
                //   cartItems[item] is quantity of product
                if(cartItems[item] > 0)
                    {
                        let itemInfo =food_list.find((product) =>  product._id === item)
                        
                        totalAmount += (itemInfo.price * cartItems[item]);
                    }
               
            }
            console.log("totalAmount" , totalAmount)
            return totalAmount;
       }

    const contextValue = {
            food_list ,
            cartItems ,
            setCartItems ,
            addToCart , 
            removeFromCart ,
            getTotalCartAmount
         }

    return( <StoreContext.Provider value={contextValue}  >
          {props.children}
          </StoreContext.Provider>)
}
export default storeContextProvider;

