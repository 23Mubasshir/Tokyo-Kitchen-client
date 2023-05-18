import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Form, Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Providers/AuthProvider";

const SignUp = () => {
  const {
    createUser,
    signInWithGoogle,
    signInWithGithub,
    User,
    userProfileUpdating,
  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //  < ----- Google Sign-up ----->
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // Signed in
        const loggedUser = result.user;
        // console.log(loggedUser);
        setError("");
        setSuccess("User has been Created Successfully");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.message);
      });
  };

  //  < ----- Github Sign-up ----->
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        // Signed in
        const loggedUser = result.user;
        // console.log(loggedUser);
        setError("");
        setSuccess("User has been Created Successfully");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.message);
      });
  };

  //  < ----- Regular Sign-Up ----->
  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const form = event.target;
    const name = form.name1.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Password has to be least 6 characters");
      return;
    }
  //  < ----- Create User ----->
    createUser(email, password)
      .then((result) => {
        // const createdUser = result.user;
        // console.log(createdUser);
        setError("");
        setSuccess("User has been Created Successfully");
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });

    //  < ----- Update User profile----->
    userProfileUpdating(name, photo)
  };

  const handleAccepted = (event) => {
    // setAccepted(event.target.checked);
  };

  return (
    <div className="login-page">
      <div className="d-flex   justify-content-center align-items-center vh-100">
        {/* <----- Sign-Up page Form-----> */}
        <Form
          onSubmit={handleRegister}
          className="p-5 shadow rounded login-form-card"
        >
          <h3 className="text-center mb-4">Sign Up</h3>
          <Form.Group controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Your Name"
              required
              name="name1"
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
              required
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

          {/* <-----Error and Success show-----> */}
          <Form.Text className="text-danger my-2">
            <p>{error}</p>
          </Form.Text>
          <Form.Text className="text-success my-2">
            <p>{success}</p>
          </Form.Text>

          <Form.Text>
            <div className="text-center mb-3">
              <p className="my-1">or</p> <h5>Sign Up with:</h5>
            </div>
          </Form.Text>

          {/* <-----Google and Github Sign-in Button-----> */}
          <Button
            onClick={handleGoogleSignIn}
            variant="outline-primary rounded-0"
            className="w-100 mb-3"
          >
            <FaGoogle /> Google
          </Button>
          <Button
            onClick={handleGithubSignIn}
            variant="outline-light rounded-0"
            className="w-100"
          >
            <FaGithub /> GitHub
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
