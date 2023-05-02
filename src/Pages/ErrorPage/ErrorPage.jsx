import React from "react";
import './ErrorPage.css'
import { Link } from "react-router-dom";
import img404 from '../../assets/404.png'
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const ErrorPage = () => {
  return (
    
    <div>
    <Header></Header>
    <div className="error-page d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
            <img className="error-img" src={img404}></img>
            <h4 className="fs-3 text-light mb-5"> Opps! Page not found.</h4>
            <Link to="/" className="btn pt-3 px-4 btn-lg btn-light"><h4>Go Home</h4></Link>
        </div>
    </div>
    <Footer></Footer>
</div>
  );
};

export default ErrorPage;
