import React from "react";
import useStyles from "./styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Card, TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const schema = Yup.object({
  password: Yup.string().min(8).max(32).required(),
  email: Yup.string().email().required(),
});
function Login() {
  const classes = useStyles();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>
      <div className={classes.toolbar} />
      <div className={classes.cardWrapper}>
        <Card variant="elevation" className={classes.formWrapper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label for="email">
              <Typography variant="subtitle1">Email</Typography>
            </label>

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField fullWidth variant="outlined" {...field} />
              )}
            />
            <Typography variant="body2" color="secondary">
              {errors.email?.message}
            </Typography>
            <label for="password">
              <Typography variant="subtitle1">Password</Typography>
            </label>

            <Controller
              style={{ height: "1%" }}
              name="password"
              control={control}
              render={({ field }) => (
                <TextField fullWidth variant="outlined" {...field} />
              )}
            />
            <Typography variant="body2" color="secondary">
              {errors.password?.message}
            </Typography>
            <br />
            <div className={classes.formFooter}>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
              <Typography
                component={Link}
                to="/register"
                variant="body2"
                color="textSecondary"
                style={{ textDecoration: "none" }}
              >
                Don't have an account?
              </Typography>
            </div>
          </form>
        </Card>
      </div>
    </main>
  );
}

export default Login;
