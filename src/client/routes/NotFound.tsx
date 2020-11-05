import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Flex, Heading, Image } from "rebass";

const NotFound: React.FunctionComponent<unknown> = () => {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      id="not-found"
      justifyContent="center"
      sx={{ margin: ["0 10%", "0 15%"] }}
    >
      <Image sx={{ maxHeight: "350px" }} src="/assets/404.svg" />
      <Heading
        as="h1"
        fontSize="6"
        sx={{ marginTop: "25px", marginBottom: "25px" }}
      >
        Page not found!
      </Heading>
      <Heading as="h2" fontWeight="normal" sx={{ marginBottom: "25px" }}>
        Sorry, but the page you were looking for could not be found.
      </Heading>
      <RouterLink className="link__unstyled" to="/">
        <Button
          sx={{
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            color: "#000000",
            display: "flex",
            justifyContent: "center",
            ":hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            },
          }}
        >
          Return to the front page
        </Button>
      </RouterLink>
    </Flex>
  );
};

export default NotFound;
