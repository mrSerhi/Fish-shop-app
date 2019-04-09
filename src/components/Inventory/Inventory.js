import React from "react";

// components
import ProductForm from "./ProductForm/ProductForm";

const Inventory = () => {
  return (
    <div className="inventory">
      <ProductForm />
      <ProductForm />
    </div>
  );
};

export default Inventory;
