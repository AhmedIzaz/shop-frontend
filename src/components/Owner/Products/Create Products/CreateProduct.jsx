import React, { useState } from "react";
import useStyles from "./styles";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import {
  Typography,
  TextField,
  Paper,
  Button,
  MenuItem,
} from "@material-ui/core";
import { useStateValue } from "../../../../State/StateProvider";
const schema = Yup.object({
  product_name: Yup.string().min(3).max(100).required(),
  picture: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.number().required(),
  available: Yup.boolean().required(),
  ProductCategoryId: Yup.string().required(),
});
// =============================
// =============================
function CreateProduct() {
  const [state, dispatch] = useStateValue();
  const [productCategoryId, setProductCategoryId] = useState("");
  const handleChange = (event) => setProductCategoryId(event.target.value);
  const classes = useStyles();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formSubmit = async ({
    product_name,
    picture,
    description,
    price,
    available,
    ProductCategoryId,
  }) => {
    console.log(
      product_name,
      picture,
      description,
      price,
      available,
      ProductCategoryId
    );
  };
  // ===============================
  // ===============================
  return (
    <main>
      <div className={classes.toolbar} />
      <Paper variant="elevation" className={classes.formWrapper}>
        <center>
          <Typography variant="h5" color="primary">
            Create Product
          </Typography>
        </center>
        <br />
        <br />
        <form onSubmit={handleSubmit(formSubmit)}>
          {/* ================================== */}
          <label for="product_name">
            <Typography variant="subtitle1">Product Name</Typography>
          </label>
          <Controller
            name="product_name"
            control={control}
            render={({ field }) => (
              <TextField type="text" fullWidth variant="standard" {...field} />
            )}
          />
          <Typography variant="body2" color="secondary">
            {errors.product_name?.message ? errors.product_name.message : null}
          </Typography>
          <br />
          {/* ================================== */}
          <label for="picture">
            <Typography variant="subtitle1">Picture</Typography>
          </label>
          <Controller
            name="picture"
            control={control}
            render={({ field }) => (
              <TextField type="text" fullWidth variant="standard" {...field} />
            )}
          />
          <Typography variant="body2" color="secondary">
            {errors.picture?.message ? errors.picture.message : null}
          </Typography>
          <br />
          {/* ================================== */}
          <label for="description">
            <Typography variant="subtitle1">Description</Typography>
          </label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField type="text" fullWidth variant="standard" {...field} />
            )}
          />
          <Typography variant="body2" color="secondary">
            {errors.description?.message ? errors.description.message : null}
          </Typography>
          <br />
          {/* ================================== */}
          <label for="price">
            <Typography variant="subtitle1">Price</Typography>
          </label>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <TextField
                type="number"
                fullWidth
                variant="standard"
                {...field}
              />
            )}
          />
          <Typography variant="body2" color="secondary">
            {errors.price?.message ? errors.price.message : null}
          </Typography>
          <br />
          {/* ================================== */}
          <label for="available">
            <Typography variant="subtitle1">Available?</Typography>
          </label>
          <Controller
            name="available"
            control={control}
            render={({ field }) => (
              <TextField type="text" fullWidth variant="standard" {...field} />
            )}
          />
          <Typography variant="body2" color="secondary">
            {errors.available?.message ? errors.available.message : null}
          </Typography>
          <br />
          {/* ================================== */}
          <label for="ProductCategoryId">
            <Typography variant="subtitle1">Product Category Id?</Typography>
          </label>
          <Controller
            name="ProductCategoryId"
            control={control}
            render={({ field }) => (
              <TextField
                select
                value={productCategoryId}
                onChange={handleChange}
                fullWidth
                variant="standard"
                {...field}
              >
                {state.categories.map((category, index) => (
                  <MenuItem key={index + 1} value={category.id}>
                    {category.product_category_name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
          <Typography variant="body2" color="secondary">
            {errors.ProductCategoryId?.message
              ? errors.ProductCategoryId.message
              : null}
          </Typography>
          <br />
          {/* ================================== */}
          <Button variant="contained" color="primary" type="submit">
            Create
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default CreateProduct;
