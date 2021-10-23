import React, { useState } from "react";
import useStyles from "./styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Card, TextField, Button, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../../../State/StateProvider";
const schema = Yup.object({
  password: Yup.string().min(8).max(32).required(),
  email: Yup.string().email().required(),
});
function Login() {
  axios.defaults.withCredentials = true;
  const [state, dispatch] = useStateValue();
  const history = useHistory();
  const classes = useStyles();
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = ({ email, password }) => {
    axios
      .post("http://localhost:8000/customer/customer-login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.error) {
          return response.data.error.email
            ? setEmailError(response.data.error.email)
            : setPasswordError(response.data.error.password);
        }
        setEmailError(null);
        setPasswordError(null);
        if (response.data.customer.email == email) {
          dispatch({
            type: "ADD_CUSTOMER_TO_STATE",
            customer: response.data.customer,
          });

          return history.push("/");
        }
      });
  };
  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>
      <div className={classes.toolbar} />
      <div className={classes.cardWrapper}>
        <Card variant="elevation" className={classes.formWrapper}>
          <center>
            <Typography variant="h5" color="primary">
              Login Form
            </Typography>
          </center>
          <br />
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <label for="email">
              <Typography variant="subtitle1">Email</Typography>
            </label>

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  type="email"
                  fullWidth
                  variant="standard"
                  {...field}
                />
              )}
            />
            <Typography variant="body2" color="secondary">
              {errors.email?.message}
              {emailError ? emailError : null}
            </Typography>
            <br />

            <label for="password">
              <Typography variant="subtitle1">Password</Typography>
            </label>

            <Controller
              style={{ height: "1%" }}
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
              {passwordError ? passwordError : null}
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
