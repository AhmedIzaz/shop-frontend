import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  IconButton,
  Paper,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { useLocation } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import useMethod from "../../../Methods/useMethod";

function ProductDescription() {
  const classes = useStyles();
  const { product } = useLocation().state;
  const { addToCartHandler } = useMethod();
  return (
    <main>
      <div className={classes.toolbar} />
      <Grid container justify="center">
        <Grid item xs={10} md={8} lg={6} sm={8}>
          <Paper className={classes.paper} variant="elevation">
            {/*  */}
            {/*  */}
            <div className={classes.product_description_image}>
              <img style={{ maxWidth: "100%" }} src={product.picture} />
            </div>
            {/*  */}
            {/*  */}
            <div className={classes.description}>
              <div>
                <center>
                  <Typography variant="h4" color="primary">
                    {product.product_name}
                  </Typography>
                  <br />
                  <Typography variant="body1" color="textSecondary">
                    {product.description}
                  </Typography>
                </center>
              </div>

              <div className={classes.description_action_wrapper}>
                <div className={classes.description_action_area}>
                  <div>
                    <Typography variant="h6" color="textPrimary">
                      {product.price}
                    </Typography>
                  </div>
                  <div className={classes.desc_actions}>
                    <Typography variant="body2">
                      Add to shopping cart:
                    </Typography>
                    <IconButton onClick={() => addToCartHandler(product.id)}>
                      <ShoppingCart />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
          </Paper>
        </Grid>
      </Grid>
    </main>
  );
}

export default ProductDescription;
