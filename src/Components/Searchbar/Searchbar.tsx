import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import "./Searchbar.css";
import Searchsaggestion from "../Searchsaggestion/Searchsaggestion";
import { useDispatch, useSelector } from "react-redux";
import { searchItemsRequest } from "../../Store/Searchitems/Action";
const Searchbar = () => {
  const [inputValue, setInputValue] = useState<any>();
  const [suggestions, setSuggestions] = useState<any>([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state.SearchReducer.searchData);

  console.log("selector=====>", selector);
  const handleChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim().length > 0) {
      const filterSuggestions = selector.filter(
        (items: any) =>
          items.restaurantName.toLowerCase().includes(value.toLowerCase()) ||
          items.categories.some((categories: any) =>
            categories.toLowerCase().includes(value.toLowerCase())
          ) ||
          items.items.some((items: any) =>
            items.name.toLowerCase().includes(value.toLowerCase())
          )
      );
      setShowSuggestion(true);
      dispatch(searchItemsRequest(value));
      setSuggestions(filterSuggestions);
      console.log("filterSuggestions======>", filterSuggestions);
    } else {
      setShowSuggestion(false);
    }
  };

  return (
    <div>
      <div className="search-container-flex">
        <span>
          <i className="fa-solid fa-location-dot location-color"></i>
        </span>
        <Input type="text" className="text-location" placeholder="location" />
       <span><i className="fa-solid fa-caret-down dropdown">  </i></span>
        <div className="vertical-line" />
        <span className="material-symbols-outlined search-gray">search</span>
        <Input
          type="text"
          className=" text-search"
          value={inputValue}
          placeholder="search for restaurant, cuisine or a dish"
          onChange={handleChange}
        />
      </div>
      {showSuggestion && <Searchsaggestion suggestions={suggestions} />}
    </div>
  );
};

export default Searchbar;
