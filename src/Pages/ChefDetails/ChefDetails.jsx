import React from "react";
import "./ChefDetails.css";
import { useLoaderData } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaThumbsUp, FaPizzaSlice, FaUser } from "react-icons/fa";
import RecipeCards from "../../components/RecipeCards/RecipeCards";

const ChefDetails = () => {
  const data = useLoaderData();
  const {
    ChefPicture,
    ChefName,
    YearsOfExperience,
    NumberOfRecipes,
    Likes,
    Description,
    Recipes,
  } = data;
  return (
    <div>
      <div className="row chef-details">
        <div className="col-6 d-flex justify-content-end align-items-center">
          <img
            src={ChefPicture}
            className="chef-img-banner "
            alt="Responsive image"
          />
        </div>
        <div className="col-6 text-light  py-3 d-flex justify-content-start align-items-center">
          <div className="chef-text pe-5 me-4 ps-2">
            <h1 className="text-center display-2 mb-2">{ChefName}</h1>
            <p className="small text-center mb-4">{Description}</p>
            <h5 className="mb-3">
              <FaUser /> Years Of Experience: {YearsOfExperience}
            </h5>

            <h5 className="mb-3">
              <FaPizzaSlice /> Number Of Recipes: {NumberOfRecipes}
            </h5>

            <h5 className="mb-3">
              <FaThumbsUp /> Likes : {Likes}
            </h5>

            <Button className="w-100 mt-4" variant="outline-light" size="lg">
              Contact
            </Button>
          </div>
        </div>
      </div>
      <div className="chef-recipes">
        <div className="row">
        <h1 className="mt-4 text-center text-light py-3 bg-dark
        ">My Recipes</h1>
        </div>
        <div className="row m-5">
          
          {Recipes.map((cart, idk) => (
          <RecipeCards key={idk} cart={cart}></RecipeCards>
        ))}
          </div>
        </div>
      </div>

  );
};

export default ChefDetails;
