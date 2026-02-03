import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            //...prev creates a new copy of the prev and then we intilize the value of the key [itemId] with 1
            setCartItems((prev) => ({...prev, [itemId]:1}));
        }
        else{
            //here we update the value
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}));
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let iteminfo = food_list.find((product) => product._id === item);
                totalAmount += (iteminfo).price*cartItems[item];
            }
            
        }
        return totalAmount;
        
    }

    //we want to access these things accros our app
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;