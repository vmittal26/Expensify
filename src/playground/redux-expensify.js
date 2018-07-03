import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//CREATE ADD EXPENSE ACTION

const addExpense = ({
  note = "",
  description = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// CREATE REMOVE EXPENSE ACTION
const removeExpense = id => ({ type: "REMOVE_EXPENSE", id });

// CREATE EDIT EXPENSET ACTION

const editExpense = (id, updates) => ({ type: "EDIT_EXPENSE", id, updates });

// CREATE TEXT FILTER

const setTextFilter = text => ({ type: "FILTER_TEXT", text });
//CREATE SORT BY
const sortBy = sortBy => ({ type: "SORT_BY_AMOUNT", sortBy });

//CREATE START DATE ACTION

const setStartDate = startDate => ({ type: "SET_START_DATE", startDate });

//CREATE END DATE ACTION
const setEndDate = endDate => ({ type: "SET_END_DATE", endDate });

//***************/*REDUCERS*/************ CREATE ADD EXPENSE REDUCER

const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
// CREATE FILTER REDUCER

const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "FILTER_TEXT":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
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

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateCriteria =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateCriteria =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textCriteria = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateCriteria && endDateCriteria && textCriteria;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Tea", amount: 1000, createdAt: 50 })
);
const exponseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 500, createdAt: 200 })
);
// store.dispatch(removeExpense(expenseOne.expense.id));
// store.dispatch(editExpense(exponseTwo.expense.id,{amount:700}));
// store.dispatch(setTextFilter('Tea'));
// store.dispatch(setTextFilter('Coffee')); store.dispatch(sortBy('amount'));
// store.dispatch(sortBy('date'));
store.dispatch(setStartDate(-1500));
store.dispatch(setEndDate(1250));
store.dispatch(setTextFilter("e"));
store.dispatch(sortBy("date"));
store.dispatch(sortBy("amount"));
// const state = store.getState() const visibleExpenses =
// getVisibleExpenses(state.expenses,state.filters);
// console.log(store.getState()); console.log(visibleExpenses);
