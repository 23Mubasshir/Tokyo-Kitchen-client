import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import './Cards.css'
import { FaThumbsUp, FaPizzaSlice, FaUser} from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const {
    ChefPicture,
    ChefName,
    YearsOfExperience,
    NumberOfRecipes,
    Likes,
    _id
  } = props.cart;
  return (
    <Col>
    <Card  style={{ height: '550px' }}>
      <Card.Img className="card-img1" variant="top" src={ChefPicture} />
      <Card.Body className="card-bg">
        <Card.Title><h2 className="text-center ">{ChefName}</h2></Card.Title>
        <Card.Text className="mx-4">
        <FaUser/> Years Of Experience: {YearsOfExperience} <br />
        <FaPizzaSlice/> Number Of Recipes: {NumberOfRecipes}<br />
        <FaThumbsUp/> Likes : {Likes}<br />

        <Link to={`/chefCart/${_id}`}>
        <Button className="w-100 mt-4" variant="dark" size="lg">
        View Recipes
      </Button></Link>

        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default Cards;
