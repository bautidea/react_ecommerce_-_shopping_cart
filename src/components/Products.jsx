import './Products.css';
import { AddToCartIcon } from './Icons.jsx';

const Products = ({ products }) => {
  return (
    <main className="products">
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
    </main>
  );
};

export default Products;
