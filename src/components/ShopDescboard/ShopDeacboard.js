import React, { Component } from "react";

// components
import Header from "../Header";
import Order from "../Order";
import Inventory from "../Inventory/Inventory";
import Layout from "../Layout/Layout";

class ShopDescboard extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Header tagline="Shop Sea Products" />
        <Order />
        <Inventory />
      </Layout>
    );
  }
}

export default ShopDescboard;
