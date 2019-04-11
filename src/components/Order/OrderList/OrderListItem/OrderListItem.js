import React from "react";
import { formatPrice } from "../../../../assets/helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const OrderListItem = ({
  available,
  countNumber,
  currentProduct: { title, price },
  index,
  onRemoveOrder
}) => {
  const transitionOptions = {
    key: countNumber,
    classNames: "count",
    timeout: { enter: 500, exit: 500 }
  };
  if (available) {
    return (
      <li>
        <span>
          <TransitionGroup component="span" className="count">
            <CSSTransition {...transitionOptions}>
              <span>{countNumber}</span>
            </CSSTransition>
          </TransitionGroup>
          lbs {title}
          {formatPrice(countNumber * price)}
          <button onClick={() => onRemoveOrder(index)}>&times;</button>
        </span>
      </li>
    );
  } else {
    return (
      <li>{`Sorry, ${title ? title : "Product"} is no longer available...`}</li>
    );
  }
};

export default OrderListItem;
