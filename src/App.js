import React, { useState, useEffect } from "react";
import Navigationbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import DemoData from "../src/DemoData";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // ========    add product to the cart ==============
  const addToCardHandler = async (id) => {
    const product = await DemoData.filter((product) => product.id == id);
    setCart([...cart, ...product]);
  };

  useEffect(() => {
    setProducts(DemoData);
  }, []);

  return (
    <div>
      <Navigationbar cart={cart} />
      <Products products={products} addToCardHandler={addToCardHandler} />
    </div>
  );
}
