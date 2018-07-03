import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import RenderField from '../helpers/renderField';
import moment from 'moment';
import { addExpense } from '../actions/expenses_action';
import {withRouter ,Link} from 'react-router-dom';
import { connect } from 'react-redux';

let defaultStateInEditMode = {};

export class ExpenseForm extends Component {

    componentWillMount(){
        if(this.props.defaultStateInEditMode){
            defaultStateInEditMode = {...this.props.defaultStateInEditMode}
        }
    }
    componentDidMount() {
        M.textareaAutoResize(document.getElementById("expense-note"));
        if(!this.state.isEditMode)defaultStateInEditMode={};
        
    }
    constructor(props) {
        super(props);
        this.state ={
            isEditMode:this.props.isEditMode?true:false
        }
    }
    submit = (values) => {
        this.props.dispatch(addExpense(values));
        this.props.history.push("/");
    }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div className="expense-form">
                <form className="col s12" onSubmit={handleSubmit(this.submit)}>
                    <div className="row">
                        <div className="expense-form__name">
                            <Field
                                name="name"
                                type="text"
                                id={"expense-name"}
                                isEditMode = {this.state.isEditMode}
                                label="Add Expense"
                                component={RenderField}/>
                        </div>
                        <div className="expense-form__amount">
                            <Field
                                name="amount"
                                type="number"
                                id={"expense-amount"}
                                isEditMode = {this.state.isEditMode}
                                label="Add Amount"
                                component={RenderField}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="expense-form__note">
                            <Field
                                name="note"
                                id="expense-note"
                                label="Add Note"
                                type="textarea"
                                isEditMode = {this.state.isEditMode}
                                component={RenderField}/>
                        </div>
                        <div className="expense-form__datepicker">
                            <Field
                                name="createdAt"
                                id="expense-date"
                                type="date"
                                format={(value) => value ? moment(value) : moment()}
                                normalize={(data) => data  && data.value && data.value.valueOf()}component={RenderField}/> </div>
                    </div>
                    <div className="expense-form__button-group">
                        <button className="btn waves-effect waves-light" type="submit" disabled={submitting}>Submit
                            
                        </button>
                        <Link to="/" className="expense-form__cancel btn waves-effect waves-light" >Cancel
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};
    if (!values.name) 
        errors.name = "Enter Name";
    if (!values.amount) 
        errors.amount = "Enter Amount";
    
    return errors;
};

// export default reduxForm({form: "AddExpenseForm", validate})(withRouter(AddExpenseForm));
export default connect(
    state => ({
      initialValues: defaultStateInEditMode // pull initial values from account reducer
    }), // bind account loading action creator
  )(reduxForm({form: "AddExpenseForm",enableReinitialize: true, validate})(withRouter(ExpenseForm)));