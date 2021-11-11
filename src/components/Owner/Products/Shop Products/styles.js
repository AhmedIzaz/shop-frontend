import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  card: {
    width: "90%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundSize: "contain",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
