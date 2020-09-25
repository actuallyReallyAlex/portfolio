import * as React from "react";
import { UserDocument } from "../types";

export interface AdminLoginPageProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: UserDocument) => void;
}

const AdminLoginPage: React.FunctionComponent<AdminLoginPageProps> = (
  props: AdminLoginPageProps
) => {
  const { setIsAuthenticated, setUser } = props;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("/user/login", {
        body: JSON.stringify({ email, password }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (response.status !== 200) {
        return alert(`Error! ${JSON.stringify(data, null, 2)}`);
      }

      setUser(data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
      return alert(`Error! ${JSON.stringify(error, null, 2)}`);
    }
  };

  return (
    <div>
      <h1>Admin Login Page</h1>
      <p>USER IS NOT AUTHENTICATED</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
        />
        <button disabled={!email || !password} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
