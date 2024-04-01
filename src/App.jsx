import { useState } from 'react';
import productsRes from './mocks/products.json';
import Products from './components/Products';

function App() {
  const [products, setProducts] = useState(productsRes.products);

  return (
    <>
      <Products products={products} />
    </>
  );
}

export default App;
