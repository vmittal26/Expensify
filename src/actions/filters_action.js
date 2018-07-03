// CREATE TEXT FILTER ACTION

export const setTextFilter = text => ({
  type: "FILTER_TEXT",
  text
});

//CREATE SORT BY ACTION
export const sortBy = sortBy => ({
  type: "SORT_BY",
  sortBy
});

//CREATE START DATE ACTION

export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

//CREATE END DATE ACTION
export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});
