import Filters from './Filters';
import SearchBar from './SearchBar';

const Header = ({ filters, handleFilterChange, possibleFilters }) => {
  return (
    <header>
      <h1>React Shop</h1>
      <SearchBar />
      <Filters
        filters={filters}
        handleFilterChange={handleFilterChange}
        possibleFilters={possibleFilters}
      />
    </header>
  );
};

export default Header;
