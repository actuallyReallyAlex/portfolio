import * as React from "react";
import { Box, Button, Flex, Heading } from "rebass";
import { Label, Input } from "@rebass/forms";

import BackButton from "../components/BackButton";

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
    <Flex
      alignItems="center"
      flexDirection="column"
      id="admin-login"
      justifyContent="center"
    >
      <BackButton />
      <Heading as="h1" fontSize="5">
        Login
      </Heading>
      <Box>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="email" sx={{ marginTop: "25px" }}>
            Email
          </Label>
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
            sx={{ marginBottom: "25px" }}
            type="password"
            value={password}
          />
          <Button
            disabled={!email || !password}
            sx={{
              display: "flex",
              margin: "0 auto",
              transition: "0.25s ease-in-out",
              ":hover": {
                backgroundColor: "rgba(0, 119, 204, 0.8)",
                cursor: "pointer",
              },
            }}
            type="submit"
            variant="primary"
          >
            Log in
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default AdminLoginPage;
