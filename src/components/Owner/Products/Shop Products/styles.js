import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  card: {
    width: "90%",
  },
  media: {
    paddingBottom: "130%",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
}));
