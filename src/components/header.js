import React from "react";
import headerStyles from "./header.module.scss";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div style={{ backgroundColor: "grey", position: "sticky" }}>
      <div>
        <Link to="/" className={headerStyles.plainLink}>
          <h6>Alex Lee</h6>
        </Link>
        <div>
          <Link className={headerStyles.plainLink} to="/">
            <button>Home</button>
          </Link>
          <Link className={headerStyles.plainLink} to="/works">
            <button>Works</button>
          </Link>
          <Link className={headerStyles.plainLink} to="/blog">
            <button>Blog</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
