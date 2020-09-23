import * as React from "react";

export interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = () => {
  return (
    <div>
      <p>HELLO, WORLD.</p>
      <h1>I'm Alex Lee</h1>
      <h2>FULLSTACK APPLICATION DEVELOPER</h2>
      <ul>
        <li>
          <a
            href="https://github.com/alexlee-dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="mailto:alex@alexlee.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/~alexlee-dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            NPM
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/alexlee_dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alexlee-dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
