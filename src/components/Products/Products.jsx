import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DemoData from "../../DemoData";
import Product from "./Product/Product";
import Styles from "./styles";

export default function Products() {
  const classes = Styles();
  const [products, setProducts] = useState(DemoData);

  useEffect(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/product/products"
      );
      setProducts(response.data);
    } catch (e) {
      console.log(
        e.message,
        "or maybe you didn't connected to backend server, please start backend server!"
      );
    }
  });

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
