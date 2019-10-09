import React from "react";
import { Paper, Typography } from "@material-ui/core";
import footerStyles from "./footer.module.scss";

const Footer = () => {
  return (
    <Paper className={footerStyles.footer}>
      <Typography className={footerStyles.author} variant="h6">
        Alex Lee
      </Typography>
      <Typography variant="subtitle2">Alex Lee © 2019</Typography>
    </Paper>
  );
};

export default Footer;
