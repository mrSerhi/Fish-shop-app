import React, { Component } from "react";
import StorePicker from "./components/StorePicker";

// Header, Order, Inventory
import Header from "./components/Header";
import Order from "./components/Order";
import Inventory from "./components/Inventory";

class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
