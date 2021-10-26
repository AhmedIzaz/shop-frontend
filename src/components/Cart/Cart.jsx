import { Container, Grid, Typography } from "@material-ui/core";

import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../State/StateProvider";
import FilledCart from "./FilledCart";
import useStyles from "./styles";
function Cart() {
  const [state, dispatch] = useStateValue();
  const classes = useStyles();
  const cartIsEmpty = !state.customer.carts.length;

  //   =============================
  // ===============================
  const EmptyCart = () => {
    return (
      <Typography variant="subtitle2">
        <Link to="/" className={classes.link}>
          Add first to cart!
        </Link>
      </Typography>
    );
  };

  //   ====================================
  // =======================================

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Shopping Cart
      </Typography>
      <div className={classes.toolbar} />

      {cartIsEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}

export default Cart;
