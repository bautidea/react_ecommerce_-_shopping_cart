import Products from './components/Products';
import Header from './components/Header';
import Nav from './components/Nav';
import Cart from './components/Cart';
import useProducts from './hooks/useProducts';
import useCart from './hooks/useCart';
import useFilter from './hooks/useFilter';

function App() {
  const {
    products,
    searchProduct,
    isProductsLoading,
    getSearchedProducts,
    updateSearch,
    foundSearchedProducts,
  } = useProducts();

  const {
    filteredProducts,
    filters,
    isFilterActive,
    updateFilters,
    clearFilter,
    updateFiltersVisibility,
  } = useFilter({ products });

  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    updateInputProductQuantity,
    removeFromCart,
    clearCart,
    isCartVisible,
    updateCartVisibility,
    onClickOutsideCart,
  } = useCart();

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
        possibleFilters={filteredProducts}
        sliderValue={filters.minPrice}
        searchInputValue={searchProduct}
        handleInputChange={handleSearchInputChange}
        handleFormSubmit={handleSearchBarSubmit}
        isFilterActive={isFilterActive}
        onFilterClick={updateFiltersVisibility}
        clearFilter={clearFilter}
      />

      <Cart
        cartItems={cartItems}
        addToCart={addToCart}
        decreaseQuantity={decreaseQuantity}
        updateInputProductQuantity={updateInputProductQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        isCartVisible={isCartVisible}
        onClickOutsideCart={onClickOutsideCart}
      />

      <Products
        products={filteredProducts}
        isLoading={isProductsLoading}
        foundSearchedProducts={foundSearchedProducts}
        handleAddToCart={addToCart}
      />
    </>
  );
}

export default App;
