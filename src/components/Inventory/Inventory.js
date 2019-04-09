import React from "react";
import PropTypes from "prop-types";

// components
import ProductForm from "./ProductForm/ProductForm";

const Inventory = ({ addProduct, getMoreProductItems }) => {
  return (
    <div className="inventory">
      <h2 className="inventory">Inventory</h2>
      <ProductForm addProduct={addProduct} />
      <button onClick={getMoreProductItems}>Load More...</button>
    </div>
  );
};

Inventory.propTypes = {
  getMoreProductItems: PropTypes.func.isRequired
};

export default Inventory;
