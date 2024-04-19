import { useState, useEffect } from 'react';

function useSliderValues({ value, minValue, maxValue }) {
  const [currentValue, setCurrentValue] = useState(value);
  const [currentValuePosition, setCurrentValuePosition] = useState(
    ((minValue + currentValue) * 100) / (minValue + maxValue) + '%'
  );

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

  const updateValue = (newValue) => {
    setCurrentValue(newValue);
  };

  return { currentValue, currentValuePosition, updateValue };
}

export default useSliderValues;
