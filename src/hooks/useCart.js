import { useState, useEffect } from 'react';

const useCart = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  function updateCartVisibility() {
    setIsCartVisible(!isCartVisible);
  }

  return { isCartVisible, updateCartVisibility };
};

export default useCart;
