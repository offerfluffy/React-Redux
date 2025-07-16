// Action creators return action objects for dispatching to the reducer
export const inc = () => {
  return { type: "INC" };
};

export const dec = () => {
  return { type: "DEC" };
};

export const rnd = (value) => {
  return { type: "RND", payload: value };
};
