import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Users from "./pages/Users/Users";
import Todo from './pages/Todo/Todo';
// import logo from './logo.svg';
import './App.css';


const App = () => (
    <div>
        <Router>
            <Switch>
                <Route exaxt path="/" component={Users}/>
                <Route exaxt path="/todo" component={Todo}/>
            </Switch>
        </Router>
    </div>
);

export default App;
