import { createContext, useReducer, useState } from 'react';

export const CartContext = createContext();

const initialCartState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      // Finding index of the product in the cart.
      // If product not in cart the it will return -1.
      const productInIndex = state.findIndex(
        (cartProduct) => cartProduct.id === action.product.id
      );

      // If product not on car im going to add it.
      if (productInIndex === -1) {
        return [...state, { ...action.product, quantity: 1 }];
      } else {
        return state.map((cartProduct) => {
          if (cartProduct.id === action.product.id) {
            return { ...cartProduct, quantity: cartProduct.quantity + 1 };
          } else {
            return { ...cartProduct };
          }
        });
      }
    }
  }
}

export function CartContextProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, initialCartState);
  // const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  function addToCart(product) {
    dispatch({
      type: 'ADD_TO_CART',
      product: product,
    });
  }

  function updateInputProductQuantity(productId, inputQuantity) {
    const newCart = cartItems.map((cartProduct) => {
      if (cartProduct.id === productId) {
        return { ...cartProduct, quantity: inputQuantity };
      } else {
        return { ...cartProduct };
      }
    });

    setCartItems(newCart);
  }

  function removeFromCart(productId) {
    setCartItems((prevCart) =>
      prevCart.filter((cartProduct) => cartProduct.id !== productId)
    );
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

  function showCart() {
    setIsCartVisible((prevValue) => !prevValue);
  }

  function closeCart() {
    setIsCartVisible(false);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        updateInputProductQuantity,
        removeFromCart,
        clearCart,
        isCartVisible,
        showCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
