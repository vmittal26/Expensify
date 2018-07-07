import store from './store/store';
import React from 'react';
import App from './components/App';
import {Provider} from 'react-redux'
import {addExpense} from './actions/expenses_action';
import {render} from 'react-dom';
import 'materialize-css/dist/js/materialize.min.js';
import './assets/styles/base.scss';

const jsx = (
    <Provider store ={store}>
        <App/>
    </Provider>
)

store.dispatch(addExpense({name: "Water-Bill", amount: 100, note:'Pay on 20th ',createdAt: 1500021}));
store.dispatch(addExpense({name: "Gas-Bill", note:'Pay on 28th',amount: 200, createdAt: 1000}));
store.dispatch(addExpense({name: "Electricity-Bill", note:'Pay on 28th',amount: 4000, createdAt: 25000}));
store.dispatch(addExpense({name: "Credit Card Bill",note:'Pay on 19th',amount: 7000, createdAt: 1200}));
store.dispatch(addExpense({name: "Shopping",note:'Pay on 30th',amount: 600, createdAt: 5000}));
store.dispatch(addExpense({name: "EMI", note:'Pay on 15th' ,amount: 5000, createdAt: 100}));

render(jsx, document.getElementById('app-container'));

console.log(store.getState());
