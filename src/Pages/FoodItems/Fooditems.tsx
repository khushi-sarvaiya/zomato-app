import React, { useEffect } from "react";
import "./Fooditems.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Secondheader from "../../Components/Secondheader/Secondheader";
import { fooditems_request } from "../../Store/FoodItems/Action";

const Fooditems: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state.foodItemsReducer.fooddata);
  const filterdata = selector.filter(
    (items: any, index: any) => items.id === parseInt(id)
  );

  useEffect(() => {
    dispatch(fooditems_request());
  }, [dispatch]);

  return (
    <div className="center-container">
      <Secondheader />
      <hr className="horizontal-line" />
      {filterdata.map((items: any) => (
        <div className="fooditems-container">
          <div className="all-images-items">
            <div className="images1">
              <img src={items.image} className="image"></img>
            </div>
            <div className="images2">
              <div className="images2-image1">
                <img src={items.image2}></img>
              </div>
              <div className="images2-image2">
                <img src={items.image3}></img>
              </div>
            </div>
            <div className="images3">
              <img src={items.image4}></img>
            </div>
          </div>
          <div className="description-container">
            <div>
              <h1>{items.restaurantName}</h1>
              <p>{items.foodType}</p>
              <p>{items.categories.toString()}</p>

              <p>open now</p>
              <div className="direction-bookmark-share">
                <NavLink
                  to={`https://www.google.com/maps/dir/?api=1&destination=${items.location}`}
                >
                  Direction
                </NavLink>
                <NavLink to={""}>Bookmark</NavLink>
                <NavLink to={""}>Share</NavLink>
              </div>
            </div>
            <div>
              <div>rating</div>
              <div>
                <p>3</p>
                <p>dining rating</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fooditems;
