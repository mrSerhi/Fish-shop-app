import React from "react";
import { formatPrice } from "../../assets/helpers";

const Order = ({ products, orders }) => {
  // getting the total price of added orders
  const total = Object.keys(orders).reduce((total, curr) => {
    const index = products.findIndex(pr => pr.title === curr);
    const countNumber = orders[curr];
    const available = products[index].status;

    if (available) return total + products[index].price * countNumber;

    return total;
  }, 0);

  return (
    <div className="order-wrap">
      <h2>Orders</h2>
      <div className="total">
        Total: <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  );
};

export default Order;
