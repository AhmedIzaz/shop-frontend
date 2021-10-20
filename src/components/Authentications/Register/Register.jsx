import { Button, Card, TextField, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const schema = Yup.object({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null])
    .required(),
  contact_number: Yup.string().required(),
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
  const history = useHistory();
  const onSubmit = ({ username, email, password, contact_number }) => {
    axios
      .post("http://localhost:8000/customer/customer-signup", {
        username,
        email,
        password,
        contact_number,
      })
      .then(async (response) => {
        !response.data.error
          ? history.push("/login")
          : alert(response.data.error);
      });
  };

  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>
      <div className={classes.toolbar} />
      <div className={classes.cardWrapper}>
        <Card variant="elevation" className={classes.formWrapper}>
          <center>
            <Typography variant="h5" color="primary">
              Register as a Customer
            </Typography>
          </center>
          <br />
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label for="username">
              <Typography variant="subtitle1">Username</Typography>
            </label>

            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField fullWidth variant="standard" {...field} />
              )}
            />
            <Typography variant="body2" color="secondary">
              {errors.username?.message}
            </Typography>
            <br />

            <label for="email">
              <Typography variant="subtitle1">Email</Typography>
            </label>

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField fullWidth variant="standard" {...field} />
              )}
            />
            <Typography variant="body2" color="secondary">
              {errors.email?.message}
            </Typography>
            <br />

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
                  variant="standard"
                  {...field}
                />
              )}
            />
            <Typography variant="body2" color="secondary">
              {errors.password?.message}
            </Typography>
            <br />

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
                  variant="standard"
                  {...field}
                />
              )}
            />

            <Typography variant="body2" color="secondary">
              {errors.confirmPassword?.message && "Password Should Matched"}
            </Typography>
            <br />

            <label for="contactNumber">
              <Typography variant="subtitle1">Contact Number</Typography>
            </label>

            <Controller
              name="contact_number"
              control={control}
              render={({ field }) => (
                <TextField fullWidth variant="standard" {...field} />
              )}
            />

            <Typography variant="body2" color="secondary">
              {errors.contact_number?.message}
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
                Already have an account?
              </Typography>
            </div>
          </form>
        </Card>
      </div>
    </main>
  );
}

export default Register;
