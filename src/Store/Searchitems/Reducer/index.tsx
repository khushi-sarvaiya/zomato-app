import {
  SEARCHITEMS_FAILURE,
  SEARCHITEMS_REQUEST,
  SEARCHITEMS_SUCCESS,
} from "../../Type";

interface typeOfItems {
  id: number;
  name: string;
  price: string;
}

export interface typeOfSearchData {
  categories: [];
  foodType: string;
  id: number;
  image: string;
  image2: string;
  image3: string;
  image4: string;
  items: typeOfItems[];
  location: string;
  rating: number;
  restaurantName: string;
}

interface typeOfInitialState {
  searchData: typeOfSearchData[];
  loading: boolean;
  error: null;
}

const initialState: typeOfInitialState = {
  searchData: [],
  loading: false,
  error: null,
};

const SearchReducer = ( state = initialState, action: any ): typeOfInitialState => {
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
