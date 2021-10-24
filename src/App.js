import React, { useEffect } from "react";
import Navigationbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import axios from "axios";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { useStateValue } from "./State/StateProvider";
import Login from "./components/Authentications/Login/Login";
import Register from "./components/Authentications/Register/Register";
import Logout from "./components/Authentications/Logout";
import ProductDescription from "./components/Products/Product/ProductDescription";

export default function App() {
  const [state, dispatch] = useStateValue();

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

  return (
    <BrowserRouter>
      <Navigationbar cartLength={state.cart.length} />

      <Switch>
        <Route exact path="/" component={Products} />
        <Route
          exact
          path="/product-description/"
          component={ProductDescription}
        />

        <Route exact path="/cart" component={Cart} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </BrowserRouter>
  );
}
