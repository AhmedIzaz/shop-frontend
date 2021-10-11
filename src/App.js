import React, { Component } from "react";
import Navigationbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigationbar />
        <Products />
      </div>
    );
  }
}
