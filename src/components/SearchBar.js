import React, { Component } from "react";

import "../styles/SearchBar.css";
import SearchBox from "./SearchBox";
import FilterOptions from "./FilterOptions";

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-heading">
          <h1>File Uploader</h1>
        </div>
        <div className="SearchBar-controls">
          <SearchBox />
          <FilterOptions />
        </div>
      </div>
    );
  }
}

export default SearchBar;
