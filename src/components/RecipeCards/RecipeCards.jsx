import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeCards = (props) => {
  const [disabled, setDisabled] = useState(false);

  const ShowTost = () => {
    toast("successfully added to you favorite");
  };

  const { RecipeName, Ingredients, CookingMethod, Rating } = props.cart;
  return (
    <div className="col-4">
      {/* <-----Data Load Spinner-----> */}
      <h1 className="text-center text-light display-3">
        {props ? " " : <Spinner animation="border" variant="light" />}
      </h1>
      <div className="card chef-recipes-card text-white bg-dark mb-3">
        <div className="card-header text-center pt-5">
          <h1>{RecipeName}</h1>
        </div>

        <div className="card-body">
          <h5 className="card-title small text-center">
            <p>Rating : {Rating}</p>
          </h5>

          <div className="card-text">
            <h4>Cooking Method: </h4>
            <span className="small">{CookingMethod}</span>
          </div>

          <div className="card-text">
            <h4 className="mb-4">Ingredients: </h4>
            {Ingredients.map((SingleIngredients, idk) => (
              <ul key={idk}>
                <li>{SingleIngredients}</li>
              </ul>
            ))}
          </div>

          <div className="d-flex justify-content-end mx-2 my-3 align-item-center">
            <button
              type="button"
              onClick={() => {
                setDisabled(true);
                ShowTost();
              }}
              disabled={disabled}
              className="btn  btn-outline-light rounded-5"
            >
              <FaHeart />
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCards;
