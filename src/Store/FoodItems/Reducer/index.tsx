import {
  FOODITEMS_FAILURE,
  FOODITEMS_REQUEST,
  FOODITEMS_SUCCESS,
} from "../../Type";

const initialState = {
  fooddata: [],
  foodFilterData: [],
  loading: false,
  error: null,
};

export const foodItemsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FOODITEMS_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case FOODITEMS_SUCCESS: {
      return {
        ...state,
        fooddata: action.payload,
        foodFilterData: action.payload,
        loading: false,
        error: null,
      };
    }
    case FOODITEMS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        fooddata: [],
        foodFilterData: [],
      };
    }
    default:
      return state;
  }
};
