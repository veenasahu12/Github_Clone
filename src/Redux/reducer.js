import * as types from "./actionType";

const initialState = {
  data: [],
  followers_data: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log(payload,type,"reducer")
  switch (type) {
    case types.API_REQUEST:
      return { ...state, isLoading: true };
    case types.API_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    case types.API_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.FOLLOWERS_API_REQUEST:
      return { ...state, isLoading: true };
    case types.FOLLOWERS_API_SUCCESS:
      return { ...state, isLoading: false, followers_data: payload };
    case types.FOLLOWERS_API_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
export { reducer };
