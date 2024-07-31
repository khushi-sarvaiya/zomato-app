import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import "./Searchbar.css";
import Searchsaggestion from "../Searchsaggestion/Searchsaggestion";
import { useDispatch, useSelector } from "react-redux";
import { searchItemsRequest } from "../../Store/Searchitems/Action";
const Searchbar = () => {
  const [inputValue, setInputValue] = useState<any>();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state);


  const handleChange = (e: any) => {
    setInputValue(e.target.value);
    dispatch(searchItemsRequest(inputValue));
  };

  return (
    <div>
      <div className="search-container-flex">
        <span>
          <i className="fa-solid fa-location-dot location-color"></i>
        </span>
        <Input
          type="text"
          className="text-location"
          placeholder="location"
          onChange=""
        />
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

