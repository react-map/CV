import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './bog.css';
import Nav from '../nav/Nav';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import IconLink from 'material-ui/svg-icons/content/link';
import { pinkA200, transparent, lightBlue500 } from 'material-ui/styles/colors';

const style = {
    layout: {
        position: 'relative',
        top: 55,
        marginBottom: 50,
        width: '100%',
        fontFamily: '-apple-system',
    },
    iconLink: {
        //position:'relative',
        top: 28
    },
    a: {
        top: 30
    }
}

class Bog extends Component {
    componentWillMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <Nav parentUrl={'/'} parentName={'首页'} nowName={'个人博客'}></Nav>
                <div style={style.layout} >
                    <List>
                        <Subheader>H5</Subheader>
                        <ListItem
                            leftAvatar={<Avatar
                                color={pinkA200} backgroundColor={transparent}
                                style={{ left: 8 }}
                            >A</Avatar>}
                            rightIconButton={<a style={style.a} href="http://www.cnblogs.com/sylvenas/p/6376300.html"><IconLink style={style.iconLink} color={lightBlue500}></IconLink></a>}
                            primaryText="服务器端推送技术总结"
                            secondaryText={
                                <p>最近在做前端页面渲染的时候，有的组件需要跟随后台数据的变化而...</p>
                            }
                            secondaryTextLines={2}
                        />
                        <Divider inset={true} />
                        <ListItem
                            leftAvatar={<Avatar
                                color={pinkA200} backgroundColor={transparent}
                                style={{ left: 8 }}
                            >B</Avatar>}
                            rightIconButton={<a style={style.a} href="https://github.com/react-map"><IconLink style={style.iconLink} color={lightBlue500}></IconLink></a>}
                            primaryText="双屏通信总结"
                            secondaryText={
                                <p>
                                    Wish I could come, but I&apos;m out of town this weekend.</p>
                            }
                            secondaryTextLines={2}
                        />
                        <Subheader>Recent-Native</Subheader>
                        <ListItem
                            leftAvatar={<Avatar
                                color={pinkA200} backgroundColor={transparent}
                                style={{ left: 8 }}
                            >C</Avatar>}
                            rightIconButton={<a style={style.a} href="http://www.cnblogs.com/sylvenas/p/6376300.html"><IconLink style={style.iconLink} color={lightBlue500}></IconLink></a>}
                            primaryText="在windows搭建react-native android 开发环境总结"
                            secondaryText={
                                <p>建议第一次启动项目的时候，使用5.0以上版本的android虚拟机...</p>
                            }
                            secondaryTextLines={2}
                        />
                        <Divider inset={true} />
                        <ListItem
                            leftAvatar={<Avatar
                                color={pinkA200} backgroundColor={transparent}
                                style={{ left: 8 }}
                            >D</Avatar>}
                            rightIconButton={<a style={style.a} href="https://github.com/react-map"><IconLink style={style.iconLink} color={lightBlue500}></IconLink></a>}
                            primaryText="me, Scott, Jennifer"
                            secondaryText={
                                <p>
                                    Wish I could come, but I&apos;m out of town this weekend.</p>
                            }
                            secondaryTextLines={2}
                        />
                        <Subheader>webpack</Subheader>
                        <ListItem
                            leftAvatar={<Avatar
                                color={pinkA200} backgroundColor={transparent}
                                style={{ left: 8 }}
                            >E</Avatar>}
                            rightIconButton={<a style={style.a} href="http://www.cnblogs.com/sylvenas/p/6376300.html"><IconLink style={style.iconLink} color={lightBlue500}></IconLink></a>}
                            primaryText="webpack2基本配置"
                            secondaryText={
                                <p>建议第一次启动项目的时候，使用5.0以上版本的android虚拟机...</p>
                            }
                            secondaryTextLines={2}
                        />
                        <Divider inset={true} />
                        <ListItem
                            leftAvatar={<Avatar
                                color={pinkA200} backgroundColor={transparent}
                                style={{ left: 8 }}
                            >F</Avatar>}
                            rightIconButton={<a style={style.a} href="https://github.com/react-map"><IconLink style={style.iconLink} color={lightBlue500}></IconLink></a>}
                            primaryText="webpack1升级到webpack2文档翻译"
                            secondaryText={
                                <p>
                                    Wish I could come, but I&apos;m out of town this weekend.</p>
                            }
                            secondaryTextLines={2}
                        />
                        <Subheader>node.js</Subheader>
                        <ListItem
                            leftAvatar={<Avatar
                                color={pinkA200} backgroundColor={transparent}
                                style={{ left: 8 }}
                            >G</Avatar>}
                            rightIconButton={<a style={style.a} href="http://www.cnblogs.com/sylvenas/p/6376300.html"><IconLink style={style.iconLink} color={lightBlue500}></IconLink></a>}
                            primaryText="node.js爬虫杭州房产销售及数据可视化"
                            secondaryText={
                                <p>摘要: 现在年轻人到25岁+,总的要考虑买房结婚的问题,2016年的一波房价...</p>
                            }
                            secondaryTextLines={2}
                        />
                        <Subheader>leaflet</Subheader>
                        <ListItem
                            leftAvatar={<Avatar
                                color={pinkA200} backgroundColor={transparent}
                                style={{ left: 8 }}
                            >H</Avatar>}
                            rightIconButton={<a style={style.a} href="http://www.cnblogs.com/sylvenas/p/6376300.html"><IconLink style={style.iconLink} color={lightBlue500}></IconLink></a>}
                            primaryText="esri-leaflet部分瓦片缺失问题及解决办法"
                            secondaryText={
                                <p>esri-leaflet加载TileLayer的时候，有时候由于数据的原因，造成...</p>
                            }
                            secondaryTextLines={2}
                        />
                    </List>
                </div>
            </div>
        );
    }
}

export default Bog;