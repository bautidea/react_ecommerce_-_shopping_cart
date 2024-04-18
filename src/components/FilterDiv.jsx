import chevron from '../assets/chevron.svg';
import './FilterDiv.css';

const FilterDiv = ({ isFilterActive, onFilterClick }) => {
  const filterStatus = isFilterActive ? 'active' : 'inactive';

  return (
    <div className="filterDiv">
      <div className="divider" />

      <div className={`filterBtn ${filterStatus}`} onClick={onFilterClick}>
        <img src={chevron} />
        <p>Filters</p>
      </div>

      <div className="divider" />
    </div>
  );
};

export default FilterDiv;
