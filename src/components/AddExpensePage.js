import React from "react";
import { slider } from "./slider";
import ExpenseForm from "./ExpenseForm";

export default () => {
  if (slider()) slider().close();
  return (
    <div className="container">
      <h4>Add Expenses</h4>
      <ExpenseForm isEditMode={false}/>
    </div>
  );
};
