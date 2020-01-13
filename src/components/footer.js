import React from "react";
import footerStyles from "./footer.module.scss";
import { Link } from "gatsby";

const Footer = () => (
  <div className={footerStyles.footer}>
    <Link to="/" className={footerStyles.plainLink}>
      <h6>Alex Lee</h6>
    </Link>
    <span>Alex Lee © 2020</span>
  </div>
);

export default Footer;
