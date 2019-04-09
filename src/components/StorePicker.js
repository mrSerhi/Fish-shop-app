import React, { Component } from "react";

import { getFunName } from "../assets/helpers";

class StorePicker extends Component {
  storeNameInput = React.createRef();

  handleSumbitForm = e => {
    e.preventDefault();

    // getting input value on ref
    const inputValue = this.storeNameInput.current.value;
    console.log(inputValue);
    // push to the new route
    this.props.history.push(`/store/${inputValue}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.handleSumbitForm}>
        <h2>Please type a store</h2>
        <input
          ref={this.storeNameInput}
          defaultValue={getFunName()}
          type="text"
          placeholder="Store name"
          required
        />
        <button type="submit">Visit store -></button>
      </form>
    );
  }
}

export default StorePicker;
