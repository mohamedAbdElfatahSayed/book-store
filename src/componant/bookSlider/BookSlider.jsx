import { useContext, useState } from 'react';
import './book.css'
import Rating from './Rating';
import Modal from '../modals/Modal';
import CartContext from '../context/CartContext';
const BookSlider = ({data}) => {
      const {addToCart}=useContext(CartContext)
      const [qty,setQty]=useState(1)
    
    const [sliderIndex,setSliderIndex]=useState(0)
    const [openModal,setOpenModal]=useState(false)
    const [dataBook,setDataBook]=useState(null)
    const handelModal=(book)=>{
        setOpenModal(true)
        setDataBook(book)
    }

    const handerSliderx=diraction=>{
        if(diraction==='left'){
         setSliderIndex(sliderIndex - 1)
        }
        else if(diraction==='right'){
         setSliderIndex(sliderIndex + 1)
        }
    }
    return ( 
        <div className="slider-container">
            {sliderIndex >=1 &&             <i onClick={()=>handerSliderx("left")} className="bi bi-chevron-left slider-arrow-left"></i>
        }
            <div style={{transform: `translateX(${sliderIndex * -350}px)`}} className="book-slider">
                {data.map(item=>
                    <div key={item.id} className="book-slider-item">
                        <img src={item.image} alt={item.title} className="book-item-image" />
                        <h4>{item.title}</h4>
                         <Rating rating={item.rating} reviews={item.reviews}/>
                        <div className="book-item-price">Price {item.price} $</div>
                        <div className="book-item-icons">
                            <i onClick={()=>handelModal(item)} className="bi bi-eye-fill"></i>
                            <i onClick={()=>addToCart({...item,quantity:qty})}  className="bi bi-cart-plus"></i>
                        </div>
                    </div>
                )}
                </div> 
                {sliderIndex <=data.length -3 &&  <i onClick={()=>handerSliderx("right")} className="bi bi-chevron-right slider-arrow-right"></i>
            }   
            {openModal && <Modal dataBook={dataBook} setOpenModal={setOpenModal} />}
        </div>
     );
}
 
export default BookSlider;