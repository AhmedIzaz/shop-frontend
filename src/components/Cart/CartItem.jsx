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
function CartItem({ item }) {
  const classes = useStyles();
  const { removeFromCart } = useMethod();
  return (
    <Card>
      <CardMedia image={item.picture} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{item.product_name}</Typography>
        <Typography variant="h6">{item.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => {}}>
            -
          </Button>
          <Typography>1</Typography>
          <Button type="button" size="small" onClick={() => null}>
            +
          </Button>
        </div>
        <Button
          size="small"
          type="button"
          variant="outlined"
          color="secondary"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;
