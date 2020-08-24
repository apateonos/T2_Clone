import React, { Component } from "react";
import "./SearchBar.scss";

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="searchBarContainer">
          <form action="">
            <input type="text" placeholder="I'm looking for..." />
            <button type="submit"></button>
          </form>
          <div className="closeButton">
            <svg viewBox="0 0 10 10" id="icon-close">
              <title>close</title>
              <polygon points="9.6 1.1 8.9 0.4 5 4.29 1.1 0.4 0.4 1.1 4.29 5 0.4 8.9 1.1 9.6 5 5.71 8.9 9.6 9.6 8.9 5.71 5 9.6 1.1"></polygon>
            </svg>
            <span>CLOSE</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
