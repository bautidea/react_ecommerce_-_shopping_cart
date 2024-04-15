import Filters from './Filters';
import SearchBar from './SearchBar';

const Header = ({
  filters,
  handleFilterChange,
  possibleFilters,
  searchInputValue,
  handleInputChange,
  handleFormSubmit,
}) => {
  return (
    <header>
      <h1>React Shop</h1>
      <SearchBar
        inputValue={searchInputValue}
        handleChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <Filters
        filters={filters}
        handleFilterChange={handleFilterChange}
        possibleFilters={possibleFilters}
      />
    </header>
  );
};

export default Header;
