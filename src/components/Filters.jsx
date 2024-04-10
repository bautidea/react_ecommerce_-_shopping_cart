const Filters = () => {
  return (
    <section className="filters">
      <form>
        <label htmlFor="price">Price</label>
        <input type="range" id="price" min="0" max="2000" step="10" />
      </form>

      <form>
        <label htmlFor="category">Category</label>
        <select id="category">
          <option>All</option>
        </select>
      </form>
    </section>
  );
};

export default Filters;
