import React from "react";
import { Link } from "gatsby";
import blogPostStyles from "./blogPost.module.scss";

const BlogPost = ({ publishedDate, slug, title }) => {
  return (
    // <li className={blogPostStyles.post}>
    //   <Link to={`/blog/${slug}`}>
    //     <Typography variant="h2">{title}</Typography>
    //     <Typography variant="caption">{publishedDate}</Typography>
    //   </Link>
    // </li>
    <span>BLOGPOST</span>
  );
};

export default BlogPost;
