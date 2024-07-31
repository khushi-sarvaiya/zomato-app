import {
  FOODITEMS_FAILURE,
  FOODITEMS_REQUEST,
  FOODITEMS_SUCCESS,
} from "../../Type";

export const fooditems_request = () => {
  return {
    type: FOODITEMS_REQUEST,
  };
};
export const fooditems_success = (fooddata_response: any) => {
  return {
    type: FOODITEMS_SUCCESS,
    payload: fooddata_response,
  };
};
export const fooditems_failure = (error: any) => {
  return {
    type: FOODITEMS_FAILURE,
    payload: error,
  };
};
