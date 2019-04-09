import React from "react";

const ProductForm = () => {
  return (
    <form className="fish-edit">
      <input name="name" type="text" placeholder="Title of product" />
      <input name="price" type="text" placeholder="Product price" />
      <select name="status">
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" placeholder="Type decsription" />
      <input name="image" type="text" placeholder="Choose product image" />

      <button type="submit">Ok</button>
    </form>
  );
};

export default ProductForm;
