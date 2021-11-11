import { Grid } from "@material-ui/core";

import React from "react";
import { useStateValue } from "../../State/StateProvider";

import Product from "./Product/Product";
import Styles from "./styles";

export default function Products() {
  const classes = Styles();
  const [{ products }, dispatch] = useStateValue();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={6} md={3} lg={2} sm={4}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
}
