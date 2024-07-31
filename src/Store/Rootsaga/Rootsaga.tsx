import { all, fork } from "redux-saga/effects";
import { watchSearchSaga } from "../Searchitems/Searchsaga";
import { watchFoodItemsSaga } from "../FoodItems/Saga";

export function* Rootsaga() {
  yield all([fork(watchSearchSaga), fork(watchFoodItemsSaga)]);
}
