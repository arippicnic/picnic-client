const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_FEED":
      return state === initialState ? payload : [...state.concat(payload)];
    default:
      return state;
  }
};
