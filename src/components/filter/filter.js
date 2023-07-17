export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <>
      <h3 className="title">Find contacts by name</h3>
      <input
        className="input input-search"
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};
