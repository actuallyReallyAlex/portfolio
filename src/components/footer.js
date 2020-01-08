import React from "react";
import { Paper, Typography } from "@material-ui/core";
import footerStyles from "./footer.module.scss";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <Paper className={footerStyles.footer}>
      <Link to="/" className={footerStyles.plainLink}>
        <Typography variant="h6">Alex Lee</Typography>
      </Link>
      <Typography variant="subtitle2">Alex Lee © 2020</Typography>
    </Paper>
  );
};

export default Footer;
