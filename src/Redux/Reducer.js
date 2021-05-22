import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./ActionTypes";

const initState = {
  movieTitle: "",
  isLoading: false,
  movies: [],
  error: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        movieTitle: action.payload,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
