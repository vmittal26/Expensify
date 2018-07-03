import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    console.log(props);
    return (
        <div className="expensedashboard__buttonlayout">
            {/* <Link to ="/create" className="expensedashboard__add"> <i className="material-icons">add</i></Link> */}
            <Link to ="/create" className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">add</i></Link>
           <button disabled ={!props.edit} className="btn-floating btn-large waves-effect waves-light"> <i className="material-icons">edit</i></button>
        </div>
    );
}