import React, { Component } from "react";

export class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        ></input>
      </div>
    );
  }
}

export default SearchBox;
