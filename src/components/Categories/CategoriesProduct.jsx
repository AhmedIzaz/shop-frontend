import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useStateValue } from "../../State/StateProvider";
import useStyles from "./styles";
import useMethod from "../../Methods/useMethod";
// ===================
// ===================
function CategoriesProduct() {
  const classes = useStyles();
  const { category_id } = useParams();
  const [state, dispatch] = useStateValue();
  const { addToCartHandler } = useMethod();
  // ===================
  // ===================
  const products = state.products.filter(
    (product) => product.ProductCategoryId == category_id
  );
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {products.length > 0 ? (
        <Grid container justify="center" spacing={4}>
          {products.map((product) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={10}>
                <Card className={classes.root}>
                  <Link
                    className={classes.contentLink}
                    to={{
                      pathname: `/product-description/`,
                      state: {
                        product: product,
                      },
                    }}
                  >
                    <CardMedia
                      className={classes.media}
                      image={product.picture}
                      title={product.product_name}
                    />

                    <CardContent>
                      <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                          {product.product_name}
                        </Typography>
                        <Typography variant="h5">৳ {product.price}</Typography>
                      </div>
                      <Typography variant="body3" color="textSecondary">
                        {product.description}
                      </Typography>
                    </CardContent>
                  </Link>

                  <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton
                      aria-label="add to cart"
                      onClick={() => addToCartHandler(product.id)}
                    >
                      <AddShoppingCart />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      ) : null}
    </main>
  );
}

export default CategoriesProduct;
