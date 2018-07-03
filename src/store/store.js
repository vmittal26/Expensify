import { createStore, combineReducers } from "redux";
import filtersReducer from "../reducers/filters_reducer";
import expensesReducer from "../reducers/expenes_reducer";
import {reducer as formReducer} from 'redux-form';

export default createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      form:formReducer
    })
);
