import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";


const MidleHeader = () => {
    const {cartItemsLenght}=useContext(CartContext)
    return ( 
        <div className="midle-header">
            <div className="midle-header-logo">
                <Link to='/' >
                <b>book</b>
                <i className="bi bi-book-fill"></i>
                <b>store</b>
                </Link>
            </div>
            <div className="midle-header-search-box">
                <input type="search" placeholder="Search Booke" />
                <i className="bi bi-search"></i>
            </div>
          <Link to='/cart'>  <div className="midle-header-cart">
                <i className="bi bi-cart2"></i>
               {cartItemsLenght >0?  <span>{cartItemsLenght}</span>:""}
            </div></Link>
        </div>
     );
}
 
export default MidleHeader;