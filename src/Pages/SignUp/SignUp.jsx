import React from "react";
import "./SignUp.css";
import { Form, Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="login-page">
      <div className="d-flex   justify-content-center align-items-center vh-100">
        <Form className="p-5 shadow rounded login-form-card">
          <h3 className="text-center mb-4">Sign Up</h3>
          <Form.Group controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Your Name"
            />
            <Form.Label>Your Photo</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Your Photo URL"
            />
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="mb-5"
              type="email"
              placeholder="Your email"
            />
          </Form.Group>
          <Form.Group controlId="password" >
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="mb-3"
              type="password"
              placeholder="Your Password"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              className="mb-4"
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Button variant="light" type="submit" className="w-100 mb-3">
            Sign Up
          </Button>
          <p><small>Already Have an account <Link
           className="text-decoration-none  text-color" to="/sign-in"><u>Sign In</u></Link> Here.</small></p>
          <div className="text-center mb-3">
            {" "}
            <p className="my-1">or</p> <h5>Sign Up with:</h5>{" "}
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

export default SignUp;
