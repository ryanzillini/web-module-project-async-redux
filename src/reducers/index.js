import React, { useState } from "react";
import { FETCH_SUCCESS, FETCH_FAIL, FETCH_START } from "../actions";

const initialState = {
  gifs: [],
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAIL: {
      return {
        gifs: [],
        loading: false,
        error: action.payload,
      };
    }
    case FETCH_START: {
      return {
        gifs: [],
        laoding: true,
        error: "",
      };
    }
    case FETCH_SUCCESS: {
      return {
        gifs: action.payload,
        laoding: false,
        error: "",
      };
    }
    default:
      return state;
  }
};

export default reducer;
