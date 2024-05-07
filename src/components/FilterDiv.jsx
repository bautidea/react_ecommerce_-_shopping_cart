import chevron from '../assets/chevron.svg';
import useFilter from '../hooks/useFilter';
import './FilterDiv.css';

const FilterDiv = ({ isFilterActive }) => {
  const { updateFiltersVisibility } = useFilter();

  const filterStatus = isFilterActive ? 'active' : 'inactive';

  return (
    <div className="filterDiv">
      <div className="divider" />

      <div
        className={`filterBtn ${filterStatus}`}
        onClick={updateFiltersVisibility}
      >
        <img src={chevron} />
        <p>Filters</p>
      </div>

      <div className="divider" />
    </div>
  );
};

export default FilterDiv;
