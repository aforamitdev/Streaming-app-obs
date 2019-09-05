import _ from "lodash";
export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "EDIT_STREAM":
      const newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(state, action.payload);
    case "FETCH_STREAMS":
      return {
        ...state,
        ..._.mapKeys(action.payload, "id")
      };
    default:
      return state;
  }
};
