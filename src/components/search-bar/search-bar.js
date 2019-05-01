import React, { Component } from "react";
import "./search-bar.css";
class SearchBar extends Component {
  state = { searchText: "" };

  onSearchChange = e => {
    const searchText = e.target.value;
    this.setState({ searchText: searchText });
    this.props.onSearchChange(searchText);
  };

  render() {
    const searchPlaceholder = "Please start type to search";
    return (
      <input
        className="form-control search-input"
        placeholder={searchPlaceholder}
        value={this.state.searchText}
        onChange={this.onSearchChange}
      />
    );
  }
}

export default SearchBar;
