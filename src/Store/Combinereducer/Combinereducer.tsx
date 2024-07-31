import { combineReducers } from "redux"
import SearchReducer from "../Searchitems/Reducer/index"
import {foodItemsReducer} from "../FoodItems/Reducer/index"
 
export const reducer :any= combineReducers({
    SearchReducer:SearchReducer,
    foodItemsReducer:foodItemsReducer
})