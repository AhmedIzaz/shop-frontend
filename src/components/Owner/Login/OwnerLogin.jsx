import React, { useState } from "react";
import useStyles from "./styles";
import { Card, Typography, Button, TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../../../State/StateProvider";
// ================================
// ================================
const schema = Yup.object({
  password: Yup.string().min(8).max(32).required(),
  email: Yup.string().email().required(),
});
// ================================
// ================================
// ================================
// ================================
function OwnerLogin() {
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
  // ================================
  // ================================
  const onSubmit = async ({ email, password }) => {
    axios
      .post("http://localhost:8000/owner/login", {
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
        if (response.data.owner.email == email) {
          const { owner, order_list } = response.data;
          dispatch({
            type: "ADD_OWNER_AND_ORDERS_TO_STATE",
            owner: owner,
            order_list: order_list,
          });
          return history.push("/owner-dashboard");
        }
      })
      .catch((e) => alert(e.message));
  };
  // ================================
  // ================================
  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>
      <div className={classes.toolbar} />
      <div className={classes.cardWrapper}>
        <Card variant="elevation" className={classes.formWrapper}>
          <center>
            <Typography variant="h5" color="primary">
              Owner Login Form
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
              <div className={classes.link}>
                <Typography
                  component={Link}
                  to="/register"
                  variant="body2"
                  color="textSecondary"
                  style={{ textDecoration: "none" }}
                >
                  Don't have an account?
                </Typography>

                <Typography
                  component={Link}
                  to="/login"
                  variant="body2"
                  color="textSecondary"
                  style={{ textDecoration: "none" }}
                >
                  Login as Customer?
                </Typography>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </main>
  );
}

export default OwnerLogin;
