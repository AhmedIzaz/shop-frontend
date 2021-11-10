import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

import React from "react";
import { useStateValue } from "../../../../State/StateProvider";
import useStyles from "./styles";
function ShopProducts() {
  const [state, dispatch] = useStateValue();
  const classes = useStyles();

  // ===================
  // ===================
  // ===================
  // ===================
  return (
    <main>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={3}>
        {state.owner.products.map((product) => (
          <Grid item xs={6} lg={2} md={3} sm={4}>
            <Card className={classes.card} variant="elevation">
              <CardMedia className={classes.media} image={product.picture} />
              <CardContent className={classes.cardContent}>
                <Typography style={{ fontSize: "1.5rem" }} color="primary">
                  {product.product_name}
                </Typography>
                <p>{product.description}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default ShopProducts;
