import { call, put, takeEvery } from "redux-saga/effects";
import { fooditems_failure, fooditems_success } from "../Action";

import Foodapi from "../../../Api/Foodapi";
import { FOODITEMS_REQUEST } from "../../Type";

export function* fooditems_saga(action: any): any {
 
  try {
    const fooddata_response: any = yield call(Foodapi);
    console.log("fooddata_response=====>",fooddata_response)
    yield put(fooditems_success(fooddata_response.data));
  } catch (error:any) {
    yield put(fooditems_failure(error.meassge));
  }
}

export function* watchFoodItemsSaga() {
  yield takeEvery(FOODITEMS_REQUEST, fooditems_saga);
}
