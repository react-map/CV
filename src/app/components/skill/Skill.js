import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './skill.css';
import Nav from '../nav/Nav';

class Skill extends Component {
    render() {
        return (
            <div>
                <Nav parentUrl={'/'} parentName={'首页'} nowName={'技能清单'}></Nav>
                
                技能清单
            </div>
        );
    }
}

export default Skill;