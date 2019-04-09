import React, { Component } from "react";

// components
import Header from "../Header";
import Order from "../Order";
import Inventory from "../Inventory/Inventory";

class ShopDescboard extends Component {
  state = {};
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Shop Sea Products" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default ShopDescboard;
