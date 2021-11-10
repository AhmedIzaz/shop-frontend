import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({ toolbar: theme.mixins.toolbar }));

function ErrorPage() {
  const classes = useStyles();
  return (
    <main>
      <div className={classes.toolbar} />
      <h1>Error , 404 route not found</h1>
    </main>
  );
}

export default ErrorPage;
