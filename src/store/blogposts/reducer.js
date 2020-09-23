const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "FETCH_BLOGPOSTS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};
