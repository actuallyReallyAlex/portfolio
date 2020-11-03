import * as React from "react";
import { Flex, Heading } from "rebass";
import { Select } from "@rebass/forms";

import BackButton from "../components/BackButton";

import { PortfolioItemDocument, UserDocument } from "../types";

export interface AdminDashboardPageProps {
  portfolioItems: PortfolioItemDocument[];
  setPortfolioItems: (portfolioItems: PortfolioItemDocument[]) => void;
  user: UserDocument;
}

const AdminDashboardPage: React.FunctionComponent<AdminDashboardPageProps> = (
  props: AdminDashboardPageProps
) => {
  const { portfolioItems, setPortfolioItems } = props;

  const [action, setAction] = React.useState("");
  const [actionComponent, setActionComponent] = React.useState(null);

  const Action = actionComponent;

  React.useEffect(() => {
    let Item;
    switch (action) {
      case "createPortfolioItem":
        Item = React.lazy(() => import("../forms/CreatePortfolioItem"));
        break;
      case "deletePortfolioItem":
        Item = React.lazy(() => import("../forms/DeletePortfolioItem"));
        break;
      case "modifyPortfolioItem":
        Item = React.lazy(() => import("../forms/ModifyPortfolioItem"));
        break;
      default:
        console.log("No action selected");
        break;
    }
    setActionComponent(Item);
  }, [action]);

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/tinymce.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Flex
      flexDirection="column"
      id="admin-dashboard"
      sx={{ margin: ["100px 10%", "100px 15%"] }}
    >
      <BackButton />
      <Heading as="h1" fontSize="7" sx={{ marginBottom: "25px" }}>
        Admin Dashboard
      </Heading>
      <Heading as="h2" sx={{ marginBottom: "5px" }}>
        Select Action
      </Heading>
      <Select
        onChange={(e) => setAction(e.target.value)}
        sx={{ marginBottom: "50px" }}
        value={action}
      >
        <option disabled value="">
          - Select Action -
        </option>
        <option value="createPortfolioItem">Create PortfolioItem</option>
        {portfolioItems.length > 0 && (
          <>
            <option value="deletePortfolioItem">Delete PortfolioItem</option>
            <option value="modifyPortfolioItem">Modify PortfolioItem</option>
          </>
        )}
      </Select>

      {actionComponent && (
        <Action
          portfolioItems={portfolioItems}
          setPortfolioItems={setPortfolioItems}
        />
      )}
    </Flex>
  );
};

export default AdminDashboardPage;
