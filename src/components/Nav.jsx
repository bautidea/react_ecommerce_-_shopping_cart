import cartImg from '../assets/cart.svg';
import './Nav.css';

const Nav = ({ isCartVisible, showCart }) => {
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
    </nav>
  );
};

export default Nav;
