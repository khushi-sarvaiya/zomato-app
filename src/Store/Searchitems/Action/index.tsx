import {
  SEARCHITEMS_FAILURE,
  SEARCHITEMS_REQUEST,
  SEARCHITEMS_SUCCESS,
} from "../../Type";
import { typeOfSearchData } from "../Reducer";

export const searchItemsRequest = (searchdata: string) => {
  return {
    type: SEARCHITEMS_REQUEST,
    payload: searchdata,
  };
};

export const searchItemsSuccess = (response: typeOfSearchData[]) => {
  return {
    type: SEARCHITEMS_SUCCESS,
    payload: response,
  };
};

export const searchItemsFailure = (error: string) => {
  return {
    type: SEARCHITEMS_FAILURE,
    payload: error,
  };
};
