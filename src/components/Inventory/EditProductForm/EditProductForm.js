import React, { Component } from "react";
import PropTypes from "prop-types";

class EditProductForm extends Component {
  handleChange = e => {
    const item = { ...this.props.item };
    item[e.currentTarget.name] = e.currentTarget.value;

    this.props.onEdit(item);
  };

  render() {
    const { id, title, price, status, desc, image } = this.props.item;

    return (
      <div className="fish-edit">
        <input
          onChange={this.handleChange}
          value={title}
          name="title"
          type="text"
        />

        <input
          onChange={this.handleChange}
          value={price}
          name="price"
          type="text"
        />

        <select onChange={this.handleChange} value={status} name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea onChange={this.handleChange} value={desc} name="desc" />

        <input
          onChange={this.handleChange}
          value={image}
          name="image"
          type="text"
        />

        <button onClick={() => this.props.onRemove(id)} type="button">
          Remove product
        </button>
      </div>
    );
  }
}

EditProductForm.propTypes = {
  item: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default EditProductForm;
