import { Grid, Typography, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useMethod from "../../Methods/useMethod";
import { useStateValue } from "../../State/StateProvider";
import CartItem from "./CartItem";
import useStyles from "./styles";
export default function FilledCart() {
  const classes = useStyles();
  const [totalPrice, setTotalPrice] = useState(0);
  const [state, dispatch] = useStateValue();
  const { deleteCart } = useMethod();

  // =========================
  // =========================

  useEffect(() => {
    let price = 0;
    state.customer.carts.map((product) =>
      state.products.map((item) =>
        item.id == product.product_id
          ? (price = price + parseInt(item.price))
          : null
      )
    );

    setTotalPrice(price);
  }, [state.cart]);

  // =========================
  // =========================
  return (
    <>
      <Grid container spacing={3}>
        {state.customer.carts.map((product) =>
          state.products.map((item) =>
            item.id == product.product_id ? (
              <Grid item xs={12} sm={4} key={product.product_id}>
                <div>
                  <CartItem product={item} />
                </div>
              </Grid>
            ) : null
          )
        )}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4" gutterBottom>
          Total : {totalPrice}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="medium"
            type="button"
            variant="contained"
            color="default"
            onClick={deleteCart}
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
