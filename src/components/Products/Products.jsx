import { Grid } from "@material-ui/core";

import React from "react";

import Product from "./Product/Product";
import Styles from "./styles";

export default function Products({ products, addToCartHandler }) {
  const classes = Styles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} md={4} lg={3} sm={6}>
              <Product product={product} addToCartHandler={addToCartHandler} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
}
