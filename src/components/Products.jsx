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

            <div>
              <p>{product.description}</p>
              <p>$ {product.price}</p>
            </div>

            <img src={product.thumbnail} alt={product.title} />

            <div>
              <button>{AddToCartIcon()}</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
