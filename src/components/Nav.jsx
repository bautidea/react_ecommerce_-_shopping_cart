import { useContext } from 'react';
import cartImg from '../assets/cart.svg';
import Cart from './Cart';
import './Nav.css';
import { CartContext } from '../context/CartContext';

const Nav = () => {
  const { isCartVisible, showCart } = useContext(CartContext);

  return (
    <nav className="cartNavBar">
      <h1>React Shop</h1>
      <button
        className={`cartBtn ${isCartVisible ? 'disabled' : ''}`}
        onClick={showCart}
        disabled={isCartVisible}
      >
        <img src={cartImg} alt="Cart image" />
      </button>

      <Cart />
    </nav>
  );
};

export default Nav;
