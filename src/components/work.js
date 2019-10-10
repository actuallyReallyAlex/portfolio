import React from "react";
import { Avatar, Box, Link, Typography } from "@material-ui/core";
import workStyles from "./work.module.scss";

const Work = ({ description, iconUrl, slug, title }) => {
  return (
    <Box className={workStyles.container}>
      <Avatar className={workStyles.avatar} src={iconUrl}>
        {!iconUrl && title[0]}
      </Avatar>
      <Box>
        <Typography variant="h4">{title}</Typography>
        <Typography>{description}</Typography>
        <Typography className={workStyles.link}>
          <Link href={`/works/${slug}`}>Learn More</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Work;
