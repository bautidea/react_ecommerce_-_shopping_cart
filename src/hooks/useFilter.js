import { useContext, useCallback } from 'react';
import { ProductsContext } from '../context/ProductsContext';

const useFilter = () => {
  const { filters, setFilters, isFilterActive, setIsFilterActive } =
    useContext(ProductsContext);

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

  const filterProducts = useCallback(
    (products) => {
      return products.filter(
        (product) =>
          product.price >= filters.minPrice &&
          (filters.category === 'all' ||
            product.category === filters.category) &&
          (filters.brand === 'all' || product.brand === filters.brand)
      );
    },
    [filters]
  );

  return {
    filterProducts,
    filters,
    isFilterActive,
    updateFilters,
    clearFilter,
    updateFiltersVisibility,
  };
};

export default useFilter;
