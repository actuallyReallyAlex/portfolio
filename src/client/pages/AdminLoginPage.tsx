import * as React from "react";
import { Box, Button, Flex, Heading } from "rebass";
import { Label, Input } from "@rebass/forms";

import BackButton from "../components/BackButton";
import NotificationComponent from "../components/Notification";

import { ErrorResponse, Notification, UserDocument } from "../types";

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
  const defaultNotification: Notification = {
    display: false,
    message: null,
    title: null,
    type: null,
  };
  const [notification, setNotification] = React.useState(defaultNotification);

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
      const data: ErrorResponse | UserDocument = await response.json();

      const errorData = data as ErrorResponse;
      const userData = data as UserDocument;

      if (response.status !== 200) {
        return setNotification({
          display: true,
          message: () => <p>{errorData.error}</p>,
          title: "Error",
          type: "warning",
        });
      }

      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
      return setNotification({
        display: true,
        message: () => (
          <p>An error has occured. Please refresh the page, and try again.</p>
        ),
        title: "Technical Difficulties",
        type: "warning",
      });
    }
  };

  const disabled = !email || !password;

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      id="admin-login"
      justifyContent="center"
    >
      <BackButton />
      <NotificationComponent
        notification={notification}
        setNotification={setNotification}
      />
      <Heading as="h1" fontSize="7">
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
            sx={{ marginBottom: "25px" }}
            type="text"
            value={email}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: "50px" }}
            type="password"
            value={password}
          />
          <Button
            disabled={disabled}
            sx={{
              backgroundColor: disabled ? "grey" : "rgba(0, 119, 204, 1)",
              display: "flex",
              margin: "0 auto",
              transition: "0.25s ease-in-out",
              ":hover": {
                backgroundColor: disabled ? "grey" : "rgba(0, 119, 204, 0.8)",
                cursor: disabled ? "auto" : "pointer",
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
