import React, { useState, useEffect } from "react";
import Navigationbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import DemoData from "../src/DemoData";
import axios from "axios";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";
export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // ==================================================
  // ==================================================
  const addToCardHandler = async (id) => {
    const product = await DemoData.filter((product) => product.id == id);
    setCart([...cart, ...product]);
  };
  // =========================  for update quantity of  cart==========================
  // ===================================================
  const updateQuantityOfCartItem = (id, currentQuantity, type) => {
    try {
      let indexOfProduct = cart.findIndex((item) => item.id === id);
      let new_cart = cart;
      let newCartItem =
        type === "increament"
          ? { ...new_cart[indexOfProduct], quantity: currentQuantity + 1 }
          : { ...new_cart[indexOfProduct], quantity: currentQuantity - 1 };
      new_cart[indexOfProduct] = newCartItem;
      setCart(new_cart);
    } catch (e) {
      console.log(e.message);
    }
  };
  // ===================== for remove a item from cart==============================
  // ===================================================
  const removeFromCart = (id) => {
    const new_cart = cart.filter((item) => item.id !== id);
    setCart(new_cart);
  };
  // =======================  to delete whole cart ============================
  // ===================================================
  const deleteCart = () => {
    setCart({});
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
    <BrowserRouter>
      <Navigationbar cartLength={cart.length} />
      <Switch>
        <Route exact path="/">
          <Products products={products} addToCardHandler={addToCardHandler} />
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            updateQuantityOfCartItem={updateQuantityOfCartItem}
            removeFromCart={removeFromCart}
            deleteCart={deleteCart}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
