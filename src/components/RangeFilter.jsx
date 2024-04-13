import { useState } from 'react';
import './RangeFilter.css';

const RangeFilter = ({ maxValue, minValue, handlePriceChange }) => {
  const [currentValue, setCurrentValue] = useState(minValue);

  function handleChange(event) {
    const value = event.target.value;
    setCurrentValue(value);
    handlePriceChange(value);
  }

  // Calculating the position of the slider, so i can pass it to the class
  // current value.
  const currentValuePosition =
    ((minValue + currentValue) * 100) / (minValue + maxValue) + '%';

  return (
    <div className="priceRange">
      <label htmlFor="price" className="rangeLabel">
        Price
      </label>

      <div className="sliderContainer">
        <p>${minValue}</p>

        <div className="slider">
          <p className="currentValue" style={{ left: currentValuePosition }}>
            {currentValue}
          </p>

          <input
            type="range"
            id="price"
            min={minValue}
            max={maxValue}
            step="10"
            onChange={handleChange}
            defaultValue={minValue}
          />
        </div>

        <p>${maxValue}</p>
      </div>
    </div>
  );
};

export default RangeFilter;
