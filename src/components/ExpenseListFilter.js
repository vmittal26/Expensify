import React, {Component} from 'react'
import {connect} from 'react-redux';
import {setTextFilter, sortBy}  from '../actions/filters_action';

class ExpenseListFilter extends Component {

    constructor(props){
        super(props);
        this.state ={};
    }

    componentDidMount(){
        M.FormSelect.init(document.getElementById('expenses-sort'));
    }
    render() {
        return (
            <div className="expensesfilter">
                <div className="row">
                    <div className="expensesfilter__input col s6">
                        <i className="material-icons prefix">search</i>
                        <input
                            id="autocomplete-input"
                            type="text"
                            value={this.props.filters.text}
                            className="autocomplete"
                            onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value));
                        }}></input>
                        <label htmlFor="autocomplete-input">Search Expenses</label>
                    </div>
                    <div className="expensesfilter__input  col s6">
                        <select id="expenses-sort"
                        value={this.props.filters.sortBy}
                        onChange={(e)=>{
                            if(e.target.value){
                                this.props.dispatch(sortBy(e.target.value));
                            }
                        }}>
                            <option value="" disabled value>Select Criteria to Sort</option>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                        <label>Sort By</label>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({filters: state.filters});

export default connect(mapStateToProps)(ExpenseListFilter);