import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './containers/App';
import Home from './components/home/Home';
import Info from './components/info/Info';
import Bog from './components/bog/Bog';
import Work from './components/work/Work';
import Project from './components/project/Project';
import Skill from './components/skill/Skill';
import Tks from './components/tks/Tks';


const MOUNT_NODE = document.getElementById('root');

render((
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/info' component={Info} />
            <Route path='/bog' component={Bog} />
            <Route path='/work' component={Work} />
            <Route path='/project' component={Project} />
            <Route path='/skill' component={Skill} />
            <Route path='/tks' component={Tks} />
        </Route>
    </Router>
), MOUNT_NODE);