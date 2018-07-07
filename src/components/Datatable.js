import React from "react";
import {connect} from "react-redux";
import selectExpenses from '../helpers/selectExpenses';
import {withRouter} from 'react-router';
import ExpenseListButtonLayout from './ExpenseListButtonLayout';
import {render} from "react-dom";
// import {makeData, Logo, Tips} from "./Utils"; import matchSorter from
// 'match-sorter' Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Datatable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.expenses
        };
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
    selectAll(event) {
        let checkboxList = document.querySelectorAll('input[type=checkbox');

        for (var i = 1; i < checkboxList.length; i++) {
            checkboxList[i].checked = event.target.checked;
        }``
    }
    render() {
        const {data} = this.state;
        return (
            <div >
                <ExpenseListButtonLayout expense = {this.state.selectedExpense} onClick={this.onDoubleClick} edit={this.state.edit}/>
                <ReactTable
                    data={data}
                    filterable
                    getTrProps={(state, rowInfo, column, instance) => ({
                        onDoubleClick: ()=>this.onDoubleClick(rowInfo.original)
                    })}
                    columns={[
                    {
                        Header: '#',
                        Filter: () => (
                            <label>
                                <input
                                    onClick={(event) => this.selectAll(event)}
                                    className="filled-in"
                                    type="checkbox"/>
                                <span className="expenselist__checkbox"></span>
                            </label>
                        ),
                        width: undefined,
                        minWidth: 15,
                        filterable: true,
                        accessor: "",
                        Cell: row => (
                            <label>
                                <input onClick = {(event)=>this.onClick(row.original,event)} className="filled-in" type="checkbox"/>
                                <span className="expenselist__checkbox"></span>
                            </label>
                        )
                    }, {
                        Header: "Name",
                        accessor: "name"
                    }, {
                        Header: "Amount",
                        accessor: "amount"
                    }, {
                        Header: "Note",
                        accessor: "note"
                    }, {
                        Header: "CreatedAt",
                        accessor: "createdAt"
                    }
                ]}
                    defaultPageSize={10}
                    className="-striped -highlight"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default withRouter(connect(mapStateToProps)(Datatable));