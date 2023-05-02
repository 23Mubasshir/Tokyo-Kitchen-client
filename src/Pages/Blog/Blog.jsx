import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="question-answer-component">
        <h1>Questions and Answers</h1>
        <div className="question-answer">
          <h3>
            1. Tell us the differences between uncontrolled and controlled
            components.
          </h3>
          <p>
            Uncontrolled components and controlled components are concepts
            related to building web forms in React, a popular JavaScript library
            for building user interfaces. Uncontrolled components refer to form
            elements where the component's state is maintained by the browser's
            DOM, not by React. Controlled components are form elements where the
            component's state is managed by React, allowing for greater control
            and validation of form data. The main difference between
            uncontrolled and controlled components is the way in which their
            state is managed. Uncontrolled components have their state managed
            by the DOM, while controlled components have their state managed by
            React.
          </p>

          <h3>2. How to validate React props using PropTypes ?</h3>
          <p>
            Using PropTypes to validate React props involves importing the
            PropTypes library, defining a propTypes object at the bottom of the
            component file, and specifying the types, requiredness, and default
            values of the props. This helps catch potential issues early on and
            improves the robustness of the code. When a prop is passed that does
            not match its PropTypes definition, a warning will be displayed in
            the console. Reuse stateful logic between components without having
            to write the same code, and use built-in hooks like useState and
            useEffect. Custom hooks can be shared between components and
            projects, making them easier to read and maintain.
          </p>

          <h3>3. Tell us the difference between nodejs and express js.</h3>

          <p>
            Node.js is a JavaScript runtime that allows developers to run
            JavaScript code outside of a web browser. It provides built-in
            modules that make it easy to perform tasks such as file I/O, network
            communication, and server-side programming. Express.js is a web
            application framework built on top of Node.js that provides tools
            and utilities for building web applications and APIs. Node.js
            provides the underlying runtime environment for JavaScript on the
            server, while Express.js provides a set of tools and utilities for
            building web applications and APIs on top of Node.js.
          </p>

          <h3>
            4. What is a custom hook, and why will you create a custom hook?
          </h3>
          <p>
            In React, a custom hook is a JavaScript function that allows you to
            reuse stateful logic across multiple components. Custom hooks are
            named with the prefix "use" and can call other hooks if needed. They
            can also receive parameters and return values just like regular
            functions. For example, a custom hook called useCounter manages a
            count state and provides functions to increment and decrement the
            count. Custom hooks in React provide a way to encapsulate reusable
            stateful logic into a single function, and can be used to simplify
            code and make it more reusable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
