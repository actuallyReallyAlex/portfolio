import React from "react";
import GitHubIcon from "svg-react-loader?name=GitHubIcon!./icons/github.svg";
import EmailIcon from "svg-react-loader?name=EmailIcon!./icons/email.svg";
import LinkedInIcon from "svg-react-loader?name=LinkedInIcon!./icons/linkedin.svg";
import Header from "./components/Header";
import Bio from "./components/Bio";
import ThemeToggle from "./components/ThemeToggle";
import Projects from "./components/Projects";

export const App = () => {
  return (
    <>
      <Header />
      <article>
        <Bio />
        <section>
          <main>
            {/* TODO - Hover effects */}
            <a
              href="https://github.com/alexlee-dev/"
              id="github"
              target="_blank"
            >
              <GitHubIcon />
            </a>
            <a href="mailto:actuallyreallyalex@gmail.com" id="email">
              <EmailIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/alexlee-dev/"
              id="linked-in"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </main>
        </section>
      </article>
      <Projects />
      <ThemeToggle />
    </>
  );
};

export default App;
