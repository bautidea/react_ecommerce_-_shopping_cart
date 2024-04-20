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
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [foundSearchedProducs, setFoundSearchedProducts] = useState(true);

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

  function updateFiltersVisibility() {
    setIsFilterActive(!isFilterActive);
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
    try {
      setIsProductsLoading(true);

      const newProducts = await fetchAllProducts();
      setProducts(newProducts);
    } catch (e) {
      console.log(e);
    } finally {
      setIsProductsLoading(false);
    }
  }, []);

  const getSearchedProducts = useCallback(async (productToSearch) => {
    try {
      setIsProductsLoading(true);

      const newProducts = await fetchSearchedProducts(productToSearch);
      setProducts(newProducts);
    } catch (e) {
      console.log(e);
    } finally {
      setIsProductsLoading(false);
    }
  }, []);

  // Effect for fetching data.
  useEffect(() => {
    // if the input has a char then this effect wont get executed.
    if (searchProduct) return;

    getProducts();
  }, [searchProduct, getProducts]);

  // Effect to see if the searched products had a match.
  useEffect(() => {
    // If there are no retrieved products.
    if (products.length === 0) {
      setFoundSearchedProducts(false);
    } else {
      setFoundSearchedProducts(true);
    }
  }, [products]);

  return {
    products: filteredProducts,
    searchProduct,
    filters,
    isFilterActive,
    isProductsLoading,
    getSearchedProducts,
    updateSearch,
    updateFilters,
    clearFilter,
    updateFiltersVisibility,
    foundSearchedProducs,
  };
}

export default useProducts;
