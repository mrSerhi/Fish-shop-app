import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../../../assets/helpers";

const ProductListItem = ({ item, onAddToOrders }) => {
  const { title, price, status, desc, image } = item;
  const changeBtnLabel = status ? "Buy Now!" : "Sold Out!";
  const reformatStatus = status === "available";
  return (
    <li className="menu-fish">
      <img src={image} alt="title" />
      <h3 className="fish-name">
        {title}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button onClick={() => onAddToOrders(title)} disabled={!reformatStatus}>
        {changeBtnLabel}
      </button>
    </li>
  );
};

ProductListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onAddToOrders: PropTypes.func.isRequired
};

export default ProductListItem;
