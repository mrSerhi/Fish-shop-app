import React from "react";

// components
import OrderListItem from "./OrderListItem/OrderListItem";

const OrderList = ({ products, orders }) => {
  const renderListItems = Object.keys(orders).map(key => {
    const index = products.findIndex(pr => pr.title === key);
    const countNumber = orders[key];
    const available = products[index].status;

    return (
      <OrderListItem
        available={available}
        countNumber={countNumber}
        currentProduct={products[index]}
      />
    );
  });

  return <ul className="order">{renderListItems}</ul>;
};

export default OrderList;
