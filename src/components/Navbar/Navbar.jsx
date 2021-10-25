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
import { ShoppingCart, ShopSharp } from "@material-ui/icons";

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
            <IconButton component={Link} to="/">
              <ShopSharp />
            </IconButton>
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

          <div>
            <Typography variant="body2">
              <div className={classes.links}>
                <Button component={Link} to="/">
                  Home
                </Button>

                <Button component={Link} to="/categories">
                  Categories
                </Button>

                <Button component={Link} to="/contact">
                  Contact
                </Button>
              </div>
            </Typography>
          </div>
          <div className={classes.grow} />
          {state.customer ? (
            <div className={classes.profile}>
              <Avatar />
              <Typography>{state.customer.username}</Typography>
              <Button
                component={Link}
                to="/logout"
                variant="contained"
                color="secondary"
                size="small"
              >
                Logout
              </Button>
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
