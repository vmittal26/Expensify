import React , {Component} from "react";
import { slider } from "./slider";
import ExpenseForm from "./ExpenseForm";

export default class AddExpensePage extends Component {

  constructor(props){
    super(props);
    this.state={
      isEditMode:false,
      defaultStateInEditMode:{}
    };
  }
  
  render() {
    if (slider()) slider().close();
    return (
      <div className="container">
        <h4>Add Expenses</h4>
        <ExpenseForm formState={this.state}/>
      </div>
    );
  }
};
