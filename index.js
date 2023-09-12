const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

// state - count: 0
// action - Increment, Decrement, Reset
// reducer
// store(dispatch)

const intialState = {
  count: 0,
};

const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounterAction = () => {
  return {
    type: RESET,
  };
};

const incrementCounterActionByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

const counterReducer = (state = intialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }

    default:
      return state;
  }
};

// store - create, subscibe,  getState, dispatch

const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(incrementCounterActionByValue(10));
