import { Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { useStateValue } from "../../../State/StateProvider";
function Customers() {
  const [state, dispatch] = useStateValue();
  const classes = useStyles();
  return (
    <main>
      <div className={classes.toolbar} />
      <Paper className={classes.paper} variant="elevation">
        <Typography variant="h3" color="primary">
          Customers of this shop
        </Typography>
        {state.owner.customers.map((customer) => (
          <div className={classes.customer}>
            <Typography variant="h6" color="textSecondary">
              {customer.username}
            </Typography>
          </div>
        ))}
      </Paper>
    </main>
  );
}

export default Customers;
