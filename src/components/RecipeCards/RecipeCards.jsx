import React from "react";
import { FaHeart } from "react-icons/fa";

const RecipeCards = (props) => {
  const { RecipeName, Ingredients, CookingMethod, Rating } = props.cart;
  return (
    <div className="col-4">
      <div className="card chef-recipes-card text-white bg-dark mb-3">
        <div className="card-header text-center pt-5">
          <h1>{RecipeName}</h1>
        </div>

        <div className="card-body">
          <h5 className="card-title small text-center">
            <p>Rating : {Rating}</p>
          </h5>

          <p className="card-text">
            <h4>Cooking Method: </h4>
            <span className="small">{CookingMethod}</span>
          </p>

          

          <div className="card-text">
            <h4 className="mb-4">Ingredients: </h4>
            {Ingredients.map((SingleIngredients, idk) => (
              <ul>
                <li>{SingleIngredients}</li>
              </ul>
            ))}
          </div>


          <div className="d-flex justify-content-end mx-2 my-3 align-item-center">
            <button type="button" className="btn  btn-outline-light ">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCards;
