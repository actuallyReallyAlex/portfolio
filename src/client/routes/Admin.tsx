import * as React from "react";

export interface AdminProps {}

const Admin: React.FunctionComponent<AdminProps> = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [hasCheckedAuthentication, setHasCheckedAuthetication] = React.useState(
    false
  );

  React.useEffect(() => {
    const checkAuthentication = async (): Promise<void> => {
      try {
        const response = await fetch("/user/me");
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

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      alert("LOGIN ATTEMPTED");
    } catch (error) {
      console.error(error);
    }
  };

  if (isAuthenticated) {
    return (
      <div>
        <h1>ADMIN DASHBOARD</h1>
        <p>USER IS AUTHENTICATED!</p>
        {JSON.stringify(user, null, 2)}
      </div>
    );
  }

  if (hasCheckedAuthentication) {
    return (
      <div>
        <h1>ADMIN DASHBOARD</h1>
        <p>USER IS NOT AUTHENTICATED</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }

  return null;
};

export default Admin;
