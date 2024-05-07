import Filters from './Filters';
import SearchBar from './SearchBar';
import FilterDiv from './FilterDiv';
import useFilter from '../hooks/useFilter';

const Header = ({ filteredProducts }) => {
  const { isFilterActive } = useFilter();

  return (
    <header>
      <SearchBar />

      <FilterDiv isFilterActive={isFilterActive} />

      <Filters
        filteredProducts={filteredProducts}
        isFilterActive={isFilterActive}
      />
    </header>
  );
};

export default Header;
