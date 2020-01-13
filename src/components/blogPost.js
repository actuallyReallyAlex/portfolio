import React from "react";
import { Link } from "gatsby";
import blogPostStyles from "./blogPost.module.scss";

const BlogPost = ({ publishedDate, slug, title }) => {
  return (
    <li className={blogPostStyles.post}>
      <Link to={`/blog/${slug}`}>
        <h2 variant="h2">{title}</h2>
        <p variant="caption">{publishedDate}</p>
      </Link>
    </li>
  );
};

export default BlogPost;
