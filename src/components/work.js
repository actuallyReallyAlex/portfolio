import React from "react";
import workStyles from "./work.module.scss";

const Work = ({ description, iconBackground, iconString, slug, title }) => {
  return (
    <div
      className={workStyles.container}
      data-sal="slide-up"
      data-sal-duration="1500"
      data-sal-easing="ease"
    >
      <div className={workStyles.avatar} style={{ background: iconBackground }}>
        <i className={`${iconString} ${workStyles.icon}`} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <p className={workStyles.link}>
          <a href={`/works/${slug}`}>Learn about the process</a>
        </p>
      </div>
    </div>
  );
};

export default Work;
