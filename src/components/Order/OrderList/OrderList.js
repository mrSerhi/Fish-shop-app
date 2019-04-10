import React from "react";
import PropTypes from "prop-types";

// components
import OrderListItem from "./OrderListItem/OrderListItem";

const OrderList = ({ products, orders, onRemove }) => {
  const renderListItems = Object.keys(orders).map(key => {
    const index = products.findIndex(pr => pr.title === key);
    const countNumber = orders[key];
    const available = products[index].status === "available";

    return (
      <OrderListItem
        key={key + Math.random() * 100}
        available={available}
        countNumber={countNumber}
        currentProduct={products[index]}
        index={key}
        onRemoveOrder={onRemove}
      />
    );
  });

  return <ul className="order">{renderListItems}</ul>;
};

OrderList.propTypes = {
  products: PropTypes.array.isRequired,
  orders: PropTypes.object.isRequired
};

export default OrderList;
