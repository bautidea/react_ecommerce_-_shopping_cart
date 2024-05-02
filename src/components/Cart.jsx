import './Cart.css';

const Cart = ({ cartItems, addToCart, clearCart, isCartVisible }) => {
  const cartHasItems = cartItems.length > 0;

  var cartTotal = cartItems.reduce((prevValue, currValue) => {
    return prevValue + currValue.quantity * currValue.price;
  }, 0);

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

                      <p>{cartProduct.quantity}</p>

                      <button onClick={() => addToCart(cartProduct)}>+</button>
                    </div>

                    <p className="productPrice">
                      $ {cartProduct.quantity * cartProduct.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {cartHasItems && (
              <div className="cartUtility">
                <p className="clearCartButton" onClick={clearCart}>
                  Clear Cart
                </p>

                <div className="productCheckOutInfo">
                  <p className="productPrice">Total</p>
                  <p className="productPrice">$ {cartTotal}</p>
                </div>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
};

export default Cart;
