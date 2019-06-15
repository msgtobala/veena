import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import App from "./App";
import reducer from "./store/reducer";
import { loadProductSaga } from "./store/sagas";
import createSagaMiddleware from "redux-saga";

const rootReducer = combineReducers({
  str: reducer
});

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const sagaMiddleware = createSagaMiddleware();

const logger = store => {
  return next => {
    return action => {
      console.log("[Middle Ware] Dispatching", action);
      const result = next(action);
      console.log("[Middle Ware]", store.getState());
      return result;
    };
  };
};

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(loadProductSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
