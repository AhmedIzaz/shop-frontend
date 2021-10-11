import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Badge,
  IconButton,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import ShopLogo from "../Assets/shop_logo.jpg";
import useStyles from "./styles";

export default function Navbar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar color="inherit" position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <img
              src={ShopLogo}
              height="25px"
              alt="My Shop"
              className={classes.image}
            />
            My Shop
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
