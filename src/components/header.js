import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import headerStyles from "./header.module.scss";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography className={headerStyles.author} variant="h6">
          Alex Lee
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Blog</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Résumé</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
