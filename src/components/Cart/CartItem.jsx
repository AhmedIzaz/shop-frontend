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
function CartItem({ cart }) {
  const classes = useStyles();
  const { removeCartFromCustomerCart, changeCartQuantity } = useMethod();
  return (
    <Card>
      <CardMedia image={cart.picture} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{cart.cart_name}</Typography>
        <Typography variant="h6">{cart.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() =>
              changeCartQuantity(cart.id, cart.quantity, "decreament")
            }
          >
            -
          </Button>
          <Typography>{cart.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() =>
              changeCartQuantity(cart.id, cart.quantity, "increament")
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
          onClick={() => removeCartFromCustomerCart(cart.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;
