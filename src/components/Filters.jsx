import './Filters.css';
import SelectFilter from './SelectFilter';
import { brands, categories } from '../data/categories.json';
import RangeFilter from './RangeFilter';

const Filters = ({
  filters,
  handleFilterChange,
  possibleFilters,
  sliderValue,
  isFilterActive,
  onClearFilterClick,
}) => {
  function handleBrandChange(event) {
    handleFilterChange('brand', event.target.value);
  }

  function handleCategoryChange(event) {
    handleFilterChange('category', event.target.value);
  }

  function handlePriceChange(value) {
    handleFilterChange('minPrice', value);
  }

  // Obtaining all brands and its correspondent category.
  const usedFilters = possibleFilters.map(({ brand, category }) => ({
    brand,
    category,
  }));

  const showFilters = isFilterActive ? 'visible' : 'hidden';

  return (
    <section className={`filters ${showFilters}`}>
      <div className="rangeComponents">
        <RangeFilter
          minValue="0"
          value={sliderValue}
          maxValue="2000"
          handlePriceChange={handlePriceChange}
        />
      </div>

      <div className="selectComponents">
        <SelectFilter
          categories={brands}
          filterName={'Brand'}
          value={filters.brand}
          handleChange={handleBrandChange}
          usedFilters={usedFilters}
        />

        <SelectFilter
          categories={categories}
          filterName={'Category'}
          value={filters.category}
          handleChange={handleCategoryChange}
          usedFilters={usedFilters}
        />
      </div>

      <button type="button" onClick={onClearFilterClick}>
        Clear Filter
      </button>
    </section>
  );
};

export default Filters;
