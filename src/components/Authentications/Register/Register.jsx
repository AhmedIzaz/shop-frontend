import { Button, Card, TextField, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const schema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().min(8).max(32).required(),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null]),
  email: Yup.string().email().required(),
});

function Register() {
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
            <label for="username">
              <Typography variant="subtitle1">Username</Typography>
            </label>

            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField fullWidth variant="outlined" {...field} />
              )}
            />
            <Typography variant="body2" color="secondary">
              {errors.username?.message}
            </Typography>

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
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  type="password"
                  fullWidth
                  variant="outlined"
                  {...field}
                />
              )}
            />
            <Typography variant="body2" color="secondary">
              {errors.password?.message}
            </Typography>

            <label for="confirmPassword">
              <Typography variant="subtitle1">Confirm Password</Typography>
            </label>

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  type="password"
                  fullWidth
                  variant="outlined"
                  {...field}
                />
              )}
            />

            <Typography variant="body2" color="secondary">
              {errors.confirmPassword?.message && "Password Should Matched"}
            </Typography>
            <br />

            <div className={classes.formFooter}>
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
              <Typography
                component={Link}
                to="/login"
                variant="body2"
                color="textSecondary"
                style={{ textDecoration: "none" }}
              >
                All ready have an account?
              </Typography>
            </div>
          </form>
        </Card>
      </div>
    </main>
  );
}

export default Register;
