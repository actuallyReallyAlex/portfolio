import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Heading, Image, Link, Text } from "rebass";

import Footer from "../components/Footer";

import fullpage from "fullpage.js";

import { PortfolioItemDocument } from "../types";

export interface HomePageProps {
  portfolioItems: PortfolioItemDocument[];
}

const HomePage: React.FunctionComponent<HomePageProps> = (
  props: HomePageProps
) => {
  const { portfolioItems } = props;

  React.useEffect(() => {
    new fullpage("#fullpage", {});
  }, []);

  return (
    <div id="fullpage">
      <div className="section">
        <Flex
          id="lol"
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
            src="/assets/palm.jpg"
            width="100%"
          />
          <Box
            id="lol2"
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
              I'm Alex Lee
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

      <div className="section">
        <Box>
          <Heading as="h2">About</Heading>
          <Image
            alt="Alex Lee profile image"
            sx={{
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
            height={250}
            src="/assets/avatar-optimized.jpg"
            width={250}
          />
          <Text>
            Hi. I'm Alex, a Fullstack Application Developer in San Diego. I
            deliver solutions to complex problems. I create purposeful and
            functional applications that go beyond expectations. I'm currently
            developing the future of the online banking industry with U.S. Bank.
            Outside of work, I love surfing, camping, and spending time with my
            dog Copper.
          </Text>
        </Box>
        <Box>
          <Heading as="h2">Portfolio</Heading>
          <ul>
            {portfolioItems.map((item) => (
              <li key={item._id}>
                <Box>
                  <Heading as="h3">{item.title}</Heading>
                  <Text>{item.tagline}</Text>
                  <RouterLink to={`/portfolio/${item._id}`}>
                    View Item
                  </RouterLink>
                </Box>
              </li>
            ))}
          </ul>
        </Box>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
