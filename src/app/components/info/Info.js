import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './info.css';
import Nav from '../nav/Nav';

import { greenA700, lightBlue500 } from 'material-ui/styles/colors';

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import PhoneInTalk from 'material-ui/svg-icons/notification/phone-in-talk';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import Avatar from 'material-ui/Avatar';
import School from 'material-ui/svg-icons/social/school';
import Domain from 'material-ui/svg-icons/social/domain';
import City from 'material-ui/svg-icons/social/location-city';
import SvgIcon from 'material-ui/SvgIcon';
import IconLink from 'material-ui/svg-icons/content/link';

const style = {
    transparent: {
        backgroundColor: '#fff',
        width: 30,
    },
    svg: {
        width: 30,
        height: 30
    },
    layout: {
        position: 'relative',
        top: 55,
        width: '100%'
    },
}

class Info extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.router.location.action === 'PUSH');
    }
    
    render() {
        return (
            <div >
                <Nav parentUrl={'/'} parentName={'首页'} nowName={'个人信息'}></Nav>
                <div style={style.layout}>
                    <List>
                        <ListItem
                            primaryText="赵祥涛/男/1990"
                            leftAvatar={<Avatar src="http://www.material-ui.com/images/adhamdannaway-128.jpg" />}
                        />
                        <ListItem
                            leftIcon={<CommunicationCall style={style.svg} color={greenA700} />}
                            rightIcon={
                                <a href="tel:15202103972">
                                    <PhoneInTalk color={greenA700} />
                                </a>
                            }
                            primaryText="15202103972"
                        />
                        <ListItem
                            leftIcon={<CommunicationEmail style={style.svg} color={lightBlue500} />}
                            rightIcon={
                                <a href="mailto:wrsden@gmail.com">
                                    <CommunicationChatBubble color={lightBlue500} />
                                </a>
                            }
                            primaryText="wrsden@gmail.com"
                        />
                    </List>
                    <Divider inset={true} />
                    <List>
                        <ListItem
                            leftIcon={<School style={style.svg} color={lightBlue500} />}
                            primaryText="本科/山东科技大学/地理信息系统"
                        />
                        <ListItem
                            leftIcon={<Domain style={style.svg} color={lightBlue500} />}
                            primaryText="工作年限：2013-2017"
                        />
                        <ListItem
                            primaryText="https://github.com/react-map"
                            leftAvatar={<Avatar style={style.transparent} src="./img/github.svg" />}
                            rightIcon={
                                <a href="https://github.com/react-map">
                                    <IconLink color={lightBlue500} />
                                </a>
                            }
                        />
                        <ListItem
                            primaryText="http://www.cnblogs.com/sylvenas"
                            leftAvatar={<Avatar style={style.transparent} src="./img/bog.svg" />}
                            rightIcon={
                                <a href="http://www.cnblogs.com/sylvenas">
                                    <IconLink color={lightBlue500} />
                                </a>
                            }
                        />
                        <ListItem
                            primaryText="期望职位:高级前端开发工程师"
                            leftAvatar={<Avatar style={style.transparent} src="./img/work.svg" />}
                        />
                        <ListItem
                            primaryText="期望城市:杭州"
                            leftAvatar={<City style={style.svg} />}
                        />
                    </List>
                </div>
            </div>
        );
    }
}

export default Info;