import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import Dashboard from "./components/shop/Dashboard";
import Error from "./components/shop/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <div id="navigation">
          <NavLink
            exact
            activeStyle={{ color: "black" }}
            className="nav-link"
            to="/"
          >
            Home
          </NavLink>
        </div>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
