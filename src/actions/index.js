import React from "react";
import axios from "axios";

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_START = "FETCH_START";

const getGifs = (searchTerm) => {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=DDyDJNtDqObep2toW3c54V2OAXVX3Bev&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default getGifs;
