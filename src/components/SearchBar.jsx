import './SearchBar.css';

const SearchBar = ({ inputValue, handleChange, handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit} className="searchBar">
      <label>
        <p>Search Product</p>
        <input
          type="text"
          value={inputValue}
          placeholder="Iphone, Smartphone, ..."
          onChange={handleChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
