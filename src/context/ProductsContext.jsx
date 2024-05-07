import { createContext, useState } from 'react';

export const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  // Products states
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');

  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [foundSearchedProducts, setFoundSearchedProducts] = useState(true);

  // Filter States.
  const [filters, setFilters] = useState({
    category: 'all',
    brand: 'all',
    minPrice: 0,
  });
  const [isFilterActive, setIsFilterActive] = useState(false);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        searchProduct,
        setSearchProduct,
        isProductsLoading,
        setIsProductsLoading,
        foundSearchedProducts,
        setFoundSearchedProducts,
        filters,
        setFilters,
        isFilterActive,
        setIsFilterActive,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
