import React from "react";
import useStyles from "./styles";
function Customers() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar} />
    </div>
  );
}

export default Customers;
