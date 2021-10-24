import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { useLocation } from "react-router-dom";

function ProductDescription() {
  const classes = useStyles();
  const { product } = useLocation().state;

  return (
    <main>
      <div className={classes.toolbar} />
      <Grid container justify="center">
        <Grid item xs={10} md={8} lg={6} sm={8}>
          <div className={classes.descWrapper}>
            <div className={classes.info}>
              <Typography variant="h5">{product.product_name}</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </div>
            <div className={classes.descImageWrapper}>
              <img className={classes.descImage} src={product.picture} />
            </div>
          </div>
        </Grid>
      </Grid>
    </main>
  );
}

export default ProductDescription;
