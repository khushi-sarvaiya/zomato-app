import React, { ChangeEvent, useState } from "react";
import Input from "../Input/Input";
import "./Searchbar.css";
import Searchsaggestion from "../Searchsaggestion/Searchsaggestion";
import { useDispatch, useSelector } from "react-redux";
import { searchItemsRequest } from "../../Store/Searchitems/Action";

interface Restaurent {
  categories: [];
  restaurantName: string; 
}

const Searchbar: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Restaurent[]>([]);
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const dispatch = useDispatch();
  const selector = useSelector((state:any) => state.SearchReducer.searchData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (inputValue.length > 0) {
      const filterSuggestions = selector.filter(
        (items: any) =>
          items.restaurantName.toLowerCase().includes(inputValue.toLowerCase()) ||
          items.categories.some((categories:any) =>
            categories.toLowerCase().includes(inputValue.toLowerCase())
          ) ||
          items.items.some((items: any) =>
            items.name.toLowerCase().includes(inputValue.toLowerCase())
          )
      );
      setShowSuggestion(true);
      dispatch(searchItemsRequest(inputValue));
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
        <span>
          <i className="fa-solid fa-caret-down dropdown"> </i>
        </span>
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
