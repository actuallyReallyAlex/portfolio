import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import avatarStyles from "./avatar.module.scss";

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "self-200.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className={avatarStyles.avatar}>
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  );
};

export default Avatar;
