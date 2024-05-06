import './Cart.css';
import bin from '../assets/bin.png';

const Cart = ({
  cartItems,
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  isCartVisible,
}) => {
  const cartHasItems = cartItems.length > 0;

  function obtainTotal() {
    return cartItems.reduce((total, cartProduct) => {
      return total + cartProduct.quantity * cartProduct.price;
    }, 0);
  }

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

                    <div className="productInfo">
                      <h3 className="productTitle">{cartProduct.title}</h3>
                      <p className="productBrand">Brand: {cartProduct.brand}</p>
                      <p
                        className="cartUtilityButton"
                        onClick={() => removeFromCart(cartProduct.id)}
                      >
                        Remove
                      </p>
                    </div>
                  </div>

                  <div className="productCheckOutInfo">
                    <div className="quantityDisplay">
                      <button onClick={() => decreaseQuantity(cartProduct)}>
                        {cartProduct.quantity === 1 ? (
                          <img className="binButton" src={bin} />
                        ) : (
                          '-'
                        )}
                      </button>

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
                <p className="cartUtilityButton" onClick={clearCart}>
                  Clear Cart
                </p>

                <div className="productCheckOutInfo">
                  <p className="productPrice">Total</p>
                  <p className="productPrice">$ {obtainTotal()}</p>
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
