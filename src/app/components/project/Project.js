import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './project.css';
import Nav from '../nav/Nav';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconLink from 'material-ui/svg-icons/content/link';
import { lightBlue500 } from 'material-ui/styles/colors';

const style = {
    layout: {
        position: 'relative',
        top: 55,
        marginBottom: 55,
        width: '100%',
    },
    img: {
        height: '32vh',
        //display:'block'
    },
    cardMedia: {
        width: '100%',
    }
}

class Project extends Component {
    
    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Nav parentUrl={'/'} parentName={'首页'} nowName={'开源作品'}></Nav>
                <div style={style.layout}>           
                    <Card>
                        <CardHeader
                            title="leaflet.migrationLayer"
                            subtitle={
                                <span>Migration data visualization on map
                                </span>}
                            avatar="http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/aA67TyveIY26LbX1r9koUAV*b.8AF.FC0XxDJY.OwXI!/r/dN4AAAAAAAAA"
                        />
                        <CardMedia style={style.cardMedia}
                            overlay={<CardTitle subtitle="leaflet.migrationLayer是使用canvas技术来展示人口流动、车辆、航班等迁徙数据，在地图上的数据可视化。" />}>
                            <img style={style.img} src="http://a1.qpic.cn/psb?/V14M6vLS010qBs/pQziH.bmgqtr*X6TZD6EJPzVWKmNuCzDtUjpOjFNTDE!/b/dG4BAAAAAAAA&bo=IAOQASADkAECJAA!&rf=viewer_4" />
                        </CardMedia>

                    </Card>
                    <Card>
                        <CardHeader
                            title="react-magic"
                            subtitle={
                                <span>A collection of magic animations for react components
                                </span>}
                            avatar="http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/aA67TyveIY26LbX1r9koUAV*b.8AF.FC0XxDJY.OwXI!/r/dN4AAAAAAAAA"
                        />
                        <CardMedia style={style.cardMedia}
                            overlay={<CardTitle subtitle="Although React provides a way to implement arbitrary animations, it is not an easy task to do it, even for simple animations. That's where react-magic package comes in. " />}>
                            <img style={style.img} src="http://a2.qpic.cn/psb?/V14M6vLS010qBs/zysQGt4YVIrP2dfxR6Rv6XmEoM79iLcKAq1TinOHm7o!/b/dCUAAAAAAAAA&bo=qAS2AqgEtgICcFQ!&rf=viewer_4" />
                        </CardMedia>

                    </Card>
                    <Card>
                        <CardHeader
                            title="hangzhouRealEstate"
                            subtitle="Hangzhou daily real estate sales details"
                            avatar="http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/aA67TyveIY26LbX1r9koUAV*b.8AF.FC0XxDJY.OwXI!/r/dN4AAAAAAAAA"
                        />
                        <CardMedia
                            overlay={<CardTitle subtitle="使用node.js爬取网络上杭州房产每天的实时销售数据，结合高德地图展示，楼盘具体地理位置、销售面积、单价、预定数等等。" />}
                        >
                            <img style={style.img} src="http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/0lxNfa73Xw.Crli4Y0Ug7*I.bLeJsIpnTY6ADgNlEQk!/r/dHkBAAAAAAAA" />
                        </CardMedia>
                    </Card>
                    <Card>
                        <CardHeader
                            title="leaflet.magicMarker"
                            subtitle="Adding magical animation effect to a marker while loading."
                            avatar="http://r.photo.store.qq.com/psb?/V14M6vLS010qBs/aA67TyveIY26LbX1r9koUAV*b.8AF.FC0XxDJY.OwXI!/r/dN4AAAAAAAAA"
                        />
                        <CardMedia
                            overlay={<CardTitle subtitle="在初始化marker的时候，自定义多种动画效果。" />}
                        >
                            <img style={style.img} src="./img/project03.gif" />
                        </CardMedia>

                    </Card>
                </div>
            </div>
        );
    }
}

export default Project;