import React, { useState, useEffect } from "react";
import Navigationbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import DemoData from "../src/DemoData";
import axios from "axios";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useStateValue } from "./State/StateProvider";

export default function App() {
  const [state, dispatch] = useStateValue();
  // ==================================================
  // ==================================================
  const addToCartHandler = async (id) => {
    const product = state.products.filter((product) => product.id == id)[0];

    await dispatch({
      type: "ADD_PRODUCT_TO_CART",
      item: {
        product_id: product.id,
        product_name: product.product_name,
        quantity: 1,
        picture: product.picture,
        price: product.price,
      },
    });
    console.log(state.cart, state.products);
  };
  // =========================  for update quantity of  cart==========================
  // ===================================================
  // will work after connecting to server
  // const updateQuantityOfCartItem = async (id, newQuantity) => {
  //   let index = cart.findIndex((item) => item.id === id);
  //   let newCart = cart;
  //   let newItem = { ...newCart[index], quantity: newQuantity };
  //   newCart[index] = newItem;
  //   setCart(newCart);
  // };
  // // ===================== for remove a item from cart==============================
  // // ===================================================
  // const removeFromCart = (id) => {
  //   const new_cart = cart.filter((item) => item.id !== id);
  //   setCart(new_cart);
  // };
  // // =======================  to delete whole cart ============================
  // // ===================================================
  // const deleteCart = () => {
  //   setCart([]);
  // };
  // ===================================================
  // ===================================================
  useEffect(async () => {
    await axios
      .get("http://localhost:8000/product/products")
      .then((productList) => {
        dispatch({
          type: "ADD_PRODUCTS_TO_STATE",
          products: productList.data,
        });
      });
  }, []);
  // ===================================================
  // ===================================================

  return (
    <BrowserRouter>
      <Navigationbar cartLength={state.cart.length} />
      <Switch>
        <Route exact path="/">
          <Products
            products={state.products}
            addToCartHandler={addToCartHandler}
          />
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={state.cart}
            //   updateQuantityOfCartItem={updateQuantityOfCartItem}
            //   removeFromCart={removeFromCart}
            //   deleteCart={deleteCart}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
