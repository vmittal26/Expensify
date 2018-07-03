import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

export default() => (
    <BrowserRouter>
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <Switch>
                            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                            <Route path="/create" component={AddExpensePage}/>
                            <Route path="/edit/:id" component={EditExpensePage} />
                            <Route path="/help" component={HelpPage}/>
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>
);
