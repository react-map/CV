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
                            initiallyOpen={true}
                            insetChildren={true}
                            nestedItems={
                                [<ListItem
                                    key={1.1}
                                    primaryText={<p style={style.details} ><b>主要担任职责:</b>在常州项目中担任开发负责人，主要承担工作为， 前端技术选型，框架设计，开发任务制定，以及难点功能攻克，和小伙伴们一起完成了二屏部分的框架设计和主要功能的实现。 
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
                            primaryText="温岭交通指数微信公众号发布"
                            insetChildren={true}
                            nestedItems={
                                [<ListItem
                                    key={2.1}
                                    primaryText={<p style={style.details} > 负责温岭交警微信公众号中的实时路况页面开发
                                        <br /> <b>主要使用技术</b>：JQuery Mobile+ java + ArcGIS API javascript
                                        <br />项目中主要实现的功能为，温岭市交通路况实时更新，大型停车场可停车辆展示，公交车等路线展示
                                        </p>}
                                    insetChildren={true}
                                />]
                            }
                        />
                        <ListItem
                            key={3}
                            primaryText="台州交警指挥平台"
                            insetChildren={true}
                            nestedItems={
                                [<ListItem
                                    key={3.1}
                                    primaryText={<p style={style.details} >
                                        <b>主要使用技术</b>：Java,javascript,ArcGIS api for javascript.
                                        <br />公司已经有成熟的产品，所以在该项目上主要工作内容是和甲方(台州交警支队)沟通，
                                        制定台州定制化的开发需求，以及对应的开发任务制定，和实际开发工作。
                                        </p>}
                                    insetChildren={true}
                                />]
                            }
                        />
                    </List>

                    <List >
                        <ListItem primaryText="上海同岩土木工程科技股份有限公司"
                            secondaryText="2013.07-2015.07"
                            initiallyOpen={true}
                            leftAvatar={<Avatar color={pinkA200} backgroundColor={transparent} style={{ left: 8 }} >B </Avatar>}
                            nestedItems={
                                [<ListItem
                                    key={1.1312}
                                    primaryText={<p style={style.details} >
                                       第一份正职工作，前期主要负责ASP.NET开发，主要为silverlight富客户端技术，后来转为JS前端开发，负责编写前端页面，主要编写基础库和ui组件，主要使用技术为js/jquery+css，在工作之余不断学习和提升自己对原生js的基本原理的掌握，在第一份工作中，打牢了web前端的基础，并且对服客户端技术和ASP.NET后台开发技术，有一定的了解，后因为公司业务方向比较窄，工作技术没能继续成长而离职。
                                        </p>}
                                    insetChildren={true}
                                />
                                ]
                            }
                        />
                    </List>
                </div>
            </div>
        );
    }
}

export default Work;