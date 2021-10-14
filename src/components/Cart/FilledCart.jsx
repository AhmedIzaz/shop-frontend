import { Grid, Typography, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import useStyles from "./styles";
export default function FilledCart({
  cart,
  updateQuantityOfCartItem,
  removeFromCart,
  deleteCart,
}) {
  const classes = useStyles();
  const [totalPrice, setTotalPrice] = useState(0);

  // =========================
  // =========================

  useEffect(() => {
    let price = 0;
    cart.map((product) => (price = price + parseInt(product.price)));
    setTotalPrice(price);
  }, []);

  // =========================
  // =========================
  return (
    <>
      <Grid container spacing={3}>
        {cart.map((product) => (
          <Grid item xs={12} sm={3} key={product.id}>
            <div>
              <CartItem
                product={product}
                updateQuantityOfCartItem={updateQuantityOfCartItem}
                removeFromCart={removeFromCart}
              />
            </div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4" gutterBottom>
          Total:{totalPrice}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="medium"
            type="button"
            variant="contained"
            color="default"
            onClick={() => deleteCart()}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="medium"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
}
