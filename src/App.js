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
import Categories from "./components/Categories/Categories";
import CategoriesProduct from "./components/Categories/CategoriesProduct";
import Contact from "./components/Contact/Contact";

export default function App() {
  const [state, dispatch] = useStateValue();

  useEffect(async () => {
    try {
      await axios
        .get("http://localhost:8000/product/products")
        .then((productList) => {
          dispatch({
            type: "ADD_PRODUCTS_TO_STATE",
            products: productList.data,
          });
        });
      await axios
        .get("http://localhost:8000/category/categories")
        .then((categoryList) => {
          dispatch({
            type: "ADD_CATEGORIES_TO_STATE",
            categories: categoryList.data.categories,
          });
        });
    } catch (e) {
      return alert(e.message);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navigationbar />

      <Switch>
        <Route exact path="/" component={Products} />
        <Route
          exact
          path="/product-description/"
          component={ProductDescription}
        />
        <Route exact path="/categories" component={Categories} />
        <Route
          exact
          path="/categories-product/:category_id"
          component={CategoriesProduct}
        />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
