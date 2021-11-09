import React from "react";
import useStyles from "./styles";
import { useStateValue } from "../../State/StateProvider";
import { Button, Paper, Typography } from "@material-ui/core";
import useMethod from "../../Methods/useMethod";
// ==================
// ==================
function OwnerDashboard() {
  const [state, dispatch] = useStateValue();
  const classes = useStyles();
  const { clearOrder } = useMethod();

  // ==================
  // ==================
  return (
    <main>
      <div className={classes.toolbar} />
      <div className={classes.container}>
        <div className={classes.option_bar}>
          <Typography>Products</Typography>
          <Typography>Create Product</Typography>
          <Typography>Customers</Typography>
        </div>
        <Paper className={classes.dashboard_wrapper} variant="elevation">
          <div className={classes.orders_list}>
            {state.owner.order_list.map((obj, index) => (
              <div className={classes.order_item}>
                <Typography>
                  <strong>({index + 1})</strong> orders of {obj.customer_name}
                </Typography>

                {obj.customer_orders.map((order) => (
                  <div>
                    <p>
                      {order.product_name} * {order.quantity} = {order.price}
                    </p>
                  </div>
                ))}
                <div>
                  <Button
                    onClick={() => clearOrder(obj.customer_id)}
                    size="small"
                    variant="outlined"
                    color="secondary"
                  >
                    Completed
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Paper>
      </div>
    </main>
  );
}

export default OwnerDashboard;
