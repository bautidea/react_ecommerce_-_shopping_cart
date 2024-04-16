import chevron from '../assets/chevron.svg';
import './FilterDiv.css';

const FilterDiv = () => {
  return (
    <div className="filterDiv">
      <div className="divider" />

      <div className="filterBtn">
        <img src={chevron} />
        <p>Filters</p>
      </div>

      <div className="divider" />
    </div>
  );
};

export default FilterDiv;
