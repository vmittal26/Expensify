// CREATE FILTER REDUCER

const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "FILTER_TEXT":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};