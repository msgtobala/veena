import { put } from "redux-saga/effects";

export function* loadProductSaga(action) {
    yield put({
        type: "LOAD_PRODUCT"
    });
}