import './SelectFilter.css';

const SelectFilter = ({
  categories,
  filterName,
  value,
  handleChange,
  usedFilters,
  filterId,
}) => {
  const sortedCategories = categories.sort((a, b) =>
    a.categoryName.localeCompare(b.categoryName)
  );

  function filterCategories(catToFilter) {
    const usedCategories = usedFilters.map(({ brand, category }) => {
      if (brand === catToFilter) return category;
      if (category === catToFilter) return brand;
    });

    return usedCategories.every((value) => value === undefined);
  }

  return (
    <div className="selectComponent">
      <label htmlFor={filterId}>
        <p className="selectLabel">{filterName}</p>
      </label>

      <select value={value} onChange={handleChange} id={filterId}>
        <option value={'all'}>All</option>

        {sortedCategories.map((cat) => {
          const isCategoryPresent = filterCategories(cat.categoryName);

          return (
            <option
              key={cat.id}
              value={cat.categoryName}
              disabled={isCategoryPresent}
            >
              {cat.categoryName}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectFilter;
