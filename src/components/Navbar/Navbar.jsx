import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

// ==================
// ===================
// ==================
// ===================

export default function Navbar({ cartLength }) {
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
          <Typography variant="h7">
            <div className={classes.links}>
              <div>Home</div>
              <div>Categories</div>
              <div>Contact</div>
            </div>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cartLength items" color="inherit">
              <Badge badgeContent={cartLength} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
