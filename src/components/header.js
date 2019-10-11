import React from "react";
import { AppBar, Button, Toolbar, Typography, Box } from "@material-ui/core";
import headerStyles from "./header.module.scss";
import { Link } from "gatsby";

const Header = () => {
  return (
    <AppBar color="default" position="sticky">
      <Toolbar className={headerStyles.container}>
        <Link to="/" className={headerStyles.plainLink}>
          <Typography variant="h6">Alex Lee</Typography>
        </Link>

        <Box>
          <Button color="inherit">
            <Link className={headerStyles.plainLink} to="/">
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={headerStyles.plainLink} to="/works">
              Works
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={headerStyles.plainLink} to="/blog">
              Blog
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
