import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  paper: {
    textAlign: "center",
    margin: "auto",
    width: "70%",
    ["@media (max-width:675px)"]: {
      width: "90%",
    },
  },
  customer: {
    display: "flex",
    justifyContent: "center",
    margin: "1em",
  },
}));
