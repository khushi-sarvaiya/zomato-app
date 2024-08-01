import Searchapi from "../../../Api/Searchapi";
import { SEARCHITEMS_REQUEST } from "../../Type";
import { searchItemsFailure, searchItemsSuccess } from "../Action";
import { call, put, takeEvery } from "redux-saga/effects";

export function* searchDataSaga(action: any): any {
  try {
    console.log("searchDataSaga=====>",action);
    
    const response:any = yield call(Searchapi,action.payload);    
    yield put(searchItemsSuccess(response.data));
  console.log("searchItemsSuccess====>",response)
    
  } catch (error: any) {
    yield put(searchItemsFailure(error.meassge));
  }
}
export function* watchSearchSaga() {
  yield takeEvery(SEARCHITEMS_REQUEST, searchDataSaga);
}
