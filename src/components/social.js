import React from "react";
import { Box, Button, Icon } from "@material-ui/core";
import socialStyles from "./social.module.scss";

const links = {
  mail: "mailto:alex@alexlee.dev",
  github: "https://github.com/alexlee-dev/",
  npm: "https://www.npmjs.com/~alexlee-dev",
  twitter: "https://twitter.com/alexlee_dev",
  linkedin: "https://www.linkedin.com/in/alexlee-dev"
};

const handleClick = linkType => window.open(links[linkType], "_blank");

const Social = () => {
  return (
    <Box className={socialStyles.container}>
      <Button
        className={socialStyles.socialButton}
        name="Email"
        onClick={() => handleClick("mail")}
      >
        <Icon className="far fa-envelope-open-text" />
      </Button>
      <Button
        className={socialStyles.socialButton}
        name="GitHub"
        onClick={() => handleClick("github")}
      >
        <Icon className="fab fa-github" />
      </Button>
      <Button
        className={socialStyles.socialButton}
        name="NPM"
        onClick={() => handleClick("npm")}
      >
        <Icon className="fab fa-npm" />
      </Button>
      <Button
        className={socialStyles.socialButton}
        name="Twitter"
        onClick={() => handleClick("twitter")}
      >
        <Icon className="fab fa-twitter" />
      </Button>
      <Button
        className={socialStyles.socialButton}
        name="LinkedIn"
        onClick={() => handleClick("linkedin")}
      >
        <Icon className="fab fa-linkedin" />
      </Button>
    </Box>
  );
};

export default Social;
