import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './skill.css';
import Nav from '../nav/Nav';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import { blue300, indigo900, transparent,lightBlue300 } from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';

const style = {
    layout: {
        position: 'relative',
        top: 55,
        marginBottom: 55,
        width: '100%',
    },
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    explain:{
        marginLeft:10,
        fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif',
        fontSize:15
    }
}
class Skill extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Nav parentUrl={'/'} parentName={'首页'} nowName={'技能清单'}></Nav>
                <div style={style.layout} >
                    <div style={style.wrapper}>
                        <Subheader>前端开发相关</Subheader>
                        <Chip style={style.chip}>
                            <Avatar size={32} color={blue300} backgroundColor={'#000'}>
                                JS
                            </Avatar>
                            Javascript + ES6 + JQuery
                        </Chip>
                        <Chip style={style.chip}>
                            <Avatar src="./img/html5.svg" backgroundColor={'#bcbcbc'} />
                            HyperText Markup Language
                        </Chip>
                        <Chip style={style.chip}>
                            <Avatar src="./img/css3.svg" backgroundColor={'#bcbcbc'} />
                            CSS+Less
                        </Chip>
                        <Chip style={style.chip}>
                            <Avatar src="./img/react.svg" backgroundColor={transparent} />
                            React + React-Router + React-Redux
                        </Chip>
                        <Chip style={style.chip}>
                            <Avatar src="./img/node.jpg" backgroundColor={transparent} />
                            node.js
                        </Chip>
                        <Chip style={style.chip}>
                            <Avatar size={32} color={blue300} backgroundColor={indigo900}>
                                PI
                            </Avatar>
                            Echarts + Marterial-UI + AntD + Animate.css
                        </Chip>
                        <Chip style={style.chip}>
                            <Avatar size={32} color={'#fff'} backgroundColor={lightBlue300}>
                                FB
                            </Avatar>
                            Font Bundle:webpack
                        </Chip>
                        <p style={style.explain}>熟练掌握原生javascript语言基础知识,熟练掌握css标准盒模型和flex定位方式,熟练使用es6结合react相关技术栈进行spa开发,正在学习使用node.js做后台开发。</p>
                        <Subheader>后台开发相关</Subheader>
                        <Chip style={style.chip}>
                           <Avatar size={32} backgroundColor={'#ea8010'}>后</Avatar>
                            C# + Java
                        </Chip>
                        <p style={style.explain}>做过一年silverlight开发(微软银光),熟练使用C#的基本语法和开发模式，能够在java,mybatis下编写基本的数据库增删改查方法和sql,懂得java web后台的基本逻辑结构和工作原理。</p>
                        <Subheader>LBS开发相关</Subheader>
                        <Chip style={style.chip}>
                            <Avatar src="./img/leaf.svg" backgroundColor={'#C0C0C0'} />
                            leaflet
                        </Chip>
                        <Chip style={style.chip}>
                            <Avatar src="http://pic.58pic.com/58pic/14/44/21/22258PICndD_1024.png" backgroundColor={lightBlue300} />
                            Esri:ArcGIS Javascript API + Silverlight API
                        </Chip>
                        <Chip style={style.chip}>
                            <Avatar src="./img/amap.png" backgroundColor={lightBlue300} />
                            Amap:ArcGIS Javascript API + web API
                        </Chip>
                        <p style={style.explain}>熟练使用开源轻量级面向移动web的地图开发框架leaflet,为leaflet开发两个被官方收纳的插件,熟练使用ArcGIS桌面软件以及对应的ArcGIS API for javascript/silverlight API
                            熟练使用高德地图web-javascript API。
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skill;