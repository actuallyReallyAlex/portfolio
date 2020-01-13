import React from "react";
import socialStyles from "./social.module.scss";

const buttons = [
  {
    clickHandler: () => window.open("mailto:alex@alexlee.dev", "_blank"),
    label: "Email",
    iconClass: "far fa-envelope-open-text"
  },
  {
    clickHandler: () =>
      window.open("https://github.com/alexlee-dev/", "_blank"),
    label: "GitHub",
    iconClass: "fab fa-github"
  },
  {
    clickHandler: () =>
      window.open("https://www.npmjs.com/~alexlee-dev", "_blank"),
    label: "NPM",
    iconClass: "fab fa-npm"
  },
  {
    clickHandler: () =>
      window.open("https://twitter.com/alexlee_dev", "_blank"),
    label: "Twitter",
    iconClass: "fab fa-twitter"
  },
  {
    clickHandler: () =>
      window.open("https://www.linkedin.com/in/alexlee-dev", "_blank"),
    label: "Twitter",
    iconClass: "fab fa-linkedin"
  }
];

const Social = () => {
  return (
    <div
      data-sal="fade"
      data-sal-duration="1500"
      data-sal-easing="ease"
      className={socialStyles.container}
    >
      {buttons.map(({ clickHandler, label, iconClass }, i) => (
        <button
          aria-label={label}
          className={socialStyles.socialButton}
          key={i}
          onClick={clickHandler}
        >
          <i className={iconClass} />
        </button>
      ))}
    </div>
  );
};

export default Social;
