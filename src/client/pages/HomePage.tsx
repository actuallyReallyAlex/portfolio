import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Flex, Heading, Image, Link, Text } from "rebass";

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
          bg="green"
          flexDirection={["column", "column", "row"]}
          height="100%"
        >
          <Box bg="blue" p={[4, 4, "80px"]} width={[1, 1, 1 / 2]}>
            <Heading as="h3" fontSize={5} sx={{ textTransform: "uppercase" }}>
              Hello, World.
            </Heading>
            <Heading as="h1" fontSize={8} lineHeight="56px">
              I'm Alex Lee
            </Heading>
            <Heading
              as="h2"
              fontSize={[3, 6, 6]}
              sx={{ textTransform: "uppercase" }}
            >
              Fullstack Developer
            </Heading>
            <Text fontSize={4} marginBottom={4} marginTop={4}>
              Need a website? A comprehensive application? How bout an extremely
              specific tool to help your business become more efficient? Yep, I
              can help.
            </Text>
            {/* <ul>
              <li>
                <Link
                  href="https://github.com/alexlee-dev/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:alex@alexlee.dev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.npmjs.com/~alexlee-dev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  NPM
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/alexlee_dev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/alexlee-dev/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
            </ul> */}
          </Box>
          <Box backgroundColor="red" height="100vh" width={[1, 1, 1 / 2]}>
            <Image
              alt="Alex Lee profile image"
              sx={{ height: "100vh", objectFit: "cover" }}
              maxHeight="100vh"
              src="/assets/avatar-optimized.jpg"
              width="100%"
            />
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
