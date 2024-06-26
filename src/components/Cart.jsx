import './Cart.css';
import bin from '../assets/bin.png';
import close from '../assets/close.png';
import { useContext, useEffect, useRef } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    updateInputProductQuantity,
    removeFromCart,
    clearCart,
    isCartVisible,
    closeCart,
  } = useContext(CartContext);

  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        closeCart && closeCart();
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [closeCart]);

  const cartHasItems = cartItems.length > 0;

  function obtainTotal() {
    return cartItems.reduce((total, cartProduct) => {
      return total + cartProduct.quantity * cartProduct.price;
    }, 0);
  }

  function validateInput(productId, event) {
    const newValue = Number(event.target.value);
    if (newValue <= 0) {
      updateInputProductQuantity(productId, 1);
    } else {
      updateInputProductQuantity(productId, newValue);
    }
  }

  return (
    <>
      {isCartVisible && (
        <div className="cartSection">
          <aside className="cartDisplay" ref={cartRef}>
            <img
              src={close}
              alt="Close Cart Button"
              className="closeBtn"
              onClick={closeCart}
            />

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
                        {cartProduct.quantity <= 1 ? (
                          <img className="binButton" src={bin} />
                        ) : (
                          '-'
                        )}
                      </button>

                      <input
                        value={cartProduct.quantity}
                        onChange={(e) => validateInput(cartProduct.id, e)}
                        type="number"
                      />

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
