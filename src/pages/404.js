import React from "react";
import Layout from "../components/layout";
import notFoundImage from "../images/404.png";
import { Box, Typography, Button } from "@material-ui/core";
import { Link } from "gatsby";

const NotFound = () => {
  return (
    <Layout displayHeader={true}>
      <Box
        style={{
          marginTop: "100px",
          marginBottom: "100px",
          marginLeft: "30%",
          marginRight: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography style={{ fontSize: "3rem" }} variant="h1">
          This Page is Buried in the Sand
        </Typography>
        <img
          alt="Page not found"
          src={notFoundImage}
          style={{ maxHeight: "50vh" }}
        />
        <Typography style={{ marginBottom: "25px" }}>
          You have never seen an ostrich head. Whenever you’re around it seems
          ostriches are avoiding your gaze. You came on this trip specifically
          to see an ostrich head, but here is this ostrich right in front of
          you, head invisible. You may never see an ostrich head.
        </Typography>
        <Link
          style={{
            color: "inherit",
            textDecoration: "none"
          }}
          to="/"
        >
          <Button color="primary" variant="contained">
            Return Home
          </Button>
        </Link>
      </Box>
    </Layout>
  );
};

export default NotFound;
