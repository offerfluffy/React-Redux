import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

const initialState = { value: 0 };

// How to update store
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

// Global store
const store = createStore(reducer);

// Action Creator
const inc = () => {
  return { type: "INC" };
};

const dec = () => {
  return { type: "DEC" };
};

const rnd = (value) => {
  return { type: "RND", payload: value };
};

const update = () => {
  document.querySelector("#counter").textContent = store.getState().value;
};

// On store update
store.subscribe(update);

document.querySelector("#inc").addEventListener("click", () => {
  store.dispatch(inc()); // Update store
});

document.querySelector("#dec").addEventListener("click", () => {
  store.dispatch(dec());
});

document.querySelector("#rnd").addEventListener("click", () => {
  store.dispatch(rnd(Math.floor(Math.random() * 10)));
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode></React.StrictMode>);
