import Filters from './Filters';

const Header = ({ filters, handleFilterChange, possibleFilters }) => {
  return (
    <header>
      <h1>React Shop</h1>
      <Filters
        filters={filters}
        handleFilterChange={handleFilterChange}
        possibleFilters={possibleFilters}
      />
    </header>
  );
};

export default Header;
