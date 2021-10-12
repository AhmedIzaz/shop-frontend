import React from "react";
import { AddShoppingCart } from "@material-ui/icons";
import {
  Card,
  CardActions,
  Typography,
  IconButton,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import useStyles from "./styles";

export default function Product({ product, addToCardHandler }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
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

      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="add to cart"
          onClick={() => addToCardHandler(product.id)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}
