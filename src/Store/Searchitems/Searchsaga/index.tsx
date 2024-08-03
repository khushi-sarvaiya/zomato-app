import Searchapi from "../../../Api/Searchapi";
import { SEARCHITEMS_REQUEST } from "../../Type";
import { searchItemsFailure, searchItemsSuccess } from "../Action";
import { call, put, takeEvery } from "redux-saga/effects";

interface typeOfItems {
  id: number;
  name: string;
  price: string;
}

interface typeOfData {
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

interface typeOfResponse {
  data: typeOfData[];
}

export function* searchDataSaga(action: any) {
  try {
    const response: typeOfResponse = yield call(Searchapi, action.payload);
    yield put(searchItemsSuccess(response.data));
    console.log("searchItemsSuccess====>", response);
  } catch (error: any) {
    yield put(searchItemsFailure(error.meassge));
  }
}

export function* watchSearchSaga() {
  yield takeEvery(SEARCHITEMS_REQUEST, searchDataSaga);
}
