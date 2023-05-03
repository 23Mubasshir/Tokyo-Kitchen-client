import React, { useContext } from "react";
import "./LogIn.css";
import { Form, Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Providers/AuthProvider";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
  const { signIn } = useContext(AuthContext);

//  < ----- Google Sign-in ----->
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () =>{
      signInWithPopup(auth, provider)
      .then(result => {
        // Signed in 
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log('error',error.message);
      });
        
  }

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error);
        })
}

  return (
    <div className="login-page">
      <div className="d-flex   justify-content-center align-items-center vh-100">
        <Form onSubmit={handleLogin} className="p-5 shadow rounded login-form-card">
          <h3 className="text-center mb-4">Sign In</h3>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="mb-4"
              type="email"
              placeholder="Your email"
              name="email"
              required
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="mb-4"
              type="password"
              placeholder="Your Password"
              name="password"
              required
            />
          </Form.Group>

          <Button variant="light" type="submit" className="w-100 mb-3">
            Sign In
          </Button>

          <Form.Text>
            <small>
              Don't Have an account
              <Link className="text-decoration-none  text-color" to="/sign-up">
                <u>Sign Up</u>
              </Link>
              Here.
            </small>
          </Form.Text>

          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>

          <div className="text-center mb-3">
            <p className="my-1">or</p> <h5>Sign in with:</h5>
          </div>

          <Button onClick={handleGoogleSignIn} variant="outline-primary rounded-0" className="w-100 mb-3">
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
