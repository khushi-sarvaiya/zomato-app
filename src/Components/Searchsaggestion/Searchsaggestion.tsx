import React from "react";
import "./Searchsaggestion.css";
import { useNavigate } from "react-router-dom";


const Searchsaggestion = (props:any) => {
const navigate = useNavigate();

  // console.log("maping suggestionList========>",props.suggestions);
  const onClickFoodItems=()=>{
    navigate("/Fooditems");
   

  }

  return (
    <div>
      <div className="search-suggestion-container">
        <div className="suggestion-container">
          {props.suggestions.length > 0 ? (
            props.suggestions.map((items:any) => (
              <div className="suggest-items" onClick={onClickFoodItems}>
                <div>
                  <img
                    src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
                    className="food-images"
                  ></img>
                </div>
                <div className="short-desc">
                  <div className=""> {items} - Delivery</div>
                  <div className="food-type">Dish</div>
                  <div></div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-items-found">
              <p >Oops!</p>
              We could not understand what you mean, try rephrasing the query.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchsaggestion;
