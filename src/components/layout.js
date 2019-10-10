import React from "react";
import Footer from "./footer";
import "../styles/index.scss";
import layoutStyles from "./layout.module.scss";

const Layout = props => {
  console.log(props)
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
