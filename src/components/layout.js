import React from "react";
import Footer from "./footer";
import "../styles/index.scss";
import layoutStyles from "./layout.module.scss";
import Header from "./header";
import { MuiThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";

const Layout = props => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Comfortaa"]
    }
  });
  return (
    <MuiThemeProvider theme={theme}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          {props.displayHeader && <Header />}
          {props.children}
        </div>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
};

export default Layout;
