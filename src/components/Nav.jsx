import cartImg from '../assets/cart.svg';
import './Nav.css';

const Nav = ({ handleCartBtnClick }) => {
  return (
    <nav className="cartNavBar">
      <h1>React Shop</h1>
      <button className="cartBtn" onClick={handleCartBtnClick}>
        <img src={cartImg} alt="Cart image" />
      </button>
    </nav>
  );
};

export default Nav;
