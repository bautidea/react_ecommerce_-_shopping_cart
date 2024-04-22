import { useState, useMemo } from 'react';

const useFilter = ({ products }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    brand: 'all',
    minPrice: 0,
  });
  const [isFilterActive, setIsFilterActive] = useState(false);

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

  return {
    filteredProducts,
    filters,
    isFilterActive,
    updateFilters,
    clearFilter,
    updateFiltersVisibility,
  };
};

export default useFilter;
