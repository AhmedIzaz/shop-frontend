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
import "./App.css";

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

          {/* <NavLink className="nav-link">
            <form id="search-box">
              <input type="text" />
              <button type="submit">Search</button>
            </form>
          </NavLink> */}

          <NavLink className="nav-link" to="/customer-profile">
            Profile
          </NavLink>
        </div>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/categories" exact component={Category} />
          <Route path="/customer-profile" exact component={Profile} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
