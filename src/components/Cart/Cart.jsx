import { Container, Grid, Typography } from "@material-ui/core";

import React from "react";
import FilledCart from "./FilledCart";
import useStyles from "./styles";
function Cart({ cart }) {
  const classes = useStyles();
  const cartIsEmpty = !cart.length;
  //   =============================
  // ===============================
  const EmptyCart = () => {
    return (
      <Typography variant="subtitle2">
        Sorry No items is cart! Order something first!
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
      {cartIsEmpty ? <EmptyCart /> : <FilledCart cart={cart} />}
    </Container>
  );
}

export default Cart;
