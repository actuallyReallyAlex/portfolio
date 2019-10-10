import React from "react";
import { Box, Typography } from "@material-ui/core";
import aboutStyles from "./about.module.scss";
import SectionHeading from "../components/sectionHeading";

const AboutSection = () => {
  return (
    <Box className={aboutStyles.container}>
      <Box>
        <SectionHeading heading="About" />

        <Typography className={aboutStyles.first}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
          gravida dictum fusce ut. Lectus urna duis convallis convallis.
        </Typography>

        <Typography className={aboutStyles.second}>
          Nunc sed id semper risus in hendrerit gravida. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt. Enim lobortis
          scelerisque fermentum dui faucibus in ornare. Vulputate ut pharetra
          sit amet aliquam id. Porta nibh venenatis cras sed felis eget velit.
          Mi bibendum neque egestas congue quisque egestas diam in. Augue lacus
          viverra vitae congue eu consequat ac.
        </Typography>

        <Typography className={aboutStyles.third}>
          Nunc faucibus a pellentesque sit. Convallis convallis tellus id
          interdum velit laoreet id donec. Turpis nunc eget lorem dolor. Luctus
          venenatis lectus magna fringilla. Netus et malesuada fames ac turpis
          egestas integer eget aliquet. Natoque penatibus et magnis dis. Enim
          sit amet venenatis urna cursus eget nunc scelerisque viverra. Nibh
          ipsum consequat nisl vel pretium lectus quam id leo. Iaculis nunc sed
          augue lacus viverra vitae congue eu consequat. Aliquam ultrices
          sagittis orci a. Massa sapien faucibus et molestie ac feugiat sed
          lectus vestibulum. Sit amet aliquam id diam.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSection;
