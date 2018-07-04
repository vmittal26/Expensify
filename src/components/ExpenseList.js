import React from "react";
import {connect} from "react-redux";
import selectExpenses from '../helpers/selectExpenses';
import ExpenseListButtonLayout  from './ExpenseListButtonLayout';
import { withRouter } from 'react-router';

class ExpenseList extends React.Component {

    constructor(props){
      super(props);
      this.state={
          edit:false,
          selectedExpense:{}
      }
    }

    onClick = (expense,event)=>{
        this.setState({
                       selectedExpense:expense,
                       edit:event.target.checked
                    });
    }
    onDoubleClick = (expense)=>{
        this.props.history.push(`/edit/${expense.id}` ,{ expense });
    }
    render() {
        return (
           <div className ="expensedashboard">
           <ExpenseListButtonLayout expense = {this.state.selectedExpense} onClick={this.onDoubleClick} edit={this.state.edit}  />
            <div className="expenselist">
                <table className="expenselist__table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input onClick = {()=>{}} className="filled-in" type="checkbox"/>
                                    <span className="expenselist__checkbox"></span>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Note</th>
                            <th>CreatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.expenses.map(expense => {
                                return (
                                    <tr key={expense.id} onDoubleClick={()=>this.onDoubleClick(expense)}>
                                        <td>
                                            <label>
                                                <input className="filled-in" onClick = {(event)=>this.onClick(expense,event)} type="checkbox"/>
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>{expense.name}</td>
                                        <td>{expense.amount}</td>
                                        <td>{expense.note}</td>
                                        <td>{expense.createdAt}</td>
                                        {/* <td className="expenselist__edit"><i className="expenselist__editicon material-icons">edit</i></td> */}
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

// const ExpenseListConnected = connect(mapStateToProps)(ExpenseList);

export default withRouter(connect(mapStateToProps)(ExpenseList));
