import './SearchBar.css';

const SearchBar = () => {
  return (
    <section className="searchBar">
      <form>
        <label>
          <p>Search Product</p>
          <input
            type="text"
            placeholder="Iphone, Smartwatch, Smartphone, Android, ..."
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default SearchBar;
