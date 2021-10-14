import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
function CartItem({ product, updateQuantityOfCartItem, removeFromCart }) {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia image={product.picture} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{product.product_name}</Typography>
        <Typography variant="h6">{product.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() =>
              updateQuantityOfCartItem(
                product.id,
                product.quantity,
                "decreament"
              )
            }
          >
            -
          </Button>
          <Typography>{product.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() =>
              updateQuantityOfCartItem(
                product.id,
                product.quantity,
                "increament"
              )
            }
          >
            +
          </Button>
        </div>
        <Button
          size="small"
          type="button"
          variant="outlined"
          color="secondary"
          onClick={() => removeFromCart(product.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;
