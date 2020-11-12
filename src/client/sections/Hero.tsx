import * as React from "react";
import { Box, Flex, Heading, Image, Link } from "rebass";

const Hero: React.FunctionComponent<unknown> = () => {
  return (
    <div id="hero">
      <Flex
        alignItems={["center", "flex-start"]}
        bg="green"
        flexDirection="column"
        height="100%"
        justifyContent="center"
        sx={{
          background: "linear-gradient(#14a4bf, #aff2fa)",
          position: "relative",
        }}
      >
        <Image
          alt="Palm Tree"
          sx={{
            height: "100vh",
            maxWidth: "100%",
            objectFit: "cover",
            position: "absolute",
            transition: "opacity 1s ease-in-out",
          }}
          maxHeight="100vh"
          src="/assets/palm-triangles-50.svg"
          width="100%"
        />
        <Image
          alt="Palm Tree"
          sx={{
            height: "100vh",
            maxWidth: "100%",
            objectFit: "cover",
            position: "absolute",
            transition: "opacity 1s ease-in-out",
            ":hover": {
              opacity: "0",
            },
          }}
          maxHeight="100vh"
          src="/assets/palm.webp"
          width="100%"
        />
        <Box
          p={["10px", "0"]}
          sx={{
            color: "#ffffff",
            marginLeft: ["0", "50px"],
            maxWidth: ["100%", "60%"],
            position: "relative",
            textAlign: ["center", "left"],
            width: "fit-content",
          }}
        >
          <Heading as="h3" fontSize={5} sx={{ textTransform: "uppercase" }}>
            Hello, World.
          </Heading>
          <Heading as="h1" fontSize={[6, 8]} lineHeight="72px">
            I&apos;m Alex Lee
          </Heading>
          <Heading
            as="h2"
            fontSize={[3, 3, 4, 5]}
            fontWeight="400"
            sx={{ textTransform: "uppercase" }}
          >
            Senior Software Engineer
          </Heading>

          <Box
            fontSize={[6, 7]}
            sx={{
              margin: "0 auto",
              marginTop: "50px",
              position: "relative",
              width: "fit-content",
            }}
          >
            <ul className="social__list">
              <li>
                <Link
                  aria-label="GitHub"
                  href="https://github.com/alexlee-dev/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </Link>
              </li>
              <li>
                <Link
                  aria-label="email"
                  href="mailto:alex@alexlee.dev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="far fa-envelope-open-text" />
                </Link>
              </li>
              <li>
                <Link
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/alexlee-dev/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </Link>
              </li>
            </ul>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Hero;
