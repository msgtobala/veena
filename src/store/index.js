import { takeEvery } from "redux-saga/effects";

import { saveProductSaga, initProductSaga } from "./sagas";

export function* watchVeena () {
    yield takeEvery("SAVE_PRODUCT", saveProductSaga);
    yield takeEvery("INIT_PRODUCT", initProductSaga);
}