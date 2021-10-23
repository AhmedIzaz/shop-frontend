import { Paper } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../../State/StateProvider";
import useStyles from "./styles";

function ProductDescription() {
  const classes = useStyles();
  const { product_id } = useParams();
  const [state, dispatch] = useStateValue();
  const product = state.products.filter(
    (product) => product.id == product_id
  )[0];
  return (
    <main>
      <div className={classes.toolbar} />
      <Paper variant="elevation">
        <h3>{product.product_name}</h3>
      </Paper>
    </main>
  );
}

export default ProductDescription;
