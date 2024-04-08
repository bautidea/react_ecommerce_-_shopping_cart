import { useState } from 'react';
import { products as productsRes } from './mocks/products.json';
import Products from './components/Products';
import Header from './components/Header';

function App() {
  const [products, setProducts] = useState(productsRes);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  function filterProducts(products) {
    return products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
    );
  }

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
