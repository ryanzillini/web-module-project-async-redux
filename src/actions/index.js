import axios from "axios";

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_START = "FETCH_START";

export const getGifs = (searchTerm) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=DDyDJNtDqObep2toW3c54V2OAXVX3Bev&q=${searchTerm}&limit=3&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      )
      .then((res) => {
        dispatch(fetchSuccess(res.data.data));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchFail = (err) => {
  return { type: FETCH_FAIL, payload: err };
};

export const fetchSuccess = (gifs) => {
  return { type: FETCH_SUCCESS, payload: gifs };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};
