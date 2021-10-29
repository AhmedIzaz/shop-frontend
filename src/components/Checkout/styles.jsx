import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    padding: "2% 0",
    margin: "auto",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    backgroundColor: "#D6E4F0",
  },

  tableWrapper: {
    width: "80%",
  },
  table: {
    width: "70%",
    margin: "auto",
  },
  input: {
    width: "100%",
  },
  footer: {
    margin: "auto",
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  delivery_form: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
