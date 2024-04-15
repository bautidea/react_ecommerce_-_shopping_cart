import { useEffect, useState } from 'react';
import fetchAllProducts from './services/fetchAllProducts';
import fetchSearchedProducts from './services/fetchSearchedProducts';
import Products from './components/Products';
import Header from './components/Header';

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    brand: 'all',
    minPrice: 0,
  });
  const [searchProduct, setSearchProduct] = useState('');

  // Effect for fetching data.
  useEffect(() => {
    // if the input has a char then this effect wont get executed.
    if (searchProduct) return;

    const fetchData = async () => {
      const newProducts = await fetchAllProducts();
      setProducts(newProducts);
    };
    fetchData();
  }, [searchProduct]);

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

  function handleSearchBarSubmit(event) {
    event.preventDefault();

    const fetchSearch = async () => {
      const newProducts = await fetchSearchedProducts(searchProduct);
      setProducts(newProducts);
    };

    fetchSearch();
  }

  function handleSearchInputChange(event) {
    setSearchProduct(event.target.value);
  }

  return (
    <>
      <Header
        filters={filters}
        handleFilterChange={handleFilterChange}
        possibleFilters={filteredProducts}
        searchInputValue={searchProduct}
        handleInputChange={handleSearchInputChange}
        handleFormSubmit={handleSearchBarSubmit}
      />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
