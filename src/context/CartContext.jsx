import { createContext, useReducer, useState } from 'react';
export const CartContext = createContext();

const initialCartState = () => {
  const loadCart = window.localStorage.getItem('cart');

  return loadCart ? JSON.parse(loadCart) : [];
};

function cartReducer(state, action) {
  const { type: actionType, payload: actionPayLoad } = action;

  const saveToLocalStorage = (cartToSave) => {
    window.localStorage.setItem('cart', JSON.stringify(cartToSave));
  };

  const removeFromLocalStorage = () => {
    window.localStorage.removeItem('cart');
  };

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { product } = actionPayLoad;

      // Finding index of the product in the cart.
      // If product not in cart the it will return -1.
      const productInIndex = state.findIndex(
        (cartProduct) => cartProduct.id === product.id
      );

      // If product not on car im going to add it.
      if (productInIndex === -1) {
        const newCart = [...state, { ...product, quantity: 1 }];

        saveToLocalStorage(newCart);
        return newCart;
      } else {
        const newCart = state.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return { ...cartProduct, quantity: cartProduct.quantity + 1 };
          } else {
            return { ...cartProduct };
          }
        });

        saveToLocalStorage(newCart);
        return newCart;
      }
    }

    case 'UPDATE_QUANTITY_FROM_INPUT': {
      const { productId, inputQuantity } = actionPayLoad;

      const newCart = state.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return { ...cartProduct, quantity: inputQuantity };
        } else {
          return { ...cartProduct };
        }
      });

      saveToLocalStorage(newCart);
      return newCart;
    }

    case 'REMOVE_FROM_CART': {
      const { productId } = actionPayLoad;

      const newCart = state.filter(
        (cartProduct) => cartProduct.id !== productId
      );

      saveToLocalStorage(newCart);
      return newCart;
    }

    case 'DECREASE_QUANTITY': {
      const { product } = actionPayLoad;

      const newCart = state.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity - 1 };
        } else {
          return { ...cartProduct };
        }
      });

      saveToLocalStorage(newCart);
      return newCart;
    }

    case 'CLEAR_CART': {
      removeFromLocalStorage();
      return initialCartState;
    }
  }
}

export function CartContextProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, initialCartState);
  const [isCartVisible, setIsCartVisible] = useState(false);

  function addToCart(product) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { product },
    });
  }

  function updateInputProductQuantity(productId, inputQuantity) {
    dispatch({
      type: 'UPDATE_QUANTITY_FROM_INPUT',
      payload: { productId, inputQuantity },
    });
  }

  function removeFromCart(productId) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { productId },
    });
  }

  function decreaseQuantity(product) {
    if (product.quantity === 1) {
      removeFromCart(product.id);
    } else {
      dispatch({
        type: 'DECREASE_QUANTITY',
        payload: { product },
      });
    }
  }

  function clearCart() {
    dispatch({
      type: 'CLEAR_CART',
    });
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
