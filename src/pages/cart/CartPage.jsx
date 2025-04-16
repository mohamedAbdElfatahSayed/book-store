import { useContext } from "react";

import './cart.css'
import Order from "./Order";
import CartContext from "../../componant/context/CartContext";
import CartItem from "./CartItem";
const Cartpage = () => {
  const {cartItems}=useContext(CartContext)
  const totalPrice=cartItems.reduce((acc,cur)=>acc + cur.price * cur.quantity,0).toFixed(2);
  return (
    <div className="cart">
      <div className="cart-title"> your shoping cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((cart) => (
             <CartItem cart={cart} key={cart.id} />
          ))}
        </div>
     <Order totalPrice={totalPrice} />
      </div>
      
    </div>
  );
};

export default Cartpage;
