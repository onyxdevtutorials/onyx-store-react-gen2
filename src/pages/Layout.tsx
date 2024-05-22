import { Outlet } from "react-router-dom";
import { NavBar } from "../components";
import Container from "react-bootstrap/Container";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="main-content text-start">
        <Container fluid className="container-margin-top">
          <Outlet />
        </Container>
      </main>
    </>
  );
};
export default Layout;
