import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './work.css';
import Nav from '../nav/Nav';

import { pinkA200, transparent } from 'material-ui/styles/colors';

import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

const style = {
    layout: {
        position: 'relative',
        top: 55,
        marginBottom: 50,
        width: '100%',
        fontFamily: '-apple-system',
    },
    details: {
        fontSize: 14,
        lineHeight: 2
    }
}

class Work extends Component {
    componentWillMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div >

                <Nav parentUrl={'/'} parentName={'首页'} nowName={'工作经历'} > </Nav>
                <div style={style.layout} >
                    <List >
                        <ListItem primaryText="上海宝康电子控制工程有限公司"
                            secondaryText="2015.08-至今"
                            initiallyOpen={true}
                            leftAvatar={<Avatar color={pinkA200} backgroundColor={transparent} style={{ left: 8 }} >A </Avatar>}
                        />
                        <ListItem key={1}
                            primaryText="常州2016便民工程项目"
                            insetChildren={true}
                            nestedItems={
                                [<ListItem
                                    key={1.1}
                                    primaryText={<p style={style.details} > 在常州项目中担任二屏部分(软件为web一机双屏) 开发负责人， 主要承担工作为， 二屏前端技术选型， 框架设计， 开发任务制定， 以及难点功能攻克,
                                         和小伙伴们一起完成了二屏部分的框架设计和主要功能的实现。
                                        <br /> <b > 最终技术选型 </b>：ES6+react+react-route+react-redux+leaflet
                                        <br /><b> 遇到的比较困难的问题 </b>ES6,react等技术如何与传统的前端地图api相结合使用,以及在地图不重新加载(数据量非常大， 重绘一次需要2S + ) 的情况下， 如何进行功能和代码的切割和合并，
                                          解决方案： 把地图部分作为一个基础组件， 全局通用， 页面部分按照前端路由机制切割功能和代码;
                                          一机双屏如何进行一二屏之间以及一二屏和后端同时通信的难题, 综合考虑了开发复杂度， 性能， 稳定性等， 最终解决方案： 双屏通讯采用H5的localStorage, 以及WebSocket后台实时推送技术;
                                        <br /> <b> 最自豪的细节 </b>：展现车辆人口等迁徙数据，开始是引入了echarts的迁徙图,无奈加上echarts的组件之后,页面性能直线下降(因为每次拖拽地图之后都要重绘整个echarts组件,和echarts内部canvas中的全部数据),
                                        自己通过canvas绘制了迁徙图,附着在地图上,和echarts及其类似的展现效果,相较以前使用echarts性能极大的提升. </p>}
                                    insetChildren={true}
                                />
                                ]
                            }
                        />
                        <ListItem
                            key={2}
                            primaryText="常州2016便民工程项目"
                            insetChildren={true}
                            nestedItems={
                                [<ListItem
                                    key={2.1}
                                    primaryText={<p style={style.details} > 在常州项目中担任二屏部分(软件为web一机双屏) 开发负责人， 主要承担工作为， 二屏前端技术选型， 框架设计， 开发任务制定， 以及难点功能攻克,
                                         和小伙伴们一起完成了二屏部分的框架设计和主要功能的实现。
                                        <br /> <b > 最终技术选型 </b>：ES6+react+react-route+react-redux+leaflet
                                        <br /><b> 遇到的比较困难的问题 </b>ES6,react等技术如何与传统的前端地图api相结合使用,以及在地图不重新加载(数据量非常大， 重绘一次需要2S + ) 的情况下， 如何进行功能和代码的切割和合并，
                                          解决方案： 把地图部分作为一个基础组件， 全局通用， 页面部分按照前端路由机制切割功能和代码;
                                          一机双屏如何进行一二屏之间以及一二屏和后端同时通信的难题, 综合考虑了开发复杂度， 性能， 稳定性等， 最终解决方案： 双屏通讯采用H5的localStorage, 以及WebSocket后台实时推送技术;
                                        <br /> <b> 最自豪的细节 </b>：展现车辆人口等迁徙数据，开始是引入了echarts的迁徙图,无奈加上echarts的组件之后,页面性能直线下降(因为每次拖拽地图之后都要重绘整个echarts组件,和echarts内部canvas中的全部数据),
                                        自己通过canvas绘制了迁徙图,附着在地图上,和echarts及其类似的展现效果,相较以前使用echarts性能极大的提升. </p>}
                                    insetChildren={true}
                                />]
                            }
                        />
                    </List>
                </div>
            </div>
        );
    }
}

export default Work;