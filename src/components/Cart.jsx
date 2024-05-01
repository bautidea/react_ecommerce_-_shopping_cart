import './Cart.css';

const Cart = ({ cartItems, addToCart, clearCart, isCartVisible }) => {
  return (
    <>
      {isCartVisible && (
        <div className="cartSection">
          <aside className="cartDisplay">
            <ul className="cartList">
              {cartItems.map((cartProduct) => (
                <li key={cartProduct.id} className="cartProduct">
                  <div className="cartProductDesc">
                    <img
                      src={cartProduct.thumbnail}
                      alt={`${cartProduct.brand} ${cartProduct.category}`}
                    />

                    <div>
                      <h3>{cartProduct.title}</h3>
                      <p>Brand: {cartProduct.brand}</p>
                    </div>
                  </div>

                  <div className="productCheckOutInfo">
                    <div className="quantityDisplay">
                      <button>-</button>

                      <p className="productQuantity">{cartProduct.quantity}</p>

                      <button onClick={() => addToCart(cartProduct)}>+</button>
                    </div>

                    <p className="productPrice">
                      $ {cartProduct.quantity * cartProduct.price}{' '}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div>
              <p className="clearCartButton">Clear Cart</p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Cart;
