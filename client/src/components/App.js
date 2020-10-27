import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

const SurveyNew = () => <h2>SurveyNew</h2>


const App = () => {
    const dispatchActions = useDispatch();
    useEffect(() => {
        dispatchActions(actions.fetchUser());
    }, []);
    return(
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;