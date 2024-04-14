import './Filters.css';
import SelectFilter from './SelectFilter';
import { brands, categories } from '../data/categories.json';
import RangeFilter from './RangeFilter';

const Filters = ({ filters, handleFilterChange, possibleFilters }) => {
  function handleBrandChange(event) {
    handleFilterChange('brand', event.target.value);
  }

  function handleCategoryChange(event) {
    handleFilterChange('category', event.target.value);
  }

  function handlePriceChange(value) {
    handleFilterChange('minPrice', value);
  }

  // Obtaining brands from filtered products, and removing duplicates.
  // const usedBrandFilters = [
  //   ...new Set(possibleFilters.map(({ brand }) => brand)),
  // ];
  // Obtaining categories from filtered products, and removing duplicates.
  // const usedCategoryFilters = [
  //   ...new Set(possibleFilters.map(({ category }) => category)),
  // ];
  // Obtaining all brands and its correspondent category.
  const usedFilters = possibleFilters.map(({ brand, category }) => ({
    brand,
    category,
  }));

  return (
    <section className="filters">
      <div className="rangeComponents">
        <RangeFilter
          minValue="0"
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
    </section>
  );
};

export default Filters;
