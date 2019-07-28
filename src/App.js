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
        <SearchBar />
        <FilterableList files={this.props.files} />
      </div>
    );
  }
}

export default App;
