import initialState from "./state";
const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  const { type } = action;
  let currentState = null;
  switch (type) {
    case "DECREASE":
      currentState = Object.assign({}, state, {
        count: state["count"] - 1
      });
      console.log(currentState);
      return currentState;
      break;
    case "INCREASE":
      currentState = Object.assign({}, state, {
        count: state["count"] + 1
      });
      console.log(currentState);
      return currentState;
      break;
    case "CHANGE":
      currentState = Object.assign({}, state, {
        count: action.value
      });
      console.log(currentState);
      return currentState;
      break;
    default:
  }
  return state;
};
export default reducer;
