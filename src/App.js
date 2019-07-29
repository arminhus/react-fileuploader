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

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={term => this.updateSearchTerm(term)}
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
