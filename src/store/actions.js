export const saveProduct = (prodId, prodType) => ({
  type: "SAVE_PRODUCT",
  prodId,
  prodType
});

export const initProduct = (prodId, prodType) => ({
  type: "INIT_PRODUCT",
  prodId,
  prodType
});

export const initProductLoader = () => ({
  type: "PRODUCT_LOADING"
});

export const productFetchFailed = payload => ({
  type: "PRODUCT_FETCH_FAILED",
  payload
});

export const productFetchSuccess = payload => ({
  type: "PRODUCT_FETCH_SUCCESS",
  payload
});
