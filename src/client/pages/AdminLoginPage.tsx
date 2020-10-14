import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Flex, Heading, Text } from "rebass";
import { Label, Input } from "@rebass/forms";

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
    <Flex alignItems="center" flexDirection="column" justifyContent="center">
      <Box backgroundColor="secondary">
        <Link to="/">Back</Link>
        <Heading as="h1">Admin Login Page</Heading>
        <Text>USER IS NOT AUTHENTICATED</Text>
        <Box>
          <form onSubmit={handleSubmit}>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={email}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
            />
            <Button
              disabled={!email || !password}
              type="submit"
              variant="primary"
            >
              Log in
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default AdminLoginPage;
