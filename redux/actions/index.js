import axios from "axios";

const FETCH_LIST = "FETCH_LIST";
const SET_ITEM = "SET_ITEM";
const CLEAR_ITEMS = "CLEAR_ITEMS";

export const fetchList = () => async (dispatch) => {
  const res = await axios.get("/api/data");
  dispatch({
    type: FETCH_LIST,
    payload: res.data
  });
};

export const setItem = (name) => async (dispatch) => {
  const res = await fetch(`/api/data?add=${name}`);
  console.log(name);
  if (res.ok) {
    dispatch({
      type: SET_ITEM,
      payload: name
    });
  }
};

export const clearItems = () => async (dispatch) => {
  const res = await fetch(`/api/data?clear=1`);
  if (res.ok) {
    dispatch({
      type: CLEAR_ITEMS
    });
  }
};
