import './Products.css';
import { AddToCartIcon } from './Icons.jsx';
import Loading from './Loading.jsx';

const Products = ({ products, isLoading, foundSearchedProducts }) => {
  if (!foundSearchedProducts && !isLoading) {
    return <h2> No Products were found </h2>;
  }

  return (
    <main className="products">
      {isLoading ? (
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
                <button>{AddToCartIcon()}</button>
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
