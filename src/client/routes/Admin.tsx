import * as React from "react";

import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminLoginPage from "../pages/AdminLoginPage";

import { PortfolioItemDocument } from "../types";

export interface AdminProps {
  portfolioItems: PortfolioItemDocument[];
  setPortfolioItems: (portfolioItems: PortfolioItemDocument[]) => void;
}

const Admin: React.FunctionComponent<AdminProps> = (props: AdminProps) => {
  const { portfolioItems, setPortfolioItems } = props;
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [hasCheckedAuthentication, setHasCheckedAuthetication] = React.useState(
    false
  );

  React.useEffect(() => {
    const checkAuthentication = async (): Promise<void> => {
      try {
        const response = await fetch("/user/me", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          const res = await response.json();
          setUser(res);
          setHasCheckedAuthetication(true);
          setIsAuthenticated(true);
        } else {
          setHasCheckedAuthetication(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkAuthentication();
  }, []);

  if (isAuthenticated) {
    return (
      <AdminDashboardPage
        portfolioItems={portfolioItems}
        setPortfolioItems={setPortfolioItems}
        user={user}
      />
    );
  }

  if (hasCheckedAuthentication) {
    // TODO - User React Router to push user to path: /admin/login
    return (
      <AdminLoginPage
        setIsAuthenticated={setIsAuthenticated}
        setUser={setUser}
      />
    );
  }

  return null;
};

export default Admin;
