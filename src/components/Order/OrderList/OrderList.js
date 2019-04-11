import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// components
import OrderListItem from "./OrderListItem/OrderListItem";

const OrderList = ({ products, orders, onRemove }) => {
  const renderListItems = Object.keys(orders).map(key => {
    const index = products.findIndex(pr => pr.title === key);
    const countNumber = orders[key];
    const available = products[index].status === "available";

    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{ enter: 500, exit: 500 }}
      >
        <OrderListItem
          key={key}
          available={available}
          countNumber={countNumber}
          currentProduct={products[index]}
          index={key}
          onRemoveOrder={onRemove}
        />
      </CSSTransition>
    );
  });

  // return <ul className="order">{renderListItems}</ul>;
  return (
    <TransitionGroup component="ul" className="order">
      {renderListItems}
    </TransitionGroup>
  );
};

OrderList.propTypes = {
  products: PropTypes.array.isRequired,
  orders: PropTypes.object.isRequired
};

export default OrderList;
