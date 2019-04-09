import React from "react";
import { formatPrice } from "../../../../assets/helpers";

const OrderListItem = ({
  available,
  countNumber,
  currentProduct: { title, price }
}) => {
  if (available) {
    return (
      <li>
        {countNumber} lbs {title}
        {formatPrice(countNumber * price)}
      </li>
    );
  } else {
    return (
      <li>{`Sorry, ${title ? title : "Product"} is no longer available...`}</li>
    );
  }
};

export default OrderListItem;
