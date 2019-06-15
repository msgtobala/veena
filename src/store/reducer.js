import { fromJS } from "immutable";

const initialStore = fromJS({
    selectedProductId: null,
    isLoading: false
});

const reducer = ( state = initialStore, action ) => {
    switch (action.type) {
        case 'LOAD_PRODUCT':
            return state.setIn(["selectedProductId"], "asd");
        default:
            return state;
    }
};

export default reducer;