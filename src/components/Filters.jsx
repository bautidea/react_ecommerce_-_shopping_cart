import './Filters.css';
import { useId } from 'react';
import { brands, categories } from '../data/categories.json';
import SelectFilter from './SelectFilter';
import RangeFilter from './RangeFilter';
import useFilter from '../hooks/useFilter';

const Filters = ({ filteredProducts, isFilterActive }) => {
  const { filters, updateFilters, clearFilter } = useFilter();

  const priceSliderId = useId();
  const brandSelectId = useId();
  const categorySelectId = useId();

  function handlePriceChange(value) {
    updateFilters('minPrice', value);
  }

  function handleBrandChange(event) {
    updateFilters('brand', event.target.value);
  }

  function handleCategoryChange(event) {
    updateFilters('category', event.target.value);
  }

  // Obtaining all brands and its correspondent category.
  const usedFilters = filteredProducts.map(({ brand, category }) => ({
    brand,
    category,
  }));

  const showFilters = isFilterActive ? 'visible' : 'hidden';

  return (
    <section className={`filters ${showFilters}`}>
      <div className="rangeComponents">
        <RangeFilter
          minValue="0"
          value={filters.minPrice}
          maxValue="2000"
          handlePriceChange={handlePriceChange}
          filterId={priceSliderId}
        />
      </div>

      <div className="selectComponents">
        <SelectFilter
          categories={brands}
          filterName={'Brand'}
          value={filters.brand}
          handleChange={handleBrandChange}
          usedFilters={usedFilters}
          filterId={brandSelectId}
        />

        <SelectFilter
          categories={categories}
          filterName={'Category'}
          value={filters.category}
          handleChange={handleCategoryChange}
          usedFilters={usedFilters}
          filterId={categorySelectId}
        />
      </div>

      <button type="button" onClick={clearFilter}>
        Clear Filter
      </button>
    </section>
  );
};

export default Filters;
