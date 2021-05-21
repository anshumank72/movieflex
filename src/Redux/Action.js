import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./ActionTypes";

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};
export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};
export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_REQUEST,
    payload: error,
  };
};

export const fetchData = (val) => {
  return (dispatch) => {
    dispatch(fetchDataRequest);
    fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=86385d2f&s='Spider-Man'&page='1'"
    )
      .then((res) => {
        console.log("data", res);
        return dispatch(fetchDataSuccess(res));
      })
      .catch((error) => {
        console.log(error);
        return dispatch(fetchDataFailure(error));
      });
  };
};
