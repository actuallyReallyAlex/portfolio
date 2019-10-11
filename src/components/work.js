import React from "react";
import { Avatar, Box, Link, Typography, Icon } from "@material-ui/core";
import workStyles from "./work.module.scss";

const Work = ({ description, iconBackground, iconString, slug, title }) => {
  return (
    <Box className={workStyles.container}>
      <Avatar
        className={workStyles.avatar}
        style={{ background: iconBackground }}
      >
        <Icon className={`${iconString} ${workStyles.icon}`} />
      </Avatar>
      <Box>
        <Typography className={workStyles.title} variant="h4">
          {title}
        </Typography>
        <Typography>{description}</Typography>
        <Typography className={workStyles.link}>
          <Link href={`/works/${slug}`}>Learn More</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Work;
