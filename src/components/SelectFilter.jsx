import './SelectFilter.css';

const SelectFilter = ({
  categories,
  filterName,
  value,
  handleChange,
  usedFilters,
}) => {
  const sortedCategories = categories.sort((a, b) =>
    a.categoryName.localeCompare(b.categoryName)
  );

  function filterCategories(catToFilter) {
    const usedCategories = usedFilters.map(({ brand, category }) => {
      if (brand === catToFilter) return category;
      if (category === catToFilter) return brand;
    });

    const isCategoryPresent = usedCategories.every(
      (value) => value === undefined
    );

    return isCategoryPresent;
  }

  return (
    <label className="selectComponent">
      <p className="selectLabel">{filterName}</p>

      <select value={value} onChange={handleChange}>
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
    </label>
  );
};

export default SelectFilter;
