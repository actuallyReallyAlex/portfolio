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
          <Link className={headerStyles.plainLink} to="/">
            <Button color="inherit" name="Home">
              Home
            </Button>
          </Link>
          <Link className={headerStyles.plainLink} to="/works">
            <Button color="inherit" name="Works">
              Works
            </Button>
          </Link>
          <Link className={headerStyles.plainLink} to="/blog">
            <Button color="inherit" name="Blog">
              Blog
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
