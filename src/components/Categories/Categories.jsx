import React from "react";
import useStyles from "./styles";
import { useStateValue } from "../../State/StateProvider";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
// ===================
// ===================
function Categories() {
  const classes = useStyles();
  const [state, dispatch] = useStateValue();
  // ===================
  // ===================
  return (
    <main>
      <div className={classes.toolbar} />

      <Grid container justify="center" spacing={4}>
        {state.categories.map((category) => (
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={10}
            style={{ textDecoration: "none" }}
            component={Link}
            to={`/categories-product/${category.id}`}
          >
            <Paper variant="elevation">
              <center>
                <Typography variant="h4" color="primary">
                  {category.product_category_name}
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary">
                  {category.description}
                </Typography>
              </center>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Categories;
