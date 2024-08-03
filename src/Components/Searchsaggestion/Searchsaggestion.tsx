import React from "react";
import "./Searchsaggestion.css";
import { useNavigate } from "react-router-dom";

const Searchsaggestion = ({ suggestions }: any) => {
  const navigate = useNavigate();
  const onClickFoodItems = () => {
    navigate("/restaurant");
  };

  return (
    <div>
      <div className="search-suggestion-container">
        <div className="suggestion-container">
          {suggestions.length > 0 ? (
            suggestions.map((items: any) => (
              <div className="suggest-items" onClick={onClickFoodItems}>
                <div>
                  <img src={items.image} className="food-images"></img>
                </div>
                <div className="short-desc">
                  <div className=""> {items.restaurantName} - Delivery</div>
                  <div className="food-type">Dish</div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-items-found">
              <p>Oops!</p>
              <p>
                We could not understand what you mean, try rephrasing the query.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchsaggestion;
