import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Header, Order, Inventory
import StorePicker from "./components/StorePicker";
import NotFound from "./components/Pages/NotFound/NotFound";
import ShopDescboard from "./components/ShopDescboard/ShopDescboard";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={StorePicker} />
          <Route path="/store/:store_id" component={ShopDescboard} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
