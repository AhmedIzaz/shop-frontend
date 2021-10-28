import { Button, Typography } from "@material-ui/core";
import React from "react";
import useMethod from "../../Methods/useMethod";
import { useStateValue } from "../../State/StateProvider";
import useStyles from "./styles";
function Checkout() {
  const [state, dispatch] = useStateValue();
  const classes = useStyles();
  const { createOrder } = useMethod();
  return (
    <main>
      <div className={classes.toolbar} />
      <div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {state.customer.carts.map((cart, index) => (
              <tr key={cart.id}>
                <td>{index}</td>
                <td>{cart.product_name}</td>
                <td>{cart.quantity}</td>
                {cart.quantity > 1 ? (
                  <td>
                    {cart.quantity} * {cart.price}
                  </td>
                ) : (
                  <td>{cart.quantity}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <div className={classes.deliverySection}>
          <div className={classes.delivery_form}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(e.target);
              }}
            >
              <label for="date">
                <Typography>
                  Please enter which time you want delivery
                </Typography>
              </label>
              <input name="data" type="date" />
              <Button type="submit"></Button>
            </form>
          </div>
          <div className={classes.deliveryButton}></div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
