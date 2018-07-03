import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Slider extends Component {

constructor(props){
    super(props);
    this.state ={};
}
componentDidMount() {
        const elem = document.getElementById('slide-out');
        let instance = M.Sidenav.init(elem);
        this.setState({instance});
}

render() {
    return (
        <div>
            <ul id="slide-out" className="sidenav">
                <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
                <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
                <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large">
            <i className="material-icons">menu</i></a>
        </div>
        )
    }
};


export const slider = () => {
    if(document.getElementById('slide-out')){
        return M.Sidenav.getInstance(document.getElementById('slide-out'));
    }else{
        return null;
    }
}
