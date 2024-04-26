import './Cart.css';

const Cart = ({ isCartVisible }) => {
  return (
    <>
      {isCartVisible && (
        <aside className="cartSection">
          <div className="cartDisplay"></div>
        </aside>
      )}
    </>
  );
};

export default Cart;
