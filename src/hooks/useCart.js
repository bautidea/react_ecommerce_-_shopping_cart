import { useState } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  function addToCart(product) {
    // Finding index of the product in the cart.
    const productInIndex = cartItems.findIndex(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productInIndex) console.log(cartItems);
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
