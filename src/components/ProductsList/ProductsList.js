import React from "react";
import PropTypes from "prop-types";

// components
import ProductListItem from "./ProductListItem/ProductListItem";

const ProductsList = ({ productsItems, onAddToOrders }) => {
  const renderListItems = productsItems
    ? productsItems.map(item => (
        <ProductListItem
          key={item.id}
          item={item}
          onAddToOrders={onAddToOrders}
        />
      ))
    : null;

  return <ul className="fishes">{renderListItems}</ul>;
};

ProductsList.propTypes = {
  productsItems: PropTypes.array.isRequired
};

export default ProductsList;
