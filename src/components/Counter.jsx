import { connect } from "react-redux"; // HOC to connect React component to Redux
import * as actions from "../actions";
import { bindActionCreators } from "redux";

// Presentational component receiving props from Redux
const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={dec} className="btn btn-primary">
        DEC
      </button>
      <button onClick={inc} className="btn btn-primary">
        INC
      </button>
      <button onClick={rnd} className="btn btn-primary">
        RND
      </button>
    </div>
  );
};

// Presentational component receiving props from Redux
const mapStateToProps = (state) => {
  return {
    counter: state.value, // Pass the current value from state as a prop
  };
};

// Maps dispatch to props using bindActionCreators
const mapDispatchToProps = (dispatch) => {
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
  return {
    inc, // When inc() is called, dispatch({ type: "INC" }) is triggered
    dec,
    rnd: () => rnd(Math.floor(Math.random() * 10)),
  };
};

// Connect links Redux state and actions to the Counter component's props
// Works with both function and class components
// mapDispatchToProps may be an object where each field is an action creator.

// first call: returns a hoc that you can use to wrap any component
// second call: returns the wrapper component with mergedProps
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args));
//   };

// const incDispatch = bindActionCreator(actions.inc, store.dispatch);
// const decDispatch = bindActionCreator(actions.dec, store.dispatch);
// const rndDispatch = bindActionCreator(actions.rnd, store.dispatch);

// document.querySelector("#inc").addEventListener("click", () => {
//   inc();
//   // Dispatch the action to the store, triggering reducer and state update
// });

// document.querySelector("#dec").addEventListener("click", () => {
//   dec();
// });

// document.querySelector("#rnd").addEventListener("click", () => {
//  rnd(Math.floor(Math.random() * 10));
// });
