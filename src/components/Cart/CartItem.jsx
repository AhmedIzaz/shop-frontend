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
import useMethod from "../../Methods/useMethod";
function CartItem({ product, updateQuantityOfCartItem }) {
  const classes = useStyles();
  const { removeFromCart } = useMethod();
  return (
    <Card>
      <CardMedia image={product.picture} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{product.product_name}</Typography>
        <Typography variant="h6">{product.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => {}}>
            -
          </Button>
          <Typography>1</Typography>
          <Button
            type="button"
            size="small"
            onClick={() =>
              updateQuantityOfCartItem(product.id, product.quantity + 1)
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
