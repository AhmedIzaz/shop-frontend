import React, { useState, useEffect } from "react";
import Navigationbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import DemoData from "../src/DemoData";
import axios from "axios";
import Cart from "./components/Cart/Cart";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // ==================================================
  // ==================================================
  const addToCardHandler = async (id) => {
    const product = await DemoData.filter((product) => product.id == id);
    setCart([...cart, ...product]);
  };
  // ===================================================
  // ===================================================

  useEffect(() => {
    setProducts(DemoData);
    setCart(DemoData);
  }, []);

  // ===================================================
  // ===================================================

  return (
    <div>
      <Navigationbar cartLength={cart.length} />
      {/* <Products products={products} addToCardHandler={addToCardHandler} /> */}
      <Cart cart={cart} />
    </div>
  );
}
