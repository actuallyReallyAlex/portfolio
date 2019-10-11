import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import avatarStyles from "./avatar.module.scss";

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "self.webp" }) {
        childImageSharp {
          fixed(width: 200, height: 203) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className={avatarStyles.avatar}>
      <Img fixed={data.file.childImageSharp.fixed} />
    </div>
  );
};

export default Avatar;
