import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { Button, Paper, Typography } from "@material-ui/core";
import { useStateValue } from "../../../State/StateProvider";
import useMethod from "../../../Methods/useMethod";
function Dashboard() {
  const classes = useStyles();
  const [state, dispatch] = useStateValue();
  const { clearOrder } = useMethod();

  return (
    <main>
      <div className={classes.toolbar} />
      <div className={classes.container}>
        <div className={classes.option_bar}>
          <Typography
            className={classes.link}
            component={Link}
            to="/owner/products"
          >
            Products
          </Typography>
          <Typography
            className={classes.link}
            component={Link}
            to="/owner/create-product"
          >
            Create Product
          </Typography>
          <Typography
            className={classes.link}
            component={Link}
            to="/owner/shop-customers"
          >
            Customers
          </Typography>
        </div>
        <div className={classes.dashboard_wrapper}>
          <div className={classes.orders_list}>
            {state.owner.order_list.map((obj, index) => (
              <Paper variant="elevation" className={classes.order_item}>
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
              </Paper>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
