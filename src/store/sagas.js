import { put } from "redux-saga/effects";
import axios from "axios";

import * as actions from "./actions";

export function* saveProductSaga(action) {
  yield put({
    type: "SAVE_PRODUCT_SUCCESS",
    prodId: action.prodId,
    prodType: action.prodType
  });
}

export function* initProductSaga(action) {
  yield put(actions.initProductLoader());
  try {
    const response = yield axios.get(
      `https://test.veenamusiconline.com/api/v1/${action.prodType}/${action.prodId}`
    );
    yield put(actions.productFetchSuccess(response.data.data));
  } catch (error) {
    yield put(actions.productFetchFailed(error));
  }
}
