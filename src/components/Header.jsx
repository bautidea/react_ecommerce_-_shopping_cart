import Filters from './Filters';
import SearchBar from './SearchBar';
import FilterDiv from './FilterDiv';

const Header = ({
  filters,
  handleFilterChange,
  possibleFilters,
  sliderValue,
  searchInputValue,
  handleInputChange,
  handleFormSubmit,
  isFilterActive,
  onFilterClick,
  clearFilter,
}) => {
  return (
    <header>
      <h1>React Shop</h1>

      <SearchBar
        inputValue={searchInputValue}
        handleChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />

      <FilterDiv
        isFilterActive={isFilterActive}
        onFilterClick={onFilterClick}
      />

      <Filters
        filters={filters}
        handleFilterChange={handleFilterChange}
        possibleFilters={possibleFilters}
        sliderValue={sliderValue}
        isFilterActive={isFilterActive}
        onClearFilterClick={clearFilter}
      />
    </header>
  );
};

export default Header;
