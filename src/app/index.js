import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './containers/App';
import Home from './components/home/Home';
import PersonalInfo from './components/personalInfo/PersonalInfo';


const MOUNT_NODE = document.getElementById('root');

render((
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/personalInfo' component={PersonalInfo} />
        </Route>
    </Router>
), MOUNT_NODE);