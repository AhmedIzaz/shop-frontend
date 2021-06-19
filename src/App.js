import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import Category from "./components/Category/Category";
import Profile from "./components/customer/Profile";
import Dashboard from "./components/shop/Dashboard";
import Error from "./components/shop/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CategoriesProducts from "./components/Category/CategoriesProducts";

function App() {
  return (
    <div className="App">
      <Router>
        <div id="navigation">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>

          <NavLink className="nav-link" to="/categories">
            Categories
          </NavLink>

          <form id="search-box" className="nav-link">
            <input id="input-box" type="text" />
            <button className="btn btn-secondary btn-sm" type="submit">
              Search
            </button>
          </form>

          <NavLink className="nav-link" to="/customer-profile">
            Profile
          </NavLink>
        </div>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/categories" exact component={Category} />
          <Route path="/categories/category/:category_id" component={CategoriesProducts} />
          <Route path="/customer-profile" exact component={Profile} />
          <Route component={Error} />
        </Switch>
      </Router>
      <footer className="footer">
        <div className="footer-item">
          <h6>Address</h6>
          <span>street: 1 dhaka, baridhara</span>
          <br></br>
          <span>Gulshan dhaka</span>
        </div>
        <div className="footer-item">
          <h6>Address</h6>
          <span>street: 1 dhaka, baridhara</span>
          <br></br>
          <span>Gulshan dhaka</span>
        </div>
        <div className="footer-item">
          <h6>Address</h6>
          <span>street: 1 dhaka, baridhara</span>
          <br></br>
          <span>Gulshan dhaka</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
