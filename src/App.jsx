import Products from './components/Products';
import Header from './components/Header';
import Nav from './components/Nav';
import Cart from './components/Cart';
import useProducts from './hooks/useProducts';
import useCart from './hooks/useCart';

function App() {
  const {
    products,
    searchProduct,
    filters,
    isFilterActive,
    isProductsLoading,
    getSearchedProducts,
    updateSearch,
    updateFilters,
    clearFilter,
    updateFiltersVisibility,
    foundSearchedProducts,
  } = useProducts();

  const { isCartVisible, updateCartVisibility } = useCart();

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
      <Nav handleCartBtnClick={updateCartVisibility} />

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

      <Cart isCartVisible={isCartVisible} />

      <Products
        products={products}
        isLoading={isProductsLoading}
        foundSearchedProducts={foundSearchedProducts}
      />
    </>
  );
}

export default App;
