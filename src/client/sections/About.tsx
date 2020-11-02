import * as React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "rebass";

export interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  return (
    <div id="about">
      <Flex alignItems="center" flexDirection="column" sx={{ margin: "100px 15%" }}>
        <Heading as="h2" sx={{ textTransform: "uppercase" }}>
          About
        </Heading>
        <Image
          alt="Alex Lee profile image"
          sx={{
            borderRadius: "50%",
            margin: "10px auto",
            objectFit: "cover",
            objectPosition: "center center",
          }}
          height={250}
          src="/assets/avatar-optimized.jpg"
          width={250}
        />
        <Box maxWidth="75%" sx={{ textAlign: "center" }}>
          <Text fontWeight="bold" margin="10px auto">
            Hi. I'm Alex, a Fullstack Application Developer in San Diego. I
            deliver solutions to complex problems.
          </Text>
          <Text margin="10px auto">
            I create purposeful and functional applications that go beyond
            expectations. I'm currently developing the future of the online
            banking industry with U.S. Bank. Outside of work, I love surfing,
            camping, and spending time with my dog Copper.
          </Text>
          <a
            href="/assets/alex-lee-resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button
              sx={{
                marginTop: "10px",
                transition: "0.25s ease-in-out",
                ":hover": {
                  backgroundColor: "rgba(0, 119, 204, 0.8)",
                  cursor: "pointer",
                },
              }}
              variant="primary"
            >
              <i className="far fa-file-user" style={{ marginRight: "10px" }} />
              Résumé
            </Button>
          </a>
        </Box>
      </Flex>
    </div>
  );
};

export default About;
