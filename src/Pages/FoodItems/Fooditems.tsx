import React, { useEffect, useState } from "react";
import "./Fooditems.css";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Header from "../../Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { fooditems_request } from "../../Store/FoodItems/Action";

const Fooditems = () => {
  const [filter, setFilter] = useState("All");
  const dispatch = useDispatch();
  let foodItemsAll = useSelector(
    (state: any) => state.foodItemsReducer.fooddata
  );

  
  useEffect(() => {
    dispatch(fooditems_request());
  }, [dispatch]);

  const filtering = () => {
    if (filter === "Rating") {
      foodItemsAll.sort((a: any, b: any) => b.rating - a.rating);
    } else if (filter === "Veg") {
      foodItemsAll = foodItemsAll.filter(
        (items: any) => items.foodType === "Veg"
      );
    } else {
      return foodItemsAll;
    }
  };

  const foodItemsAll1 = filtering();

  return (
    <div className="center-conainer">
      <div className="header-component">
        <div>
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            width={126}
            height={27}
          ></img>
        </div>
        <div className="searchbar-component">
          <Searchbar />
        </div>
        <div className="margin-leftheader">
          <Header />
        </div>
      </div>
      <br/>
     
      
      <div className="food-allfilter-container">
        <div onClick={() => setFilter("All")}>All</div>
        <div className="food-items-cross">
          <div>Pizza X</div>
        </div>
        <div onClick={() => setFilter("Rating")}>Rating</div>
        <div onClick={() => setFilter("Veg")}> Pure veg</div>
        
      </div>

      <br/>
      <div className="location-description">Food Delivery Restaurants in Ahmedabad Jn, Kalupur Railway Station Rd, Sakar Bazzar</div>
      <br/>
      <div className="all-card-conatiner">
        {foodItemsAll.map((items: any) => (
          <div className="card-component ">
            <div className="card " style={{ width: "18rem" }}>
              <img
                src={items.image}
                className="card-img-top images"
                alt="..."
              />
              <div className="card-body card-description">
                <div className="restanrentname">
                  <div>{items.restaurantName}</div>
                  <div className="ratting">{items.foodType}</div>
                </div>
                <div className="fooditems">
                  <div>{items.categories.toString()}</div>
                  <div>rating {items.rating}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fooditems;
