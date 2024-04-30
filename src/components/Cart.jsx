import './Cart.css';

const Cart = ({ cartItems, isCartVisible }) => {
  return (
    <>
      {isCartVisible && (
        <div className="cartSection">
          <aside className="cartDisplay">
            <ul>
              {cartItems.map((cartProduct) => (
                <li key={cartProduct.id}>
                  <h3>{cartProduct.title}</h3>
                  <img
                    src={cartProduct.thumbnail}
                    alt={`${cartProduct.brand} ${cartProduct.category}`}
                  />
                  <h4>{`${cartProduct.quantity} x $${cartProduct.price}`}</h4>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </>
  );
};

export default Cart;
