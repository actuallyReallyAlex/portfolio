import * as React from "react";
import { Link } from "react-router-dom";

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
    <div>
      <Link to="/">Back</Link>
      <h1>Admin Dashboard Page</h1>
      <p>USER IS AUTHENTICATED!</p>
      {JSON.stringify(user, null, 2)}

      {JSON.stringify(action, null, 2)}

      <h2>Select Action</h2>
      <select onChange={(e) => setAction(e.target.value)} value={action}>
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
      </select>

      {action && (
        <Action
          portfolioItems={portfolioItems}
          setPortfolioItems={setPortfolioItems}
        />
      )}
    </div>
  );
};

export default AdminDashboardPage;
