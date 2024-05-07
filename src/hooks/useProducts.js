import { useCallback, useContext, useEffect } from 'react';
import fetchAllProducts from '../services/fetchAllProducts';
import fetchSearchedProducts from '../services/fetchSearchedProducts';
import { ProductsContext } from '../context/ProductsContext';

function useProducts() {
  const {
    products,
    setProducts,
    searchProduct,
    setSearchProduct,
    isProductsLoading,
    setIsProductsLoading,
    foundSearchedProducts,
    setFoundSearchedProducts,
  } = useContext(ProductsContext);

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
  }, [setIsProductsLoading, setProducts]);

  const getSearchedProducts = useCallback(
    async (productToSearch) => {
      try {
        setIsProductsLoading(true);

        const newProducts = await fetchSearchedProducts(productToSearch);
        setProducts(newProducts);
      } catch (e) {
        console.log(e);
      } finally {
        setIsProductsLoading(false);
      }
    },
    [setIsProductsLoading, setProducts]
  );

  function handleSearchBarSubmit(event) {
    event.preventDefault();

    if (!searchProduct) return;

    getSearchedProducts(searchProduct);
  }

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
  }, [products, setFoundSearchedProducts]);

  return {
    products,
    searchProduct,
    isProductsLoading,
    updateSearch,
    foundSearchedProducts,
    handleSearchBarSubmit,
  };
}

export default useProducts;
