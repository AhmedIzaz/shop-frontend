import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import useMethod from "../../Methods/useMethod";
import { useStateValue } from "../../State/StateProvider";
import useStyles from "./styles";
function Checkout() {
  const [state, dispatch] = useStateValue();
  const classes = useStyles();
  const { createOrder } = useMethod();
  const [date, setDate] = React.useState(null);
  // };===============
  // ==================
  const totalPrice = () => {
    let total_price = 0;
    state.customer.carts.map(
      (cart) =>
        (total_price = total_price + cart.quantity * parseInt(cart.price))
    );
    return total_price;
  };
  // };===============
  // ==================

  return (
    <main>
      <div className={classes.toolbar} />
      <Paper className={classes.root} variant="elevation">
        <div className={classes.tableWrapper}>
          <table className={classes.table}>
            <thead>
              <tr>
                <td>
                  <Typography variant="subtitle2" color="textSecondary">
                    No.
                  </Typography>
                </td>
                <td>
                  <Typography variant="subtitle2" color="textSecondary">
                    Product Name
                  </Typography>
                </td>
                <td>
                  <Typography variant="subtitle2" color="textSecondary">
                    Quantity
                  </Typography>
                </td>
                <td>
                  <Typography variant="subtitle2" color="textSecondary">
                    Price
                  </Typography>
                </td>
              </tr>
            </thead>
            <br />
            <tbody>
              {state.customer.carts.map((cart, index) => (
                <tr key={cart.id}>
                  <td>{index + 1}</td>
                  <td>{cart.product_name}</td>
                  <td>{cart.quantity}</td>
                  {cart.quantity > 1 ? (
                    <td>
                      {cart.quantity} * {cart.price}
                    </td>
                  ) : (
                    <td>{cart.price}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <div className={classes.footer}>
            <Typography variant="h5" color="primary">
              Total Price
            </Typography>
            <Typography variant="h5" color="secondary">
              {totalPrice()}
            </Typography>
          </div>
        </div>
        <br />
        <br />

        <div className={classes.delivery_form}>
          <form
            onSubmit={(e) => {
              createOrder(e, date);
              setDate(null);
            }}
          >
            <label for="date">
              <Typography variant="body1">
                Please enter which time you want delivery
              </Typography>
            </label>
            <br />
            <input
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className={classes.input}
              name="date"
              type="date"
            />
            <br />
            <br />
            <Button
              onClick={() => console.log(date)}
              color="primary"
              variant="contained"
              type="submit"
              style={{ width: "100%" }}
            >
              Order
            </Button>
          </form>
        </div>
        <br />
      </Paper>
    </main>
  );
}

export default Checkout;
