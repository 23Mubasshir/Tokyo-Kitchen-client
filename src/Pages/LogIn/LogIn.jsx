import React from "react";
import "./LogIn.css";
import { Form, Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login-page">
      <div className="d-flex   justify-content-center align-items-center vh-100">
        <Form className="p-5 shadow rounded login-form-card">
          <h3 className="text-center mb-4">Sign In</h3>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="mb-4"
              type="email"
              placeholder="Your email"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="mb-4"
              type="password"
              placeholder="Your Password"
            />
          </Form.Group>
          <Button variant="light" type="submit" className="w-100 mb-3">
            Sign In
          </Button>
          <div className="text-center mb-3">
            {" "}
            <p className="my-1">or</p> <h5>sign in with:</h5>{" "}
          </div>
          <Button variant="outline-primary rounded-0" className="w-100 mb-3">
            <FaGoogle /> Google
          </Button>
          <Button variant="outline-light rounded-0" className="w-100">
            <FaGithub /> GitHub
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
