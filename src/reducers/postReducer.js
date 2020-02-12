const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_FEED":
      return state === initialState ? payload : [...state.concat(payload)];
    case 'CREATE_POST':
      return [...payload.concat(state)]
    default:
      return state;
  }
};
