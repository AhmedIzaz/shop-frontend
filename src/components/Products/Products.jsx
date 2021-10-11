import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Product from "./Product/Product";
import Styles from "./styles";

export default function Products() {
  const classes = Styles();
  const products = [
    {
      id: 1,
      product_name: "Coca Cola",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/15-09-26-RalfR-WLC-0098.jpg/1200px-15-09-26-RalfR-WLC-0098.jpg",
      description: "Worlds best soft drinks",
      price: "100 taka",
    },
    {
      id: 2,
      product_name: "Pepsi",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/1200px-Pepsi_logo_2014.svg.png",
      description: "Worlds best soft drinks",
      price: "100 taka",
    },
  ];
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} md={4} lg={3} sm={6}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
}
