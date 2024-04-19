import { useState, useEffect } from 'react';
import './RangeFilter.css';

const RangeFilter = ({ minValue, value, maxValue, handlePriceChange }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [currentValuePosition, setCurrentValuePosition] = useState(
    ((minValue + currentValue) * 100) / (minValue + maxValue) + '%'
  );

  function handleChange(event) {
    const value = event.target.value;
    setCurrentValue(value);
    handlePriceChange(value);
  }

  // When value change when clicking the 'clear filter' button i need to
  // set again the 'currentValue' value.
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  // Calculating the position of the slider, so i can pass it to the class
  // current value.
  useEffect(() => {
    setCurrentValuePosition(
      ((minValue + currentValue) * 100) / (minValue + maxValue) + '%'
    );
  }, [currentValue, minValue, maxValue]);

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
            value={value}
          />
        </div>

        <p>${maxValue}</p>
      </div>
    </div>
  );
};

export default RangeFilter;
