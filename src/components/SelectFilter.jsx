import './SelectFilter.css';

const SelectFilter = ({ categories, filterName, value, handleChange }) => {
  const sortedCategories = categories.sort((a, b) =>
    a.categoryName.localeCompare(b.categoryName)
  );

  return (
    <label className="selectComponent">
      {filterName}

      <select value={value} onChange={handleChange}>
        <option value={'all'}>All</option>

        {sortedCategories.map((cat) => (
          <option key={cat.id} value={cat.categoryName}>
            {cat.categoryName}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectFilter;
