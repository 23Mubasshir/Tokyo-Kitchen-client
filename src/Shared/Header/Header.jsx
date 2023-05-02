import React from "react";
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Container>
          <Navbar.Brand href="/">Tokyo Kitchen</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="mx-auto">
              <Link className="text-decoration-none px-3 mt-2 text-light" to="/">Home</Link>
              <Link className="text-decoration-none px-3 mt-2 text-light" to="/Blog">Blog</Link>
              <Link className="text-decoration-none px-3 mt-2 text-light" to="#About-us">About us</Link>
            </Nav>
            <Nav>
              <Link className="my-3 me-3" to="/sign-in"><Button variant="outline-light">Sign in</Button></Link>
              <Link className="my-lg-3"eventkey={2} to="/sign-up">
              <Button variant="outline-light">Sign Up</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
