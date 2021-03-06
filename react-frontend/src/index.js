import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Hello1 from "./components/hello1";
import Hello2 from "./components/hello2";

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router basename="/v2">
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/hello1">Users</Link>
                </li>
                <li>
                    <Link to="/hello2">Contact</Link>
                </li>
                <li><a href="/">Jinja Template</a></li>
            </ul>
            <Route exact path="/" component={App} />
            <Route path="/hello1" component={Hello1} />
            <Route path="/hello2" component={Hello2} />
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
