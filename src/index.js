import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux"; // Makes Redux store available to all components

import { reducer } from "./reducer";

import App from "./components/App";

// Create the global Redux store using the reducer
const store = createStore(reducer);

// Wrap the app with Redux <Provider> to share the store with components
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// // Subscribe to store updates to trigger re-render logic
// update();
// store.subscribe(update);
