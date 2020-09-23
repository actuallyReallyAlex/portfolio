import * as React from "react";

export interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  return (
    <div>
      <h2>About</h2>
      <img
        alt="Alex Lee profile image"
        src="https://alexlee.dev/static/3380014c62deb5ae093d75d47cb23b95/0e329/avatar-2.jpg"
      />
      <p>
        Hi. I'm Alex, a Fullstack Application Developer in San Diego. I deliver
        solutions to complex problems. I create purposeful and functional
        applications that go beyond expectations. I'm currently developing the
        future of the online banking industry with U.S. Bank. Outside of work, I
        love surfing, camping, and spending time with my dog Copper.
      </p>
    </div>
  );
};

export default About;
