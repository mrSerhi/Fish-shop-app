import React, { Component } from "react";

// fake API
import { getProductItems } from "../../api/sample-fishes";

// components
import Header from "../Header";
import Order from "../Order/Order";
import Inventory from "../Inventory/Inventory";
import Layout from "../Layout/Layout";
import ProductsList from "../ProductsList/ProductsList";

class ShopDescboard extends Component {
  state = {
    products: [],
    orders: {}
  };

  handleaddProducts = order => {
    const products = [...this.state.products, order];
    this.setState({ products });
  };

  handleAddOrderClick = title => {
    const orders = { ...this.state.orders };
    orders[title] = orders[title] + 1 || 1;

    this.setState({ orders });
  };

  loadMoreProducts = () => {
    const resivesProductsItems = getProductItems();
    const products = [...this.state.products, ...resivesProductsItems];

    this.setState({ products });
  };

  render() {
    const { products, orders } = this.state;
    return (
      <Layout>
        <Header tagline="Shop Sea Products">
          <ProductsList
            productsItems={products}
            onAddToOrders={this.handleAddOrderClick}
          />
        </Header>
        <Order products={products} orders={orders} />
        <Inventory
          addProduct={this.handleaddProducts}
          getMoreProductItems={this.loadMoreProducts}
        />
      </Layout>
    );
  }
}

export default ShopDescboard;
