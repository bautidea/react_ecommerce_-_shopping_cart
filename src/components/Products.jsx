import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from '../assets/Icons.jsx';
import Loading from './Loading.jsx';
import { CartContext } from '../context/CartContext.jsx';
import { useContext } from 'react';
import useProducts from '../hooks/useProducts.js';

const Products = ({ products }) => {
  const { addToCart, cartItems, removeFromCart } = useContext(CartContext);
  const { isProductsLoading, foundSearchedProducts } = useProducts();

  function checkProductInCart(productId) {
    return cartItems.some((cartProduct) => cartProduct.id === productId);
  }

  if (!foundSearchedProducts && !isProductsLoading) {
    return <h2> No Products were found </h2>;
  }

  return (
    <main className="products">
      {isProductsLoading ? (
        <Loading />
      ) : (
        <ul>
          {products.map((product) => {
            const isProductInCart = checkProductInCart(product.id);

            return (
              <li key={product.id}>
                <div>
                  <h3>{product.title}</h3>
                </div>

                <img src={product.thumbnail} alt={product.title} />

                <div>
                  <p>$ {product.price}</p>

                  <div className="cartButtonsContainer">
                    <button
                      onClick={() => addToCart(product)}
                      className={
                        isProductInCart
                          ? 'addToCartBtnInCart'
                          : 'addToCartBtnNotInCart'
                      }
                    >
                      {AddToCartIcon()}
                    </button>

                    {isProductInCart && (
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="removeFromCartBtn"
                      >
                        {RemoveFromCartIcon()}
                      </button>
                    )}
                  </div>
                </div>

                <div className="prodDesc">
                  <p>{product.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
};

export default Products;
