import { useState } from 'react';
import Products from './components/Products';
import Header from './components/Header';
import useProducts from './hooks/useProducts';

function App() {
  const {
    products,
    searchProduct,
    filters,
    getSearchedProducts,
    updateSearch,
    updateFilters,
    clearFilter,
  } = useProducts();

  const [isFilterActive, setIsFilterActive] = useState(false);

  function handleSearchBarSubmit(event) {
    event.preventDefault();

    if (!searchProduct) return;

    getSearchedProducts(searchProduct);
  }

  function handleSearchInputChange(event) {
    updateSearch(event.target.value);
  }

  function showHideFilter() {
    setIsFilterActive(!isFilterActive);
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
        onFilterClick={showHideFilter}
        clearFilter={clearFilter}
      />
      <Products products={products} />
    </>
  );
}

export default App;
