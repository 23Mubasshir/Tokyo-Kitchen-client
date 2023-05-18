import React, { useContext } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../components/Providers/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  //* <-----Log-out function-----> */
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  console.log(user);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Tokyo Kitchen</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className="text-decoration-none px-3 py-1 my-2 rounded-3" to="/">
                Home
              </NavLink>

              <NavLink className="text-decoration-none px-3 py-1 my-2 rounded-3 " to="/Blog">
                Blog
              </NavLink>
              <NavLink
                className="text-decoration-none px-3 py-1 my-2 rounded-3 "
                to="/About-us"
              >
                About us
              </NavLink>
              <NavLink
                className="text-decoration-none mx-md-2 mt-2 "
                to="/Profile"
              >
                {user?.displayName ? (
                  <p className="mx-3">{user.displayName}</p>
                ) : (
                  <p className="p-0 m-0"></p>
                )}
              </NavLink>

              {user?.photoURL ? (
                <NavLink 
                className="text-decoration-none
                "
                to="/Profile-img">
                  {user.photoURL ? (
                    <img
                      style={{ height: "40px" }}
                      className="rounded-circle"
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    <FaRegUserCircle style={{ fontSize: "2.5rem" }} />
                  )}
                </NavLink>
              ) : (
                <div></div>
              )}
            </Nav>

            <Nav>
              {user ? (
                <div></div>
              ) : (
                <NavLink className="m-lg-3" to="/sign-up">
                  <Button variant="outline-light rounded-0">Sign Up</Button>
                </NavLink>
              )}
              {user ? (
                <Link className="my-3 me-3">
                  <Button
                    onClick={handleLogout}
                    variant="outline-light rounded-0"
                  >
                    Sign Out
                  </Button>
                </Link>
              ) : (
                <NavLink className="my-3 me-3" to="/sign-in">
                  <Button variant="outline-light rounded-0">Sign In</Button>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
