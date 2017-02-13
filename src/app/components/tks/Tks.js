import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './tks.css';
import Nav from '../nav/Nav';

class Tks extends Component {
    render() {
        return (
            <div>
                <Nav parentUrl={'/'} parentName={'首页'} nowName={'致谢'}></Nav>
                
                致谢
            </div>
        );
    }
}

export default Tks;