import React from "react";

// components
import ProductListItem from "./ProductListItem/ProductListItem";

const ProductsList = ({ productsItems, onAddToOrders }) => {
  const renderListItems = productsItems
    ? productsItems.map(item => (
        <ProductListItem
          key={item.title + Math.random() * 100}
          item={item}
          onAddToOrders={onAddToOrders}
        />
      ))
    : null;

  return <ul className="fishes">{renderListItems}</ul>;
};

export default ProductsList;
