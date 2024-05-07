import useProducts from '../hooks/useProducts';
import './SearchBar.css';

const SearchBar = () => {
  const { searchProduct, updateSearch, handleSearchBarSubmit } = useProducts();
  return (
    <form onSubmit={handleSearchBarSubmit} className="searchBar">
      <label>
        <p>Search Product</p>
        <input
          type="text"
          value={searchProduct}
          placeholder="Iphone, Smartphone, ..."
          onChange={(e) => updateSearch(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
