import { useEffect, useState } from 'react';
import fetchAllProducts from './services/fetchAllProducts';
import Products from './components/Products';
import Header from './components/Header';

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    brand: 'all',
    minPrice: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const newProducts = await fetchAllProducts();
      setProducts(newProducts);
    };
    fetchData();
  }, []);

  function handleFilterChange(filterToMod, value) {
    setFilters({ ...filters, [filterToMod]: value });
  }

  function filterProducts(products) {
    return products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category) &&
        (filters.brand === 'all' || product.brand === filters.brand)
    );
  }

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header
        filters={filters}
        handleFilterChange={handleFilterChange}
        possibleFilters={filteredProducts}
      />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
