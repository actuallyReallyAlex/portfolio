import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Heading, Image, Link, Text } from "rebass";

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
    <Flex flexDirection="column">
      <Box bg="primary" p={5} width={1}>
        <Text>HELLO, WORLD.</Text>
        <Heading as="h1">I'm Alex Lee</Heading>
        <Heading as="h2">FULLSTACK APPLICATION DEVELOPER</Heading>
        <ul>
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
        </ul>
      </Box>
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
                <RouterLink to={`/portfolio/${item._id}`}>View Item</RouterLink>
              </Box>
            </li>
          ))}
        </ul>
      </Box>
      <Footer />
    </Flex>
  );
};

export default HomePage;
