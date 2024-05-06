import { useState } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  function addToCart(product) {
    // Finding index of the product in the cart.
    // If product not in cart the it will return -1.
    const productInIndex = cartItems.findIndex(
      (cartProduct) => cartProduct.id === product.id
    );

    // If product not on car im going to add it.
    if (productInIndex === -1) {
      setCartItems((prevState) => [...prevState, { ...product, quantity: 1 }]);
    } else {
      const newCart = structuredClone(cartItems);
      newCart[productInIndex].quantity += 1;
      setCartItems(newCart);
    }
  }

  function removeFromCart(productId) {
    const newCart = cartItems.filter(
      (cartProduct) => cartProduct.id !== productId
    );

    setCartItems(newCart);
  }

  function decreaseQuantity(product) {
    if (product.quantity === 1) {
      removeFromCart(product.id);
    } else {
      const newCart = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity - 1 };
        } else {
          return { ...cartProduct };
        }
      });
      setCartItems(newCart);
    }
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
    decreaseQuantity,
    removeFromCart,
    clearCart,
    isCartVisible,
    updateCartVisibility,
  };
};

export default useCart;
