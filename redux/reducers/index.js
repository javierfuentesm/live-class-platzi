const reducer = (
  state = {
    list: []
  },
  action
) => {
  switch (action.type) {
    case "FETCH_LIST":
      return {
        ...state,
        list: action.payload
      };
    case "SET_ITEM":
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case "CLEAR_ITEMS":
      return {
        ...state,
        list: []
      };
    default:
      return state;
  }
};

export default reducer;
