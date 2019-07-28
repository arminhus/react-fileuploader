import React, { Component } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import FilterableList from "./components/FilterableList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      filterOption: "All"
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
        />
        <FilterableList
          files={this.props.files}
          searchTerm={this.props.searchTerm}
          filterOption={this.state.filterOption}
        />
      </div>
    );
  }
}

export default App;
