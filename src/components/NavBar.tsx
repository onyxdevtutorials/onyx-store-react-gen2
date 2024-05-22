import { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const { authStatus, signOut } = useAuthenticator((context) => [
    context.authStatus,
  ]);

  useEffect(() => {
    console.log("authStatus from useAuthenticator", authStatus);
    if (authStatus !== "configuring") {
      setIsSignedIn(authStatus === "authenticated");
    }
  }, [authStatus]);

  const handleSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Onyx Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {isSignedIn && (
            <Button variant="dark" onClick={signOut}>
              Sign Out
            </Button>
          )}
          {!isSignedIn && (
            <Button variant="dark" onClick={handleSignIn}>
              Sign In
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
