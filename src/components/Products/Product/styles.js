import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    maxWidth: "100%",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  contentLink: {
    textDecoration: "none",
    color: "black",
  },
  descWrapper: {
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
  },
  info: {
    width: "50%",
  },
  descImageWrapper: {
    width: "100%",
  },
  descImage: {
    width: "50%",
  },
}));
