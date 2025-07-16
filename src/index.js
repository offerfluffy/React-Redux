import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, bindActionCreators } from "redux";
import * as actions from "./actions";

const initialState = { value: 0 };

// Reducer function defines how state is updated based on action types
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        value: state.value + 1,
      };
    case "DEC":
      return {
        ...state,
        value: state.value - 1,
      };
    case "RND":
      return {
        ...state,
        value: state.value * action.payload,
      };
    default:
      return state;
  }
};

// Create the global Redux store using the reducer
const store = createStore(reducer);

const update = () => {
  document.querySelector("#counter").textContent = store.getState().value;
};

// Subscribe to store updates to trigger re-render logic
store.subscribe(update);

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args));
//   };

// const incDispatch = bindActionCreator(actions.inc, store.dispatch);
// const decDispatch = bindActionCreator(actions.dec, store.dispatch);
// const rndDispatch = bindActionCreator(actions.rnd, store.dispatch);

// Bind all action creators to dispatch and return them as callable functions
const { inc, dec, rnd } = bindActionCreators(actions, store.dispatch);

document.querySelector("#inc").addEventListener("click", () => {
  inc();
  // Dispatch the action to the store, triggering reducer and state update
});

document.querySelector("#dec").addEventListener("click", () => {
  dec();
});

document.querySelector("#rnd").addEventListener("click", () => {
  rnd(Math.floor(Math.random() * 10));
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode></React.StrictMode>);
