import React from "react";
import { Box, Button, Icon } from "@material-ui/core";
import socialStyles from "./social.module.scss";

const Social = () => {
  return (
    <Box className={socialStyles.container}>
      <Button className={socialStyles.socialButton}>
        <Icon className="far fa-envelope-open-text" />
      </Button>
      <Button className={socialStyles.socialButton}>
        <Icon className="fab fa-github" />
      </Button>
      <Button className={socialStyles.socialButton}>
        <Icon className="fab fa-npm" />
      </Button>
      <Button className={socialStyles.socialButton}>
        <Icon className="fab fa-twitter" />
      </Button>
      <Button className={socialStyles.socialButton}>
        <Icon className="fab fa-linkedin" />
      </Button>
    </Box>
  );
};

export default Social;
