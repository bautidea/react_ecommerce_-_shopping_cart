import useSliderValues from '../hooks/useSliderValues';
import './RangeFilter.css';

const RangeFilter = ({
  minValue,
  value,
  maxValue,
  handlePriceChange,
  filterId,
}) => {
  const { currentValue, currentValuePosition, updateValue } = useSliderValues({
    value,
    minValue,
    maxValue,
  });

  function handleChange(event) {
    const value = event.target.value;
    updateValue(value);
    handlePriceChange(value);
  }

  return (
    <div className="priceRange">
      <label htmlFor={filterId} className="rangeLabel">
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
            id={filterId}
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
