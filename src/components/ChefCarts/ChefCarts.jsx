import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import { Col, Row } from "react-bootstrap";
import './ChefCarts.css';

const ChefCarts = () => {
  const [ChefCarts, setChefCarts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/chefCart")
      .then((res) => res.json())
      .then((data) => setChefCarts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="card-container bg-dark">
      <h1 className="text-center py-5 text-light">Our Chefs</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {ChefCarts.map((cart) => (
          <Cards key={cart.id} cart={cart}></Cards>
        ))}
      </Row>
    </div>
  );
};

export default ChefCarts;
