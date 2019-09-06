import streams from "../apis/streams";
import history from "../history";
export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  console.log(getState());
  const { userId } = getState().auth;
  const final = { ...formValues, userId };

  console.log(final);
  const response = await streams.post("/streams", final);
  dispatch({ type: "CREATE_STREAM", payload: response.data });
  history.push("/");
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get(`/streams/`);
  dispatch({ type: "FETCH_STREAMS", payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: "FETCH_STREAM", payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues);
  dispatch({ type: "EDIT_STREAM", payload: response.data });
};

export const deleteStream = id => async dispacth => {
  const response = await streams.delete(`/stream/${id}`);
  dispacth({ type: "DELETE_STREAM", payload: response.data });
};
