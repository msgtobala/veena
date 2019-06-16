import { Iterable } from "immutable";
import { createLogger } from "redux-logger";

const stateTransformer = state => {
  if (Iterable.isIterable(state.str)) {
    return state.str.toJS();
  }
  return state;
};

const logger = createLogger({
  stateTransformer,
  predicate: () => process.env.NODE_ENV === "development"
});

export default logger;
