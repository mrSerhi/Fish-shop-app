import React, { Component } from "react";

class StorePicker extends Component {
  state = {};
  render() {
    return (
      <form className="store-selector">
        <h2>Please type a store</h2>
        <input type="text" placeholder="Store name" required />
        <button type="submit">Visit store -></button>
      </form>
    );
  }
}

export default StorePicker;
