import React from "react";
import Footer from "./footer";
import "../styles/index.scss";
import layoutStyles from "./layout.module.scss";
import Header from "./header";

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        {props.displayHeader && <Header />}
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
