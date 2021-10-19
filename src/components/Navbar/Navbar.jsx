import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
  Avatar,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import ShopLogo from "../Assets/shop_logo.jpg";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";
import { useStateValue } from "../../State/StateProvider";

// ==================
// ===================
// ==================
// ===================

export default function Navbar({ cartLength }) {
  const classes = useStyles();
  const location = useLocation();
  const [state, dispatch] = useStateValue();
  return (
    <React.Fragment>
      <AppBar color="inherit" position="fixed" className={classes.appBar}>
        <Toolbar>
          <div>
            <img
              src={ShopLogo}
              height="25px"
              alt="My Shop"
              className={classes.image}
            />
          </div>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            color="inherit"
            className={classes.title}
          >
            My Shop
          </Typography>
          <Typography variant="body2">
            <div className={classes.links}>
              <div>Home</div>
              <div>Categories</div>
              <div>Contact</div>
            </div>
          </Typography>
          <div className={classes.grow} />
          {state.customer ? (
            <div className={classes.profile}>
              <Avatar />
              <Typography>{state.customer.username}</Typography>
            </div>
          ) : (
            <div className={classes.actions}>
              {location.pathname !== "/register" && (
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  Register
                </Button>
              )}
              {location.pathname !== "/login" && (
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  color="inherit"
                  size="small"
                >
                  Login
                </Button>
              )}
            </div>
          )}

          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cartLength items"
                color="inherit"
              >
                <Badge badgeContent={cartLength} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
