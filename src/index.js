import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

// How to update store
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RND":
      return state * action.payload;
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

const rnd = () => {
  const random = Math.floor(Math.random() * 10);
  return { type: "RND", payload: random };
};

const update = () => {
  document.querySelector("#counter").textContent = store.getState();
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
  store.dispatch(rnd());
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode></React.StrictMode>);
