import './Filters.css';
import SelectFilter from './SelectFilter';
import { brands, categories } from '../data/categories.json';

const Filters = ({ filters, handleFilterChange }) => {
  function handleBrandChange(event) {
    handleFilterChange('brand', event.target.value);
  }

  function handleCategoryChange(event) {
    handleFilterChange('category', event.target.value);
  }

  function handlePriceChange(event) {
    handleFilterChange('minPrice', event.target.value);
  }

  return (
    <section className="filters">
      <div className="priceRange">
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id="price"
          min="0"
          max="2000"
          step="10"
          onChange={handlePriceChange}
        />
      </div>

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
