import { Link } from 'react-router-dom';
import Rating from '../bookSlider/Rating';
import './modal.css'
import CartContext from '../context/CartContext';
import { useContext, useState } from 'react';
const Modal = ({setOpenModal,dataBook}) => {
    const {addToCart}=useContext(CartContext)
    const [qty,setQty]=useState(1)
  const {image,title,author,price,reviews,rating,id}=dataBook
    return ( 
        <div className="modal-container">
            <div className="modal-items">
                <img src={image} alt={title} />
                <div className="modal-items-info">
                    <h5>{title}</h5>
                    <p>author:{author}</p>
                    <p>price ${price}</p>
                    <Rating rating={rating} reviews={reviews}/>
                    <div className="modal-add-to-cart">
                        <input type="number" min='1' max="100"  
                        value={qty}
                        onChange={(e)=>setQty(e.target.value)}/>
                        <button onClick={()=>addToCart({...dataBook,quantity:qty})}>
                            <i className="bi bi-cart-plus"></i>
                              add to cart
                        </button>
                    </div>
                   <Link to={`/book/${id}`}> <button>see more</button></Link>
                </div>
                <i onClick={()=>setOpenModal(false)} className="bi bi-x-lg close-icon"></i>

            </div>
        </div>
     );
}
 
export default Modal;