import React, { Component } from "react";

import "../styles/SearchBox.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import * as Icons from "@fortawesome/fontawesome-free-solid";
import { MdSearch } from "react-icons/md";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <MdSearch />
        <input placeholder="search" />
      </div>
    );
  }
}

export default SearchBox;
