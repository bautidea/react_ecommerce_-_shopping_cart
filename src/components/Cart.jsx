import './Cart.css';
import { useEffect } from 'react';

const Cart = ({ isCartVisible }) => {
  return (
    <>
      {isCartVisible && (
        <section className="cartSection">
          <div className="cartDisplay"></div>
        </section>
      )}
    </>
  );
};

export default Cart;
