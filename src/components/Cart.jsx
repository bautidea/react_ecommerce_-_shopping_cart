import './Cart.css';

const Cart = ({ cartItems, isCartVisible }) => {
  return (
    <>
      {isCartVisible && (
        <div className="cartSection">
          <aside className="cartDisplay">
            <ul>
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

                      <button>+</button>
                    </div>

                    <p className="productPrice">
                      $ {cartProduct.quantity * cartProduct.price}{' '}
                    </p>
                  </div>
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
