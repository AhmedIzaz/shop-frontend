import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../../../../State/StateProvider";
import useStyles from "./styles";
import useMethod from "../../../../Methods/useMethod";
function ShopProducts() {
  const [state, dispatch] = useStateValue();
  const classes = useStyles();
  const { delete_owner_product } = useMethod();
  // ===================
  // ===================
  // ===================
  // ===================
  return (
    <main>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={3}>
        {state.products.map((product) =>
          product.ShopId == state.owner.ShopId ? (
            <Grid item xs={6} lg={2} md={3} sm={4}>
              <Card className={classes.card} variant="elevation">
                <CardMedia className={classes.media} image={product.picture} />
                <CardContent className={classes.cardContent}>
                  <Typography style={{ fontSize: "1.5rem" }} color="primary">
                    {product.product_name}
                  </Typography>
                  <p>{product.description}</p>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                  <Typography variant="h6" color="secondary">
                    Delete Product
                  </Typography>
                  <IconButton
                    aria-label="add to cart"
                    onClick={() => delete_owner_product(product.id)}
                  >
                    <Delete />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ) : null
        )}
      </Grid>
    </main>
  );
}

export default ShopProducts;
