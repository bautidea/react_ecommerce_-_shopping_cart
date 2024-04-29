import './Cart.css';

const Cart = ({ cartItems, isCartVisible }) => {
  return (
    <>
      {isCartVisible && (
        <div className="cartSection">
          <aside className="cartDisplay">
            <ul>
              {cartItems.map((cartProduct) => (
                <li key={cartProduct.id}></li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </>
  );
};

export default Cart;
