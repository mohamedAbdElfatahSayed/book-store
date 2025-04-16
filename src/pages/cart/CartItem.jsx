import { useContext } from "react";
import CartContext from "../../componant/context/CartContext";

const CartItem = ({cart}) => {
    const {RemoveFromCart,addToCart}=useContext(CartContext)
    const {image,quantity,price,title,author,id}=cart
    return ( 
        <div key={cart.id} className="cart-item">
        <img
          src={`${image}`}
          alt={cart.title}
          className="cart-item-image"
        />
        <div className="cart-item-info">
          <div>
            <div className="cart-items-title">
              <b>{title}</b>
            </div>
            <div className="cart-items-author">
              <b>{author}</b>
            </div>
          </div>
         <div>
         <div className="cart-item-quantity">
              <button onClick={()=>addToCart({...cart,quantity:cart.quantity + 1})}>
                  <i className="bi bi-plus-lg"></i>
              </button>
              <b>{quantity}</b>
              <button  onClick={()=>addToCart({...cart,quantity:quantity>0&&cart.quantity - 1})}>
                  <i className="bi bi-dash-lg"></i>
              </button>
          </div>
          <div className="cart-item-price">
             $ {(price * quantity).toFixed(2)}
          </div  >
            <i onClick={()=>RemoveFromCart(id)} className="bi bi-trash-fill"></i>
          </div>           
        </div>
      </div>
     );
}
 
export default CartItem;