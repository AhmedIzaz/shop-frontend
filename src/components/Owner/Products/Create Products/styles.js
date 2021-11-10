import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  formWrapper: {
    width: "40%",
    margin: "auto",
    padding: "5%",
    ["@media (min-width:780px)"]: {
      width: "30%",
    },
  },
}));
