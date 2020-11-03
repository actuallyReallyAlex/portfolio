import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "rebass";

const BackButton: React.FunctionComponent<unknown> = () => {
  return (
    <RouterLink to="/">
      <Button
        fontSize="4"
        sx={{
          alignItems: "center",
          background: "none",
          color: "#000000",
          display: "flex",
          justifyContent: "center",
          height: "50px",
          left: "25px",
          position: "absolute",
          top: "25px",
          width: "50px",
          ":hover": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
          },
        }}
      >
        <i className="far fa-arrow-circle-left" />
      </Button>
    </RouterLink>
  );
};

export default BackButton;
