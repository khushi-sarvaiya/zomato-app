import { isConstructorDeclaration } from "typescript";
import {
  SEARCHITEMS_FAILURE,
  SEARCHITEMS_REQUEST,
  SEARCHITEMS_SUCCESS,
} from "../../Type";

export const searchItemsRequest = (searchdata: any) => {

  return {
    type: SEARCHITEMS_REQUEST,
    payload: searchdata,
  };
};

export const searchItemsSuccess = (response: any) => {
  return {
    type: SEARCHITEMS_SUCCESS,
    payload: response,
  };
};

export const searchItemsFailure = (error: any) => {
  return {
    type: SEARCHITEMS_FAILURE,
    payload:error,
  };
};
