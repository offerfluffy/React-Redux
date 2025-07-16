const initialState = { value: 0 };

// Reducer function defines how state is updated based on action types
export const reducer = (state = initialState, action) => {
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
