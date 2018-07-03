import React from 'react';
import {slider} from './slider';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

export default (props) => {
    if (slider()) slider().close();
    return (
            <div className="card">
              <h4 className="expensedashboard__title">Expenses List</h4>
                <div className="card-content">
                    {/* <ExpenseListFilter/> */}
                    <ExpenseList/>
                </div>
            </div>
    );
}

