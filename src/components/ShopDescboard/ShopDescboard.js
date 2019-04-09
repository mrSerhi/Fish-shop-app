import React, { Component } from "react";

// components
import Header from "../Header";
import Order from "../Order";
import Inventory from "../Inventory/Inventory";
import Layout from "../Layout/Layout";

class ShopDescboard extends Component {
  state = {
    products: [],
    order: {}
  };

  handleaddProducts = order => {
    const products = [...this.state.products, order];
    this.setState({ products });
  };

  render() {
    return (
      <Layout>
        <Header tagline="Shop Sea Products" />
        <Order />
        <Inventory addProduct={this.handleaddProducts} />
      </Layout>
    );
  }
}

export default ShopDescboard;
