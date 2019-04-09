import React from "react";

// components
import ProductForm from "./ProductForm/ProductForm";

const Inventory = ({ addProduct }) => {
  return (
    <div className="inventory">
      <h2 className="inventory">Inventory</h2>
      <ProductForm addProduct={addProduct} />
    </div>
  );
};

export default Inventory;
