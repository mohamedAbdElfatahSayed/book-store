import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({children}) => {
    const [cartItems,SetCartItems]=useState([])
    const addToCart=(item)=>{
        const isExist=cartItems.find(cart=>cart.id===item.id)
        if(isExist){
            SetCartItems(
                cartItems.map((cartItem)=>cartItem.id===item.id?item:cartItem)
            )
        }else{
            SetCartItems(prev=>[...prev,item])
        }

    }
    const RemoveFromCart=(id)=>{
        const cart=cartItems.filter(c=>c.id !== id)
        SetCartItems(cart)
    }
    return ( 
     <CartContext.Provider value={{addToCart,cartItems,RemoveFromCart,cartItemsLenght:cartItems.length}}
     >
        {children}
     </CartContext.Provider>
     );
}
 
export default CartProvider;