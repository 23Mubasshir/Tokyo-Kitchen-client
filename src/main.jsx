import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import Login from "./Pages/LogIn/LogIn.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import ChefDetails from "./Pages/ChefDetails/ChefDetails.jsx";
import AuthProvider from "./components/Providers/AuthProvider.jsx";
import PrivateRoute from "./components/Routes/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/sign-in",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/chefCart/:id",
        element: <PrivateRoute><ChefDetails /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://assignment-10-tokyo-kitchen-server-23mubasshir.vercel.app/chefCart/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
