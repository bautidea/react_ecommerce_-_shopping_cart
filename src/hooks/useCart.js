import { useState } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  function addToCart(product) {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
    console.log(cartItems);
  }

  function clearCart() {
    setCartItems([]);
  }

  function updateCartVisibility() {
    setIsCartVisible(!isCartVisible);
  }

  return {
    cartItems,
    addToCart,
    clearCart,
    isCartVisible,
    updateCartVisibility,
  };
};

export default useCart;
