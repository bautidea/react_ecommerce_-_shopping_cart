import { useState } from 'react';
import Products from './components/Products';
import Header from './components/Header';
import useProducts from './hooks/useProducts';

function App() {
  const {
    products,
    searchProduct,
    filters,
    isFilterActive,
    getSearchedProducts,
    updateSearch,
    updateFilters,
    clearFilter,
    updateFiltersVisibility,
  } = useProducts();

  function handleSearchBarSubmit(event) {
    event.preventDefault();

    if (!searchProduct) return;

    getSearchedProducts(searchProduct);
  }

  function handleSearchInputChange(event) {
    updateSearch(event.target.value);
  }

  return (
    <>
      <Header
        filters={filters}
        handleFilterChange={updateFilters}
        possibleFilters={products}
        sliderValue={filters.minPrice}
        searchInputValue={searchProduct}
        handleInputChange={handleSearchInputChange}
        handleFormSubmit={handleSearchBarSubmit}
        isFilterActive={isFilterActive}
        onFilterClick={updateFiltersVisibility}
        clearFilter={clearFilter}
      />
      <Products products={products} />
    </>
  );
}

export default App;
