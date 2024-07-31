import React from "react";
import {
  SEARCHITEMS_FAILURE,
  SEARCHITEMS_REQUEST,
  SEARCHITEMS_SUCCESS,
} from "../../Type";

const initialState = {
  searchData: [],
  loading: false,
  error: null,
};
const SearchReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case SEARCHITEMS_REQUEST:
      return { ...state, loading: true, error: null };
     

    case SEARCHITEMS_SUCCESS:
      
      return {
        ...state,
        loading: false,
        searchData: action.payload,
        error: null,
      };
    case SEARCHITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        searchData: [],
      };
    default:
      return state;
  }
};

export default SearchReducer;
