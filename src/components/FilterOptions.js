import { React, Component } from "react";

class FilterOptions extends Component {
  render() {
    return (
      <div className="FilterOptions">
        <div className="FilterOptions-option">
          <label htmlFor="filter-all">
            <input type="radio" value="All">
              All
            </input>
          </label>
        </div>
      </div>
    );
  }
}

export default FilterOptions;
