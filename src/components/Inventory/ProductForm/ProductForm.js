import React, { Component } from "react";
import PropTypes from "prop-types";

class ProductForm extends Component {
  titleRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  handleSubmitForm = e => {
    e.preventDefault();
    const title = this.titleRef.current.value;
    const price = parseFloat(this.priceRef.current.value);
    const status = this.statusRef.current.value === "available";
    const desc = this.descRef.current.value;
    const image = this.imageRef.current.value;
    const order = {
      title,
      price,
      status,
      desc,
      image
    };

    // pull order to the state
    this.props.addProduct(order);

    // clear form fields
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.handleSubmitForm}>
        <input
          ref={this.titleRef}
          name="name"
          type="text"
          placeholder="Title of product"
        />

        <input
          ref={this.priceRef}
          name="price"
          type="text"
          placeholder="Product price"
        />

        <select ref={this.statusRef} name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea
          ref={this.descRef}
          name="desc"
          placeholder="Type decsription"
        />

        <input
          ref={this.imageRef}
          name="image"
          type="text"
          placeholder="Choose product image"
        />

        <button type="submit">Ok</button>
      </form>
    );
  }
}

ProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired
};

export default ProductForm;
