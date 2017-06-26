import React from 'react';

const Filter = (props) => {
  return (
    <div className="filter-container">
      <div>
        <form>
          <label>Start Date:</label>
          <input type="date" />
          <label>End Date:</label>
          <input type="date" />
          <button type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
}
export default Filter;
