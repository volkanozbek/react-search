import React, { Component } from "react";
import "./search-box.styles.css";

export class SearchBox extends Component {
  render() {
    return (
      <div className="search-container">
        <input
          className={this.props.className}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        ></input>
      </div>
    );
  }
}

export default SearchBox;
