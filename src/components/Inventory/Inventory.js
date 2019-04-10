import React from "react";
import PropTypes from "prop-types";

// components
import ProductForm from "./ProductForm/ProductForm";
import EditProductForm from "./EditProductForm/EditProductForm";

const Inventory = ({
  productsItems,
  addProduct,
  getMoreProductItems,
  onEdit
}) => {
  const renderEditForms = productsItems.map(item => {
    return <EditProductForm key={item.id} item={item} onEdit={onEdit} />;
  });

  return (
    <div className="inventory">
      <h2 className="inventory">Inventory</h2>
      {renderEditForms}

      <ProductForm addProduct={addProduct} />

      <button onClick={getMoreProductItems}>Load More...</button>
    </div>
  );
};

Inventory.propTypes = {
  getMoreProductItems: PropTypes.func.isRequired
};

export default Inventory;
