import { IconButton, Paper, Typography } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import React from "react";
import useStyles from "./styles";
function Contact() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Paper variant="elevation" className={classes.paper}>
        <center>
          <Typography className={classes.title} variant="h4" color="primary">
            Contact with us by the impormation down below
          </Typography>
        </center>

        <div className={classes.table_wrapper}>
          <table className={classes.table}>
            <tr>
              <td>
                <Typography variant="h5" color="textSecondary">
                  Phone Number
                </Typography>
              </td>
              <td>01839465030</td>
            </tr>
            <tr>
              <td>
                <Typography variant="h5" color="textSecondary">
                  Email
                </Typography>
              </td>
              <td>asif32803@gmail.com</td>
            </tr>
            <tr>
              <td>
                <Typography variant="h5" color="textSecondary">
                  Social Links
                </Typography>
              </td>
              <td>
                <IconButton>
                  <Facebook />
                </IconButton>
                <IconButton>
                  <Instagram />
                </IconButton>
                <IconButton>
                  <Twitter />
                </IconButton>
              </td>
            </tr>
          </table>
        </div>
      </Paper>
    </main>
  );
}

export default Contact;
