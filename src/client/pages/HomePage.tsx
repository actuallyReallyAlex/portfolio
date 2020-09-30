import * as React from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

import { PortfolioItemDocument } from "../types";

export interface HomePageProps {
  portfolioItems: PortfolioItemDocument[];
}

const HomePage: React.FunctionComponent<HomePageProps> = (
  props: HomePageProps
) => {
  const { portfolioItems } = props;
  return (
    <div>
      <div>
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
        <div>
          <h2>About</h2>
          <img
            alt="Alex Lee profile image"
            src="/assets/avatar-optimized.jpg"
          />
          <p>
            Hi. I'm Alex, a Fullstack Application Developer in San Diego. I
            deliver solutions to complex problems. I create purposeful and
            functional applications that go beyond expectations. I'm currently
            developing the future of the online banking industry with U.S. Bank.
            Outside of work, I love surfing, camping, and spending time with my
            dog Copper.
          </p>
        </div>
        <div>
          <h2>Portfolio</h2>
          <ul>
            {portfolioItems.map((item) => (
              <li key={item._id}>
                <div>
                  <h3>{item.title}</h3>
                  <h4>{item.tagline}</h4>
                  <Link to={`/portfolio/${item._id}`}>View Item</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
