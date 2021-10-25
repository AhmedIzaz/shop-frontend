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

  paper: {
    display: "flex",
    flexDirection: "row",
    gap: "1%",
  },
  product_description_image: {
    width: "50%",
  },
  description: {
    width: "50%",
    marginTop: "5%",
    position: "relative",
  },
  description_action_wrapper: {
    marginBottom: "5%",
    width: "100%",
    bottom: 0,
    position: "absolute",
  },
  description_action_area: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  desc_actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));
