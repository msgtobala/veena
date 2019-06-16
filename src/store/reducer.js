import { fromJS } from "immutable";

const initialStore = fromJS({
  selectedProductId: null,
  isLoading: false,
  error: false,
  productData: null,
  type: null
});

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case "SAVE_PRODUCT_SUCCESS":
      return state
        .setIn(["selectedProductId"], action.prodId)
        .setIn(["type"], action.prodType)
        .setIn(["productData"], null);
    case "PRODUCT_LOADING":
      return state.setIn(["isLoading"], true);
    case "PRODUCT_FETCH_FAILED":
      return state
        .setIn(["isLoading"], false)
        .setIn(["error"], true)
        .setIn(["productData"], null)
        .setIn(["selectedProductId"], null);
    case "PRODUCT_FETCH_SUCCESS":
      return state
        .setIn(["productData"], action.payload)
        .setIn(["isLoading"], false)
        .setIn(["error"], false)
        .setIn(["selectedProductId"], null);
    default:
      return state;
  }
};

export default reducer;
