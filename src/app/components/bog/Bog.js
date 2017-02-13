import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './bog.css';
import Nav from '../nav/Nav';

class Bog extends Component {
    render() {
        return (
            <div>
                <Nav parentUrl={'/'} parentName={'首页'} nowName={'教育经历'}></Nav>
                
                Edu
            </div>
        );
    }
}

export default Bog;