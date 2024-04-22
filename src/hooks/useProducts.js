import { useCallback, useEffect, useState } from 'react';
import fetchAllProducts from '../services/fetchAllProducts';
import fetchSearchedProducts from '../services/fetchSearchedProducts';

function useProducts() {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');

  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [foundSearchedProducts, setFoundSearchedProducts] = useState(true);

  function updateSearch(newSearchProduct) {
    setSearchProduct(newSearchProduct);
  }

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
    products,
    searchProduct,
    isProductsLoading,
    getSearchedProducts,
    updateSearch,
    foundSearchedProducts,
  };
}

export default useProducts;
