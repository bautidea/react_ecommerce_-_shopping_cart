import './Products.css';
import { AddToCartIcon } from './Icons.jsx';
import Loading from './Loading.jsx';
import { CartContext } from '../context/CartContext.jsx';
import { useContext } from 'react';
import useProducts from '../hooks/useProducts.js';

const Products = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  const { isProductsLoading, foundSearchedProducts } = useProducts();

  if (!foundSearchedProducts && !isProductsLoading) {
    return <h2> No Products were found </h2>;
  }

  return (
    <main className="products">
      {isProductsLoading ? (
        <Loading />
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                <h3>{product.title}</h3>
              </div>

              <img src={product.thumbnail} alt={product.title} />

              <div>
                <p>$ {product.price}</p>
                <button onClick={() => addToCart(product)}>
                  {AddToCartIcon()}
                </button>
              </div>

              <div className="prodDesc">
                <p>{product.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Products;
