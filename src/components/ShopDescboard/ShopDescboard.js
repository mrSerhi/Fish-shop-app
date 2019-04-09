import React, { Component } from "react";

// fake API
import { getProductItems } from "../../api/sample-fishes";

// components
import Header from "../Header";
import Order from "../Order";
import Inventory from "../Inventory/Inventory";
import Layout from "../Layout/Layout";
import ProductsList from "../ProductsList/ProductsList";

class ShopDescboard extends Component {
  state = {
    products: [],
    order: {}
  };

  handleaddProducts = order => {
    const products = [...this.state.products, order];
    this.setState({ products });
  };

  loadMoreProducts = () => {
    const resivesProductsItems = getProductItems();
    const products = [...this.state.products, ...resivesProductsItems];

    this.setState({ products });
  };

  render() {
    const { products } = this.state;
    return (
      <Layout>
        <Header tagline="Shop Sea Products">
          <ProductsList productsItems={products} />
        </Header>
        <Order />
        <Inventory
          addProduct={this.handleaddProducts}
          getMoreProductItems={this.loadMoreProducts}
        />
      </Layout>
    );
  }
}

export default ShopDescboard;
