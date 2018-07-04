import React, {Component} from 'react';
import { slider } from "./slider";
import ExpenseForm from "./ExpenseForm";

export default class EditExpensePage extends Component {

    constructor(props) {
        super(props);
        this.state={
            isEditMode:true,
            defaultStateInEditMode:this.props.location.state.expense
          };
    }
    render() {
        if (slider())slider().close();
        return (
            <div className="container">
                <h4>Edit Expenses</h4>
                <ExpenseForm formState = {this.state}/>
            </div>
        );
    }

}
