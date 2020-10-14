import * as React from "react";
import { Link } from "react-router-dom";
import { Flex, Heading, Text } from "rebass";
import { Select } from "@rebass/forms";

import CreatePortfolioItem from "../forms/CreatePortfolioItem";
import DeletePortfolioItem from "../forms/DeletePortfolioItem";
import ModifyPortfolioItem from "../forms/ModifyPortfolioItem";

import { PortfolioItemDocument, UserDocument } from "../types";

export interface AdminDashboardPageProps {
  portfolioItems: PortfolioItemDocument[];
  setPortfolioItems: (portfolioItems: PortfolioItemDocument[]) => void;
  user: UserDocument;
}

const AdminDashboardPage: React.FunctionComponent<AdminDashboardPageProps> = (
  props: AdminDashboardPageProps
) => {
  const { portfolioItems, setPortfolioItems, user } = props;

  const [action, setAction] = React.useState("");

  const actions = {
    createPortfolioItem: CreatePortfolioItem,
    deletePortfolioItem: DeletePortfolioItem,
    modifyPortfolioItem: ModifyPortfolioItem,
  };

  const Action = actions[action];

  return (
    <Flex flexDirection="column">
      <Link to="/">Back</Link>
      <Heading as="h1">Admin Dashboard Page</Heading>
      <Text>USER IS AUTHENTICATED!</Text>
      <Heading as="h2">Select Action</Heading>
      <Select onChange={(e) => setAction(e.target.value)} value={action}>
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

      {action && (
        <Action
          portfolioItems={portfolioItems}
          setPortfolioItems={setPortfolioItems}
        />
      )}
    </Flex>
  );
};

export default AdminDashboardPage;
