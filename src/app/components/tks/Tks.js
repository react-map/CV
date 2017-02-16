import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './tks.css';
import Nav from '../nav/Nav';

import { pinkA200, transparent } from 'material-ui/styles/colors';

import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    layout: {
        position: 'relative',
        top: 55,
        marginBottom: 55,
        width: '100%',
    },
    details: {
        fontSize: 14,
        lineHeight: 2,
    },
    link:{
        textAlign:'center'
    },
    info:{
        marginTop:10
    }
}
class Tks extends Component {
    componentWillMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Nav parentUrl={'/'} parentName={'首页'} nowName={'自评与致谢'}></Nav>
                <div style={style.layout} >
                    <List >
                        <ListItem primaryText="自我评价"
                            initiallyOpen={true}
                            leftAvatar={<Avatar color={pinkA200} backgroundColor={transparent} style={{ left: 8 }} >A </Avatar>}
                        />
                        <ListItem key={1}
                            primaryText={<p style={style.details}>过去的2016年里，不断的在工作中学习并大量实践了react相关技术，
                                越来越深深的发现，前端领域的范围越来愈大，将来会有更多的业务逻辑放在前端中，越来越深深的体味到人的一生都是学习的过程，2017，node.js在等着我！加油！</p>}
                            insetChildren={true}
                        />
                        <ListItem primaryText="致谢"
                            initiallyOpen={true}
                            leftAvatar={<Avatar color={pinkA200} backgroundColor={transparent} style={{ left: 8 }} >B </Avatar>}
                        />
                        <ListItem key={2}
                            primaryText={<div style={style.details}>感谢你的时间来阅读我的简历，如果你觉得还可以的话，请把我收到碗里来吧。</div>}
                            insetChildren={true}
                        />
                    </List>
                    <p style={style.link}>联系方式戳这里<br/><Link to='/info'> <RaisedButton label="个人简介" primary={true} style={style.info}/></Link></p>
                </div>
            </div>
        );
    }
}

export default Tks;