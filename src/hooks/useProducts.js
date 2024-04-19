import { useCallback, useEffect, useMemo, useState } from 'react';
import fetchAllProducts from '../services/fetchAllProducts';
import fetchSearchedProducts from '../services/fetchSearchedProducts';

function useProducts() {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    brand: 'all',
    minPrice: 0,
  });

  function updateSearch(newSearchProduct) {
    setSearchProduct(newSearchProduct);
  }

  function updateFilters(filterToMod, value) {
    setFilters({ ...filters, [filterToMod]: value });
  }

  function clearFilter() {
    setFilters({
      category: 'all',
      brand: 'all',
      minPrice: 0,
    });
  }

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category) &&
        (filters.brand === 'all' || product.brand === filters.brand)
    );
  }, [products, filters]);

  const getProducts = useCallback(async () => {
    const newProducts = await fetchAllProducts();
    setProducts(newProducts);
  }, []);

  const getSearchedProducts = useCallback(async (productToSearch) => {
    const newProducts = await fetchSearchedProducts(productToSearch);
    setProducts(newProducts);
  }, []);

  // Effect for fetching data.
  useEffect(() => {
    // if the input has a char then this effect wont get executed.
    if (searchProduct) return;

    getProducts();
  }, [searchProduct, getProducts]);

  return {
    products: filteredProducts,
    searchProduct,
    filters,
    getSearchedProducts,
    updateSearch,
    updateFilters,
    clearFilter,
  };
}

export default useProducts;
