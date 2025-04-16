const Order = ({totalPrice}) => {
    return ( 
        <div className="cart-order-summary">
            <div className="cart-order-title">
                order summary
            </div>
            <div className="order-summary-item">
                <span>sub price</span>
                <span>${totalPrice}</span>
            </div>
            <div className="order-summary-item">
                <span>shoping cost</span>
                <span>$ 0</span>
            </div>
            <div className="order-summary-item">
                <span>discount</span>
                <span>$ 0</span>
            </div>
            <div className="order-summary-item">
                <span>tolal</span>
                <span>${totalPrice}</span>
            </div>
      </div>
     );
}
 
export default Order;