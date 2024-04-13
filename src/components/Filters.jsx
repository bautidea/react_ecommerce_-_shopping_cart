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

  const usedBrandFilters = [
    ...new Set(possibleFilters.map(({ brand }) => brand)),
  ];
  const usedCategoryFilters = [
    ...new Set(possibleFilters.map(({ category }) => category)),
  ];
  console.log(usedBrandFilters);
  console.log(usedCategoryFilters);
  return (
    <section className="filters">
      <RangeFilter
        minValue="0"
        maxValue="2000"
        handlePriceChange={handlePriceChange}
      />

      <div className="selectComponents">
        <SelectFilter
          categories={brands}
          filterName={'Brand'}
          value={filters.brand}
          handleChange={handleBrandChange}
        />
        <SelectFilter
          categories={categories}
          filterName={'Category'}
          value={filters.category}
          handleChange={handleCategoryChange}
        />
      </div>
    </section>
  );
};

export default Filters;
