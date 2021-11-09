import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1%",
    backgroundColor: "#e5e5e5",
  },
  option_bar: {},
  dashboard_wrapper: {
    width: "80%",
  },
  order_item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
}));
