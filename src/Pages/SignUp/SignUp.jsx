import React, { useContext } from "react";
import "./SignUp.css";
import { Form, Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error => {
            console.log(error);
        })
}

  const handleAccepted = (event) => {
    // setAccepted(event.target.checked);
  };

  return (
    <div className="login-page">
      <div className="d-flex   justify-content-center align-items-center vh-100">
        <Form onSubmit={handleRegister} className="p-5 shadow rounded login-form-card">
          <h3 className="text-center mb-4">Sign Up</h3>
          <Form.Group controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Your Name"
              required
              name="name"
            />
            <Form.Label>Your Photo</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Your Photo URL"
              required
              name="photo"
            />
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="mb-5"
              type="email"
              placeholder="Your email"
              required
              name="email"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="mb-3"
              type="password"
              placeholder="Your Password"
              required
              name="password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={handleAccepted}
              type="checkbox"
              name="accept"
              label={
                <>
                  <small>Accept</small>{" "}
                  <Link className="text-color" to="/terms">
                    <small>Terms and Conditions</small>
                  </Link>{" "}
                </>
              }
            />
          </Form.Group>

          <Button variant="light" type="submit" className="w-100 mb-3">
            Sign Up
          </Button>

          <Form.Text>
            <small>
              Already Have an account{" "}
              <Link className="text-decoration-none  text-color" to="/sign-in">
                <u>Sign In</u>
              </Link>{" "}
              Here.
            </small>
          </Form.Text>

          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>

          <Form.Text>
            <div className="text-center mb-3">
              <p className="my-1">or</p> <h5>Sign Up with:</h5>
            </div>
          </Form.Text>

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
