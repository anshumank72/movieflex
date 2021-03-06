import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FAVORITES,
} from "./ActionTypes";

export const fetchDataRequest = (movieTitle) => {
  return {
    type: FETCH_DATA_REQUEST,
    payload: movieTitle,
  };
};
export const fetchData = (movieTitle) => (dispatch) => {
  let url = `http://www.omdbapi.com/?i=tt3896198&apikey=86385d2f&s=${movieTitle}`;
  fetch(url)
    .then((res) => res.json())
    .then((deta) =>
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: deta.Search,
      })
    )
    .catch((err) => console.log(err));
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};
export const favoritesHandler = (movie) => {
  return {
    type: FAVORITES,
    payload: movie,
  };
};

//export const fetchData = (val) => {
//let url = `http://www.omdbapi.com/?apikey=86385d2f&s=${val.movieTitle}`;
//return (dispatch) => {
//dispatch(fetchDataRequest());
//return fetch(url)
//.then((res) => {
//console.log("data", res.data);
//return dispatch(fetchDataSuccess(res.data));
//})
//.catch((error) => {
//console.log(error);
//dispatch(fetchDataFailure(error));
//});
//};
//};
