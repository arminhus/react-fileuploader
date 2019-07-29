import React, { Component } from "react";

import "../styles/SearchBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faSearch} />
        <input placeholder="search" value={this.props.searchTerm} />
      </div>
    );
  }
}

export default SearchBox;
