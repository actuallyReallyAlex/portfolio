import React from "react";
import Layout from "../components/layout";
import notFoundImage from "../images/404.png";
import { Link } from "gatsby";

const NotFound = () => {
  return (
    <Layout displayHeader={true}>
      <div
        style={{
          marginTop: "100px",
          marginBottom: "100px",
          marginLeft: "25%",
          marginRight: "25%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h1 style={{ fontSize: "3rem" }} variant="h1">
          This Page is Buried in the Sand
        </h1>
        <img
          alt="Page not found"
          src={notFoundImage}
          style={{ maxHeight: "50vh" }}
        />
        <p style={{ marginBottom: "25px" }}>
          You have never seen an ostrich head. Whenever you’re around it seems
          ostriches are avoiding your gaze. You came on this trip specifically
          to see an ostrich head, but here is this ostrich right in front of
          you, head invisible. You may never see an ostrich head.
        </p>
        <Link
          style={{
            color: "inherit",
            textDecoration: "none"
          }}
          to="/"
        >
          <button color="primary" variant="contained">
            Return Home
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
