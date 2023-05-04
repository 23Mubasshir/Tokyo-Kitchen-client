import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import { Col, Row, Spinner } from "react-bootstrap";
import "./ChefCarts.css";

const ChefCarts = () => {
  const [ChefCarts, setChefCarts] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-tokyo-kitchen-server-23mubasshir.vercel.app/chefCart")
      .then((res) => res.json())
      .then((data) => setChefCarts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="card-container bg-dark">
      <h1 className="text-center py-5 text-light display-3">Our Chefs</h1>

      <h1 className="text-center text-light display-3">
        {ChefCarts.length == 0 ? (
          <Spinner animation="border" variant="light" />
        ) : (
          " "
        )}
      </h1>

      {ChefCarts[0] ? "" : "Loading"}

      <Row xs={1} md={2} lg={3} className="g-4">
        {ChefCarts.map((cart, idk) => (
          <Cards key={idk} cart={cart}></Cards>
        ))}
      </Row>
    </div>
  );
};

export default ChefCarts;
