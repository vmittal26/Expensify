import React, {Component} from 'react';
import { slider } from "./slider";
import ExpenseForm from "./ExpenseForm";

export default class EditExpensePage extends Component {

    componentDidMount() {
    }
    render() {
        if (slider())slider().close();
        return (
            <div className="container">
                <h4>Edit Expenses</h4>
                <ExpenseForm defaultStateInEditMode = {this.props.location.state.expense} isEditMode ={true}/>
            </div>
        );
    }

}
