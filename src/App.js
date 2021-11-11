import React, { useEffect } from "react";
import Navigationbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import axios from "axios";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useStateValue } from "./State/StateProvider";
import Login from "./components/Authentications/Login/Login";
import Register from "./components/Authentications/Register/Register";
import Logout from "./components/Authentications/Logout";
import ProductDescription from "./components/Products/Product/ProductDescription";
import Categories from "./components/Categories/Categories";
import CategoriesProduct from "./components/Categories/CategoriesProduct";
import Contact from "./components/Contact/Contact";
import Checkout from "./components/Checkout/Checkout";
import OwnerLogin from "./components/Owner/Login/OwnerLogin";
import Dashboard from "./components/Owner/Dashboard/Dashboard";
import OwnerLogout from "./components/Owner/OwnerLogout";
import CreateProduct from "./components/Owner/Products/Create Products/CreateProduct";
import ShopProducts from "./components/Owner/Products/Shop Products/ShopProducts";
import Customers from "./components/Owner/Customers/Customers";
import ErrorPage from "./components/ErrorPage";

export default function App() {
  const [state, dispatch] = useStateValue();

  useEffect(async () => {
    try {
      await axios
        .get("http://localhost:8000/product/products")
        .then(({ data }) => {
          dispatch({
            type: "ADD_PRODUCTS_TO_STATE",
            products: data.products,
          });
          dispatch({
            type: "ADD_CATEGORIES_TO_STATE",
            categories: data.categories,
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
        <Route exact path="/contact" component={Contact} />
        {/* =================== Customer Part ================= */}
        {/* =================================================== */}
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/customer-logout" component={Logout} />
        {/* ==================== Owner Part ==================== */}
        {/* ==================================================== */}
        <Route exact path="/owner-login" component={OwnerLogin} />
        <Route exact path="/owner/dashboard" component={Dashboard} />
        <Route exact path="/owner/owner-logout" component={OwnerLogout} />
        <Route exact path="/owner/create-product" component={CreateProduct} />
        <Route exact path="/owner/products" component={ShopProducts} />
        <Route exact path="/owner/shop-customers" component={Customers} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}
