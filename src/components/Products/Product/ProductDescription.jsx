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
  const { addToCustomerCart } = useMethod();
  console.log(product);
  return (
    <main>
      <div className={classes.toolbar} />
      <Grid container justify="center">
        <Grid item xs={10} md={8} lg={6} sm={8}>
          <Paper className={classes.paper} variant="elevation">
            <div className={classes.product_description_image}>
              <img style={{ maxWidth: "100%" }} src={product.picture} />
            </div>

            <div className={classes.description}>
              <div style={{ minHeight: "30%" }}>
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
              {/*  */}
              {/*  */}
              <div className={classes.description_table_wrapper}>
                <table className={classes.description_table}>
                  <tr>
                    <td>
                      <Typography variant="subtitle1" color="textSecondary">
                        Product Name:
                      </Typography>
                    </td>
                    <td>{product.product_name}</td>
                  </tr>
                  <tr>
                    <td>
                      <Typography variant="subtitle1" color="textSecondary">
                        Product Category
                      </Typography>
                    </td>
                    <td>{product.ProductCategoryId}</td>
                  </tr>
                  <tr>
                    <td>
                      <Typography variant="subtitle1" color="textSecondary">
                        Available
                      </Typography>
                    </td>
                    <td>{product.available ? "yes" : "no"}</td>
                  </tr>
                  <tr>
                    <td>
                      <Typography variant="subtitle1" color="textSecondary">
                        Price
                      </Typography>
                    </td>
                    <td>{product.price}</td>
                  </tr>
                </table>
              </div>
              {/*  */}
              {/*  */}
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
                    <IconButton onClick={() => addToCustomerCart(product.id)}>
                      <ShoppingCart />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </main>
  );
}

export default ProductDescription;
