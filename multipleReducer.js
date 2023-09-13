const { createStore, combineReducers } = require("redux");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

// product action - reducer - store
const intialProductState = {
  products: ["apple", "orange"],
  numberOfProducts: 2,
};

const intialCartState = {
  cart: ["sugar"],
  numberOfProducts: 1,
};

const getProductsAction = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProducts = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

const getCartAction = () => {
  return {
    type: GET_CART,
  };
};

const addCartAction = (cart) => {
  return {
    type: ADD_CART,
    payload: cart,
  };
};

const productReducer = (state = intialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

const cartReducer = (state = intialCartState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };

    case ADD_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProductsAction());
store.dispatch(addProducts("mango"));
store.dispatch(getCartAction());
store.dispatch(addCartAction("tea"));
