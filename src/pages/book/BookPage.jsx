import "./book.css";
import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../componant/bookSlider/Rating";
import { useContext, useState } from "react";
import CartContext from "../../componant/context/CartContext";
const BookPage = () => {
  const {addToCart}=useContext(CartContext)
  const [qty,setQty]=useState(1)
  const { id } = useParams();
  const book = books.find((b) => b.id === +id);
  return (
    <div>
      <div className="book-container">
        <img src={book.image} alt={book.author} />
        <div className="book-info">
          <h3>{book.title}</h3>
          <h3>author by: {book.author}</h3>
          <p>price : ${book.price}</p>
          <p>publish in {book.PublicationDate}</p>
          <p>language : {book.language}</p>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="book-add-to-cart">
          <input type="number" min="1" max="100"
           value={qty}
           onChange={(e)=>setQty(e.target.value)}
           />
          <button onClick={()=>addToCart({...book,quantity:qty})} >
            <i className="bi bi-cart-plus"></i>
            add to cart2
          </button>
        </div>
        </div>
      </div>
      <div className="discrption">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex
          amet fugit nobis corrupti porro officiis odit nam atque odio, fuga,
          voluptatibus officia quos quaerat! Ipsa ut et iure quidem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quaerat, mollitia!
          Dignissimos voluptas aspernatur sit neque repudiandae amet suscipit
          saepe quisquam illo modi voluptatum ipsa eveniet, nisi repellendus
          nostrum, alias quis! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Sunt porro consequatur eos doloremque maiores
          molestiae, labore delectus aperiam sint illo animi aliquam nostrum
          omnis necessitatibus minus illum voluptas at reiciendis.
        </p>
      </div>
    </div>
  );
};

export default BookPage;
