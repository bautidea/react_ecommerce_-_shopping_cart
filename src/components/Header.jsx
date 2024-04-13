import Filters from './Filters';

const Header = ({ filters, handleFilterChange }) => {
  return (
    <header>
      <h1>React Shop</h1>
      <Filters filters={filters} handleFilterChange={handleFilterChange} />
    </header>
  );
};

export default Header;
