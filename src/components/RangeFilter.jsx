import { useState } from 'react';
import './RangeFilter.css';

const RangeFilter = ({ maxValue, minValue, handlePriceChange }) => {
  const [currentValue, setCurrentValue] = useState(minValue);

  function handleChange(event) {
    setCurrentValue(event.target.value);
    handlePriceChange(currentValue);
  }
  return (
    <div className="priceRange">
      <label htmlFor="price" className="rangeLabel">
        Price
      </label>

      <div className="slider">
        <p>${minValue}</p>

        <p className="currentValue">{currentValue}</p>
        <input
          type="range"
          id="price"
          min={minValue}
          max={maxValue}
          step="10"
          onChange={handleChange}
          defaultValue={minValue}
        />

        <p>${maxValue}</p>
      </div>
    </div>
  );
};

export default RangeFilter;
